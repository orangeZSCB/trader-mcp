/**
 * Event Log — append-only persistent event log with in-memory ring buffer.
 *
 * Dual-write: every append goes to disk (JSONL) AND an in-memory buffer.
 * The memory buffer holds the most recent N entries (default 500) for fast
 * queries. Disk is the source of truth for crash recovery and full history.
 *
 * Storage: one JSON object per line (`events.jsonl`), append-only.
 * Recovery: on startup, loads the tail of the file into the memory buffer
 * and restores the seq counter.
 */
import { appendFile, readFile, mkdir, unlink } from 'node:fs/promises';
import { dirname } from 'node:path';
import { dataPath } from './paths.js';
import { validateEventPayload } from './agent-event.js';
// ==================== Defaults ====================
const DEFAULT_BUFFER_SIZE = 500;
// ==================== Implementation ====================
/**
 * Create (or open) an append-only event log.
 *
 * Reads the existing file to restore the seq counter and populate the
 * in-memory buffer with the most recent entries.
 */
export async function createEventLog(opts) {
    const logPath = opts?.logPath ?? dataPath('event-log', 'events.jsonl');
    const bufferSize = opts?.bufferSize ?? DEFAULT_BUFFER_SIZE;
    // Ensure directory exists
    await mkdir(dirname(logPath), { recursive: true });
    // In-memory ring buffer
    let buffer = [];
    // Recover seq + buffer from existing file
    let seq = await recoverState(logPath, buffer, bufferSize);
    // Listener sets
    const listeners = new Set();
    const typeListeners = new Map();
    // ---------- append ----------
    async function append(type, payload, opts) {
        validateEventPayload(type, payload);
        seq += 1;
        const entry = {
            seq,
            ts: Date.now(),
            type,
            payload,
        };
        if (opts?.causedBy !== undefined) {
            entry.causedBy = opts.causedBy;
        }
        // Dual write: disk first, then memory
        const line = JSON.stringify(entry) + '\n';
        await appendFile(logPath, line, 'utf-8');
        // Push to ring buffer, truncate if over limit
        buffer.push(entry);
        if (buffer.length > bufferSize) {
            buffer = buffer.slice(buffer.length - bufferSize);
        }
        // Fan-out to subscribers (swallow errors)
        for (const fn of listeners) {
            try {
                fn(entry);
            }
            catch { /* swallow */ }
        }
        const tSet = typeListeners.get(type);
        if (tSet) {
            for (const fn of tSet) {
                try {
                    fn(entry);
                }
                catch { /* swallow */ }
            }
        }
        return entry;
    }
    // ---------- read (disk) ----------
    async function read(readOpts) {
        const afterSeq = readOpts?.afterSeq ?? 0;
        const limit = readOpts?.limit ?? Infinity;
        const filterType = readOpts?.type;
        let raw;
        try {
            raw = await readFile(logPath, 'utf-8');
        }
        catch (err) {
            if (isENOENT(err))
                return [];
            throw err;
        }
        const lines = raw.split('\n');
        const results = [];
        for (const line of lines) {
            if (!line.trim())
                continue;
            try {
                const entry = JSON.parse(line);
                if (entry.seq <= afterSeq)
                    continue;
                if (filterType && entry.type !== filterType)
                    continue;
                results.push(entry);
                if (results.length >= limit)
                    break;
            }
            catch {
                // Skip malformed lines
            }
        }
        return results;
    }
    // ---------- query (disk, paginated) ----------
    async function query(queryOpts) {
        const page = Math.max(1, queryOpts?.page ?? 1);
        const pageSize = Math.max(1, queryOpts?.pageSize ?? 100);
        const filterType = queryOpts?.type;
        // Read all matching entries from disk
        const all = await read({ type: filterType });
        const total = all.length;
        const totalPages = Math.max(1, Math.ceil(total / pageSize));
        // Paginate: page 1 = newest entries (end of array)
        const start = Math.max(0, total - page * pageSize);
        const end = total - (page - 1) * pageSize;
        const entries = all.slice(start, end).reverse();
        return { entries, total, page, pageSize, totalPages };
    }
    // ---------- recent (memory) ----------
    function recent(readOpts) {
        const afterSeq = readOpts?.afterSeq ?? 0;
        const limit = readOpts?.limit ?? Infinity;
        const filterType = readOpts?.type;
        const results = [];
        for (const entry of buffer) {
            if (entry.seq <= afterSeq)
                continue;
            if (filterType && entry.type !== filterType)
                continue;
            results.push(entry);
            if (results.length >= limit)
                break;
        }
        return results;
    }
    // ---------- subscribe ----------
    function subscribe(listener) {
        listeners.add(listener);
        return () => { listeners.delete(listener); };
    }
    function subscribeType(type, listener) {
        let set = typeListeners.get(type);
        if (!set) {
            set = new Set();
            typeListeners.set(type, set);
        }
        set.add(listener);
        return () => {
            set.delete(listener);
            if (set.size === 0)
                typeListeners.delete(type);
        };
    }
    // ---------- lifecycle ----------
    async function close() {
        listeners.clear();
        typeListeners.clear();
        buffer = [];
    }
    async function _resetForTest() {
        seq = 0;
        listeners.clear();
        typeListeners.clear();
        buffer = [];
        try {
            await unlink(logPath);
        }
        catch (err) {
            if (!isENOENT(err))
                throw err;
        }
    }
    return {
        append,
        read,
        query,
        recent,
        lastSeq: () => seq,
        subscribe,
        subscribeType,
        close,
        _resetForTest,
    };
}
// ==================== Helpers ====================
/**
 * Read the log file, restore the seq counter, and populate the in-memory
 * buffer with the most recent `bufferSize` entries.
 */
async function recoverState(logPath, buffer, bufferSize) {
    let raw;
    try {
        raw = await readFile(logPath, 'utf-8');
    }
    catch (err) {
        if (isENOENT(err))
            return 0;
        throw err;
    }
    if (!raw.trim())
        return 0;
    // Parse all valid entries
    const entries = [];
    const lines = raw.split('\n');
    for (const line of lines) {
        if (!line.trim())
            continue;
        try {
            entries.push(JSON.parse(line));
        }
        catch {
            // Skip malformed
        }
    }
    if (entries.length === 0)
        return 0;
    // Load tail into buffer
    const tail = entries.slice(-bufferSize);
    buffer.push(...tail);
    // Return last seq
    return entries[entries.length - 1].seq;
}
function isENOENT(err) {
    return err instanceof Error && 'code' in err && err.code === 'ENOENT';
}
//# sourceMappingURL=event-log.js.map
/**
 * News Collector — Persistent JSONL store with in-memory index
 *
 * Follows the EventLog pattern (src/core/event-log.ts):
 * - Append-only JSONL on disk
 * - In-memory buffer for fast queries
 * - Recover from file on startup
 * - Dedup set survives restarts
 *
 * Implements INewsProvider so globRss/grepRss/readRss tools work.
 */
import { appendFile, readFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname } from 'node:path';
import { dataPath } from '../../core/paths.js';
const DEFAULT_LOG_PATH = dataPath('news-collector', 'news.jsonl');
const DEFAULT_MAX_IN_MEMORY = 2000;
const DEFAULT_RETENTION_DAYS = 7;
/**
 * Parse a semantic time string into milliseconds.
 * Supported formats: 1h, 2h, 12h, 24h, 1d, 2d, 7d, 30d
 */
export function parseLookback(lookback) {
    const match = lookback.match(/^(\d+)(h|d)$/i);
    if (!match)
        return null;
    const value = parseInt(match[1], 10);
    const unit = match[2].toLowerCase();
    if (unit === 'h')
        return value * 60 * 60 * 1000;
    if (unit === 'd')
        return value * 24 * 60 * 60 * 1000;
    return null;
}
export class NewsCollectorStore {
    logPath;
    maxInMemory;
    retentionDays;
    /** In-memory buffer, sorted by pubTs ascending */
    buffer = [];
    /** All known dedup keys (survives beyond retention window) */
    dedupSet = new Set();
    /** Monotonic sequence counter */
    seq = 0;
    /**
     * Promise-chain mutex: serialize ingest() so the dedup-check / appendFile /
     * dedup-add sequence is atomic across concurrent callers. Without this, two
     * ingests of the same key both pass has(), both appendFile, and the JSONL
     * gets duplicate lines (recovery dedups them, but the file is dirty).
     */
    writeChain = Promise.resolve();
    constructor(opts) {
        this.logPath = opts?.logPath ?? DEFAULT_LOG_PATH;
        this.maxInMemory = opts?.maxInMemory ?? DEFAULT_MAX_IN_MEMORY;
        this.retentionDays = opts?.retentionDays ?? DEFAULT_RETENTION_DAYS;
    }
    /**
     * Initialize: read JSONL from disk, rebuild dedup set and buffer.
     * Must be called before any other method.
     */
    async init() {
        await mkdir(dirname(this.logPath), { recursive: true });
        let raw;
        try {
            raw = await readFile(this.logPath, 'utf-8');
        }
        catch (err) {
            if (isENOENT(err))
                return; // No file yet — fresh start
            throw err;
        }
        if (!raw.trim())
            return;
        const retentionCutoff = Date.now() - this.retentionDays * 24 * 60 * 60 * 1000;
        const lines = raw.split('\n');
        for (const line of lines) {
            if (!line.trim())
                continue;
            try {
                const record = JSON.parse(line);
                // Always track dedup key (full history)
                this.dedupSet.add(record.dedupKey);
                // Track highest seq
                if (record.seq > this.seq)
                    this.seq = record.seq;
                // Only load recent items into buffer
                if (record.pubTs >= retentionCutoff) {
                    this.buffer.push(record);
                }
            }
            catch {
                // Skip malformed lines
            }
        }
        // Sort buffer by pubTs ascending
        this.buffer.sort((a, b) => a.pubTs - b.pubTs);
        // Trim buffer if over limit
        if (this.buffer.length > this.maxInMemory) {
            this.buffer = this.buffer.slice(-this.maxInMemory);
        }
        console.log(`news-collector-store: recovered ${this.dedupSet.size} dedup keys, ${this.buffer.length} items in memory`);
    }
    /**
     * Ingest a single news item. Returns true if new (not a duplicate).
     *
     * Serialized via writeChain so that concurrent callers cannot both pass the
     * dedup check before either writes to disk.
     */
    async ingest(item) {
        const next = this.writeChain.then(() => this._ingestImpl(item));
        this.writeChain = next.catch(() => { });
        return next;
    }
    async _ingestImpl(item) {
        if (this.dedupSet.has(item.dedupKey))
            return false;
        this.seq += 1;
        const record = {
            seq: this.seq,
            ts: Date.now(),
            pubTs: item.pubTime.getTime(),
            dedupKey: item.dedupKey,
            title: item.title,
            content: item.content,
            metadata: item.metadata,
        };
        // Disk first
        const jsonLine = JSON.stringify(record) + '\n';
        await appendFile(this.logPath, jsonLine, 'utf-8');
        // Memory
        this.dedupSet.add(item.dedupKey);
        this.buffer.push(record);
        // Evict oldest if over limit
        if (this.buffer.length > this.maxInMemory) {
            this.buffer = this.buffer.slice(-this.maxInMemory);
        }
        return true;
    }
    /**
     * Batch ingest. Returns count of new (non-duplicate) items.
     */
    async ingestBatch(items) {
        let count = 0;
        for (const item of items) {
            const isNew = await this.ingest(item);
            if (isNew)
                count++;
        }
        return count;
    }
    /** Check if a dedup key already exists */
    has(dedupKey) {
        return this.dedupSet.has(dedupKey);
    }
    /** Number of items in memory */
    get count() {
        return this.buffer.length;
    }
    /** Number of dedup keys tracked (includes items beyond retention) */
    get dedupCount() {
        return this.dedupSet.size;
    }
    // ==================== INewsProvider ====================
    async getNewsV2(options) {
        const { endTime, startTime, lookback, limit } = options;
        const endMs = endTime.getTime();
        // Determine head truncation
        let startMs = null;
        if (startTime) {
            startMs = startTime.getTime();
        }
        else if (lookback) {
            const ms = parseLookback(lookback);
            if (ms !== null) {
                startMs = endMs - ms;
            }
        }
        let filtered = this.buffer.filter((r) => {
            if (r.pubTs > endMs)
                return false;
            if (startMs !== null && r.pubTs <= startMs)
                return false;
            return true;
        });
        filtered.sort((a, b) => a.pubTs - b.pubTs);
        if (limit && filtered.length > limit) {
            filtered = filtered.slice(-limit);
        }
        return filtered.map(recordToNewsItem);
    }
    // ==================== Lifecycle ====================
    async close() {
        this.buffer = [];
        this.dedupSet.clear();
    }
}
// ==================== Helpers ====================
function recordToNewsItem(record) {
    return {
        id: record.seq,
        time: new Date(record.pubTs),
        title: record.title,
        content: record.content,
        metadata: record.metadata,
    };
}
function isENOENT(err) {
    return err instanceof Error && 'code' in err && err.code === 'ENOENT';
}
/**
 * Compute a dedup key for a news item.
 *
 * Priority: guid > link > content hash
 */
export function computeDedupKey(item) {
    if (item.guid)
        return `guid:${item.guid}`;
    if (item.link)
        return `link:${item.link}`;
    const hash = createHash('sha256')
        .update(item.title + item.content)
        .digest('hex')
        .slice(0, 16);
    return `hash:${hash}`;
}
//# sourceMappingURL=store.js.map
/**
 * Snapshot store — chunked JSONL persistence with index.
 *
 * Storage layout:
 *   data/trading/{accountId}/snapshots/
 *   ├── index.json
 *   ├── chunk-0001.jsonl
 *   ├── chunk-0002.jsonl
 *   └── ...
 *
 * Each chunk holds up to CHUNK_SIZE snapshots (one JSON line each).
 * The index tracks chunk metadata for efficient time-range queries.
 *
 * Writes are serialized via a Promise chain to prevent concurrent
 * appends from corrupting the index.
 */
import { readFile, writeFile, appendFile, rename, mkdir, unlink } from 'node:fs/promises';
import { resolve } from 'node:path';
import { dataPath } from '@openalice-trading/alice-core/core/paths.js';
const CHUNK_SIZE = 50;
const DEFAULT_BASE_DIR = dataPath('trading');
export function createSnapshotStore(accountId, options) {
    const dir = resolve(options?.baseDir ?? DEFAULT_BASE_DIR, accountId, 'snapshots');
    const indexPath = resolve(dir, 'index.json');
    // Serialize writes to prevent concurrent append from corrupting the index
    let writeChain = Promise.resolve();
    async function readIndex() {
        try {
            const raw = await readFile(indexPath, 'utf-8');
            return JSON.parse(raw);
        }
        catch {
            return { version: 1, chunks: [] };
        }
    }
    async function saveIndex(index) {
        await mkdir(dir, { recursive: true });
        const tmp = `${indexPath}.${process.pid}.tmp`;
        await writeFile(tmp, JSON.stringify(index, null, 2), 'utf-8');
        await rename(tmp, indexPath);
    }
    function chunkName(n) {
        return `chunk-${String(n).padStart(4, '0')}.jsonl`;
    }
    async function doAppend(snapshot) {
        const index = await readIndex();
        const last = index.chunks[index.chunks.length - 1];
        let chunkFile;
        if (!last || last.count >= CHUNK_SIZE) {
            const nextNum = index.chunks.length + 1;
            chunkFile = chunkName(nextNum);
            index.chunks.push({
                file: chunkFile,
                count: 1,
                startTime: snapshot.timestamp,
                endTime: snapshot.timestamp,
            });
        }
        else {
            chunkFile = last.file;
            last.count += 1;
            last.endTime = snapshot.timestamp;
        }
        await mkdir(dir, { recursive: true });
        await appendFile(resolve(dir, chunkFile), JSON.stringify(snapshot) + '\n', 'utf-8');
        await saveIndex(index);
    }
    async function doDelete(timestamp) {
        const index = await readIndex();
        for (let i = 0; i < index.chunks.length; i++) {
            const chunk = index.chunks[i];
            if (timestamp < chunk.startTime || timestamp > chunk.endTime)
                continue;
            const filePath = resolve(dir, chunk.file);
            const raw = await readFile(filePath, 'utf-8');
            const lines = raw.trim().split('\n').filter(Boolean);
            const kept = lines.filter(line => {
                const snap = JSON.parse(line);
                return snap.timestamp !== timestamp;
            });
            if (kept.length === lines.length)
                continue; // not found in this chunk
            if (kept.length === 0) {
                // Chunk is empty — remove file and index entry
                await unlink(filePath).catch(() => { });
                index.chunks.splice(i, 1);
            }
            else {
                // Rewrite chunk with remaining lines
                const tmp = `${filePath}.${process.pid}.tmp`;
                await writeFile(tmp, kept.join('\n') + '\n', 'utf-8');
                await rename(tmp, filePath);
                // Update index metadata
                const first = JSON.parse(kept[0]);
                const last = JSON.parse(kept[kept.length - 1]);
                chunk.count = kept.length;
                chunk.startTime = first.timestamp;
                chunk.endTime = last.timestamp;
            }
            await saveIndex(index);
            return true;
        }
        return false;
    }
    return {
        append(snapshot) {
            const p = writeChain.then(() => doAppend(snapshot));
            // Always advance chain even on error, so next write isn't blocked
            writeChain = p.catch(() => { });
            return p;
        },
        deleteByTimestamp(timestamp) {
            const p = writeChain.then(() => doDelete(timestamp));
            writeChain = p.then(() => { }).catch(() => { });
            return p;
        },
        async readRange(opts) {
            const index = await readIndex();
            const { startTime, endTime, limit } = opts ?? {};
            const results = [];
            // Walk chunks in reverse (newest first)
            for (let i = index.chunks.length - 1; i >= 0; i--) {
                const chunk = index.chunks[i];
                // Skip chunks outside time range
                if (startTime && chunk.endTime < startTime)
                    continue;
                if (endTime && chunk.startTime > endTime)
                    continue;
                const raw = await readFile(resolve(dir, chunk.file), 'utf-8');
                const lines = raw.trim().split('\n').filter(Boolean);
                // Parse in reverse (newest first within chunk)
                for (let j = lines.length - 1; j >= 0; j--) {
                    const snap = JSON.parse(lines[j]);
                    if (startTime && snap.timestamp < startTime)
                        continue;
                    if (endTime && snap.timestamp > endTime)
                        continue;
                    results.push(snap);
                    if (limit && results.length >= limit)
                        return results;
                }
            }
            return results;
        },
    };
}
//# sourceMappingURL=store.js.map
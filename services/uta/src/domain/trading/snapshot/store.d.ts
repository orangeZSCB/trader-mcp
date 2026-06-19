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
import type { UTASnapshot } from './types.js';
export interface SnapshotStoreOptions {
    baseDir?: string;
}
export interface SnapshotStore {
    append(snapshot: UTASnapshot): Promise<void>;
    readRange(opts?: {
        startTime?: string;
        endTime?: string;
        limit?: number;
    }): Promise<UTASnapshot[]>;
    deleteByTimestamp(timestamp: string): Promise<boolean>;
}
export declare function createSnapshotStore(accountId: string, options?: SnapshotStoreOptions): SnapshotStore;

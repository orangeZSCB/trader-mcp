/**
 * Snapshot service — orchestrates builder + store.
 *
 * Only persists snapshots with real data. If the builder returns null
 * (offline, network error), the snapshot is skipped — never stored.
 * takeAllSnapshots retries failed accounts once after a short delay.
 *
 * Store instances are cached per account to ensure writes are serialized.
 */
import type { UTAManager } from '../uta-manager.js';
import type { EventLog } from '@openalice-trading/alice-core/core/event-log.js';
import type { UTASnapshot, SnapshotTrigger } from './types.js';
export interface SnapshotService {
    takeSnapshot(accountId: string, trigger: SnapshotTrigger): Promise<UTASnapshot | null>;
    takeAllSnapshots(trigger: SnapshotTrigger): Promise<void>;
    getRecent(accountId: string, limit?: number): Promise<UTASnapshot[]>;
    deleteSnapshot(accountId: string, timestamp: string): Promise<boolean>;
}
export declare function createSnapshotService(deps: {
    utaManager: UTAManager;
    eventLog?: EventLog;
    /** Override storage base directory (tests use tmpdir). */
    baseDir?: string;
}): SnapshotService;

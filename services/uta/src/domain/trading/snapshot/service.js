/**
 * Snapshot service — orchestrates builder + store.
 *
 * Only persists snapshots with real data. If the builder returns null
 * (offline, network error), the snapshot is skipped — never stored.
 * takeAllSnapshots retries failed accounts once after a short delay.
 *
 * Store instances are cached per account to ensure writes are serialized.
 */
import { buildSnapshot } from './builder.js';
import { createSnapshotStore } from './store.js';
const RETRY_DELAY_MS = 3_000;
export function createSnapshotService(deps) {
    const { utaManager, eventLog, baseDir } = deps;
    const stores = new Map();
    function getStore(accountId) {
        let s = stores.get(accountId);
        if (!s) {
            s = createSnapshotStore(accountId, baseDir ? { baseDir } : undefined);
            stores.set(accountId, s);
        }
        return s;
    }
    return {
        async takeSnapshot(accountId, trigger) {
            const uta = utaManager.get(accountId);
            if (!uta)
                return null;
            try {
                const snapshot = await buildSnapshot(uta, trigger);
                if (!snapshot) {
                    // Builder couldn't get real data — skip, don't store
                    await eventLog?.append('snapshot.skipped', {
                        accountId,
                        trigger,
                        reason: 'no-data',
                    }).catch(() => { });
                    return null;
                }
                await getStore(accountId).append(snapshot);
                await eventLog?.append('snapshot.taken', {
                    accountId,
                    trigger,
                    timestamp: snapshot.timestamp,
                });
                return snapshot;
            }
            catch (err) {
                const msg = err instanceof Error ? err.message : String(err);
                console.warn(`snapshot: failed for ${accountId}:`, msg);
                await eventLog?.append('snapshot.error', { accountId, trigger, error: msg }).catch(() => { });
                return null;
            }
        },
        async takeAllSnapshots(trigger) {
            const accounts = utaManager.resolve();
            // First round — try all accounts
            const results = await Promise.allSettled(accounts.map(async (uta) => ({
                id: uta.id,
                snap: await this.takeSnapshot(uta.id, trigger),
            })));
            // Collect failed account IDs (returned null)
            const failed = results
                .filter((r) => r.status === 'fulfilled' && r.value.snap === null)
                .map(r => r.value.id);
            if (failed.length === 0)
                return;
            // Retry once after a short delay
            await new Promise(r => setTimeout(r, RETRY_DELAY_MS));
            await Promise.allSettled(failed.map(id => this.takeSnapshot(id, trigger)));
        },
        async getRecent(accountId, limit = 10) {
            return getStore(accountId).readRange({ limit });
        },
        async deleteSnapshot(accountId, timestamp) {
            return getStore(accountId).deleteByTimestamp(timestamp);
        },
    };
}
//# sourceMappingURL=service.js.map
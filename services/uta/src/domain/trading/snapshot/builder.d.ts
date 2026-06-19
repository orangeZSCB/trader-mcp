/**
 * Snapshot builder — assembles a UTASnapshot from a live UTA.
 *
 * Only returns a snapshot when real data is successfully fetched.
 * Returns null when data cannot be obtained (offline, disabled, network error).
 * Never fabricates zero-value placeholders.
 */
import type { UnifiedTradingAccount } from '../UnifiedTradingAccount.js';
import type { UTASnapshot, SnapshotTrigger } from './types.js';
export declare function buildSnapshot(uta: UnifiedTradingAccount, trigger: SnapshotTrigger): Promise<UTASnapshot | null>;

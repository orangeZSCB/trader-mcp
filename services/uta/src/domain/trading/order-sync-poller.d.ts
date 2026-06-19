/**
 * Order-sync poller — the missing "成交感知" loop.
 *
 * Trading-as-Git records a pushed order as `submitted` and relies on
 * `UnifiedTradingAccount.sync()` to learn about fills/cancels later. Until
 * this poller, NOTHING called sync automatically: the manual HTTP route and
 * the AI tool were the only triggers, so limit orders stayed `submitted` in
 * git forever unless someone asked. This loop closes the state machine:
 *
 *   place → approve (push) → [poller: poll broker until terminal] → sync
 *   commit records filled/cancelled + execution qty/price.
 *
 * Cost discipline: each tick scans pending order ids from the in-memory git
 * log (cheap, no I/O). Broker round-trips happen ONLY for healthy accounts
 * that actually have pending orders — an idle book costs nothing.
 */
import type { UnifiedTradingAccount } from './UnifiedTradingAccount.js';
export interface OrderSyncPollerOptions {
    /** Poll cadence. Default 10s — fast enough for human-scale awareness,
     *  far below any exchange rate limit given the pending-only gating. */
    intervalMs?: number;
    /** External-order observation cadence (the slow lane), in ms. Default
     *  15min — observation is narrative fidelity for orders placed outside
     *  Alice, not a primary flow; once observed, an order's lifecycle moves
     *  to the fast (pending) lane automatically. 0 or negative disables.
     *  Configured via data/config/trading.json observeExternalOrdersEvery. */
    observeIntervalMs?: number;
    log?: (msg: string) => void;
}
export interface OrderSyncPoller {
    /** Run one pass immediately (also used by tests). */
    tick(): Promise<void>;
    stop(): void;
}
export declare function startOrderSyncPoller(getInstances: () => Iterable<UnifiedTradingAccount>, options?: OrderSyncPollerOptions): OrderSyncPoller;

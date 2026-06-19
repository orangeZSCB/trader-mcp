/**
 * Order/Trade history — the exchange-frontend projection of the git log.
 *
 * Same join discipline as cost-basis.ts: orders are introduced by
 * placeOrder / observeExternalOrder / closePosition operations and
 * resolved by either their own push result (immediate fills/rejects),
 * a cancelOrder result, or a later syncOrders result carrying the same
 * orderId. One row per order, lifecycle collapsed.
 *
 * Domain-level on purpose (route-thinness rule): the UI route, MCP tools
 * and the CLI all read the same translation.
 */
import type { GitCommit, OrderHistoryEntry, TradeHistoryEntry } from '@traderalice/uta-protocol';
/** Project the commit log into one-row-per-order history, newest first. */
export declare function projectOrderHistory(commits: GitCommit[], opts?: {
    limit?: number;
}): OrderHistoryEntry[];
/** Project fills only (real executions + reconcile foldings), newest first. */
export declare function projectTradeHistory(commits: GitCommit[], opts?: {
    limit?: number;
}): TradeHistoryEntry[];

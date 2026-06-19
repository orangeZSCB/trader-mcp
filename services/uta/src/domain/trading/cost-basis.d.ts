/**
 * Cost-basis reconstruction from the wallet/order log.
 *
 * Walks `GitCommit` operations chronologically and computes the running
 * weighted-average cost (WAC) for a given `aliceId`. Used by UTA for
 * positions whose broker has no authoritative avgCost — i.e. CCXT spot
 * holdings synthesized from `fetchBalance()`. The complementary path
 * (`reconcileBalance` operations) folds in unattributed quantity drift
 * at observed market price, so first-sight bootstrap and external
 * deposits/transfers compose into the same algorithm.
 *
 * Sell-down semantics: cost basis stays put as long as the position is
 * net long; when quantity reaches zero (or goes negative through over-
 * sell) the running average resets to zero, so the next buy starts a
 * fresh basis. Matches what most exchange UIs show for crypto spot.
 *
 * Out of scope (deliberate, document-only limitations):
 *   - Short positions are not modeled — spot holdings are long-only.
 *   - Splits / rebases / token migrations: not modeled.
 *   - FIFO lot tracking for tax accounting: WAC only.
 *   - Pre-Alice deposits: handled via `reconcileBalance`, but the cost
 *     attribution will be "current price at first observation" rather
 *     than the user's true acquisition cost.
 */
import Decimal from 'decimal.js';
import type { GitCommit, Operation, OperationResult } from './git/types.js';
export interface CostBasisResult {
    /** Running weighted-average cost. Zero when qty <= 0. */
    avgCost: Decimal;
    /** Net quantity after applying all fills. */
    qty: Decimal;
    /** Number of fills applied — for diagnostics / UI tooltips. */
    fillCount: number;
}
/**
 * Replay every filled fill for `aliceId` across the commit log and return
 * the resulting cost-basis state. Returns `null` if no relevant fills exist
 * — caller should fall back to bootstrap (markPrice) and synthesize a
 * `reconcileBalance` to seed the log.
 */
export declare function recomputeCostBasisFromCommits(commits: GitCommit[], aliceId: string): CostBasisResult | null;
/** Whether this op's filled result would affect a cost-basis pipeline. */
export declare function isCostBasisRelevant(op: Operation, result: OperationResult | undefined): boolean;

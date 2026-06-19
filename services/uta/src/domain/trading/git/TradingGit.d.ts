/**
 * TradingGit — Trading-as-Git implementation
 *
 * Unified git-like operation tracking for all trading accounts.
 */
import Decimal from 'decimal.js';
import { Contract, Order } from '@traderalice/ibkr';
import type { ITradingGit, TradingGitConfig } from './interfaces.js';
import type { CommitHash, Operation, AddResult, CommitPrepareResult, PushResult, RejectResult, GitStatus, GitCommit, GitState, CommitLogEntry, GitExportState, PriceChangeInput, SimulatePriceChangeResult, OrderStatusUpdate, SyncResult } from './types.js';
export declare class TradingGit implements ITradingGit {
    private stagingArea;
    private pendingMessage;
    private pendingHash;
    private commits;
    private head;
    private currentRound;
    private readonly config;
    constructor(config: TradingGitConfig);
    add(operation: Operation): AddResult;
    commit(message: string): CommitPrepareResult;
    push(): Promise<PushResult>;
    reject(reason?: string): Promise<RejectResult>;
    /**
     * Append a synthetic reconcileBalance commit to the log without going
     * through staging/push. Used by UTA when broker-reported balance differs
     * from what the order log projects (first-sight bootstrap, external
     * deposit/withdraw, staking reward, off-platform trade) — record the
     * delta as a virtual market trade at observed price so the cost-basis
     * pipeline naturally folds it in.
     *
     * The caller passes the post-reconcile GitState (typically built from
     * the in-flight `getPositions` data) to avoid recursing back through
     * `getGitState` → `broker.getPositions()`.
     */
    recordReconcile(params: {
        aliceId: string;
        quantityDelta: Decimal;
        markPrice: Decimal;
        stateAfter: GitState;
        message?: string;
    }): Promise<CommitHash>;
    /**
     * Record externally-observed open orders as ONE squashed commit — the
     * "commits without a message" the user made on the exchange directly.
     * The log is a faithful record, not the source of final state: once an
     * external order is in the log with orderId + submitted, the regular
     * pending scanner and sync poller track its fill/cancel like any
     * Alice-placed order.
     */
    recordObservedOrders(params: {
        observed: Array<{
            contract: Contract;
            order: Order;
            orderId: string;
        }>;
        stateAfter: GitState;
    }): Promise<CommitHash>;
    /** Every broker orderId the log has ever seen — observation diffs against this. */
    getKnownOrderIds(): Set<string>;
    log(options?: {
        limit?: number;
        symbol?: string;
    }): CommitLogEntry[];
    private buildOperationSummaries;
    private formatOperationChange;
    show(hash: CommitHash): GitCommit | null;
    status(): GitStatus;
    private projectOperation;
    private projectCommit;
    exportState(): GitExportState;
    static restore(state: GitExportState, config: TradingGitConfig): TradingGit;
    /** Rehydrate Decimal fields lost during JSON round-trip. */
    private static rehydrateCommit;
    private static rehydrateOperation;
    private static rehydrateOrder;
    private static rehydrateGitState;
    setCurrentRound(round: number): void;
    sync(updates: OrderStatusUpdate[], currentState: GitState): Promise<SyncResult>;
    getPendingOrderIds(): Array<{
        orderId: string;
        symbol: string;
        localSymbol?: string;
        aliceId?: string;
    }>;
    simulatePriceChange(priceChanges: PriceChangeInput[]): Promise<SimulatePriceChangeResult>;
    private parsePriceChange;
    private applyPriceChange;
    private parseOperationResult;
    /** Map IBKR-style OrderState.status to OperationStatus. */
    private mapOrderStatus;
}

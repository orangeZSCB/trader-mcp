/**
 * ITradingGit — Trading-as-Git interface
 *
 * Git-style three-phase workflow for trading operations:
 *   add → commit → push → log / show / status
 */
import type Decimal from 'decimal.js';
import type { Contract, Order } from '@traderalice/ibkr';
import type { CommitHash, Operation, AddResult, CommitPrepareResult, PushResult, RejectResult, GitStatus, GitCommit, CommitLogEntry, GitExportState, GitState, PriceChangeInput, SimulatePriceChangeResult, OrderStatusUpdate, SyncResult } from './types.js';
export interface ITradingGit {
    add(operation: Operation): AddResult;
    commit(message: string): CommitPrepareResult;
    push(): Promise<PushResult>;
    reject(reason?: string): Promise<RejectResult>;
    recordReconcile(params: {
        aliceId: string;
        quantityDelta: Decimal;
        markPrice: Decimal;
        stateAfter: GitState;
        message?: string;
    }): Promise<CommitHash>;
    log(options?: {
        limit?: number;
        symbol?: string;
    }): CommitLogEntry[];
    show(hash: CommitHash): GitCommit | null;
    status(): GitStatus;
    sync(updates: OrderStatusUpdate[], currentState: GitState): Promise<SyncResult>;
    /** `localSymbol` is the broker-native symbol from the order's operation
     *  contract — passed to IBroker.getOrder as the symbolHint so lookups
     *  survive restarts (CCXT's order API is symbol-scoped). */
    getPendingOrderIds(): Array<{
        orderId: string;
        symbol: string;
        localSymbol?: string;
        aliceId?: string;
    }>;
    /** Squash externally-observed open orders into one [observed] commit. */
    recordObservedOrders(params: {
        observed: Array<{
            contract: Contract;
            order: Order;
            orderId: string;
        }>;
        stateAfter: GitState;
    }): Promise<CommitHash>;
    /** Every broker orderId the log has ever seen. */
    getKnownOrderIds(): Set<string>;
    exportState(): GitExportState;
    setCurrentRound(round: number): void;
    simulatePriceChange(priceChanges: PriceChangeInput[]): Promise<SimulatePriceChangeResult>;
}
export interface TradingGitConfig {
    executeOperation: (operation: Operation) => Promise<unknown>;
    getGitState: () => Promise<GitState>;
    onCommit?: (state: GitExportState) => void | Promise<void>;
}

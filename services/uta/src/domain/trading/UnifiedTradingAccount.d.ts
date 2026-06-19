/**
 * UnifiedTradingAccount (UTA) — the business entity for trading.
 *
 * Owns: broker connection (IBroker), operation history (TradingGit), and strategy guards.
 * AI and frontend interact with this class, never with IBroker directly.
 *
 * Analogous to a git repository: each UTA maintains its own commit history.
 */
import { Contract, ContractDescription, ContractDetails } from '@traderalice/ibkr';
import { type IBroker, type AccountInfo, type Position, type OpenOrder, type Quote, type MarketClock, type AccountCapabilities, type BrokerHealth, type BrokerHealthInfo, type UTAReach, type UTATier, type Bar, type BarParams, type ExpandContractFilters, type ContractExpansion } from './brokers/types.js';
import { TradingGit } from './git/TradingGit.js';
import type { OrderHistoryEntry, TradeHistoryEntry } from '@traderalice/uta-protocol';
import type { AddResult, CommitPrepareResult, PushResult, RejectResult, GitStatus, GitCommit, GitState, GitExportState, CommitLogEntry, PriceChangeInput, SimulatePriceChangeResult, SyncResult } from './git/types.js';
import './contract-ext.js';
export interface UnifiedTradingAccountOptions {
    guards?: Array<{
        type: string;
        options?: Record<string, unknown>;
    }>;
    savedState?: GitExportState;
    onCommit?: (state: GitExportState) => void | Promise<void>;
    onHealthChange?: (accountId: string, health: BrokerHealthInfo) => void;
    onPostPush?: (accountId: string) => void | Promise<void>;
    onPostReject?: (accountId: string) => void | Promise<void>;
    /** Refuse write operations (stage/commit/push). Implied by keyless. */
    readOnly?: boolean;
    /** Public-data-only account (no key) — no account/positions; excluded from
     *  equity aggregation. Implies readOnly. */
    keyless?: boolean;
}
/**
 * All numeric fields are strings — Decimal precision must be
 * preserved through the staging layer into the persisted git
 * operation records. Callers (AI tools, HTTP routes) that have a
 * number must convert via `String(x)` at the boundary; that's
 * deliberate friction so the precision-loss point is explicit.
 */
export type { StagePlaceOrderParams, StageModifyOrderParams, StageClosePositionParams, } from '@traderalice/uta-protocol';
import type { StagePlaceOrderParams, StageModifyOrderParams, StageClosePositionParams } from '@traderalice/uta-protocol';
export declare class UnifiedTradingAccount {
    readonly id: string;
    readonly label: string;
    readonly broker: IBroker;
    readonly git: TradingGit;
    /** Public-data-only (no key, no account/positions, excluded from equity agg). */
    readonly keyless: boolean;
    /** Write operations refused (implied by keyless). */
    readonly readOnly: boolean;
    private readonly _getState;
    private readonly _onHealthChange?;
    private readonly _onPostPush?;
    private readonly _onPostReject?;
    private static readonly DEGRADED_THRESHOLD;
    private static readonly OFFLINE_THRESHOLD;
    private static readonly RECOVERY_BASE_MS;
    private static readonly RECOVERY_MAX_MS;
    private _consecutiveFailures;
    private _lastError?;
    private _lastSuccessAt?;
    private _lastFailureAt?;
    private _recoveryTimer?;
    private _recovering;
    private _disabled;
    /** Current rung on the capability ladder. Updated by every connect/recovery
     *  probe and by live broker-call success/failure. */
    private _currentReach;
    private _connectPromise;
    constructor(broker: IBroker, options?: UnifiedTradingAccountOptions);
    /** Await initial broker connection. Resolves on success, rejects on failure. */
    waitForConnect(): Promise<void>;
    /** What this account is for (static): keyless → data, funded+readOnly →
     *  account, funded+writable → trading. */
    get tier(): UTATier;
    /** The reach the recovery loop aims for. A data account is done at 'connected'
     *  (public data, no key); funded accounts want 'readable' (account read). */
    get targetReach(): UTAReach;
    get reach(): UTAReach;
    private _reachedTarget;
    get health(): BrokerHealth;
    get disabled(): boolean;
    getHealthInfo(): BrokerHealthInfo;
    /** Probe the capability ladder up to this account's target reach. Stages:
     *  L1 `broker.init()` (transport + public data) → 'connected'; for funded
     *  accounts only, L2 `broker.getAccount()` (private read) → 'readable'. A
     *  keyless data account stops at L1 and NEVER calls getAccount — so it can't
     *  loop on "requires apiKey". Sets `_disabled` on a permanent config error. */
    private _attemptReach;
    private _notePermanent;
    private _noteFailure;
    /** Initial broker connection — fire-and-forget from constructor. */
    private _connect;
    private _callBroker;
    private _emitHealthChange;
    private _onSuccess;
    private _onFailure;
    /** Nudge the recovery loop to retry immediately (e.g., when a data request finds this UTA offline). */
    nudgeRecovery(): void;
    private _startRecovery;
    private _scheduleRecoveryAttempt;
    /** Construct aliceId: "{utaId}|{nativeKey}" using broker's native identity. */
    private stampAliceId;
    /** Parse aliceId → { utaId, nativeKey }, or null if invalid. */
    static parseAliceId(aliceId: string): {
        utaId: string;
        nativeKey: string;
    } | null;
    /**
     * Reverse of `stampAliceId`: parse an aliceId, verify it belongs to this
     * UTA, and rebuild the full Contract via the broker's native-key resolver.
     * Throws on malformed input or cross-UTA mismatch — those are caller bugs
     * (AI passing an aliceId from a different account, or stale state) and
     * should surface loudly rather than silently no-op.
     *
     * Use this whenever an AI tool or HTTP route receives an aliceId from the
     * outside and needs to call a broker read API (getQuote, getOrderBook,
     * getFundingRate, getContractDetails). The staging methods below also
     * funnel through here for consistency.
     */
    contractFromAliceId(aliceId: string): Contract;
    /** Loud-refuse writes on a read-only / keyless (data-only) account. */
    private _assertWritable;
    /**
     * Per-orderType required-field gate, enforced at stage time so a broken
     * order can never reach staging/commit. Without this, a caller that loses
     * fields on the way in (e.g. a CLI typo like --quantity for --totalQuantity)
     * stages a quantity-less LMT order that looks perfectly committable.
     */
    private _validatePlaceOrderParams;
    stagePlaceOrder(params: StagePlaceOrderParams): AddResult;
    stageModifyOrder(params: StageModifyOrderParams): AddResult;
    stageClosePosition(params: StageClosePositionParams): AddResult;
    stageCancelOrder(params: {
        orderId: string;
    }): AddResult;
    commit(message: string): CommitPrepareResult;
    push(): Promise<PushResult>;
    reject(reason?: string): Promise<RejectResult>;
    log(options?: {
        limit?: number;
        symbol?: string;
    }): CommitLogEntry[];
    show(hash: string): GitCommit | null;
    status(): GitStatus;
    /**
     * Sync cost model — two strategies, picked by broker capability:
     *
     * LISTING (broker has getOpenOrders): ONE listing call covers every
     * pending order. An order still present is alive — zero further calls,
     * no matter how long it hangs (stop-loss / take-profit orders can sit
     * for weeks; per-order polling would be 8.6k calls/day EACH). An order
     * ABSENT from the listing transitioned — only then is getOrder spent to
     * confirm the terminal state + execution data. Absence alone is never
     * trusted as terminal: conditional/algo orders on some venues live in a
     * different listing namespace, so a vanished-but-still-Submitted confirm
     * is treated as "still working".
     *
     * PER-ORDER (no listing capability): poll each pending order with
     * age-based backoff — fresh orders (likely marketable) every pass, then
     * 1m, then 5m once they've proven to be hangers.
     */
    sync(opts?: {
        delayMs?: number;
    }): Promise<SyncResult>;
    getPendingOrderIds(): Array<{
        orderId: string;
        symbol: string;
        localSymbol?: string;
    }>;
    /** Exchange-frontend projection — same translation the UI and routes use. */
    orderHistory(limit?: number): Promise<OrderHistoryEntry[]>;
    /** Exchange-frontend projection — fills only. */
    tradeHistory(limit?: number): Promise<TradeHistoryEntry[]>;
    /** firstSeen/lastPolled per pending order — drives the per-order polling
     *  backoff for brokers without a listing API. In-memory only: a restart
     *  resets every order to "fresh", which just means one eager poll. */
    private _pollState;
    private _pollBackoffDue;
    /**
     * Faithful-record pass for orders Alice didn't place: diff the broker's
     * open orders against every orderId the log has ever seen, and squash the
     * unknowns into one [observed] commit. The log is the narrative, not the
     * state engine — this exists so "怎么回事" is always answerable from the
     * log. Once recorded (orderId + submitted), the regular pending scanner
     * and sync poller track the order's fill/cancel like any other.
     *
     * No-op (0 broker calls beyond the listing) when the broker can't
     * enumerate open orders or everything is already known.
     */
    observeExternalOrders(): Promise<{
        observed: number;
    }>;
    simulatePriceChange(priceChanges: PriceChangeInput[]): Promise<SimulatePriceChangeResult>;
    setCurrentRound(round: number): void;
    /**
     * Account info with the UTA-layer invariant enforced: account-level
     * unrealizedPnL ALWAYS equals the sum over reconciled positions. Brokers
     * can't uphold this themselves — wallet-sourced spot positions (CCXT
     * synthesis from fetchBalance) carry a placeholder unrealizedPnL of '0'
     * at the broker layer because cost basis lives in Alice's order log, not
     * on the exchange. Trusting broker-reported account PnL therefore shows
     * 0 for spot-only accounts while the positions surface shows real PnL
     * (the Bybit-demo aggregation bug). Deriving from positions makes the
     * two surfaces agree by construction, at the cost of one extra broker
     * round-trip per account read (a 60s-poll path, not a hot path).
     */
    getAccount(): Promise<AccountInfo>;
    getPositions(): Promise<Position[]>;
    /**
     * For positions whose broker doesn't supply an authoritative avgCost
     * (CCXT spot synthesis), reconstruct cost basis from Alice's order log
     * — bootstrapping any quantity drift via a synthesized `reconcileBalance`
     * commit at observed markPrice. Mutates `positions` in place: replaces
     * the placeholder avgCost and recomputes unrealizedPnL.
     */
    private _reconcileWalletPositions;
    /**
     * Build a minimal GitState for a synthesized reconcile commit. The cost-
     * basis pipeline doesn't read stateAfter (it walks operations + results),
     * but the field is required by GitCommit and downstream snapshot code may
     * inspect it. We avoid recursing through `_getState` (which would refetch
     * broker positions) by reusing the in-flight positions array.
     */
    private _buildReconcileStateAfter;
    getOrders(orderIds: string[]): Promise<OpenOrder[]>;
    getQuote(contract: Contract): Promise<Quote>;
    /**
     * Historical OHLCV bars. Loud-refuses (CONFIG error, not a silent `[]`) when
     * the broker has no `getHistorical`. Expands an aliceId-only stub to a
     * trade-ready contract first, same as getQuote. Bars carry no contract, so
     * there is no return-side aliceId stamping — the caller already holds it.
     */
    getHistorical(contract: Contract, params: BarParams): Promise<Bar[]>;
    getMarketClock(): Promise<MarketClock>;
    /**
     * Hub → leaves expansion (bond issuers, option chains, futures months).
     * Loud-refuses when the broker has no hub semantics. Accepts a full
     * aliceId; hub keys (issuer:…) are passed to the broker verbatim — they
     * deliberately do NOT go through resolveNativeKey, which refuses them
     * (directories are not tradeable contracts).
     */
    expandContract(aliceId: string, filters?: ExpandContractFilters): Promise<ContractExpansion>;
    searchContracts(pattern: string): Promise<ContractDescription[]>;
    /**
     * Optional broker-side catalog refresh (Alpaca, CCXT, Mock — those that
     * cache an enumerable list locally). No-op for brokers that source search
     * server-side (IBKR). Caller — typically a cron job — gets a resolved
     * promise either way and a thrown exception if the broker tried and
     * failed to refresh.
     */
    refreshCatalog(): Promise<void>;
    getContractDetails(query: Contract): Promise<ContractDetails | null>;
    /** Internal: if the caller passed `{ aliceId, ...overrides }` without a
     *  populated symbol/localSymbol, expand via the broker's native-key
     *  decoder and overlay any explicit overrides. Keeps the in-process
     *  callers (AI tool, ad-hoc scripts) and the HTTP route layer on the
     *  same expansion path so brokers never see an aliceId-only stub. */
    private _expandAliceIdIfNeeded;
    getCapabilities(): AccountCapabilities;
    getState(): Promise<GitState>;
    exportGitState(): GitExportState;
    close(): Promise<void>;
}

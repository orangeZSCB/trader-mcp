/**
 * UTAAccountSDK — HTTP-backed adapter that mimics
 * `UnifiedTradingAccount`'s public surface so Alice consumers
 * (telegram-plugin, tool/trading, etc.) keep working unchanged after
 * UTA-split v1.
 *
 * Each method delegates to the matching `/api/trading/uta/:id/*` route
 * on the co-located UTA service. Methods that require routes not yet
 * implemented on UTA throw `NotImplementedInSDK` — those routes land in
 * a follow-up commit before the SDK swap is wired into `main.ts`.
 */
import type { UTAClient, AccountInfo, OrderHistoryEntry, TradeHistoryEntry, Position, OpenOrder, Quote, Bar, BarParams, MarketClock, BrokerHealth, BrokerHealthInfo, AccountCapabilities, GitState, GitStatus, GitCommit, CommitLogEntry, CommitPrepareResult, PushResult, RejectResult, SyncResult, PriceChangeInput, SimulatePriceChangeResult, GitExportState, AddResult, StagePlaceOrderParams, StageModifyOrderParams, StageClosePositionParams, ExpandContractFilters, ContractExpansion } from '@traderalice/uta-protocol';
import type { Contract, ContractDescription, ContractDetails } from '@traderalice/ibkr';
export declare class NotImplementedInSDK extends Error {
    constructor(method: string, neededRoute: string);
}
export interface UTAAccountSDKDeps {
    client: UTAClient;
    id: string;
    /** Optional cached label from the listUTAs response. When `UTAManagerSDK`
     *  constructs accounts via `resolve()` it fills this in; standalone
     *  `new UTAAccountSDK({client, id})` defaults to the id. */
    label?: string;
}
/**
 * Proxy implementation. NOT a subclass of `UnifiedTradingAccount` — the
 * SDK lives in Alice and `UnifiedTradingAccount` lives in UTA after the
 * physical move. They share method *shapes*, not class identity.
 */
export declare class UTAAccountSDK {
    readonly id: string;
    /** Cached display label. May be just the id if the SDK was constructed
     *  outside of `UTAManagerSDK.resolve()`. */
    readonly label: string;
    private readonly client;
    constructor(deps: UTAAccountSDKDeps);
    /** SDK is HTTP-bound; if UTA is up we treat the account as healthy.
     *  Real health is on UTA's side via `BrokerHealthInfo`. */
    get health(): BrokerHealth;
    get disabled(): boolean;
    getHealthInfo(): Promise<BrokerHealthInfo>;
    waitForConnect(): Promise<void>;
    getCapabilities(): AccountCapabilities;
    getAccount(): Promise<AccountInfo>;
    getPositions(): Promise<Position[]>;
    getOrders(orderIds?: string[]): Promise<OpenOrder[]>;
    /** Accepts either a full `Contract` (e.g. one already returned by
     *  search) OR an aliceId lookup hint — UTA expands the aliceId via
     *  the broker's native-key decoder, same as `getContractDetails`. */
    getQuote(query: Contract | (Partial<Contract> & {
        aliceId?: string;
    })): Promise<Quote>;
    getMarketClock(): Promise<MarketClock>;
    /** Hub → leaves expansion (bond issuers, option chains, futures months). */
    expandContract(aliceId: string, filters?: ExpandContractFilters): Promise<ContractExpansion>;
    /**
     * Historical OHLCV bars for a contract. Mirrors `getQuote`: the body may
     * be a full `Contract` or an `{ aliceId }` hint, expanded server-side via
     * the broker's native-key decoder. The server-side route + per-broker
     * `getHistorical` land in Phase 1; until then this 404s at runtime (no
     * vendor flow calls it). `Date` fields serialize to ISO strings over the
     * wire; the route revives them.
     */
    getHistorical(query: Contract | (Partial<Contract> & {
        aliceId?: string;
    }), params: BarParams): Promise<Bar[]>;
    searchContracts(pattern: string): Promise<ContractDescription[]>;
    /** The body may be a raw `Contract`, a partial subset, or just an
     *  `{ aliceId }` lookup hint — the UTA route handles `aliceId` →
     *  Contract expansion via the broker's native-key decoder. */
    getContractDetails(query: Contract | (Partial<Contract> & {
        aliceId?: string;
    })): Promise<ContractDetails | null>;
    log(options?: {
        limit?: number;
        symbol?: string;
    }): Promise<CommitLogEntry[]>;
    show(hash: string): Promise<GitCommit | null>;
    status(): Promise<GitStatus>;
    /** Exchange-frontend projection: one row per order, lifecycle collapsed. */
    orderHistory(limit?: number): Promise<OrderHistoryEntry[]>;
    /** Exchange-frontend projection: fills only (reconcile foldings labeled). */
    tradeHistory(limit?: number): Promise<TradeHistoryEntry[]>;
    getState(): Promise<GitState>;
    exportGitState(): GitExportState;
    push(): Promise<PushResult>;
    reject(reason?: string): Promise<RejectResult>;
    stagePlaceOrder(params: StagePlaceOrderParams): Promise<AddResult>;
    stageModifyOrder(params: StageModifyOrderParams): Promise<AddResult>;
    stageClosePosition(params: StageClosePositionParams): Promise<AddResult>;
    stageCancelOrder(params: {
        orderId: string;
    }): Promise<AddResult>;
    commit(message: string): Promise<CommitPrepareResult>;
    sync(opts?: {
        delayMs?: number;
    }): Promise<SyncResult>;
    simulatePriceChange(priceChanges: PriceChangeInput[]): Promise<SimulatePriceChangeResult>;
    refreshCatalog(): Promise<void>;
    contractFromAliceId(_aliceId: string): Contract;
    nudgeRecovery(): void;
    getPendingOrderIds(): Array<{
        orderId: string;
        symbol: string;
    }>;
    setCurrentRound(_round: number): void;
    close(): Promise<void>;
}

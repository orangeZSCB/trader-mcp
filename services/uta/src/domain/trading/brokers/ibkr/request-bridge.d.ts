/**
 * RequestBridge — callback→Promise bridging layer for IBKR TWS API.
 *
 * Extends DefaultEWrapper to intercept TWS callbacks and route them
 * to pending Promises. Three routing modes:
 *
 * A) reqId-based: symbolSamples, contractDetails, accountSummary, tickSnapshot
 * B) orderId-based: openOrder, orderStatus (for placeOrder/cancelOrder)
 * C) Single-slot: openOrders batch, completedOrders batch
 * D) Persistent subscription: account data (updatePortfolio/updateAccountValue) with cache
 */
import Decimal from 'decimal.js';
import { DefaultEWrapper, type Contract, type ContractDescription, type ContractDetails, type Order, type OrderState, type EClient, type TickAttrib } from '@traderalice/ibkr';
import type { TickSnapshot, AccountDownloadResult, CollectedOpenOrder } from './ibkr-types.js';
export declare class RequestBridge extends DefaultEWrapper {
    private nextReqId_;
    private nextOrderId_;
    private accountId_;
    private client_;
    private pending;
    private collectors;
    private snapshots;
    private orderPending;
    private openOrdersCollector;
    private completedOrdersCollector;
    private accountCache_;
    private accountCachePending_;
    private accountReadyResolve_;
    private accountReadyReject_;
    private accountReadyPromise_;
    private accountSubscribed_;
    private accountCode_;
    private fillData_;
    private connectResolve;
    private connectReject;
    private currentTimePending;
    /** Store reference to the EClient for unsubscribe calls. */
    setClient(client: EClient): void;
    /** Allocate a unique reqId (starts at 10000 to avoid orderId range). */
    allocReqId(): number;
    /** Get and increment the next valid order ID. */
    getNextOrderId(): number;
    /** Get the auto-detected account ID from managedAccounts callback. */
    getAccountId(): string | null;
    /** Connect the EClient and wait for nextValidId (indicates TWS is ready). */
    waitForConnect(client: EClient, host: string, port: number, clientId: number, timeoutMs?: number): Promise<void>;
    /** Register a pending request that resolves with a single value. */
    request<T>(reqId: number, timeoutMs?: number): Promise<T>;
    /** Register a pending request that collects multiple callbacks into an array. */
    requestCollector<T>(reqId: number, timeoutMs?: number): Promise<T[]>;
    /** Register a snapshot market data request. */
    requestSnapshot(reqId: number, timeoutMs?: number): Promise<TickSnapshot>;
    /** Register a pending order request (waits for openOrder callback). */
    requestOrder(orderId: number, timeoutMs?: number): Promise<CollectedOpenOrder>;
    /** Request all open orders (batch collector). */
    requestOpenOrders(timeoutMs?: number): Promise<CollectedOpenOrder[]>;
    /** Request completed orders (filled/cancelled). */
    requestCompletedOrders(timeoutMs?: number): Promise<CollectedOpenOrder[]>;
    /** Get cached fill data from orderStatus callbacks. */
    getFillData(orderId: number): {
        filled: Decimal;
        avgFillPrice: number;
    } | undefined;
    /** Request current TWS server time. */
    requestCurrentTime(timeoutMs?: number): Promise<number>;
    /** Subscribe to account updates. Call once after connect. */
    startAccountSubscription(acctCode: string): void;
    /** Wait for first account download to complete. */
    waitForAccountReady(timeoutMs?: number): Promise<void>;
    /** Read the cached account data. Returns null if not yet loaded. */
    getAccountCache(): AccountDownloadResult | null;
    /** Stop the account subscription. */
    stopAccountSubscription(): void;
    private resolveRequest;
    private rejectRequest;
    private pushCollector;
    private resolveCollector;
    private resolveOrderRequest;
    private rejectOrderRequest;
    private rejectAll;
    nextValidId(orderId: number): void;
    managedAccounts(accountsList: string): void;
    /** True once the socket is known-dead (connectionClosed or a failed
     *  heartbeat) and until the next successful (re)connect. The IBKR account
     *  surface is cache-backed — without this flag a dead-but-idle connection
     *  serves stale data and SWALLOWS ORDERS while health stays green
     *  (issue #294). */
    private connectionDead_;
    get connectionDead(): boolean;
    markDead(): void;
    markAlive(): void;
    connectionClosed(): void;
    error(reqId: number, _errorTime: number, errorCode: number, errorString: string): void;
    symbolSamples(_reqId: number, contractDescriptions: ContractDescription[]): void;
    contractDetails(reqId: number, cd: ContractDetails): void;
    bondContractDetails(reqId: number, cd: ContractDetails): void;
    contractDetailsEnd(reqId: number): void;
    securityDefinitionOptionParameter(reqId: number, exchange: string, underlyingConId: number, tradingClass: string, multiplier: string, expirations: Set<string>, strikes: Set<number>): void;
    securityDefinitionOptionParameterEnd(reqId: number): void;
    accountSummary(reqId: number, _account: string, tag: string, value: string, _currency: string): void;
    accountSummaryEnd(reqId: number): void;
    /**
     * Upsert-by-conId into a position list; null row = remove.
     * TWS sends DELTAS between accountDownloadEnd markers (a fill updates one
     * position immediately, the next full download can be ~3 minutes away) —
     * so updates must apply to BOTH the live cache (immediate visibility) and
     * the pending rebuild buffer (next swap must not resurrect stale rows).
     * Keying by conId also prevents duplicate rows when the same position
     * updates repeatedly within one batch window (price ticks do this).
     */
    private upsertPosition;
    updatePortfolio(contract: Contract, position: Decimal, marketPrice: string, marketValue: string, averageCost: string, unrealizedPNL: string, realizedPNL: string, _accountName: string): void;
    updateAccountValue(key: string, val: string, currency: string, _accountName: string): void;
    accountDownloadEnd(_accountName: string): void;
    tickPrice(reqId: number, tickType: number, price: number, _attrib: TickAttrib): void;
    tickSize(reqId: number, tickType: number, size: Decimal): void;
    tickString(reqId: number, tickType: number, value: string): void;
    tickSnapshotEnd(reqId: number): void;
    openOrder(orderId: number, contract: Contract, order: Order, orderState: OrderState): void;
    orderStatus(orderId: number, status: string, filled: Decimal, _remaining: Decimal, avgFillPrice: number, _permId: number, _parentId: number, _lastFillPrice: number, _clientId: number, _whyHeld: string, _mktCapPrice: number): void;
    openOrderEnd(): void;
    completedOrder(contract: Contract, order: Order, orderState: OrderState): void;
    completedOrdersEnd(): void;
    currentTime(time: number): void;
}

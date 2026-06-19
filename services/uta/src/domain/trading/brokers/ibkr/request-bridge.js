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
import { DefaultEWrapper, NO_VALID_ID, TickTypeEnum, Contract as ContractClass, Order as OrderClass, OrderState as OrderStateClass, } from '@traderalice/ibkr';
import { BrokerError } from '../types.js';
import { classifyIbkrError } from './ibkr-contracts.js';
import { buildPosition } from '../contract-builder.js';
const DEFAULT_TIMEOUT_MS = 10_000;
const ACCOUNT_READY_TIMEOUT_MS = 20_000;
export class RequestBridge extends DefaultEWrapper {
    // ---- State ----
    nextReqId_ = 10_000;
    nextOrderId_ = 0;
    accountId_ = null;
    client_ = null;
    // ---- Mode A: reqId-based pending requests ----
    pending = new Map();
    collectors = new Map();
    // ---- Mode A: tick snapshot accumulators ----
    snapshots = new Map();
    // ---- Mode B: orderId-based pending requests ----
    orderPending = new Map();
    // ---- Mode C: single-slot collectors ----
    openOrdersCollector = null;
    completedOrdersCollector = null;
    // ---- Mode D: persistent account subscription cache ----
    accountCache_ = null;
    accountCachePending_ = null;
    accountReadyResolve_ = null;
    accountReadyReject_ = null;
    accountReadyPromise_ = null;
    accountSubscribed_ = false;
    accountCode_ = null;
    // ---- Fill data cache (from orderStatus callbacks) ----
    fillData_ = new Map();
    // ---- Connection handshake ----
    connectResolve = null;
    connectReject = null;
    // ---- Current time request ----
    currentTimePending = null;
    // ==================== Public API ====================
    /** Store reference to the EClient for unsubscribe calls. */
    setClient(client) {
        this.client_ = client;
    }
    /** Allocate a unique reqId (starts at 10000 to avoid orderId range). */
    allocReqId() {
        return this.nextReqId_++;
    }
    /** Get and increment the next valid order ID. */
    getNextOrderId() {
        return this.nextOrderId_++;
    }
    /** Get the auto-detected account ID from managedAccounts callback. */
    getAccountId() {
        return this.accountId_;
    }
    // ---- Connection ----
    /** Connect the EClient and wait for nextValidId (indicates TWS is ready). */
    async waitForConnect(client, host, port, clientId, timeoutMs = 15_000) {
        this.client_ = client;
        const promise = new Promise((resolve, reject) => {
            this.connectResolve = resolve;
            this.connectReject = reject;
            setTimeout(() => {
                this.connectResolve = null;
                this.connectReject = null;
                reject(new BrokerError('NETWORK', `Connection to TWS/Gateway timed out after ${timeoutMs}ms`));
            }, timeoutMs);
        });
        await client.connect(host, port, clientId);
        return promise;
    }
    // ---- Mode A: reqId-based requests ----
    /** Register a pending request that resolves with a single value. */
    request(reqId, timeoutMs = DEFAULT_TIMEOUT_MS) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                this.pending.delete(reqId);
                reject(new BrokerError('NETWORK', `Request ${reqId} timed out after ${timeoutMs}ms`));
            }, timeoutMs);
            this.pending.set(reqId, { resolve: resolve, reject, timer });
        });
    }
    /** Register a pending request that collects multiple callbacks into an array. */
    requestCollector(reqId, timeoutMs = DEFAULT_TIMEOUT_MS) {
        this.collectors.set(reqId, []);
        return this.request(reqId, timeoutMs);
    }
    /** Register a snapshot market data request. */
    requestSnapshot(reqId, timeoutMs = DEFAULT_TIMEOUT_MS) {
        this.snapshots.set(reqId, {});
        return this.request(reqId, timeoutMs);
    }
    // ---- Mode B: orderId-based requests ----
    /** Register a pending order request (waits for openOrder callback). */
    requestOrder(orderId, timeoutMs = DEFAULT_TIMEOUT_MS) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                this.orderPending.delete(orderId);
                reject(new BrokerError('NETWORK', `Order ${orderId} timed out after ${timeoutMs}ms`));
            }, timeoutMs);
            this.orderPending.set(orderId, { resolve, reject, timer });
        });
    }
    // ---- Mode C: single-slot requests ----
    /** Request all open orders (batch collector). */
    requestOpenOrders(timeoutMs = DEFAULT_TIMEOUT_MS) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                this.openOrdersCollector = null;
                reject(new BrokerError('NETWORK', `Open orders request timed out after ${timeoutMs}ms`));
            }, timeoutMs);
            this.openOrdersCollector = { orders: [], resolve, reject, timer };
            this.client_.reqOpenOrders();
        });
    }
    /** Request completed orders (filled/cancelled). */
    requestCompletedOrders(timeoutMs = DEFAULT_TIMEOUT_MS) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                this.completedOrdersCollector = null;
                reject(new BrokerError('NETWORK', `Completed orders request timed out after ${timeoutMs}ms`));
            }, timeoutMs);
            this.completedOrdersCollector = { orders: [], resolve, reject, timer };
            this.client_.reqCompletedOrders(true);
        });
    }
    /** Get cached fill data from orderStatus callbacks. */
    getFillData(orderId) {
        return this.fillData_.get(orderId);
    }
    /** Request current TWS server time. */
    requestCurrentTime(timeoutMs = DEFAULT_TIMEOUT_MS) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                this.currentTimePending = null;
                reject(new BrokerError('NETWORK', `currentTime request timed out`));
            }, timeoutMs);
            this.currentTimePending = { resolve: resolve, reject, timer };
            this.client_.reqCurrentTime();
        });
    }
    // ---- Mode D: persistent account subscription ----
    /** Subscribe to account updates. Call once after connect. */
    startAccountSubscription(acctCode) {
        if (this.accountSubscribed_)
            return;
        this.accountSubscribed_ = true;
        this.accountCode_ = acctCode;
        this.accountCachePending_ = { positions: [], values: new Map() };
        this.accountReadyPromise_ = new Promise((resolve, reject) => {
            this.accountReadyResolve_ = resolve;
            this.accountReadyReject_ = reject;
        });
        this.client_.reqAccountUpdates(true, acctCode);
    }
    /** Wait for first account download to complete. */
    async waitForAccountReady(timeoutMs = ACCOUNT_READY_TIMEOUT_MS) {
        if (this.accountCache_)
            return;
        if (!this.accountReadyPromise_) {
            throw new BrokerError('NETWORK', 'Account subscription not started');
        }
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new BrokerError('NETWORK', `Initial account download timed out after ${timeoutMs}ms`)), timeoutMs));
        await Promise.race([this.accountReadyPromise_, timeout]);
    }
    /** Read the cached account data. Returns null if not yet loaded. */
    getAccountCache() {
        return this.accountCache_;
    }
    /** Stop the account subscription. */
    stopAccountSubscription() {
        if (!this.accountSubscribed_ || !this.accountCode_)
            return;
        this.accountSubscribed_ = false;
        this.client_?.reqAccountUpdates(false, this.accountCode_);
        this.accountCode_ = null;
    }
    // ==================== Internal helpers ====================
    resolveRequest(reqId, value) {
        const entry = this.pending.get(reqId);
        if (!entry)
            return;
        clearTimeout(entry.timer);
        this.pending.delete(reqId);
        this.collectors.delete(reqId);
        this.snapshots.delete(reqId);
        entry.resolve(value);
    }
    rejectRequest(reqId, error) {
        const entry = this.pending.get(reqId);
        if (!entry)
            return;
        clearTimeout(entry.timer);
        this.pending.delete(reqId);
        this.collectors.delete(reqId);
        this.snapshots.delete(reqId);
        entry.reject(error);
    }
    pushCollector(reqId, item) {
        this.collectors.get(reqId)?.push(item);
    }
    resolveCollector(reqId) {
        this.resolveRequest(reqId, this.collectors.get(reqId) ?? []);
    }
    resolveOrderRequest(orderId, value) {
        const entry = this.orderPending.get(orderId);
        if (!entry)
            return;
        clearTimeout(entry.timer);
        this.orderPending.delete(orderId);
        entry.resolve(value);
    }
    rejectOrderRequest(orderId, error) {
        const entry = this.orderPending.get(orderId);
        if (!entry)
            return;
        clearTimeout(entry.timer);
        this.orderPending.delete(orderId);
        entry.reject(error);
    }
    rejectAll(error) {
        for (const [, entry] of this.pending) {
            clearTimeout(entry.timer);
            entry.reject(error);
        }
        this.pending.clear();
        this.collectors.clear();
        this.snapshots.clear();
        for (const [, entry] of this.orderPending) {
            clearTimeout(entry.timer);
            entry.reject(error);
        }
        this.orderPending.clear();
        // Reject account subscription ready promise if still pending
        if (this.accountReadyReject_) {
            this.accountReadyReject_(error);
            this.accountReadyResolve_ = null;
            this.accountReadyReject_ = null;
        }
        this.accountSubscribed_ = false;
        this.accountCache_ = null;
        this.accountCachePending_ = null;
        if (this.openOrdersCollector) {
            clearTimeout(this.openOrdersCollector.timer);
            this.openOrdersCollector.reject(error);
            this.openOrdersCollector = null;
        }
        if (this.completedOrdersCollector) {
            clearTimeout(this.completedOrdersCollector.timer);
            this.completedOrdersCollector.reject(error);
            this.completedOrdersCollector = null;
        }
        if (this.currentTimePending) {
            clearTimeout(this.currentTimePending.timer);
            this.currentTimePending.reject(error);
            this.currentTimePending = null;
        }
    }
    // ==================== EWrapper callback overrides ====================
    // ---- Connection ----
    nextValidId(orderId) {
        this.nextOrderId_ = orderId;
        // Resolve the connect promise (TWS is ready)
        if (this.connectResolve) {
            this.connectResolve();
            this.connectResolve = null;
            this.connectReject = null;
        }
    }
    managedAccounts(accountsList) {
        const accounts = accountsList.split(',').map(s => s.trim()).filter(Boolean);
        this.accountId_ = accounts[0] ?? null;
    }
    /** True once the socket is known-dead (connectionClosed or a failed
     *  heartbeat) and until the next successful (re)connect. The IBKR account
     *  surface is cache-backed — without this flag a dead-but-idle connection
     *  serves stale data and SWALLOWS ORDERS while health stays green
     *  (issue #294). */
    connectionDead_ = false;
    get connectionDead() { return this.connectionDead_; }
    markDead() { this.connectionDead_ = true; }
    markAlive() { this.connectionDead_ = false; }
    connectionClosed() {
        this.connectionDead_ = true;
        this.rejectAll(new BrokerError('NETWORK', 'Connection to TWS/Gateway lost'));
        if (this.connectReject) {
            this.connectReject(new BrokerError('NETWORK', 'Connection to TWS/Gateway closed during handshake'));
            this.connectResolve = null;
            this.connectReject = null;
        }
    }
    // ---- Error routing ----
    error(reqId, _errorTime, errorCode, errorString) {
        // Informational warnings live in the 2100-2200 band (data farm
        // status etc.). The old `>= 2000` blanket also swallowed the 10xxx
        // REAL errors (10089 no-subscription, 10197 competing session...) —
        // pending requests then died as useless timeouts instead of carrying
        // the venue's actionable message.
        if (errorCode >= 2100 && errorCode < 2200)
            return;
        // System-level errors (reqId === -1) — connectivity events
        if (reqId === NO_VALID_ID) {
            if (errorCode === 502 || errorCode === 504 || errorCode === 1100) {
                // These will be followed by connectionClosed() which rejects all
            }
            return;
        }
        // Request-specific errors — reject the corresponding pending Promise
        const brokerError = classifyIbkrError(errorCode, errorString);
        // Try reqId-based first, then orderId-based
        if (this.pending.has(reqId)) {
            this.rejectRequest(reqId, brokerError);
        }
        else if (this.orderPending.has(reqId)) {
            this.rejectOrderRequest(reqId, brokerError);
        }
    }
    // ---- Contract search (symbolSamples) ----
    symbolSamples(_reqId, contractDescriptions) {
        this.resolveRequest(_reqId, contractDescriptions);
    }
    // ---- Contract details (collector) ----
    contractDetails(reqId, cd) {
        this.pushCollector(reqId, cd);
    }
    // Bonds arrive via their own callback (TWS quirk) — same collector.
    bondContractDetails(reqId, cd) {
        this.pushCollector(reqId, cd);
    }
    contractDetailsEnd(reqId) {
        this.resolveCollector(reqId);
    }
    // ---- Option chain parameters (collector) ----
    securityDefinitionOptionParameter(reqId, exchange, underlyingConId, tradingClass, multiplier, expirations, strikes) {
        this.pushCollector(reqId, {
            exchange,
            underlyingConId,
            tradingClass,
            multiplier,
            expirations: [...expirations].sort(),
            strikes: [...strikes].sort((a, b) => a - b),
        });
    }
    securityDefinitionOptionParameterEnd(reqId) {
        this.resolveCollector(reqId);
    }
    // ---- Account summary (collector using Map) ----
    accountSummary(reqId, _account, tag, value, _currency) {
        // For accountSummary we use the collectors map but store a Map<string,string>
        let map = this.collectors.get(reqId);
        if (!map) {
            map = new Map();
            this.collectors.set(reqId, map);
        }
        map.set(tag, value);
    }
    accountSummaryEnd(reqId) {
        // Resolve with the Map (stored in collectors slot)
        this.resolveRequest(reqId, this.collectors.get(reqId) ?? new Map());
    }
    // ---- Account subscription callbacks (persistent cache) ----
    /**
     * Upsert-by-conId into a position list; null row = remove.
     * TWS sends DELTAS between accountDownloadEnd markers (a fill updates one
     * position immediately, the next full download can be ~3 minutes away) —
     * so updates must apply to BOTH the live cache (immediate visibility) and
     * the pending rebuild buffer (next swap must not resurrect stale rows).
     * Keying by conId also prevents duplicate rows when the same position
     * updates repeatedly within one batch window (price ticks do this).
     */
    upsertPosition(list, contract, row) {
        const idx = list.findIndex((p) => p.contract.conId === contract.conId);
        if (row === null) {
            if (idx >= 0)
                list.splice(idx, 1);
        }
        else if (idx >= 0) {
            list[idx] = row;
        }
        else {
            list.push(row);
        }
    }
    updatePortfolio(contract, position, marketPrice, marketValue, averageCost, unrealizedPNL, realizedPNL, _accountName) {
        // Zero quantity = position fully closed — must REMOVE from cache, not
        // be ignored (a closed position used to linger until the next full
        // download).
        // IBKR's averageCost is PER CONTRACT (multiplier-baked: an option bought
        // at 1.03 reports averageCost 103) while marketPrice is per unit. Every
        // downstream consumer that recomputes PnL as (mark − avg) × mult would
        // produce inverted, ~100x-wrong numbers for derivatives (the community
        // "option PnL direction is flipped" report). Normalize to per-unit here.
        const multDec = new Decimal(contract.multiplier || '1');
        const avgPerUnit = multDec.gt(1) ? new Decimal(averageCost).div(multDec).toString() : averageCost;
        const row = position.isZero() ? null : buildPosition({
            contract,
            currency: contract.currency || 'USD',
            side: position.greaterThan(0) ? 'long' : 'short',
            quantity: position.abs(),
            avgCost: avgPerUnit,
            marketPrice,
            // TWS already bakes contract.multiplier into the values it reports
            // here — pass through as-is (don't re-derive). multiplier is surfaced
            // as metadata for downstream consumers.
            marketValue: new Decimal(marketValue).abs().toString(),
            unrealizedPnL: unrealizedPNL,
            realizedPnL: realizedPNL,
            multiplier: contract.multiplier || '1',
        });
        if (this.accountCachePending_)
            this.upsertPosition(this.accountCachePending_.positions, contract, row);
        if (this.accountCache_)
            this.upsertPosition(this.accountCache_.positions, contract, row);
    }
    updateAccountValue(key, val, currency, _accountName) {
        // Multi-currency families (CashBalance, NetLiquidationByCurrency,
        // ExchangeRate, …) arrive once PER CURRENCY plus a consolidated BASE
        // line. Store the composite key always; the plain key is reserved for
        // the consolidated value — BASE wins it and, once written, a
        // per-currency line can never overwrite it (issue #295: last-write-wins
        // left whichever currency arrived last in the plain slot).
        const apply = (m) => {
            if (currency)
                m.set(`${key}:${currency}`, val);
            if (!currency || currency === 'BASE' || !m.has(`${key}:BASE`))
                m.set(key, val);
        };
        if (this.accountCachePending_)
            apply(this.accountCachePending_.values);
        // Deltas must be visible immediately, not at the next downloadEnd swap.
        if (this.accountCache_)
            apply(this.accountCache_.values);
    }
    accountDownloadEnd(_accountName) {
        if (!this.accountCachePending_)
            return;
        // Swap pending buffer into cache (atomic replace)
        this.accountCache_ = {
            values: this.accountCachePending_.values,
            positions: this.accountCachePending_.positions,
        };
        // Reset pending buffer for next batch
        this.accountCachePending_ = { positions: [], values: new Map() };
        // Resolve the initial-load promise (first call only)
        if (this.accountReadyResolve_) {
            this.accountReadyResolve_();
            this.accountReadyResolve_ = null;
            this.accountReadyReject_ = null;
        }
    }
    // ---- Market data snapshot ----
    tickPrice(reqId, tickType, price, _attrib) {
        const snap = this.snapshots.get(reqId);
        if (!snap)
            return;
        // Delayed variants (66-73) arrive instead of live ticks when the
        // account has no live subscription and reqMarketDataType(3) is set —
        // paper accounts live here. Same field, 15-min-delayed value.
        switch (tickType) {
            case TickTypeEnum.BID:
            case TickTypeEnum.DELAYED_BID:
                snap.bid = price;
                break;
            case TickTypeEnum.ASK:
            case TickTypeEnum.DELAYED_ASK:
                snap.ask = price;
                break;
            case TickTypeEnum.LAST:
            case TickTypeEnum.DELAYED_LAST:
                snap.last = price;
                break;
            case TickTypeEnum.HIGH:
            case TickTypeEnum.DELAYED_HIGH:
                snap.high = price;
                break;
            case TickTypeEnum.LOW:
            case TickTypeEnum.DELAYED_LOW:
                snap.low = price;
                break;
        }
    }
    tickSize(reqId, tickType, size) {
        const snap = this.snapshots.get(reqId);
        if (!snap)
            return;
        if (tickType === TickTypeEnum.VOLUME || tickType === TickTypeEnum.DELAYED_VOLUME) {
            snap.volume = size.toNumber();
        }
    }
    tickString(reqId, tickType, value) {
        const snap = this.snapshots.get(reqId);
        if (!snap)
            return;
        // TickType 45 = LAST_TIMESTAMP
        if (tickType === 45) {
            snap.lastTimestamp = parseInt(value, 10);
        }
    }
    tickSnapshotEnd(reqId) {
        const snap = this.snapshots.get(reqId) ?? {};
        this.snapshots.delete(reqId);
        this.resolveRequest(reqId, snap);
    }
    // ---- Orders ----
    openOrder(orderId, contract, order, orderState) {
        const collected = { contract, order, orderState };
        // Route to pending order request (placeOrder/modifyOrder)
        if (this.orderPending.has(orderId)) {
            this.resolveOrderRequest(orderId, collected);
        }
        // Also collect for openOrders batch
        this.openOrdersCollector?.orders.push(collected);
    }
    orderStatus(orderId, status, filled, _remaining, avgFillPrice, _permId, _parentId, _lastFillPrice, _clientId, _whyHeld, _mktCapPrice) {
        // Cache fill data for later retrieval (e.g. by sync())
        if (filled.greaterThan(0) && avgFillPrice > 0) {
            this.fillData_.set(orderId, { filled, avgFillPrice });
        }
        // For cancel requests, we wait for status 'Cancelled'
        if (this.orderPending.has(orderId) && status === 'Cancelled') {
            const os = new OrderStateClass();
            os.status = 'Cancelled';
            this.resolveOrderRequest(orderId, {
                contract: new ContractClass(),
                order: new OrderClass(),
                orderState: os,
            });
        }
    }
    openOrderEnd() {
        if (!this.openOrdersCollector)
            return;
        clearTimeout(this.openOrdersCollector.timer);
        this.openOrdersCollector.resolve(this.openOrdersCollector.orders);
        this.openOrdersCollector = null;
    }
    // ---- Completed orders ----
    completedOrder(contract, order, orderState) {
        this.completedOrdersCollector?.orders.push({ contract, order, orderState });
    }
    completedOrdersEnd() {
        if (!this.completedOrdersCollector)
            return;
        clearTimeout(this.completedOrdersCollector.timer);
        this.completedOrdersCollector.resolve(this.completedOrdersCollector.orders);
        this.completedOrdersCollector = null;
    }
    // ---- Current time ----
    currentTime(time) {
        if (!this.currentTimePending)
            return;
        clearTimeout(this.currentTimePending.timer);
        this.currentTimePending.resolve(time);
        this.currentTimePending = null;
    }
}
//# sourceMappingURL=request-bridge.js.map
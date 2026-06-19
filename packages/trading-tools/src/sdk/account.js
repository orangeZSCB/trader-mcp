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
export class NotImplementedInSDK extends Error {
    constructor(method, neededRoute) {
        super(`${method} is not yet wired through the UTA HTTP boundary — needs route ${neededRoute}. Tracked under Step 6 follow-up routes.`);
        this.name = 'NotImplementedInSDK';
    }
}
/**
 * Proxy implementation. NOT a subclass of `UnifiedTradingAccount` — the
 * SDK lives in Alice and `UnifiedTradingAccount` lives in UTA after the
 * physical move. They share method *shapes*, not class identity.
 */
export class UTAAccountSDK {
    id;
    /** Cached display label. May be just the id if the SDK was constructed
     *  outside of `UTAManagerSDK.resolve()`. */
    label;
    client;
    constructor(deps) {
        this.id = deps.id;
        this.label = deps.label ?? deps.id;
        this.client = deps.client;
    }
    // ==================== Health / state readouts ====================
    /** SDK is HTTP-bound; if UTA is up we treat the account as healthy.
     *  Real health is on UTA's side via `BrokerHealthInfo`. */
    get health() {
        return 'healthy';
    }
    get disabled() {
        return false;
    }
    async getHealthInfo() {
        // UTA exposes account-level health implicitly via the `/uta` list
        // (each list entry carries health info). For now return a minimal
        // optimistic shape; tighten once Alice's SDK caches per-UTA state.
        return {
            status: 'healthy',
            reach: 'readable',
            tier: 'trading',
            consecutiveFailures: 0,
            recovering: false,
            disabled: false,
        };
    }
    waitForConnect() {
        // SDK has no local connection state — UTA handles it.
        return Promise.resolve();
    }
    getCapabilities() {
        // TODO: surface via /uta list entry once SDK caches it. Default to
        // an empty capability set — callers should check `listUTAs()[i]` for
        // the authoritative shape.
        return { supportedSecTypes: [], supportedOrderTypes: [] };
    }
    // ==================== Reads (existing routes) ====================
    getAccount() {
        return this.client.get(`/api/trading/uta/${encodeURIComponent(this.id)}/account`);
    }
    getPositions() {
        return this.client
            .get(`/api/trading/uta/${encodeURIComponent(this.id)}/positions`)
            .then((r) => r.positions);
    }
    getOrders(orderIds = []) {
        const params = orderIds.length > 0 ? { ids: orderIds.join(',') } : undefined;
        return this.client
            .get(`/api/trading/uta/${encodeURIComponent(this.id)}/orders`, params)
            .then((r) => r.orders);
    }
    /** Accepts either a full `Contract` (e.g. one already returned by
     *  search) OR an aliceId lookup hint — UTA expands the aliceId via
     *  the broker's native-key decoder, same as `getContractDetails`. */
    getQuote(query) {
        return this.client.post(`/api/trading/uta/${encodeURIComponent(this.id)}/quote`, query);
    }
    getMarketClock() {
        return this.client.get(`/api/trading/uta/${encodeURIComponent(this.id)}/market-clock`);
    }
    /** Hub → leaves expansion (bond issuers, option chains, futures months). */
    expandContract(aliceId, filters) {
        return this.client.post(`/api/trading/uta/${encodeURIComponent(this.id)}/contract/expand`, { aliceId, filters });
    }
    /**
     * Historical OHLCV bars for a contract. Mirrors `getQuote`: the body may
     * be a full `Contract` or an `{ aliceId }` hint, expanded server-side via
     * the broker's native-key decoder. The server-side route + per-broker
     * `getHistorical` land in Phase 1; until then this 404s at runtime (no
     * vendor flow calls it). `Date` fields serialize to ISO strings over the
     * wire; the route revives them.
     */
    getHistorical(query, params) {
        return this.client
            .post(`/api/trading/uta/${encodeURIComponent(this.id)}/historical`, { contract: query, params })
            .then((r) => r.bars);
    }
    searchContracts(pattern) {
        // The `/api/trading/contracts/search` route is aggregated across
        // accounts and returns FLAT rows `{ source, contract, ... }` — one per
        // hit, tagged with the owning account. (An earlier SDK version assumed
        // a grouped `{ id, results[] }` shape; the find() never matched and
        // every per-account search silently returned [] — an analysis-killing
        // false negative: "SOL isn't tradeable" when it plainly was.)
        return this.client
            .get(`/api/trading/contracts/search`, { pattern })
            .then((r) => r.results
            .filter((row) => row.source === this.id)
            .map(({ source: _source, ...desc }) => desc));
    }
    // ==================== Contract details ====================
    /** The body may be a raw `Contract`, a partial subset, or just an
     *  `{ aliceId }` lookup hint — the UTA route handles `aliceId` →
     *  Contract expansion via the broker's native-key decoder. */
    getContractDetails(query) {
        return this.client.post(`/api/trading/uta/${encodeURIComponent(this.id)}/contracts/details`, query);
    }
    // ==================== Git/wallet state ====================
    log(options = {}) {
        return this.client
            .get(`/api/trading/uta/${encodeURIComponent(this.id)}/wallet/log`, options)
            .then((r) => r.commits);
    }
    show(hash) {
        return this.client.get(`/api/trading/uta/${encodeURIComponent(this.id)}/wallet/show/${encodeURIComponent(hash)}`)
            .catch((err) => {
            if (err instanceof Error && err.message.includes('Commit not found'))
                return null;
            throw err;
        });
    }
    status() {
        return this.client.get(`/api/trading/uta/${encodeURIComponent(this.id)}/wallet/status`);
    }
    /** Exchange-frontend projection: one row per order, lifecycle collapsed. */
    async orderHistory(limit = 50) {
        const r = await this.client.get(`/api/trading/uta/${encodeURIComponent(this.id)}/order-history?limit=${limit}`);
        return r.orders;
    }
    /** Exchange-frontend projection: fills only (reconcile foldings labeled). */
    async tradeHistory(limit = 50) {
        const r = await this.client.get(`/api/trading/uta/${encodeURIComponent(this.id)}/trade-history?limit=${limit}`);
        return r.trades;
    }
    getState() {
        // Wallet status returns GitStatus (a projection of GitState); for now
        // synthesize a minimal GitState shape from status. Route gap tracked.
        throw new NotImplementedInSDK('getState', 'GET /api/trading/uta/:id/wallet/state');
    }
    exportGitState() {
        throw new NotImplementedInSDK('exportGitState', 'GET /api/trading/uta/:id/wallet/export');
    }
    // ==================== Write / lifecycle (existing routes) ====================
    push() {
        return this.client.post(`/api/trading/uta/${encodeURIComponent(this.id)}/wallet/push`);
    }
    reject(reason) {
        return this.client.post(`/api/trading/uta/${encodeURIComponent(this.id)}/wallet/reject`, reason !== undefined ? { reason } : undefined);
    }
    // ==================== Stage (sync → async via HTTP) ====================
    //
    // The in-process `UnifiedTradingAccount` returns these synchronously
    // because staging is pure git-state mutation. Over HTTP they become
    // Promise<AddResult>; callers add `await` and the rest of the stage→
    // commit→push ceremony still works the same way.
    stagePlaceOrder(params) {
        return this.client.post(`/api/trading/uta/${encodeURIComponent(this.id)}/wallet/stage-place-order`, params);
    }
    stageModifyOrder(params) {
        return this.client.post(`/api/trading/uta/${encodeURIComponent(this.id)}/wallet/stage-modify-order`, params);
    }
    stageClosePosition(params) {
        return this.client.post(`/api/trading/uta/${encodeURIComponent(this.id)}/wallet/stage-close-position`, params);
    }
    stageCancelOrder(params) {
        return this.client.post(`/api/trading/uta/${encodeURIComponent(this.id)}/wallet/stage-cancel-order`, params);
    }
    // ==================== Write / lifecycle ====================
    commit(message) {
        return this.client.post(`/api/trading/uta/${encodeURIComponent(this.id)}/wallet/commit`, { message });
    }
    sync(opts) {
        return this.client.post(`/api/trading/uta/${encodeURIComponent(this.id)}/sync`, opts ?? {});
    }
    simulatePriceChange(priceChanges) {
        return this.client.post(`/api/trading/uta/${encodeURIComponent(this.id)}/simulate-price`, { changes: priceChanges });
    }
    refreshCatalog() {
        // Catalog refresh happens internally inside UTA's 6h loop. Alice's
        // SDK no-ops to keep callers working without forcing a round-trip.
        return Promise.resolve();
    }
    // ==================== Helpers ====================
    contractFromAliceId(_aliceId) {
        // Constructing a Contract requires broker-specific lookups; we'd need
        // a dedicated route. Tool layer that needs this re-derives from
        // contract search results today.
        throw new NotImplementedInSDK('contractFromAliceId', 'GET /api/trading/uta/:id/contract-by-alice-id');
    }
    nudgeRecovery() {
        // SDK has no local state to nudge; UTA's reconnect logic handles
        // recovery autonomously.
    }
    getPendingOrderIds() {
        // Used internally by the snapshot builder which lives in UTA — Alice
        // shouldn't need this.
        return [];
    }
    setCurrentRound(_round) {
        // Heartbeat-driven simulation round number. UTA-internal concern.
    }
    async close() {
        // No local state to close.
    }
}
//# sourceMappingURL=account.js.map
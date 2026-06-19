/**
 * SDK Base Client
 *
 * Replaces HTTP fetch with in-process executor.execute() calls.
 * All 6 domain-specific SDK clients (equity, crypto, currency, news, economy, commodity)
 * extend this class and expose the same method signatures as their HTTP counterparts.
 *
 * Data flow:
 *   client.getQuote(params) → this.request('/price/quote', params)
 *     → resolve model via routeMap: '/equity/price/quote' → 'EquityQuote'
 *     → executor.execute('fmp', 'EquityQuote', params, credentials)
 */
export class SDKBaseClient {
    executor;
    routePrefix;
    defaultProvider;
    credentials;
    routeMap;
    constructor(executor, routePrefix, // 'equity' | 'crypto' | 'currency' | 'news' | 'economy' | 'commodity'
    defaultProvider, credentials, routeMap) {
        this.executor = executor;
        this.routePrefix = routePrefix;
        this.defaultProvider = defaultProvider;
        this.credentials = credentials;
        this.routeMap = routeMap;
    }
    async request(path, params = {}) {
        const fullPath = `/${this.routePrefix}${path}`;
        const model = this.routeMap.get(fullPath);
        if (!model) {
            throw new Error(`No SDK route for: ${fullPath}`);
        }
        const provider = params.provider ?? this.defaultProvider;
        if (!provider) {
            throw new Error(`No provider specified for: ${fullPath}`);
        }
        // Remove 'provider' from params — executor takes it as a separate argument
        const { provider: _, ...cleanParams } = params;
        return this.executor.execute(provider, model, cleanParams, this.credentials);
    }
}
//# sourceMappingURL=base-client.js.map
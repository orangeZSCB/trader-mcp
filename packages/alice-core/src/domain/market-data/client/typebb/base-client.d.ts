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
import type { QueryExecutor } from '@traderalice/opentypebb';
export declare class SDKBaseClient {
    protected executor: QueryExecutor;
    protected routePrefix: string;
    protected defaultProvider: string | undefined;
    protected credentials: Record<string, string>;
    protected routeMap: Map<string, string>;
    constructor(executor: QueryExecutor, routePrefix: string, // 'equity' | 'crypto' | 'currency' | 'news' | 'economy' | 'commodity'
    defaultProvider: string | undefined, credentials: Record<string, string>, routeMap: Map<string, string>);
    protected request<T = Record<string, unknown>>(path: string, params?: Record<string, unknown>): Promise<T[]>;
}

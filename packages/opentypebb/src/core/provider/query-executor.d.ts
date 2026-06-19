/**
 * Query Executor.
 * Maps to: openbb_core/provider/query_executor.py
 *
 * Resolves provider + model name to a Fetcher class,
 * filters credentials, and executes the TET pipeline.
 */
import type { FetcherClass } from './abstract/fetcher.js';
import type { Provider } from './abstract/provider.js';
import type { Registry } from './registry.js';
export declare class QueryExecutor {
    private readonly registry;
    constructor(registry: Registry);
    /** Get a provider from the registry. */
    getProvider(providerName: string): Provider;
    /** Get a fetcher from a provider by model name. */
    getFetcher(provider: Provider, modelName: string): FetcherClass;
    /**
     * Filter credentials to only include those required by the provider.
     * Maps to: QueryExecutor.filter_credentials() in query_executor.py
     */
    static filterCredentials(credentials: Record<string, string> | null, provider: Provider, requireCredentials: boolean): Record<string, string>;
    /**
     * Execute a query against a provider.
     *
     * @param providerName - Name of the provider (e.g., "fmp").
     * @param modelName - Name of the model (e.g., "EquityHistorical").
     * @param params - Query parameters (e.g., { symbol: "AAPL" }).
     * @param credentials - Provider credentials (e.g., { fmp_api_key: "..." }).
     * @returns Query result from the fetcher.
     */
    execute(providerName: string, modelName: string, params: Record<string, unknown>, credentials?: Record<string, string> | null): Promise<unknown>;
}

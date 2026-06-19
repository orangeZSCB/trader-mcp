/**
 * Query Executor.
 * Maps to: openbb_core/provider/query_executor.py
 *
 * Resolves provider + model name to a Fetcher class,
 * filters credentials, and executes the TET pipeline.
 */
import { OpenBBError } from './utils/errors.js';
export class QueryExecutor {
    registry;
    constructor(registry) {
        this.registry = registry;
    }
    /** Get a provider from the registry. */
    getProvider(providerName) {
        const name = providerName.toLowerCase();
        const provider = this.registry.providers.get(name);
        if (!provider) {
            const available = [...this.registry.providers.keys()];
            throw new OpenBBError(`Provider '${name}' not found in the registry. Available providers: ${available.join(', ')}`);
        }
        return provider;
    }
    /** Get a fetcher from a provider by model name. */
    getFetcher(provider, modelName) {
        const fetcher = provider.fetcherDict[modelName];
        if (!fetcher) {
            throw new OpenBBError(`Fetcher not found for model '${modelName}' in provider '${provider.name}'.`);
        }
        return fetcher;
    }
    /**
     * Filter credentials to only include those required by the provider.
     * Maps to: QueryExecutor.filter_credentials() in query_executor.py
     */
    static filterCredentials(credentials, provider, requireCredentials) {
        const filtered = {};
        if (provider.credentials.length > 0) {
            const creds = credentials ?? {};
            for (const c of provider.credentials) {
                const v = creds[c];
                if (!v) {
                    if (requireCredentials) {
                        const website = provider.website ?? '';
                        const extraMsg = website ? ` Check ${website} to get it.` : '';
                        throw new OpenBBError(`Missing credential '${c}'.${extraMsg}`);
                    }
                }
                else {
                    filtered[c] = v;
                }
            }
        }
        return filtered;
    }
    /**
     * Execute a query against a provider.
     *
     * @param providerName - Name of the provider (e.g., "fmp").
     * @param modelName - Name of the model (e.g., "EquityHistorical").
     * @param params - Query parameters (e.g., { symbol: "AAPL" }).
     * @param credentials - Provider credentials (e.g., { fmp_api_key: "..." }).
     * @returns Query result from the fetcher.
     */
    async execute(providerName, modelName, params, credentials = null) {
        const provider = this.getProvider(providerName);
        const fetcher = this.getFetcher(provider, modelName);
        const filteredCredentials = QueryExecutor.filterCredentials(credentials, provider, fetcher.requireCredentials);
        return fetcher.fetchData(params, filteredCredentials);
    }
}
//# sourceMappingURL=query-executor.js.map
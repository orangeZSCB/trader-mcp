/**
 * Query class.
 * Maps to: openbb_core/app/query.py
 *
 * In Python, Query holds CommandContext + ProviderChoices + StandardParams + ExtraParams,
 * and execute() calls ProviderInterface → QueryExecutor.
 *
 * In TypeScript, Query is simplified:
 * - Takes provider name, model name, params, and credentials directly
 * - Delegates to QueryExecutor.execute()
 * - No ProviderInterface dependency injection (handled by Router)
 */
import { OBBject } from './model/obbject.js';
import { createMetadata } from './model/metadata.js';
export class Query {
    executor;
    provider;
    model;
    params;
    credentials;
    route;
    constructor(executor, config) {
        this.executor = executor;
        this.provider = config.provider;
        this.model = config.model;
        this.params = config.params;
        this.credentials = config.credentials;
        this.route = config.route ?? `/${config.model}`;
    }
    /**
     * Execute the query and return an OBBject.
     * Maps to: Query.execute() in query.py + OBBject.from_query()
     */
    async execute() {
        const startTime = Date.now();
        const results = await this.executor.execute(this.provider, this.model, this.params, this.credentials);
        const metadata = createMetadata(this.route, this.params, startTime);
        const obbject = new OBBject({
            results: results,
            provider: this.provider,
            extra: { metadata },
        });
        obbject.setRoute(this.route);
        obbject.setStandardParams(this.params);
        return obbject;
    }
}
//# sourceMappingURL=query.js.map
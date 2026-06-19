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
import type { QueryExecutor } from '../provider/query-executor.js';
import { OBBject } from './model/obbject.js';
export interface QueryConfig {
    /** Provider name (e.g., "fmp"). */
    provider: string;
    /** Model name (e.g., "EquityHistorical"). */
    model: string;
    /** Merged params (standard + extra). */
    params: Record<string, unknown>;
    /** Provider credentials. */
    credentials: Record<string, string> | null;
    /** Route path for metadata. */
    route?: string;
}
export declare class Query {
    private readonly executor;
    readonly provider: string;
    readonly model: string;
    readonly params: Record<string, unknown>;
    readonly credentials: Record<string, string> | null;
    readonly route: string;
    constructor(executor: QueryExecutor, config: QueryConfig);
    /**
     * Execute the query and return an OBBject.
     * Maps to: Query.execute() in query.py + OBBject.from_query()
     */
    execute<T>(): Promise<OBBject<T>>;
}

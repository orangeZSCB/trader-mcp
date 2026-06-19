/**
 * Router — command registration and routing.
 * Maps to: openbb_core/app/router.py
 *
 * In Python, Router wraps FastAPI's APIRouter with:
 * - @router.command(model="...") decorator for registering commands
 * - include_router() for hierarchical nesting
 * - Auto-generates FastAPI routes with dependency injection
 *
 * In TypeScript, Router serves two purposes:
 * 1. Library mode: getCommandMap() returns a flat map of commands
 * 2. HTTP mode: mountToHono() generates Hono routes
 *
 * Each command is a thin function that delegates to Query.execute().
 */
import type { Hono } from 'hono';
import type { QueryExecutor } from '../provider/query-executor.js';
/**
 * A registered command handler.
 * The handler receives params + credentials and returns the raw result.
 */
export interface CommandHandler {
    (executor: QueryExecutor, provider: string, params: Record<string, unknown>, credentials: Record<string, string> | null): Promise<unknown>;
}
/** Command definition registered in a Router. */
export interface CommandDef {
    /** Standard model name (e.g., "EquityHistorical"). */
    model: string;
    /** Route path segment (e.g., "/historical"). */
    path: string;
    /** Human-readable description. */
    description: string;
    /** The handler function. */
    handler: CommandHandler;
}
/**
 * Router class for registering commands and building routes.
 *
 * Usage in extensions (maps to Python's @router.command pattern):
 *
 * ```typescript
 * const router = new Router({ prefix: '/price' })
 *
 * router.command({
 *   model: 'EquityQuote',
 *   path: '/quote',
 *   description: 'Get the latest quote for a given stock.',
 *   handler: async (executor, provider, params, credentials) => {
 *     return executor.execute(provider, 'EquityQuote', params, credentials)
 *   },
 * })
 * ```
 */
export declare class Router {
    readonly prefix: string;
    readonly description?: string;
    private readonly _commands;
    private readonly _subRouters;
    constructor(opts?: {
        prefix?: string;
        description?: string;
    });
    /**
     * Register a command.
     * Maps to: @router.command(model="...", ...) in router.py
     */
    command(def: CommandDef): void;
    /**
     * Include a sub-router.
     * Maps to: router.include_router(sub_router, prefix="/price") in router.py
     */
    includeRouter(router: Router, prefix?: string): void;
    /**
     * Get all commands as a flat map of {fullPath: CommandDef}.
     * Used in library mode for direct invocation.
     */
    getCommandMap(basePath?: string): Map<string, CommandDef>;
    /**
     * Get all registered model names.
     * Useful for discovering available commands.
     */
    getModelNames(basePath?: string): string[];
    /**
     * Mount all commands as Hono GET routes.
     * Maps to: AppLoader.add_routers() / RouterLoader in rest_api.py
     *
     * Each command becomes: GET /api/v1/{extension}/{path}?params...
     *   - Provider: explicit `?provider=` query wins; else `resolveProvider(path, basePath)`
     *     if supplied; else empty string (executor will surface a "provider required" error).
     *   - Credentials from X-OpenBB-Credentials header, falling back to
     *     `defaultCredentials` when the header is absent or malformed.
     *     Pass a function to have it evaluated per-request (picks up config
     *     changes without remounting).
     */
    mountToHono(app: Hono, executor: QueryExecutor, basePath?: string, defaultCredentials?: Record<string, string> | null | (() => Record<string, string> | null), resolveProvider?: (path: string, basePath: string) => string | undefined): void;
}

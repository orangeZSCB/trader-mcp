/**
 * App Loader — load providers and mount extension routers.
 * Maps to: openbb_core/api/app_loader.py
 *
 * In Python, RegistryLoader uses entry_points for dynamic discovery.
 * In TypeScript, providers and routers are explicitly imported
 * (simpler, tree-shake friendly, easier to debug).
 */
import { Registry } from '../provider/registry.js';
import { QueryExecutor } from '../provider/query-executor.js';
import { Router } from '../app/router.js';
/**
 * Create and populate a Registry with all available providers.
 * Maps to: RegistryLoader.from_extensions() in registry_loader.py
 */
export declare function createRegistry(): Registry;
/**
 * Create a QueryExecutor with all providers loaded.
 */
export declare function createExecutor(): QueryExecutor;
/**
 * Load all extension routers and return a root router.
 * Maps to: RouterLoader in app_loader.py
 */
export declare function loadAllRouters(): Router;

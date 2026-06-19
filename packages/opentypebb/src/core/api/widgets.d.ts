/**
 * Widget Builder — generates widgets.json for the OpenBB Workspace frontend.
 *
 * Maps to: openbb_platform/extensions/platform_api/openbb_platform_api/utils/widgets.py
 *
 * The Python version parses the OpenAPI spec (auto-generated from Pydantic models).
 * In TypeScript we skip OpenAPI and directly walk:
 *   - Router command map → routes, model names, descriptions
 *   - Registry → which providers support each model
 *   - Schema registry → Zod schemas for query params and data columns
 */
import type { Router } from '../app/router.js';
import type { Registry } from '../provider/registry.js';
/**
 * Build the widgets.json configuration from registered routes and providers.
 *
 * @param router - The root Router with all commands registered
 * @param registry - The provider Registry
 * @param apiPrefix - The API prefix (default: "/api/v1")
 * @returns Record of widgetId → widget configuration
 */
export declare function buildWidgetsJson(router: Router, registry: Registry, apiPrefix?: string): Record<string, unknown>;

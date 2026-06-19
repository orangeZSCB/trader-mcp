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
import { SCHEMA_REGISTRY } from './schema-registry.js';
import { zodSchemaToWidgetParams, zodSchemaToColumnDefs } from './zod-to-widget.js';
/** Provider name display mapping (matches Python's provider_map in widgets.py). */
const PROVIDER_DISPLAY = {
    fmp: 'FMP',
    yfinance: 'yFinance',
    fred: 'FRED',
    sec: 'SEC',
    tmx: 'TMX',
    ecb: 'ECB',
    econdb: 'EconDB',
    eia: 'EIA',
    oecd: 'OECD',
    finra: 'FINRA',
    imf: 'IMF',
    bls: 'BLS',
    cftc: 'CFTC',
    wsj: 'WSJ',
    deribit: 'Deribit',
    cboe: 'CBOE',
    multpl: 'Multpl',
    intrinio: 'Intrinio',
    federal_reserve: 'Federal Reserve',
    stub: 'Stub',
};
// Strings that should always be uppercased in widget names
const TO_CAPS = new Set([
    'pe', 'pb', 'ps', 'eps', 'ebitda', 'ebit', 'gdp', 'cpi', 'ipo',
    'etf', 'sec', 'fred', 'oecd', 'imf', 'ecb', 'bls', 'eia',
    'sp', 'ny', 'us', 'uk', 'esg', 'sloos', 'fomc', 'pce', 'nonfarm',
]);
/**
 * Build the widgets.json configuration from registered routes and providers.
 *
 * @param router - The root Router with all commands registered
 * @param registry - The provider Registry
 * @param apiPrefix - The API prefix (default: "/api/v1")
 * @returns Record of widgetId → widget configuration
 */
export function buildWidgetsJson(router, registry, apiPrefix = '/api/v1') {
    const widgets = {};
    const commands = router.getCommandMap(apiPrefix);
    // Build reverse index: modelName → provider names
    const modelToProviders = new Map();
    for (const [providerName, provider] of registry.providers) {
        for (const modelName of Object.keys(provider.fetcherDict)) {
            const list = modelToProviders.get(modelName) ?? [];
            list.push(providerName);
            modelToProviders.set(modelName, list);
        }
    }
    for (const [routePath, cmd] of commands) {
        const providers = modelToProviders.get(cmd.model) ?? ['custom'];
        // Derive widget_id from route path (strip apiPrefix, convert / to _)
        const routeWithoutPrefix = routePath.replace(apiPrefix, '');
        const baseWidgetId = routeWithoutPrefix.startsWith('/')
            ? routeWithoutPrefix.slice(1).replace(/\//g, '_')
            : routeWithoutPrefix.replace(/\//g, '_');
        // Derive category and subcategory from route segments
        const segments = routeWithoutPrefix
            .split('/')
            .filter((s) => s.length > 0);
        const category = segments[0] ? toTitle(segments[0]) : '';
        const subCategory = segments.length > 2
            ? toTitle(segments[1])
            : segments.length > 1
                ? toTitle(segments[1])
                : undefined;
        // Derive widget name from route (strip category/subcategory, humanize)
        const name = deriveWidgetName(baseWidgetId, category, subCategory);
        // Look up Zod schemas for this model
        const schemas = SCHEMA_REGISTRY[cmd.model];
        for (const provider of providers) {
            const widgetId = provider === 'custom'
                ? `${baseWidgetId}_obb`
                : `${baseWidgetId}_${provider}_obb`;
            // Build params from Zod query schema
            let params = [];
            if (schemas) {
                params = zodSchemaToWidgetParams(schemas.queryParams);
            }
            // Add hidden provider param (matches Python behavior)
            if (provider !== 'custom') {
                params.push({
                    paramName: 'provider',
                    label: 'Provider',
                    description: 'Data source provider.',
                    type: 'text',
                    value: provider,
                    optional: false,
                    show: false,
                });
            }
            // Build column definitions from Zod data schema
            let columnsDefs = [];
            if (schemas) {
                columnsDefs = zodSchemaToColumnDefs(schemas.data);
            }
            const providerDisplayName = PROVIDER_DISPLAY[provider] ?? toTitle(provider);
            const widgetConfig = {
                name,
                description: cmd.description,
                category: category.replace('Fixedincome', 'Fixed Income'),
                type: 'table',
                searchCategory: category.replace('Fixedincome', 'Fixed Income'),
                widgetId,
                mcp_tool: {
                    mcp_server: 'Open Data Platform',
                    tool_id: baseWidgetId,
                },
                params,
                endpoint: routePath,
                runButton: false,
                gridData: { w: 40, h: 15 },
                data: {
                    dataKey: 'results',
                    table: {
                        showAll: true,
                        enableAdvanced: true,
                        ...(columnsDefs.length > 0 ? { columnsDefs } : {}),
                    },
                },
                source: [providerDisplayName],
            };
            if (subCategory && segments.length > 2) {
                widgetConfig.subCategory = subCategory;
            }
            widgets[widgetId] = widgetConfig;
        }
    }
    return widgets;
}
/** Convert a snake_case segment to Title Case, uppercasing known acronyms. */
function toTitle(s) {
    return s
        .replace(/_/g, ' ')
        .split(' ')
        .map((w) => {
        const lower = w.toLowerCase();
        if (TO_CAPS.has(lower))
            return lower.toUpperCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
        .join(' ');
}
/** Derive a human-readable widget name from the base widget ID. */
function deriveWidgetName(widgetId, category, subCategory) {
    let name = widgetId
        .replace(/_/g, ' ')
        .split(' ')
        .map((w) => {
        const lower = w.toLowerCase();
        if (TO_CAPS.has(lower))
            return lower.toUpperCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
        .join(' ');
    // Remove category and subcategory from name to avoid duplication
    if (category) {
        name = name.replace(new RegExp(`^${escapeRegex(category)}\\s*`, 'i'), '');
    }
    if (subCategory) {
        name = name.replace(new RegExp(`^${escapeRegex(subCategory)}\\s*`, 'i'), '');
    }
    return name.trim() || widgetId;
}
function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
//# sourceMappingURL=widgets.js.map
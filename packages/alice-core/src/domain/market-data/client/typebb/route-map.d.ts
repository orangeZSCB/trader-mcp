/**
 * Route Map Builder
 *
 * Dynamically builds a path → model name mapping from OpenTypeBB's router system.
 * e.g. '/equity/price/quote' → 'EquityQuote'
 *
 * This mapping allows SDKBaseClient.request(path) to resolve which fetcher model
 * to call for each API path, providing a drop-in replacement for HTTP routing.
 */
export declare function buildRouteMap(): Map<string, string>;

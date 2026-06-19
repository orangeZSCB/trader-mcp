/**
 * Aggregate Symbol Search
 *
 * Cross-asset-class heuristic search that respects Alice's per-asset-class
 * provider config. Used both by the AI tool (marketSearchForResearch) and the
 * HTTP route (/api/market/search) — both surfaces must return the same thing.
 *
 * equity    — SymbolIndex (SEC/TMX local cache, regex, zero-latency)
 * commodity — CommodityCatalog (canonical catalog, ~25 items)
 * crypto    — cryptoClient.search on yfinance (online fuzzy)
 * currency  — currencyClient.search on yfinance (online fuzzy, XXXUSD filter)
 */
import type { SymbolIndex } from './equity/symbol-index.js';
import type { CommodityCatalog } from './commodity/commodity-catalog.js';
import type { CryptoClientLike, CurrencyClientLike } from './client/types.js';
export type AssetClass = 'equity' | 'crypto' | 'currency' | 'commodity';
export interface MarketSearchDeps {
    symbolIndex: SymbolIndex;
    cryptoClient: CryptoClientLike;
    currencyClient: CurrencyClientLike;
    commodityCatalog: CommodityCatalog;
}
export interface MarketSearchResult {
    /** Equity / crypto / currency have a symbol; commodity uses `id` instead (canonical). */
    symbol?: string;
    id?: string;
    name?: string | null;
    assetClass: AssetClass;
    [key: string]: unknown;
}
export declare function aggregateSymbolSearch(deps: MarketSearchDeps, query: string, limit?: number): Promise<MarketSearchResult[]>;

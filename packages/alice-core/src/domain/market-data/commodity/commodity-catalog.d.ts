/**
 * Commodity Catalog — canonical naming + enumeration
 *
 * Commodity is a closed set (~30 root symbols, stable for decades).
 * Unlike equities (open set, daily IPO/delist), commodities only need
 * enumeration, not server-side search.
 *
 * Each entry uses a canonical id (e.g. "gold", "crude_oil") that is
 * provider-agnostic. Provider-specific ticker translation (gold → GC=F
 * for yfinance, gold → GCUSD for FMP) lives in each provider's fetcher.
 *
 * Aliases include provider tickers so that searching "GC=F" or "GCUSD"
 * still resolves to the canonical "gold" entry — easing migration from
 * provider-specific naming to canonical naming.
 */
export interface CommodityCatalogEntry {
    id: string;
    name: string;
    category: string;
    aliases: string[];
}
export declare class CommodityCatalog {
    private entries;
    get size(): number;
    load(): void;
    /**
     * Regex/substring search across id, name, and aliases.
     * Same logic as SymbolIndex.search() — regex with fallback to substring.
     */
    search(pattern: string, limit?: number): CommodityCatalogEntry[];
    resolve(id: string): CommodityCatalogEntry | undefined;
    list(): CommodityCatalogEntry[];
}

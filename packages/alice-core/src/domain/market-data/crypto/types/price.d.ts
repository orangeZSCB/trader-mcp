/**
 * Crypto Price types — mirrors OpenBB standard_models:
 *   crypto_historical.py, crypto_search.py
 */
export interface CryptoHistoricalQuery {
    symbol: string;
    start_date?: string;
    end_date?: string;
    interval?: string;
    provider?: string;
    [key: string]: unknown;
}
export interface CryptoHistoricalData {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number | null;
    vwap: number | null;
    [key: string]: unknown;
}
export interface CryptoSearchQuery {
    query?: string;
    provider?: string;
    [key: string]: unknown;
}
export interface CryptoSearchData {
    symbol: string;
    name: string | null;
    [key: string]: unknown;
}

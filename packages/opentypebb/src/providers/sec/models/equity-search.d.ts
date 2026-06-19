/**
 * SEC Equity Search Fetcher.
 *
 * Fetches the full company tickers list from SEC EDGAR (free, no API key).
 * Source: https://www.sec.gov/files/company_tickers.json
 *
 * The JSON is a dict keyed by index: { "0": { cik_str, ticker, title }, ... }
 * ~10,000 entries, sorted by market cap.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const SECEquitySearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
} & {
    use_cache: z.ZodDefault<z.ZodBoolean>;
    is_fund: z.ZodDefault<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
} & {
    use_cache: z.ZodDefault<z.ZodBoolean>;
    is_fund: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
} & {
    use_cache: z.ZodDefault<z.ZodBoolean>;
    is_fund: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>;
export type SECEquitySearchQueryParams = z.infer<typeof SECEquitySearchQueryParamsSchema>;
export declare const SECEquitySearchDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    cik: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    cik: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    cik: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type SECEquitySearchData = z.infer<typeof SECEquitySearchDataSchema>;
interface SECTickerEntry {
    cik_str: number;
    ticker: string;
    title: string;
}
export declare class SECEquitySearchFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): SECEquitySearchQueryParams;
    static extractData(_query: SECEquitySearchQueryParams, _credentials: Record<string, string> | null): Promise<SECTickerEntry[]>;
    static transformData(query: SECEquitySearchQueryParams, data: SECTickerEntry[]): SECEquitySearchData[];
}
export {};

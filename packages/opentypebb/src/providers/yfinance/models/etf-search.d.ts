/**
 * Yahoo Finance ETF Search Model.
 *
 * No OpenBB Python counterpart (openbb_yfinance has no etf_search). Added so
 * theme/keyword ETF lookup works keyless: FMP's etf_search hits company-screener
 * which filters by financials, not name, so "robotics" returns junk. Yahoo's
 * fuzzy search name-matches and tags ETFs via quoteType, which is exactly what
 * thematic discovery needs.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceEtfSearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    query: string | null;
}, {
    query?: string | null | undefined;
}>;
export type YFinanceEtfSearchQueryParams = z.infer<typeof YFinanceEtfSearchQueryParamsSchema>;
export declare const YFinanceEtfSearchDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    quote_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    quote_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    quote_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceEtfSearchData = z.infer<typeof YFinanceEtfSearchDataSchema>;
export declare class YFinanceEtfSearchFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceEtfSearchQueryParams;
    static extractData(query: YFinanceEtfSearchQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFinanceEtfSearchQueryParams, data: Record<string, unknown>[]): YFinanceEtfSearchData[];
}

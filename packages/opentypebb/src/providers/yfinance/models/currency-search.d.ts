/**
 * Yahoo Finance Currency Search Model.
 * Maps to: openbb_yfinance/models/currency_search.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceCurrencySearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceCurrencySearchQueryParams = z.infer<typeof YFinanceCurrencySearchQueryParamsSchema>;
export declare const YFinanceCurrencySearchDataSchema: z.ZodObject<{
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
export type YFinanceCurrencySearchData = z.infer<typeof YFinanceCurrencySearchDataSchema>;
export declare class YFinanceCurrencySearchFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceCurrencySearchQueryParams;
    static extractData(query: YFinanceCurrencySearchQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFinanceCurrencySearchQueryParams, data: Record<string, unknown>[]): YFinanceCurrencySearchData[];
}

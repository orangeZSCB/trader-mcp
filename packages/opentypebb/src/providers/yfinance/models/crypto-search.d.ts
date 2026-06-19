/**
 * Yahoo Finance Crypto Search Model.
 * Maps to: openbb_yfinance/models/crypto_search.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceCryptoSearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceCryptoSearchQueryParams = z.infer<typeof YFinanceCryptoSearchQueryParamsSchema>;
export declare const YFinanceCryptoSearchDataSchema: z.ZodObject<{
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
export type YFinanceCryptoSearchData = z.infer<typeof YFinanceCryptoSearchDataSchema>;
export declare class YFinanceCryptoSearchFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceCryptoSearchQueryParams;
    static extractData(query: YFinanceCryptoSearchQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFinanceCryptoSearchQueryParams, data: Record<string, unknown>[]): YFinanceCryptoSearchData[];
}

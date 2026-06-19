/**
 * FMP Equity Search Model.
 *
 * Uses FMP's /stable/search-name endpoint to search equities by name or symbol.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEquitySearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEquitySearchQueryParams = z.infer<typeof FMPEquitySearchQueryParamsSchema>;
export declare const FMPEquitySearchDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEquitySearchData = z.infer<typeof FMPEquitySearchDataSchema>;
export declare class FMPEquitySearchFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEquitySearchQueryParams;
    static extractData(query: FMPEquitySearchQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPEquitySearchQueryParams, data: Record<string, unknown>[]): FMPEquitySearchData[];
}

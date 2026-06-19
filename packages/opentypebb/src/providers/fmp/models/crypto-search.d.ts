/**
 * FMP Crypto Search Model.
 * Maps to: openbb_fmp/models/crypto_search.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPCryptoSearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCryptoSearchQueryParams = z.infer<typeof FMPCryptoSearchQueryParamsSchema>;
export declare const FMPCryptoSearchDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCryptoSearchData = z.infer<typeof FMPCryptoSearchDataSchema>;
export declare class FMPCryptoSearchFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPCryptoSearchQueryParams;
    static extractData(query: FMPCryptoSearchQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPCryptoSearchQueryParams, data: Record<string, unknown>[]): FMPCryptoSearchData[];
}

/**
 * CBOE Index Search Model.
 * Maps to: openbb_cboe/models/index_search.py
 *
 * Fetches the CBOE index directory and filters by query.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const CboeIndexSearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>;
export type CboeIndexSearchQueryParams = z.infer<typeof CboeIndexSearchQueryParamsSchema>;
export declare const CboeIndexSearchDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodString;
} & {
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    time_zone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodString;
} & {
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    time_zone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodString;
} & {
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    time_zone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type CboeIndexSearchData = z.infer<typeof CboeIndexSearchDataSchema>;
export declare class CboeIndexSearchFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): CboeIndexSearchQueryParams;
    static extractData(query: CboeIndexSearchQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: CboeIndexSearchQueryParams, data: Record<string, unknown>[]): CboeIndexSearchData[];
}

/**
 * BLS Search Fetcher.
 * BLS doesn't have a search API, so we provide a curated list of common series.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const BLSBlsSearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, z.ZodTypeAny, "passthrough">>;
export type BLSBlsSearchQueryParams = z.infer<typeof BLSBlsSearchQueryParamsSchema>;
export declare class BLSBlsSearchFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): BLSBlsSearchQueryParams;
    static extractData(query: BLSBlsSearchQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: BLSBlsSearchQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        series_id: z.ZodString;
        title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        survey_abbreviation: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[];
}

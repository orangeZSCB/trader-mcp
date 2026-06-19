/**
 * Federal Reserve FRED Search Fetcher.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedFredSearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, z.ZodTypeAny, "passthrough">>;
export type FedFredSearchQueryParams = z.infer<typeof FedFredSearchQueryParamsSchema>;
export declare class FedFredSearchFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedFredSearchQueryParams;
    static extractData(query: FedFredSearchQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedFredSearchQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        series_id: z.ZodString;
        title: z.ZodString;
        frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        units: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        seasonal_adjustment: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        notes: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[];
}

/**
 * Federal Reserve FRED Release Table Fetcher.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedFredReleaseTableQueryParamsSchema: z.ZodObject<{
    release_id: z.ZodString;
    element_id: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    release_id: z.ZodString;
    element_id: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    release_id: z.ZodString;
    element_id: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedFredReleaseTableQueryParams = z.infer<typeof FedFredReleaseTableQueryParamsSchema>;
export declare class FedFredReleaseTableFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedFredReleaseTableQueryParams;
    static extractData(query: FedFredReleaseTableQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedFredReleaseTableQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        element_id: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        level: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        value: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[];
}

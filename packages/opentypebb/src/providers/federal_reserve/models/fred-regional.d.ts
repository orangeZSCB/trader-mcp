/**
 * Federal Reserve FRED Regional (GeoFRED) Fetcher.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedFredRegionalQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
    region_type: z.ZodDefault<z.ZodString>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    region_type: z.ZodDefault<z.ZodString>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    region_type: z.ZodDefault<z.ZodString>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedFredRegionalQueryParams = z.infer<typeof FedFredRegionalQueryParamsSchema>;
export declare class FedFredRegionalFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedFredRegionalQueryParams;
    static extractData(query: FedFredRegionalQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedFredRegionalQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        region: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        code: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

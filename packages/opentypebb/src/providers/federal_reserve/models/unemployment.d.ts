/**
 * Federal Reserve Unemployment Fetcher.
 * Uses FRED series: UNRATE (U-3), U6RATE (U-6).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedUnemploymentQueryParamsSchema: z.ZodObject<{
    country: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedUnemploymentQueryParams = z.infer<typeof FedUnemploymentQueryParamsSchema>;
export declare class FedUnemploymentFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedUnemploymentQueryParams;
    static extractData(query: FedUnemploymentQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FedUnemploymentQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

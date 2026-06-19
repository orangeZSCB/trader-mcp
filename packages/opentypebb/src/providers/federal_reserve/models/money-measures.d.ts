/**
 * Federal Reserve Money Measures Fetcher.
 * Uses FRED series: M1SL (M1), M2SL (M2) — seasonally adjusted.
 * Or: M1NS, M2NS — not adjusted.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedMoneyMeasuresQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    adjusted: z.ZodDefault<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    adjusted: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    adjusted: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>;
export type FedMoneyMeasuresQueryParams = z.infer<typeof FedMoneyMeasuresQueryParamsSchema>;
export declare class FedMoneyMeasuresFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedMoneyMeasuresQueryParams;
    static extractData(query: FedMoneyMeasuresQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedMoneyMeasuresQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        m1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        m2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

/**
 * FMP Historical EPS Model.
 * Maps to: openbb_fmp/models/historical_eps.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPHistoricalEpsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    limit: number | null;
}, {
    symbol: string;
    limit?: number | null | undefined;
}>;
export type FMPHistoricalEpsQueryParams = z.infer<typeof FMPHistoricalEpsQueryParamsSchema>;
export declare const FMPHistoricalEpsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    date: z.ZodString;
    eps_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_estimated: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    revenue_estimated: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    date: z.ZodString;
    eps_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_estimated: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    revenue_estimated: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    date: z.ZodString;
    eps_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_estimated: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    revenue_estimated: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPHistoricalEpsData = z.infer<typeof FMPHistoricalEpsDataSchema>;
export declare class FMPHistoricalEpsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPHistoricalEpsQueryParams;
    static extractData(query: FMPHistoricalEpsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPHistoricalEpsQueryParams, data: Record<string, unknown>[]): FMPHistoricalEpsData[];
}

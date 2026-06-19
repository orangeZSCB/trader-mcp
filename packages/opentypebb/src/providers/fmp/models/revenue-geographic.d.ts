/**
 * FMP Revenue Geographic Model.
 * Maps to: openbb_fmp/models/revenue_geographic.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPRevenueGeographicQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
} & {
    period: z.ZodDefault<z.ZodEnum<["quarter", "annual"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
} & {
    period: z.ZodDefault<z.ZodEnum<["quarter", "annual"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
} & {
    period: z.ZodDefault<z.ZodEnum<["quarter", "annual"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPRevenueGeographicQueryParams = z.infer<typeof FMPRevenueGeographicQueryParamsSchema>;
export declare const FMPRevenueGeographicDataSchema: z.ZodObject<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    region: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    revenue: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    region: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    revenue: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    region: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    revenue: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type FMPRevenueGeographicData = z.infer<typeof FMPRevenueGeographicDataSchema>;
export declare class FMPRevenueGeographicFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPRevenueGeographicQueryParams;
    static extractData(query: FMPRevenueGeographicQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPRevenueGeographicQueryParams, data: Record<string, unknown>[]): FMPRevenueGeographicData[];
}

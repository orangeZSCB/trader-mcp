/**
 * FMP Revenue By Business Line Model.
 * Maps to: openbb_fmp/models/revenue_business_line.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPRevenueBusinessLineQueryParamsSchema: z.ZodObject<{
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
export type FMPRevenueBusinessLineQueryParams = z.infer<typeof FMPRevenueBusinessLineQueryParamsSchema>;
export declare const FMPRevenueBusinessLineDataSchema: z.ZodObject<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    business_line: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    revenue: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    business_line: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    revenue: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    business_line: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    revenue: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type FMPRevenueBusinessLineData = z.infer<typeof FMPRevenueBusinessLineDataSchema>;
export declare class FMPRevenueBusinessLineFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPRevenueBusinessLineQueryParams;
    static extractData(query: FMPRevenueBusinessLineQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPRevenueBusinessLineQueryParams, data: Record<string, unknown>[]): FMPRevenueBusinessLineData[];
}

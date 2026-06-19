/**
 * Revenue by Geographic Segments Standard Model.
 * Maps to: openbb_core/provider/standard_models/revenue_geographic.py
 */
import { z } from 'zod';
export declare const RevenueGeographicQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type RevenueGeographicQueryParams = z.infer<typeof RevenueGeographicQueryParamsSchema>;
export declare const RevenueGeographicDataSchema: z.ZodObject<{
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
export type RevenueGeographicData = z.infer<typeof RevenueGeographicDataSchema>;

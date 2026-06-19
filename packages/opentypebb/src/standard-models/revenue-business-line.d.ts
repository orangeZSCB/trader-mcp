/**
 * Revenue By Business Line Standard Model.
 * Maps to: openbb_core/provider/standard_models/revenue_business_line.py
 */
import { z } from 'zod';
export declare const RevenueBusinessLineQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type RevenueBusinessLineQueryParams = z.infer<typeof RevenueBusinessLineQueryParamsSchema>;
export declare const RevenueBusinessLineDataSchema: z.ZodObject<{
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
export type RevenueBusinessLineData = z.infer<typeof RevenueBusinessLineDataSchema>;

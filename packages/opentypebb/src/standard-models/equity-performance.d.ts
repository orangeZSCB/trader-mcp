/**
 * Equity Performance Standard Model.
 * Maps to: openbb_core/provider/standard_models/equity_performance.py
 */
import { z } from 'zod';
export declare const EquityPerformanceQueryParamsSchema: z.ZodObject<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type EquityPerformanceQueryParams = z.infer<typeof EquityPerformanceQueryParamsSchema>;
export declare const EquityPerformanceDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type EquityPerformanceData = z.infer<typeof EquityPerformanceDataSchema>;

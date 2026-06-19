/**
 * Recent Performance Standard Model.
 * Maps to: openbb_core/provider/standard_models/recent_performance.py
 */
import { z } from 'zod';
export declare const RecentPerformanceQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type RecentPerformanceQueryParams = z.infer<typeof RecentPerformanceQueryParamsSchema>;
export declare const RecentPerformanceDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    one_day: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    wtd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    one_week: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mtd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    one_month: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    qtd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    three_month: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    six_month: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ytd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    one_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    two_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    three_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    four_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    five_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ten_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    max: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    one_day: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    wtd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    one_week: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mtd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    one_month: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    qtd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    three_month: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    six_month: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ytd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    one_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    two_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    three_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    four_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    five_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ten_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    max: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    one_day: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    wtd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    one_week: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mtd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    one_month: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    qtd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    three_month: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    six_month: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ytd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    one_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    two_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    three_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    four_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    five_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ten_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    max: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type RecentPerformanceData = z.infer<typeof RecentPerformanceDataSchema>;

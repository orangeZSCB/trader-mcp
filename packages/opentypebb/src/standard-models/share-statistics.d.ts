/**
 * Share Statistics Standard Model.
 * Maps to: standard_models/share_statistics.py
 */
import { z } from 'zod';
export declare const ShareStatisticsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type ShareStatisticsQueryParams = z.infer<typeof ShareStatisticsQueryParamsSchema>;
export declare const ShareStatisticsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    free_float: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    float_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    outstanding_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    free_float: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    float_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    outstanding_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    free_float: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    float_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    outstanding_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type ShareStatisticsData = z.infer<typeof ShareStatisticsDataSchema>;

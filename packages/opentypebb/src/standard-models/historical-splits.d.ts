/**
 * Historical Splits Standard Model.
 * Maps to: standard_models/historical_splits.py
 */
import { z } from 'zod';
export declare const HistoricalSplitsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type HistoricalSplitsQueryParams = z.infer<typeof HistoricalSplitsQueryParamsSchema>;
export declare const HistoricalSplitsDataSchema: z.ZodObject<{
    date: z.ZodString;
    numerator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    denominator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    split_ratio: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    numerator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    denominator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    split_ratio: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    numerator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    denominator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    split_ratio: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type HistoricalSplitsData = z.infer<typeof HistoricalSplitsDataSchema>;

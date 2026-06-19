/**
 * FRED Series Standard Model.
 * Maps to: openbb_core/provider/standard_models/fred_series.py
 */
import { z } from 'zod';
export declare const FredSeriesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FredSeriesQueryParams = z.infer<typeof FredSeriesQueryParamsSchema>;
export declare const FredSeriesDataSchema: z.ZodObject<{
    date: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type FredSeriesData = z.infer<typeof FredSeriesDataSchema>;

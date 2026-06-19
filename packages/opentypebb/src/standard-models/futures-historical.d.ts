/**
 * Futures Historical Price Standard Model.
 * Maps to: openbb_core/provider/standard_models/futures_historical.py
 */
import { z } from 'zod';
export declare const FuturesHistoricalQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiration: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiration: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiration: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FuturesHistoricalQueryParams = z.infer<typeof FuturesHistoricalQueryParamsSchema>;
export declare const FuturesHistoricalDataSchema: z.ZodObject<{
    date: z.ZodString;
    open: z.ZodNumber;
    high: z.ZodNumber;
    low: z.ZodNumber;
    close: z.ZodNumber;
    volume: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    open: z.ZodNumber;
    high: z.ZodNumber;
    low: z.ZodNumber;
    close: z.ZodNumber;
    volume: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    open: z.ZodNumber;
    high: z.ZodNumber;
    low: z.ZodNumber;
    close: z.ZodNumber;
    volume: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type FuturesHistoricalData = z.infer<typeof FuturesHistoricalDataSchema>;

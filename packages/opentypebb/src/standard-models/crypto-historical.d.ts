/**
 * Crypto Historical Price Standard Model.
 * Maps to: openbb_core/provider/standard_models/crypto_historical.py
 */
import { z } from 'zod';
export declare const CryptoHistoricalQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type CryptoHistoricalQueryParams = z.infer<typeof CryptoHistoricalQueryParamsSchema>;
export declare const CryptoHistoricalDataSchema: z.ZodObject<{
    date: z.ZodString;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vwap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vwap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vwap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type CryptoHistoricalData = z.infer<typeof CryptoHistoricalDataSchema>;

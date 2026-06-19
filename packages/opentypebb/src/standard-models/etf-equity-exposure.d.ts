/**
 * ETF Equity Exposure Standard Model.
 * Maps to: standard_models/etf_equity_exposure.py
 */
import { z } from 'zod';
export declare const EtfEquityExposureQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type EtfEquityExposureQueryParams = z.infer<typeof EtfEquityExposureQueryParamsSchema>;
export declare const EtfEquityExposureDataSchema: z.ZodObject<{
    equity_symbol: z.ZodString;
    etf_symbol: z.ZodString;
    weight: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    equity_symbol: z.ZodString;
    etf_symbol: z.ZodString;
    weight: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    equity_symbol: z.ZodString;
    etf_symbol: z.ZodString;
    weight: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type EtfEquityExposureData = z.infer<typeof EtfEquityExposureDataSchema>;

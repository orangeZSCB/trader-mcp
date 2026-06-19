/**
 * Historical Market Cap Standard Model.
 * Maps to: openbb_core/provider/standard_models/historical_market_cap.py
 */
import { z } from 'zod';
export declare const HistoricalMarketCapQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type HistoricalMarketCapQueryParams = z.infer<typeof HistoricalMarketCapQueryParamsSchema>;
export declare const HistoricalMarketCapDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    date: z.ZodString;
    market_cap: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    date: z.ZodString;
    market_cap: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    date: z.ZodString;
    market_cap: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type HistoricalMarketCapData = z.infer<typeof HistoricalMarketCapDataSchema>;

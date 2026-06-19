/**
 * Equity Screener Standard Model.
 * Maps to: standard_models/equity_screener.py
 */
import { z } from 'zod';
export declare const EquityScreenerQueryParamsSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export type EquityScreenerQueryParams = z.infer<typeof EquityScreenerQueryParamsSchema>;
export declare const EquityScreenerDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type EquityScreenerData = z.infer<typeof EquityScreenerDataSchema>;

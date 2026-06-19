/**
 * Historical Dividends Standard Model.
 * Maps to: standard_models/historical_dividends.py
 */
import { z } from 'zod';
export declare const HistoricalDividendsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    start_date: string | null;
    end_date: string | null;
}, {
    symbol: string;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
}>;
export type HistoricalDividendsQueryParams = z.infer<typeof HistoricalDividendsQueryParamsSchema>;
export declare const HistoricalDividendsDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ex_dividend_date: z.ZodString;
    amount: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ex_dividend_date: z.ZodString;
    amount: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ex_dividend_date: z.ZodString;
    amount: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type HistoricalDividendsData = z.infer<typeof HistoricalDividendsDataSchema>;

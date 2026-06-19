/**
 * Historical EPS Standard Model.
 * Maps to: standard_models/historical_eps.py
 */
import { z } from 'zod';
export declare const HistoricalEpsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type HistoricalEpsQueryParams = z.infer<typeof HistoricalEpsQueryParamsSchema>;
export declare const HistoricalEpsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    date: z.ZodString;
    eps_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_estimated: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    date: z.ZodString;
    eps_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_estimated: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    date: z.ZodString;
    eps_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_estimated: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type HistoricalEpsData = z.infer<typeof HistoricalEpsDataSchema>;

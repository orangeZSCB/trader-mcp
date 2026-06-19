/**
 * Equity Search Standard Model.
 * Maps to: openbb_core/provider/standard_models/equity_search.py
 */
import { z } from 'zod';
export declare const EquitySearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>;
export type EquitySearchQueryParams = z.infer<typeof EquitySearchQueryParamsSchema>;
export declare const EquitySearchDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type EquitySearchData = z.infer<typeof EquitySearchDataSchema>;

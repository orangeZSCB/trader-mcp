/**
 * ETF Search Standard Model.
 * Maps to: standard_models/etf_search.py
 */
import { z } from 'zod';
export declare const EtfSearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    query: string | null;
}, {
    query?: string | null | undefined;
}>;
export type EtfSearchQueryParams = z.infer<typeof EtfSearchQueryParamsSchema>;
export declare const EtfSearchDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type EtfSearchData = z.infer<typeof EtfSearchDataSchema>;

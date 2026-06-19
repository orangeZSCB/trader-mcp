/**
 * Index Search Standard Model.
 * Maps to: openbb_core/provider/standard_models/index_search.py
 */
import { z } from 'zod';
export declare const IndexSearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodDefault<z.ZodString>;
    is_symbol: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>;
export type IndexSearchQueryParams = z.infer<typeof IndexSearchQueryParamsSchema>;
export declare const IndexSearchDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type IndexSearchData = z.infer<typeof IndexSearchDataSchema>;

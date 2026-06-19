/**
 * Index Constituents Standard Model.
 * Maps to: openbb_core/provider/standard_models/index_constituents.py
 */
import { z } from 'zod';
export declare const IndexConstituentsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type IndexConstituentsQueryParams = z.infer<typeof IndexConstituentsQueryParamsSchema>;
export declare const IndexConstituentsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type IndexConstituentsData = z.infer<typeof IndexConstituentsDataSchema>;

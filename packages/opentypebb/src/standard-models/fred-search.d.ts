/**
 * FRED Search Standard Model.
 * Maps to: openbb_core/provider/standard_models/fred_search.py
 */
import { z } from 'zod';
export declare const FredSearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, z.ZodTypeAny, "passthrough">>;
export type FredSearchQueryParams = z.infer<typeof FredSearchQueryParamsSchema>;
export declare const FredSearchDataSchema: z.ZodObject<{
    series_id: z.ZodString;
    title: z.ZodString;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    units: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    seasonal_adjustment: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    notes: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    series_id: z.ZodString;
    title: z.ZodString;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    units: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    seasonal_adjustment: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    notes: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    series_id: z.ZodString;
    title: z.ZodString;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    units: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    seasonal_adjustment: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    notes: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FredSearchData = z.infer<typeof FredSearchDataSchema>;

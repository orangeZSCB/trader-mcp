/**
 * BLS Search Standard Model.
 */
import { z } from 'zod';
export declare const BlsSearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, z.ZodTypeAny, "passthrough">>;
export type BlsSearchQueryParams = z.infer<typeof BlsSearchQueryParamsSchema>;
export declare const BlsSearchDataSchema: z.ZodObject<{
    series_id: z.ZodString;
    title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    survey_abbreviation: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    series_id: z.ZodString;
    title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    survey_abbreviation: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    series_id: z.ZodString;
    title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    survey_abbreviation: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type BlsSearchData = z.infer<typeof BlsSearchDataSchema>;

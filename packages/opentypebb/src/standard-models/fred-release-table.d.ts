/**
 * FRED Release Table Standard Model.
 * Maps to: openbb_core/provider/standard_models/fred_release_table.py
 */
import { z } from 'zod';
export declare const FredReleaseTableQueryParamsSchema: z.ZodObject<{
    release_id: z.ZodString;
    element_id: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    release_id: z.ZodString;
    element_id: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    release_id: z.ZodString;
    element_id: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FredReleaseTableQueryParams = z.infer<typeof FredReleaseTableQueryParamsSchema>;
export declare const FredReleaseTableDataSchema: z.ZodObject<{
    element_id: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    level: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    element_id: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    level: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    element_id: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    level: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FredReleaseTableData = z.infer<typeof FredReleaseTableDataSchema>;

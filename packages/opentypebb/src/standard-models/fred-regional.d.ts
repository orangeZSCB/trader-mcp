/**
 * FRED Regional / GeoFRED Standard Model.
 * Maps to: openbb_core/provider/standard_models/fred_regional.py
 */
import { z } from 'zod';
export declare const FredRegionalQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
    region_type: z.ZodDefault<z.ZodString>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    region_type: z.ZodDefault<z.ZodString>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    region_type: z.ZodDefault<z.ZodString>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FredRegionalQueryParams = z.infer<typeof FredRegionalQueryParamsSchema>;
export declare const FredRegionalDataSchema: z.ZodObject<{
    date: z.ZodString;
    region: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    code: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    region: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    code: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    region: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    code: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FredRegionalData = z.infer<typeof FredRegionalDataSchema>;

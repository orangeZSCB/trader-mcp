/**
 * Unemployment Standard Model.
 * Maps to: openbb_core/provider/standard_models/unemployment.py
 */
import { z } from 'zod';
export declare const UnemploymentQueryParamsSchema: z.ZodObject<{
    country: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type UnemploymentQueryParams = z.infer<typeof UnemploymentQueryParamsSchema>;
export declare const UnemploymentDataSchema: z.ZodObject<{
    date: z.ZodString;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type UnemploymentData = z.infer<typeof UnemploymentDataSchema>;

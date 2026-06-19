/**
 * Money Measures Standard Model.
 * Maps to: openbb_core/provider/standard_models/money_measures.py
 */
import { z } from 'zod';
export declare const MoneyMeasuresQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    adjusted: z.ZodDefault<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    adjusted: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    adjusted: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>;
export type MoneyMeasuresQueryParams = z.infer<typeof MoneyMeasuresQueryParamsSchema>;
export declare const MoneyMeasuresDataSchema: z.ZodObject<{
    date: z.ZodString;
    m1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    m2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    m1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    m2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    m1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    m2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type MoneyMeasuresData = z.infer<typeof MoneyMeasuresDataSchema>;

/**
 * Share Price Index Standard Model.
 */
import { z } from 'zod';
export declare const SharePriceIndexQueryParamsSchema: z.ZodObject<{
    country: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type SharePriceIndexQueryParams = z.infer<typeof SharePriceIndexQueryParamsSchema>;
export declare const SharePriceIndexDataSchema: z.ZodObject<{
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
export type SharePriceIndexData = z.infer<typeof SharePriceIndexDataSchema>;

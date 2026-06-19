/**
 * Consumer Price Index Standard Model.
 * Maps to: openbb_core/provider/standard_models/consumer_price_index.py
 */
import { z } from 'zod';
export declare const ConsumerPriceIndexQueryParamsSchema: z.ZodObject<{
    country: z.ZodDefault<z.ZodString>;
    transform: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
    harmonized: z.ZodDefault<z.ZodBoolean>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodDefault<z.ZodString>;
    transform: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
    harmonized: z.ZodDefault<z.ZodBoolean>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodDefault<z.ZodString>;
    transform: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
    harmonized: z.ZodDefault<z.ZodBoolean>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type ConsumerPriceIndexQueryParams = z.infer<typeof ConsumerPriceIndexQueryParamsSchema>;
export declare const ConsumerPriceIndexDataSchema: z.ZodObject<{
    date: z.ZodString;
    country: z.ZodString;
    value: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    country: z.ZodString;
    value: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    country: z.ZodString;
    value: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type ConsumerPriceIndexData = z.infer<typeof ConsumerPriceIndexDataSchema>;

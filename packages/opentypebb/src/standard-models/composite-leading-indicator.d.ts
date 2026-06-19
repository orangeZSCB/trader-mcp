/**
 * Composite Leading Indicator Standard Model.
 * Maps to: openbb_core/provider/standard_models/composite_leading_indicator.py
 */
import { z } from 'zod';
export declare const CompositeLeadingIndicatorQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type CompositeLeadingIndicatorQueryParams = z.infer<typeof CompositeLeadingIndicatorQueryParamsSchema>;
export declare const CompositeLeadingIndicatorDataSchema: z.ZodObject<{
    date: z.ZodString;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    country: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    country: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    country: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type CompositeLeadingIndicatorData = z.infer<typeof CompositeLeadingIndicatorDataSchema>;

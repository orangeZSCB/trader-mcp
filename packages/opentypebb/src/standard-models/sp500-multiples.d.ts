/**
 * SP500 Multiples Standard Model.
 * Maps to: openbb_core/provider/standard_models/sp500_multiples.py
 */
import { z } from 'zod';
export declare const SP500MultiplesQueryParamsSchema: z.ZodObject<{
    series_name: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    series_name: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    series_name: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type SP500MultiplesQueryParams = z.infer<typeof SP500MultiplesQueryParamsSchema>;
export declare const SP500MultiplesDataSchema: z.ZodObject<{
    date: z.ZodString;
    name: z.ZodString;
    value: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    name: z.ZodString;
    value: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    name: z.ZodString;
    value: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type SP500MultiplesData = z.infer<typeof SP500MultiplesDataSchema>;

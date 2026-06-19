/**
 * Total Factor Productivity Standard Model.
 * Maps to: openbb_core/provider/standard_models/total_factor_productivity.py
 */
import { z } from 'zod';
export declare const TotalFactorProductivityQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type TotalFactorProductivityQueryParams = z.infer<typeof TotalFactorProductivityQueryParamsSchema>;
export declare const TotalFactorProductivityDataSchema: z.ZodObject<{
    date: z.ZodString;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type TotalFactorProductivityData = z.infer<typeof TotalFactorProductivityDataSchema>;

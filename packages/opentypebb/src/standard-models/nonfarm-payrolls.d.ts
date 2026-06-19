/**
 * Nonfarm Payrolls Standard Model.
 * Maps to: openbb_core/provider/standard_models/nonfarm_payrolls.py
 */
import { z } from 'zod';
export declare const NonfarmPayrollsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type NonfarmPayrollsQueryParams = z.infer<typeof NonfarmPayrollsQueryParamsSchema>;
export declare const NonfarmPayrollsDataSchema: z.ZodObject<{
    date: z.ZodString;
    total_nonfarm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    private_sector: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    government: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    total_nonfarm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    private_sector: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    government: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    total_nonfarm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    private_sector: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    government: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type NonfarmPayrollsData = z.infer<typeof NonfarmPayrollsDataSchema>;

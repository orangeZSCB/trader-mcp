/**
 * Senior Loan Officer Opinion Survey (SLOOS) Standard Model.
 * Maps to: openbb_core/provider/standard_models/sloos.py
 */
import { z } from 'zod';
export declare const SloosQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type SloosQueryParams = z.infer<typeof SloosQueryParamsSchema>;
export declare const SloosDataSchema: z.ZodObject<{
    date: z.ZodString;
    ci_loan_tightening: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    consumer_loan_tightening: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    ci_loan_tightening: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    consumer_loan_tightening: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    ci_loan_tightening: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    consumer_loan_tightening: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type SloosData = z.infer<typeof SloosDataSchema>;

/**
 * Executive Compensation Standard Model.
 * Maps to: standard_models/executive_compensation.py
 */
import { z } from 'zod';
export declare const ExecutiveCompensationQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type ExecutiveCompensationQueryParams = z.infer<typeof ExecutiveCompensationQueryParamsSchema>;
export declare const ExecutiveCompensationDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    report_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    executive: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    salary: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bonus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    stock_award: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    option_award: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    incentive_plan_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    all_other_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    report_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    executive: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    salary: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bonus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    stock_award: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    option_award: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    incentive_plan_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    all_other_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    report_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    executive: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    salary: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bonus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    stock_award: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    option_award: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    incentive_plan_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    all_other_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type ExecutiveCompensationData = z.infer<typeof ExecutiveCompensationDataSchema>;

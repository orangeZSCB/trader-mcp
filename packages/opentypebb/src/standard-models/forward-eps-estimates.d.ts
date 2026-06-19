/**
 * Forward EPS Estimates Standard Model.
 * Maps to: standard_models/forward_eps_estimates.py
 */
import { z } from 'zod';
export declare const ForwardEpsEstimatesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type ForwardEpsEstimatesQueryParams = z.infer<typeof ForwardEpsEstimatesQueryParamsSchema>;
export declare const ForwardEpsEstimatesDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    calendar_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    calendar_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    low_estimate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high_estimate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mean: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    median: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    standard_deviation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_of_analysts: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    calendar_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    calendar_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    low_estimate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high_estimate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mean: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    median: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    standard_deviation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_of_analysts: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    calendar_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    calendar_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    low_estimate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high_estimate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mean: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    median: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    standard_deviation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_of_analysts: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type ForwardEpsEstimatesData = z.infer<typeof ForwardEpsEstimatesDataSchema>;

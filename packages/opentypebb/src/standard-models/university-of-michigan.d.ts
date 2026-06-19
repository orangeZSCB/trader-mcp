/**
 * University of Michigan Consumer Sentiment Standard Model.
 * Maps to: openbb_core/provider/standard_models/university_of_michigan.py
 */
import { z } from 'zod';
export declare const UniversityOfMichiganQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type UniversityOfMichiganQueryParams = z.infer<typeof UniversityOfMichiganQueryParamsSchema>;
export declare const UniversityOfMichiganDataSchema: z.ZodObject<{
    date: z.ZodString;
    consumer_sentiment: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_conditions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    expectations: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    inflation_expectation_1y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    inflation_expectation_5y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    consumer_sentiment: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_conditions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    expectations: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    inflation_expectation_1y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    inflation_expectation_5y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    consumer_sentiment: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_conditions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    expectations: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    inflation_expectation_1y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    inflation_expectation_5y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type UniversityOfMichiganData = z.infer<typeof UniversityOfMichiganDataSchema>;

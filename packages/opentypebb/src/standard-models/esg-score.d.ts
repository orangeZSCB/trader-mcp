/**
 * ESG Score Standard Model.
 * Maps to: openbb_core/provider/standard_models/esg.py
 */
import { z } from 'zod';
export declare const EsgScoreQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type EsgScoreQueryParams = z.infer<typeof EsgScoreQueryParamsSchema>;
export declare const EsgScoreDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    environmental_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    social_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    governance_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    esg_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    environmental_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    social_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    governance_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    esg_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    environmental_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    social_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    governance_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    esg_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type EsgScoreData = z.infer<typeof EsgScoreDataSchema>;

/**
 * Income Statement Growth Standard Model.
 * Maps to: standard_models/income_statement_growth.py
 */
import { z } from 'zod';
export declare const IncomeStatementGrowthQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    limit: number | null;
}, {
    symbol: string;
    limit?: number | null | undefined;
}>;
export type IncomeStatementGrowthQueryParams = z.infer<typeof IncomeStatementGrowthQueryParamsSchema>;
export declare const IncomeStatementGrowthDataSchema: z.ZodObject<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type IncomeStatementGrowthData = z.infer<typeof IncomeStatementGrowthDataSchema>;

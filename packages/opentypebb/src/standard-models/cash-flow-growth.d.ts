/**
 * Cash Flow Statement Growth Standard Model.
 * Maps to: standard_models/cash_flow_growth.py
 */
import { z } from 'zod';
export declare const CashFlowStatementGrowthQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    limit: number | null;
}, {
    symbol: string;
    limit?: number | null | undefined;
}>;
export type CashFlowStatementGrowthQueryParams = z.infer<typeof CashFlowStatementGrowthQueryParamsSchema>;
export declare const CashFlowStatementGrowthDataSchema: z.ZodObject<{
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
export type CashFlowStatementGrowthData = z.infer<typeof CashFlowStatementGrowthDataSchema>;

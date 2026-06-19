/**
 * Analyst Estimates Standard Model.
 * Maps to: standard_models/analyst_estimates.py
 */
import { z } from 'zod';
export declare const AnalystEstimatesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type AnalystEstimatesQueryParams = z.infer<typeof AnalystEstimatesQueryParamsSchema>;
export declare const AnalystEstimatesDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    date: z.ZodString;
    estimated_revenue_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_revenue_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_revenue_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_sga_expense_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_sga_expense_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_sga_expense_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebitda_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebitda_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebitda_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebit_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebit_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebit_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_net_income_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_net_income_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_net_income_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_eps_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_eps_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_eps_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_analyst_estimated_revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_analysts_estimated_eps: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    date: z.ZodString;
    estimated_revenue_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_revenue_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_revenue_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_sga_expense_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_sga_expense_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_sga_expense_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebitda_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebitda_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebitda_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebit_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebit_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebit_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_net_income_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_net_income_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_net_income_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_eps_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_eps_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_eps_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_analyst_estimated_revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_analysts_estimated_eps: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    date: z.ZodString;
    estimated_revenue_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_revenue_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_revenue_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_sga_expense_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_sga_expense_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_sga_expense_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebitda_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebitda_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebitda_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebit_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebit_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_ebit_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_net_income_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_net_income_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_net_income_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_eps_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_eps_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_eps_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_analyst_estimated_revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_analysts_estimated_eps: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type AnalystEstimatesData = z.infer<typeof AnalystEstimatesDataSchema>;

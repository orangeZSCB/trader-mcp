/**
 * FMP Analyst Estimates Model.
 * Maps to: openbb_fmp/models/analyst_estimates.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPAnalystEstimatesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    period: z.ZodDefault<z.ZodEnum<["annual", "quarter"]>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    limit: number | null;
    period: "annual" | "quarter";
}, {
    symbol: string;
    limit?: number | null | undefined;
    period?: "annual" | "quarter" | undefined;
}>;
export type FMPAnalystEstimatesQueryParams = z.infer<typeof FMPAnalystEstimatesQueryParamsSchema>;
export declare const FMPAnalystEstimatesDataSchema: z.ZodObject<{
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
export type FMPAnalystEstimatesData = z.infer<typeof FMPAnalystEstimatesDataSchema>;
export declare class FMPAnalystEstimatesFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPAnalystEstimatesQueryParams;
    static extractData(query: FMPAnalystEstimatesQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPAnalystEstimatesQueryParams, data: Record<string, unknown>[]): FMPAnalystEstimatesData[];
}

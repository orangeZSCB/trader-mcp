/**
 * FMP Income Statement Growth Model.
 * Maps to: openbb_fmp/models/income_statement_growth.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPIncomeStatementGrowthQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    period: z.ZodDefault<z.ZodEnum<["annual", "quarter"]>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    limit: number | null;
    period: "annual" | "quarter";
}, {
    symbol: string;
    limit?: number | null | undefined;
    period?: "annual" | "quarter" | undefined;
}>;
export type FMPIncomeStatementGrowthQueryParams = z.infer<typeof FMPIncomeStatementGrowthQueryParamsSchema>;
export declare const FMPIncomeStatementGrowthDataSchema: z.ZodObject<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reported_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    growth_revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_cost_of_revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_gross_profit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_gross_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_general_and_admin_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_research_and_development_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_selling_and_marketing_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_operating_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_cost_and_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_depreciation_and_amortization: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_interest_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_interest_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_interest_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_ebit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_ebitda: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_operating_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_non_operating_income_excluding_interest: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_total_other_income_expenses_net: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_adjustments_to_net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_income_deductions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_income_before_tax: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_income_tax_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_income_from_continuing_operations: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_consolidated_net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_basic_earings_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_diluted_earnings_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_weighted_average_basic_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_weighted_average_diluted_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reported_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    growth_revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_cost_of_revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_gross_profit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_gross_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_general_and_admin_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_research_and_development_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_selling_and_marketing_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_operating_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_cost_and_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_depreciation_and_amortization: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_interest_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_interest_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_interest_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_ebit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_ebitda: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_operating_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_non_operating_income_excluding_interest: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_total_other_income_expenses_net: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_adjustments_to_net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_income_deductions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_income_before_tax: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_income_tax_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_income_from_continuing_operations: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_consolidated_net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_basic_earings_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_diluted_earnings_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_weighted_average_basic_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_weighted_average_diluted_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reported_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    growth_revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_cost_of_revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_gross_profit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_gross_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_general_and_admin_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_research_and_development_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_selling_and_marketing_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_operating_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_cost_and_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_depreciation_and_amortization: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_interest_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_interest_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_interest_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_ebit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_ebitda: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_operating_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_non_operating_income_excluding_interest: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_total_other_income_expenses_net: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_adjustments_to_net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_income_deductions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_income_before_tax: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_income_tax_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_income_from_continuing_operations: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_consolidated_net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_basic_earings_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_diluted_earnings_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_weighted_average_basic_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_weighted_average_diluted_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPIncomeStatementGrowthData = z.infer<typeof FMPIncomeStatementGrowthDataSchema>;
export declare class FMPIncomeStatementGrowthFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPIncomeStatementGrowthQueryParams;
    static extractData(query: FMPIncomeStatementGrowthQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPIncomeStatementGrowthQueryParams, data: Record<string, unknown>[]): FMPIncomeStatementGrowthData[];
}

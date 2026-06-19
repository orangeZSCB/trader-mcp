/**
 * FMP Income Statement Model.
 * Maps to: openbb_fmp/models/income_statement.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPIncomeStatementQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    period: z.ZodDefault<z.ZodEnum<["q1", "q2", "q3", "q4", "fy", "ttm", "annual", "quarter"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    period: z.ZodDefault<z.ZodEnum<["q1", "q2", "q3", "q4", "fy", "ttm", "annual", "quarter"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    period: z.ZodDefault<z.ZodEnum<["q1", "q2", "q3", "q4", "fy", "ttm", "annual", "quarter"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPIncomeStatementQueryParams = z.infer<typeof FMPIncomeStatementQueryParamsSchema>;
export declare const FMPIncomeStatementDataSchema: z.ZodObject<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reported_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cost_of_revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gross_profit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    general_and_admin_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    research_and_development_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    selling_and_marketing_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    selling_general_and_admin_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    other_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_operating_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cost_and_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    interest_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_interest_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    depreciation_and_amortization: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ebitda: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_operating_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_other_income_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_pre_tax_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    income_tax_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    consolidated_net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    basic_earnings_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    diluted_earnings_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    weighted_average_basic_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    weighted_average_diluted_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reported_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cost_of_revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gross_profit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    general_and_admin_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    research_and_development_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    selling_and_marketing_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    selling_general_and_admin_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    other_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_operating_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cost_and_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    interest_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_interest_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    depreciation_and_amortization: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ebitda: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_operating_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_other_income_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_pre_tax_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    income_tax_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    consolidated_net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    basic_earnings_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    diluted_earnings_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    weighted_average_basic_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    weighted_average_diluted_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reported_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cost_of_revenue: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gross_profit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    general_and_admin_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    research_and_development_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    selling_and_marketing_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    selling_general_and_admin_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    other_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_operating_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cost_and_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    interest_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_interest_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    depreciation_and_amortization: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ebitda: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_operating_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_other_income_expenses: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_pre_tax_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    income_tax_expense: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    consolidated_net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    basic_earnings_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    diluted_earnings_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    weighted_average_basic_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    weighted_average_diluted_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPIncomeStatementData = z.infer<typeof FMPIncomeStatementDataSchema>;
export declare class FMPIncomeStatementFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPIncomeStatementQueryParams;
    static extractData(query: FMPIncomeStatementQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPIncomeStatementQueryParams, data: Record<string, unknown>[]): FMPIncomeStatementData[];
}

/**
 * FMP Cash Flow Statement Growth Model.
 * Maps to: openbb_fmp/models/cash_flow_growth.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPCashFlowStatementGrowthQueryParamsSchema: z.ZodObject<{
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
export type FMPCashFlowStatementGrowthQueryParams = z.infer<typeof FMPCashFlowStatementGrowthQueryParamsSchema>;
export declare const FMPCashFlowStatementGrowthDataSchema: z.ZodObject<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reported_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    growth_net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_depreciation_and_amortization: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_deferred_income_tax: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_stock_based_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_change_in_working_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_account_receivables: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_inventory: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_account_payable: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_working_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_non_cash_items: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_cash_from_operating_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_purchase_of_property_plant_and_equipment: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_acquisitions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_purchase_of_investment_securities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_sale_and_maturity_of_investments: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_investing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_cash_from_investing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_short_term_net_debt_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_long_term_net_debt_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_debt_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_repayment_of_debt: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_common_equity_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_common_equity_repurchased: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_equity_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_dividends_paid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_preferred_dividends_paid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_financing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_cash_from_financing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_effect_of_exchange_rate_changes_on_cash: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_change_in_cash_and_equivalents: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_cash_at_beginning_of_period: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_cash_at_end_of_period: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_operating_cash_flow: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_capital_expenditure: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_income_taxes_paid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_interest_paid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_free_cash_flow: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reported_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    growth_net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_depreciation_and_amortization: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_deferred_income_tax: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_stock_based_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_change_in_working_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_account_receivables: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_inventory: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_account_payable: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_working_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_non_cash_items: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_cash_from_operating_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_purchase_of_property_plant_and_equipment: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_acquisitions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_purchase_of_investment_securities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_sale_and_maturity_of_investments: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_investing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_cash_from_investing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_short_term_net_debt_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_long_term_net_debt_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_debt_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_repayment_of_debt: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_common_equity_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_common_equity_repurchased: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_equity_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_dividends_paid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_preferred_dividends_paid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_financing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_cash_from_financing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_effect_of_exchange_rate_changes_on_cash: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_change_in_cash_and_equivalents: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_cash_at_beginning_of_period: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_cash_at_end_of_period: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_operating_cash_flow: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_capital_expenditure: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_income_taxes_paid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_interest_paid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_free_cash_flow: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reported_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    growth_net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_depreciation_and_amortization: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_deferred_income_tax: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_stock_based_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_change_in_working_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_account_receivables: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_inventory: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_account_payable: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_working_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_non_cash_items: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_cash_from_operating_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_purchase_of_property_plant_and_equipment: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_acquisitions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_purchase_of_investment_securities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_sale_and_maturity_of_investments: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_investing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_cash_from_investing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_short_term_net_debt_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_long_term_net_debt_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_debt_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_repayment_of_debt: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_common_equity_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_common_equity_repurchased: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_equity_issuance: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_dividends_paid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_preferred_dividends_paid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_other_financing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_cash_from_financing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_effect_of_exchange_rate_changes_on_cash: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_net_change_in_cash_and_equivalents: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_cash_at_beginning_of_period: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_cash_at_end_of_period: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_operating_cash_flow: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_capital_expenditure: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_income_taxes_paid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_interest_paid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    growth_free_cash_flow: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCashFlowStatementGrowthData = z.infer<typeof FMPCashFlowStatementGrowthDataSchema>;
export declare class FMPCashFlowStatementGrowthFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPCashFlowStatementGrowthQueryParams;
    static extractData(query: FMPCashFlowStatementGrowthQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPCashFlowStatementGrowthQueryParams, data: Record<string, unknown>[]): FMPCashFlowStatementGrowthData[];
}

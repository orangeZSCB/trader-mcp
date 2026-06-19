/**
 * FMP Cash Flow Statement Model.
 * Maps to: openbb_fmp/models/cash_flow.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPCashFlowStatementQueryParamsSchema: z.ZodObject<{
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
export type FMPCashFlowStatementQueryParams = z.infer<typeof FMPCashFlowStatementQueryParamsSchema>;
export declare const FMPCashFlowStatementDataSchema: z.ZodObject<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reported_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    depreciation_and_amortization: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    deferred_income_tax: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    stock_based_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_working_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_account_receivables: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_inventory: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_account_payable: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_other_working_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_other_non_cash_items: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_cash_from_operating_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    purchase_of_property_plant_and_equipment: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    acquisitions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    purchase_of_investment_securities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    sale_and_maturity_of_investments: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    other_investing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_cash_from_investing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    repayment_of_debt: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    issuance_of_common_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    repurchase_of_common_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    payment_of_dividends: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    other_financing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_cash_from_financing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    effect_of_exchange_rate_changes_on_cash: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_change_in_cash_and_equivalents: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cash_at_beginning_of_period: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cash_at_end_of_period: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    operating_cash_flow: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    capital_expenditure: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    free_cash_flow: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reported_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    depreciation_and_amortization: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    deferred_income_tax: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    stock_based_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_working_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_account_receivables: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_inventory: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_account_payable: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_other_working_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_other_non_cash_items: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_cash_from_operating_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    purchase_of_property_plant_and_equipment: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    acquisitions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    purchase_of_investment_securities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    sale_and_maturity_of_investments: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    other_investing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_cash_from_investing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    repayment_of_debt: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    issuance_of_common_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    repurchase_of_common_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    payment_of_dividends: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    other_financing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_cash_from_financing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    effect_of_exchange_rate_changes_on_cash: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_change_in_cash_and_equivalents: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cash_at_beginning_of_period: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cash_at_end_of_period: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    operating_cash_flow: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    capital_expenditure: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    free_cash_flow: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reported_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    net_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    depreciation_and_amortization: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    deferred_income_tax: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    stock_based_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_working_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_account_receivables: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_inventory: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_account_payable: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_other_working_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_in_other_non_cash_items: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_cash_from_operating_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    purchase_of_property_plant_and_equipment: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    acquisitions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    purchase_of_investment_securities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    sale_and_maturity_of_investments: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    other_investing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_cash_from_investing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    repayment_of_debt: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    issuance_of_common_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    repurchase_of_common_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    payment_of_dividends: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    other_financing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_cash_from_financing_activities: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    effect_of_exchange_rate_changes_on_cash: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_change_in_cash_and_equivalents: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cash_at_beginning_of_period: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cash_at_end_of_period: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    operating_cash_flow: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    capital_expenditure: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    free_cash_flow: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCashFlowStatementData = z.infer<typeof FMPCashFlowStatementDataSchema>;
export declare class FMPCashFlowStatementFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPCashFlowStatementQueryParams;
    static extractData(query: FMPCashFlowStatementQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPCashFlowStatementQueryParams, data: Record<string, unknown>[]): FMPCashFlowStatementData[];
}

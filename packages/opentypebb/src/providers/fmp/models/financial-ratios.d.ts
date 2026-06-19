/**
 * FMP Financial Ratios Model.
 * Maps to: openbb_fmp/models/financial_ratios.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPFinancialRatiosQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    ttm: z.ZodDefault<z.ZodEnum<["include", "exclude", "only"]>>;
    period: z.ZodDefault<z.ZodEnum<["q1", "q2", "q3", "q4", "fy", "annual", "quarter"]>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    ttm: z.ZodDefault<z.ZodEnum<["include", "exclude", "only"]>>;
    period: z.ZodDefault<z.ZodEnum<["q1", "q2", "q3", "q4", "fy", "annual", "quarter"]>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    ttm: z.ZodDefault<z.ZodEnum<["include", "exclude", "only"]>>;
    period: z.ZodDefault<z.ZodEnum<["q1", "q2", "q3", "q4", "fy", "annual", "quarter"]>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPFinancialRatiosQueryParams = z.infer<typeof FMPFinancialRatiosQueryParamsSchema>;
export declare const FMPFinancialRatiosDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    period_ending: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gross_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    operating_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    debt_to_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    debt_to_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_earnings: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_book: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_sales: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    period_ending: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gross_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    operating_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    debt_to_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    debt_to_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_earnings: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_book: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_sales: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    period_ending: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gross_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    operating_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    debt_to_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    debt_to_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_earnings: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_book: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_sales: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPFinancialRatiosData = z.infer<typeof FMPFinancialRatiosDataSchema>;
export declare class FMPFinancialRatiosFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPFinancialRatiosQueryParams;
    static extractData(query: FMPFinancialRatiosQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPFinancialRatiosQueryParams, data: Record<string, unknown>[]): FMPFinancialRatiosData[];
}

/**
 * YFinance Key Metrics Model.
 * Maps to: openbb_yfinance/models/key_metrics.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceKeyMetricsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceKeyMetricsQueryParams = z.infer<typeof YFinanceKeyMetricsQueryParamsSchema>;
export declare const YFinanceKeyMetricsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    period_ending: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    price_to_earnings: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    forward_pe: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    peg_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    peg_ratio_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ev_to_ebitda: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ev_to_sales: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_sales: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    earnings_growth: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    earnings_growth_quarterly: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_growth: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cash_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    quick_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    debt_to_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gross_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    operating_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ebitda_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield_5y_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    payout_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    book_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_book: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    enterprise_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    overall_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    audit_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    board_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    compensation_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shareholder_rights_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    beta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_return_1y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    period_ending: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    price_to_earnings: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    forward_pe: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    peg_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    peg_ratio_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ev_to_ebitda: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ev_to_sales: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_sales: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    earnings_growth: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    earnings_growth_quarterly: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_growth: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cash_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    quick_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    debt_to_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gross_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    operating_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ebitda_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield_5y_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    payout_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    book_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_book: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    enterprise_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    overall_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    audit_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    board_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    compensation_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shareholder_rights_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    beta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_return_1y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    period_ending: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    price_to_earnings: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    forward_pe: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    peg_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    peg_ratio_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ev_to_ebitda: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ev_to_sales: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_sales: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    earnings_growth: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    earnings_growth_quarterly: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_growth: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cash_per_share: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    quick_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    debt_to_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gross_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    operating_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ebitda_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    net_profit_margin: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield_5y_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    payout_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    book_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_book: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    enterprise_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    overall_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    audit_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    board_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    compensation_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shareholder_rights_risk: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    beta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_return_1y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceKeyMetricsData = z.infer<typeof YFinanceKeyMetricsDataSchema>;
export declare class YFinanceKeyMetricsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceKeyMetricsQueryParams;
    static extractData(query: YFinanceKeyMetricsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFinanceKeyMetricsQueryParams, data: Record<string, unknown>[]): YFinanceKeyMetricsData[];
}

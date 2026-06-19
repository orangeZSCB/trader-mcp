/**
 * Yahoo Finance ETF Info Model.
 * Maps to: openbb_yfinance/models/etf_info.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceEtfInfoQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type YFinanceEtfInfoQueryParams = z.infer<typeof YFinanceEtfInfoQueryParamsSchema>;
export declare const YFinanceEtfInfoDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuer: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    domicile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    website: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    inception_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    fund_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fund_family: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_timezone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    nav_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    trailing_pe: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_rate_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma_50d: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma_200d: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_ytd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_3y_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_5y_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    beta_3y_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_avg_10d: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bid_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuer: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    domicile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    website: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    inception_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    fund_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fund_family: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_timezone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    nav_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    trailing_pe: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_rate_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma_50d: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma_200d: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_ytd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_3y_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_5y_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    beta_3y_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_avg_10d: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bid_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuer: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    domicile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    website: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    inception_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    fund_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fund_family: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_timezone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    nav_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    trailing_pe: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_rate_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma_50d: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma_200d: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_ytd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_3y_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_5y_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    beta_3y_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_avg_10d: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bid_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceEtfInfoData = z.infer<typeof YFinanceEtfInfoDataSchema>;
export declare class YFinanceEtfInfoFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceEtfInfoQueryParams;
    static extractData(query: YFinanceEtfInfoQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: YFinanceEtfInfoQueryParams, data: Record<string, unknown>[]): YFinanceEtfInfoData[];
}

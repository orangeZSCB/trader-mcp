/**
 * Yahoo Finance Undervalued Large Caps Model.
 * Maps to: openbb_yfinance/models/undervalued_large_caps.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFUndervaluedLargeCapsQueryParamsSchema: z.ZodObject<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
} & {
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
} & {
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
} & {
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFUndervaluedLargeCapsQueryParams = z.infer<typeof YFUndervaluedLargeCapsQueryParamsSchema>;
export declare const YFUndervaluedLargeCapsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    avg_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    relative_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    turnover: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dollar_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    previous_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    book_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_book: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    pe_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_timezone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    earnings_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    avg_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    relative_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    turnover: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dollar_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    previous_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    book_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_book: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    pe_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_timezone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    earnings_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    avg_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    relative_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    turnover: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dollar_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    previous_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    book_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_book: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    pe_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_timezone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    earnings_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFUndervaluedLargeCapsData = z.infer<typeof YFUndervaluedLargeCapsDataSchema>;
export declare class YFUndervaluedLargeCapsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): YFUndervaluedLargeCapsQueryParams;
    static extractData(query: YFUndervaluedLargeCapsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFUndervaluedLargeCapsQueryParams, data: Record<string, unknown>[]): YFUndervaluedLargeCapsData[];
}

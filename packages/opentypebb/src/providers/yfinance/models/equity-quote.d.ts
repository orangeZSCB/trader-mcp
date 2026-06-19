/**
 * YFinance Equity Quote Model.
 * Maps to: openbb_yfinance/models/equity_quote.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceEquityQuoteQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceEquityQuoteQueryParams = z.infer<typeof YFinanceEquityQuoteQueryParamsSchema>;
export declare const YFinanceEquityQuoteDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    asset_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    bid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bid_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_timestamp: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_average: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_average_10d: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    name: string | null;
    close: number | null;
    exchange: string | null;
    currency: string | null;
    volume: number | null;
    open: number | null;
    high: number | null;
    low: number | null;
    change: number | null;
    last_price: number | null;
    market_cap: number | null;
    year_high: number | null;
    year_low: number | null;
    asset_type: string | null;
    bid: number | null;
    bid_size: number | null;
    ask: number | null;
    ask_size: number | null;
    last_size: number | null;
    last_timestamp: string | null;
    prev_close: number | null;
    change_percent: number | null;
    ma50: number | null;
    ma200: number | null;
    volume_average: number | null;
    volume_average_10d: number | null;
}, {
    symbol: string;
    name?: string | null | undefined;
    close?: number | null | undefined;
    exchange?: string | null | undefined;
    currency?: string | null | undefined;
    volume?: number | null | undefined;
    open?: number | null | undefined;
    high?: number | null | undefined;
    low?: number | null | undefined;
    change?: number | null | undefined;
    last_price?: number | null | undefined;
    market_cap?: number | null | undefined;
    year_high?: number | null | undefined;
    year_low?: number | null | undefined;
    asset_type?: string | null | undefined;
    bid?: number | null | undefined;
    bid_size?: number | null | undefined;
    ask?: number | null | undefined;
    ask_size?: number | null | undefined;
    last_size?: number | null | undefined;
    last_timestamp?: string | null | undefined;
    prev_close?: number | null | undefined;
    change_percent?: number | null | undefined;
    ma50?: number | null | undefined;
    ma200?: number | null | undefined;
    volume_average?: number | null | undefined;
    volume_average_10d?: number | null | undefined;
}>;
export type YFinanceEquityQuoteData = z.infer<typeof YFinanceEquityQuoteDataSchema>;
export declare class YFinanceEquityQuoteFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceEquityQuoteQueryParams;
    static extractData(query: YFinanceEquityQuoteQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFinanceEquityQuoteQueryParams, data: Record<string, unknown>[]): YFinanceEquityQuoteData[];
}

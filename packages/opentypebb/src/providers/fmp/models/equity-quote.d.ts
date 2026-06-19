/**
 * FMP Equity Quote Model.
 * Maps to: openbb_fmp/models/equity_quote.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEquityQuoteQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEquityQuoteQueryParams = z.infer<typeof FMPEquityQuoteQueryParamsSchema>;
export declare const FMPEquityQuoteDataSchema: z.ZodObject<{
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
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
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
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
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
}, z.ZodTypeAny, "passthrough">>;
export type FMPEquityQuoteData = z.infer<typeof FMPEquityQuoteDataSchema>;
export declare class FMPEquityQuoteFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEquityQuoteQueryParams;
    static extractData(query: FMPEquityQuoteQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPEquityQuoteQueryParams, data: Record<string, unknown>[]): FMPEquityQuoteData[];
}

/**
 * Yahoo Finance Equity Historical Price Model.
 * Maps to: openbb_yfinance/models/equity_historical.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceEquityHistoricalQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    interval: z.ZodDefault<z.ZodEnum<["1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1W", "1M", "1Q"]>>;
    extended_hours: z.ZodDefault<z.ZodBoolean>;
    include_actions: z.ZodDefault<z.ZodBoolean>;
    adjustment: z.ZodDefault<z.ZodEnum<["splits_only", "splits_and_dividends"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    interval: z.ZodDefault<z.ZodEnum<["1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1W", "1M", "1Q"]>>;
    extended_hours: z.ZodDefault<z.ZodBoolean>;
    include_actions: z.ZodDefault<z.ZodBoolean>;
    adjustment: z.ZodDefault<z.ZodEnum<["splits_only", "splits_and_dividends"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    interval: z.ZodDefault<z.ZodEnum<["1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1W", "1M", "1Q"]>>;
    extended_hours: z.ZodDefault<z.ZodBoolean>;
    include_actions: z.ZodDefault<z.ZodBoolean>;
    adjustment: z.ZodDefault<z.ZodEnum<["splits_only", "splits_and_dividends"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceEquityHistoricalQueryParams = z.infer<typeof YFinanceEquityHistoricalQueryParamsSchema>;
export declare const YFinanceEquityHistoricalDataSchema: z.ZodObject<{
    date: z.ZodString;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vwap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    split_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vwap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    split_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vwap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    split_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceEquityHistoricalData = z.infer<typeof YFinanceEquityHistoricalDataSchema>;
export declare class YFinanceEquityHistoricalFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceEquityHistoricalQueryParams;
    static extractData(query: YFinanceEquityHistoricalQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFinanceEquityHistoricalQueryParams, data: Record<string, unknown>[]): YFinanceEquityHistoricalData[];
}

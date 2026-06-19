/**
 * Yahoo Finance Currency Price Model.
 * Maps to: openbb_yfinance/models/currency_historical.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceCurrencyHistoricalQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    interval: z.ZodDefault<z.ZodEnum<["1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1W", "1M", "1Q"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    interval: z.ZodDefault<z.ZodEnum<["1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1W", "1M", "1Q"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    interval: z.ZodDefault<z.ZodEnum<["1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1W", "1M", "1Q"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceCurrencyHistoricalQueryParams = z.infer<typeof YFinanceCurrencyHistoricalQueryParamsSchema>;
export declare const YFinanceCurrencyHistoricalDataSchema: z.ZodObject<{
    date: z.ZodString;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vwap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vwap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vwap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceCurrencyHistoricalData = z.infer<typeof YFinanceCurrencyHistoricalDataSchema>;
export declare class YFinanceCurrencyHistoricalFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceCurrencyHistoricalQueryParams;
    static extractData(query: YFinanceCurrencyHistoricalQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFinanceCurrencyHistoricalQueryParams, data: Record<string, unknown>[]): YFinanceCurrencyHistoricalData[];
}

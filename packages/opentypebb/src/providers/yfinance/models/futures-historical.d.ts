/**
 * Yahoo Finance Futures Historical Price Model.
 * Maps to: openbb_yfinance/models/futures_historical.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceFuturesHistoricalQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiration: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    interval: z.ZodDefault<z.ZodEnum<["1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1W", "1M", "1Q"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiration: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    interval: z.ZodDefault<z.ZodEnum<["1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1W", "1M", "1Q"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiration: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    interval: z.ZodDefault<z.ZodEnum<["1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1W", "1M", "1Q"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceFuturesHistoricalQueryParams = z.infer<typeof YFinanceFuturesHistoricalQueryParamsSchema>;
export declare const YFinanceFuturesHistoricalDataSchema: z.ZodObject<{
    date: z.ZodString;
    open: z.ZodNumber;
    high: z.ZodNumber;
    low: z.ZodNumber;
    close: z.ZodNumber;
    volume: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    open: z.ZodNumber;
    high: z.ZodNumber;
    low: z.ZodNumber;
    close: z.ZodNumber;
    volume: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    open: z.ZodNumber;
    high: z.ZodNumber;
    low: z.ZodNumber;
    close: z.ZodNumber;
    volume: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceFuturesHistoricalData = z.infer<typeof YFinanceFuturesHistoricalDataSchema>;
export declare class YFinanceFuturesHistoricalFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceFuturesHistoricalQueryParams;
    static extractData(query: YFinanceFuturesHistoricalQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFinanceFuturesHistoricalQueryParams, data: Record<string, unknown>[]): YFinanceFuturesHistoricalData[];
}

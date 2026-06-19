/**
 * FMP Equity Historical Price Model.
 * Maps to: openbb_fmp/models/equity_historical.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEquityHistoricalQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    interval: z.ZodDefault<z.ZodEnum<["1m", "5m", "15m", "30m", "1h", "4h", "1d"]>>;
    adjustment: z.ZodDefault<z.ZodEnum<["splits_only", "splits_and_dividends", "unadjusted"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    interval: z.ZodDefault<z.ZodEnum<["1m", "5m", "15m", "30m", "1h", "4h", "1d"]>>;
    adjustment: z.ZodDefault<z.ZodEnum<["splits_only", "splits_and_dividends", "unadjusted"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    interval: z.ZodDefault<z.ZodEnum<["1m", "5m", "15m", "30m", "1h", "4h", "1d"]>>;
    adjustment: z.ZodDefault<z.ZodEnum<["splits_only", "splits_and_dividends", "unadjusted"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEquityHistoricalQueryParams = z.infer<typeof FMPEquityHistoricalQueryParamsSchema>;
export declare const FMPEquityHistoricalDataSchema: z.ZodObject<{
    date: z.ZodString;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vwap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vwap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vwap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEquityHistoricalData = z.infer<typeof FMPEquityHistoricalDataSchema>;
export declare class FMPEquityHistoricalFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEquityHistoricalQueryParams;
    static extractData(query: FMPEquityHistoricalQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPEquityHistoricalQueryParams, data: Record<string, unknown>[]): FMPEquityHistoricalData[];
}

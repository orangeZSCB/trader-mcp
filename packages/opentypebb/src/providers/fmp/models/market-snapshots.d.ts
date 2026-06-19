/**
 * FMP Market Snapshots Model.
 * Maps to: openbb_fmp/models/market_snapshots.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPMarketSnapshotsQueryParamsSchema: z.ZodObject<{
    market: z.ZodDefault<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    market: z.ZodDefault<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    market: z.ZodDefault<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPMarketSnapshotsQueryParams = z.infer<typeof FMPMarketSnapshotsQueryParamsSchema>;
export declare const FMPMarketSnapshotsDataSchema: z.ZodObject<{
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_price_timestamp: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_price_timestamp: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_price_timestamp: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPMarketSnapshotsData = z.infer<typeof FMPMarketSnapshotsDataSchema>;
export declare class FMPMarketSnapshotsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPMarketSnapshotsQueryParams;
    static extractData(query: FMPMarketSnapshotsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPMarketSnapshotsQueryParams, data: Record<string, unknown>[]): FMPMarketSnapshotsData[];
}

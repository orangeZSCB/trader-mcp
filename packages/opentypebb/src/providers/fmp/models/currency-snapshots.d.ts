/**
 * FMP Currency Snapshots Model.
 * Maps to: openbb_fmp/models/currency_snapshots.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPCurrencySnapshotsQueryParamsSchema: z.ZodObject<{
    base: z.ZodDefault<z.ZodString>;
    quote_type: z.ZodDefault<z.ZodEnum<["direct", "indirect"]>>;
    counter_currencies: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    base: z.ZodDefault<z.ZodString>;
    quote_type: z.ZodDefault<z.ZodEnum<["direct", "indirect"]>>;
    counter_currencies: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    base: z.ZodDefault<z.ZodString>;
    quote_type: z.ZodDefault<z.ZodEnum<["direct", "indirect"]>>;
    counter_currencies: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCurrencySnapshotsQueryParams = z.infer<typeof FMPCurrencySnapshotsQueryParamsSchema>;
export declare const FMPCurrencySnapshotsDataSchema: z.ZodObject<{
    base_currency: z.ZodString;
    counter_currency: z.ZodString;
    last_rate: z.ZodNumber;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_rate_timestamp: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    base_currency: z.ZodString;
    counter_currency: z.ZodString;
    last_rate: z.ZodNumber;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_rate_timestamp: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    base_currency: z.ZodString;
    counter_currency: z.ZodString;
    last_rate: z.ZodNumber;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_rate_timestamp: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCurrencySnapshotsData = z.infer<typeof FMPCurrencySnapshotsDataSchema>;
export declare class FMPCurrencySnapshotsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPCurrencySnapshotsQueryParams;
    static extractData(_query: FMPCurrencySnapshotsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPCurrencySnapshotsQueryParams, data: Record<string, unknown>[]): FMPCurrencySnapshotsData[];
}

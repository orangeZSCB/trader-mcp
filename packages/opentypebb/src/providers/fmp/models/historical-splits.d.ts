/**
 * FMP Historical Splits Model.
 * Maps to: openbb_fmp/models/historical_splits.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPHistoricalSplitsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type FMPHistoricalSplitsQueryParams = z.infer<typeof FMPHistoricalSplitsQueryParamsSchema>;
export declare const FMPHistoricalSplitsDataSchema: z.ZodObject<{
    date: z.ZodString;
    numerator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    denominator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    split_ratio: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    numerator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    denominator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    split_ratio: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    numerator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    denominator: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    split_ratio: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPHistoricalSplitsData = z.infer<typeof FMPHistoricalSplitsDataSchema>;
export declare class FMPHistoricalSplitsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPHistoricalSplitsQueryParams;
    static extractData(query: FMPHistoricalSplitsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPHistoricalSplitsQueryParams, data: Record<string, unknown>[]): FMPHistoricalSplitsData[];
}

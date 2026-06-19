/**
 * FMP Share Statistics Model.
 * Maps to: openbb_fmp/models/share_statistics.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPShareStatisticsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type FMPShareStatisticsQueryParams = z.infer<typeof FMPShareStatisticsQueryParamsSchema>;
export declare const FMPShareStatisticsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    free_float: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    float_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    outstanding_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    free_float: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    float_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    outstanding_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    free_float: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    float_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    outstanding_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPShareStatisticsData = z.infer<typeof FMPShareStatisticsDataSchema>;
export declare class FMPShareStatisticsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPShareStatisticsQueryParams;
    static extractData(query: FMPShareStatisticsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPShareStatisticsQueryParams, data: Record<string, unknown>[]): FMPShareStatisticsData[];
}

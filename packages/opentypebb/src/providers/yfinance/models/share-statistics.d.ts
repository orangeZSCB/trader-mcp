/**
 * YFinance Share Statistics Model.
 * Maps to: openbb_yfinance/models/share_statistics.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceShareStatisticsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type YFinanceShareStatisticsQueryParams = z.infer<typeof YFinanceShareStatisticsQueryParamsSchema>;
export declare const YFinanceShareStatisticsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    free_float: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    float_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    outstanding_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    implied_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    short_interest: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    short_percent_of_float: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    days_to_cover: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    short_interest_prev_month: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    short_interest_prev_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    insider_ownership: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    institution_ownership: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    institution_float_ownership: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    institutions_count: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    free_float: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    float_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    outstanding_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    implied_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    short_interest: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    short_percent_of_float: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    days_to_cover: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    short_interest_prev_month: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    short_interest_prev_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    insider_ownership: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    institution_ownership: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    institution_float_ownership: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    institutions_count: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    free_float: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    float_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    outstanding_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    implied_shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    short_interest: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    short_percent_of_float: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    days_to_cover: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    short_interest_prev_month: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    short_interest_prev_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    insider_ownership: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    institution_ownership: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    institution_float_ownership: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    institutions_count: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceShareStatisticsData = z.infer<typeof YFinanceShareStatisticsDataSchema>;
export declare class YFinanceShareStatisticsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceShareStatisticsQueryParams;
    static extractData(query: YFinanceShareStatisticsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: YFinanceShareStatisticsQueryParams, data: Record<string, unknown>[]): YFinanceShareStatisticsData[];
}

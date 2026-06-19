/**
 * FMP Key Metrics Model.
 * Maps to: openbb_fmp/models/key_metrics.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPKeyMetricsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    ttm: z.ZodDefault<z.ZodEnum<["include", "exclude", "only"]>>;
    period: z.ZodDefault<z.ZodEnum<["q1", "q2", "q3", "q4", "fy", "annual", "quarter"]>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    ttm: z.ZodDefault<z.ZodEnum<["include", "exclude", "only"]>>;
    period: z.ZodDefault<z.ZodEnum<["q1", "q2", "q3", "q4", "fy", "annual", "quarter"]>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    ttm: z.ZodDefault<z.ZodEnum<["include", "exclude", "only"]>>;
    period: z.ZodDefault<z.ZodEnum<["q1", "q2", "q3", "q4", "fy", "annual", "quarter"]>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPKeyMetricsQueryParams = z.infer<typeof FMPKeyMetricsQueryParamsSchema>;
export declare const FMPKeyMetricsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    period_ending: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    enterprise_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ev_to_sales: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ev_to_ebitda: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_invested_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    period_ending: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    enterprise_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ev_to_sales: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ev_to_ebitda: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_invested_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    period_ending: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    enterprise_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ev_to_sales: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ev_to_ebitda: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_equity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    return_on_invested_capital: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPKeyMetricsData = z.infer<typeof FMPKeyMetricsDataSchema>;
export declare class FMPKeyMetricsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPKeyMetricsQueryParams;
    static extractData(query: FMPKeyMetricsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPKeyMetricsQueryParams, data: Record<string, unknown>[]): FMPKeyMetricsData[];
}

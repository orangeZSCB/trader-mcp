/**
 * FMP Forward EBITDA Estimates Model.
 * Maps to: openbb_fmp/models/forward_ebitda_estimates.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPForwardEbitdaEstimatesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodEnum<["annual", "quarter"]>>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    include_historical: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    limit: number | null;
    fiscal_period: "annual" | "quarter" | null;
    include_historical: boolean;
}, {
    symbol: string;
    limit?: number | null | undefined;
    fiscal_period?: "annual" | "quarter" | null | undefined;
    include_historical?: boolean | undefined;
}>;
export type FMPForwardEbitdaEstimatesQueryParams = z.infer<typeof FMPForwardEbitdaEstimatesQueryParamsSchema>;
export declare const FMPForwardEbitdaEstimatesDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    period_ending: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    calendar_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    calendar_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    low_estimate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high_estimate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mean: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    median: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    standard_deviation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_of_analysts: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    period_ending: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    calendar_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    calendar_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    low_estimate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high_estimate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mean: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    median: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    standard_deviation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_of_analysts: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    period_ending: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    calendar_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    calendar_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    low_estimate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high_estimate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mean: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    median: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    standard_deviation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_of_analysts: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPForwardEbitdaEstimatesData = z.infer<typeof FMPForwardEbitdaEstimatesDataSchema>;
export declare class FMPForwardEbitdaEstimatesFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPForwardEbitdaEstimatesQueryParams;
    static extractData(query: FMPForwardEbitdaEstimatesQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPForwardEbitdaEstimatesQueryParams, data: Record<string, unknown>[]): FMPForwardEbitdaEstimatesData[];
}

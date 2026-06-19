/**
 * FMP Forward EPS Estimates Model.
 * Maps to: openbb_fmp/models/forward_eps_estimates.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPForwardEpsEstimatesQueryParamsSchema: z.ZodObject<{
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
export type FMPForwardEpsEstimatesQueryParams = z.infer<typeof FMPForwardEpsEstimatesQueryParamsSchema>;
export declare const FMPForwardEpsEstimatesDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
export type FMPForwardEpsEstimatesData = z.infer<typeof FMPForwardEpsEstimatesDataSchema>;
export declare class FMPForwardEpsEstimatesFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPForwardEpsEstimatesQueryParams;
    static extractData(query: FMPForwardEpsEstimatesQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPForwardEpsEstimatesQueryParams, data: Record<string, unknown>[]): FMPForwardEpsEstimatesData[];
}

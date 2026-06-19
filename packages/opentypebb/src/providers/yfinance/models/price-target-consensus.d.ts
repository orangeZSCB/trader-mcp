/**
 * YFinance Price Target Consensus Model.
 * Maps to: openbb_yfinance/models/price_target_consensus.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinancePriceTargetConsensusQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinancePriceTargetConsensusQueryParams = z.infer<typeof YFinancePriceTargetConsensusQueryParamsSchema>;
export declare const YFinancePriceTargetConsensusDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    target_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_median: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    recommendation: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    recommendation_mean: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_of_analysts: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    target_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_median: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    recommendation: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    recommendation_mean: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_of_analysts: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    target_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_median: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    recommendation: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    recommendation_mean: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_of_analysts: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinancePriceTargetConsensusData = z.infer<typeof YFinancePriceTargetConsensusDataSchema>;
export declare class YFinancePriceTargetConsensusFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinancePriceTargetConsensusQueryParams;
    static extractData(query: YFinancePriceTargetConsensusQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFinancePriceTargetConsensusQueryParams, data: Record<string, unknown>[]): YFinancePriceTargetConsensusData[];
}

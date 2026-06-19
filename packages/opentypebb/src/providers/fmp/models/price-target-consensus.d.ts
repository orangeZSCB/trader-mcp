/**
 * FMP Price Target Consensus Model.
 * Maps to: openbb_fmp/models/price_target_consensus.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPPriceTargetConsensusQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPPriceTargetConsensusQueryParams = z.infer<typeof FMPPriceTargetConsensusQueryParamsSchema>;
export declare const FMPPriceTargetConsensusDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    target_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_median: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    target_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_median: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    target_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    target_median: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPPriceTargetConsensusData = z.infer<typeof FMPPriceTargetConsensusDataSchema>;
export declare class FMPPriceTargetConsensusFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPPriceTargetConsensusQueryParams;
    static extractData(query: FMPPriceTargetConsensusQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPPriceTargetConsensusQueryParams, data: Record<string, unknown>[]): FMPPriceTargetConsensusData[];
}

/**
 * Price Target Consensus Standard Model.
 * Maps to: openbb_core/provider/standard_models/price_target_consensus.py
 */
import { z } from 'zod';
export declare const PriceTargetConsensusQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, z.ZodTypeAny, "passthrough">>;
export type PriceTargetConsensusQueryParams = z.infer<typeof PriceTargetConsensusQueryParamsSchema>;
export declare const PriceTargetConsensusDataSchema: z.ZodObject<{
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
export type PriceTargetConsensusData = z.infer<typeof PriceTargetConsensusDataSchema>;

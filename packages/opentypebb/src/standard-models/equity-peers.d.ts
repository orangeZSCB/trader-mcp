/**
 * Equity Peers Standard Model.
 * Maps to: standard_models/equity_peers.py
 */
import { z } from 'zod';
export declare const EquityPeersQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type EquityPeersQueryParams = z.infer<typeof EquityPeersQueryParamsSchema>;
export declare const EquityPeersDataSchema: z.ZodObject<{
    symbol: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type EquityPeersData = z.infer<typeof EquityPeersDataSchema>;

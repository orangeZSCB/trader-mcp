/**
 * FMP Equity Peers Model.
 * Maps to: openbb_fmp/models/equity_peers.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEquityPeersQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type FMPEquityPeersQueryParams = z.infer<typeof FMPEquityPeersQueryParamsSchema>;
export declare const FMPEquityPeersDataSchema: z.ZodObject<{
    symbol: z.ZodString;
} & {
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
} & {
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
} & {
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEquityPeersData = z.infer<typeof FMPEquityPeersDataSchema>;
export declare class FMPEquityPeersFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEquityPeersQueryParams;
    static extractData(query: FMPEquityPeersQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPEquityPeersQueryParams, data: Record<string, unknown>[]): FMPEquityPeersData[];
}

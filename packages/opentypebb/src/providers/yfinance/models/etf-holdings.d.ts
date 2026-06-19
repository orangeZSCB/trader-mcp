/**
 * Yahoo Finance ETF Holdings Model.
 *
 * Keyless fallback for the FMP holdings endpoint. Yahoo's quoteSummary
 * `topHoldings` module only carries the TOP-10 positions (vs FMP's full
 * list) — good enough for the concentration read the tool exists for.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFEtfHoldingsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type YFEtfHoldingsQueryParams = z.infer<typeof YFEtfHoldingsQueryParamsSchema>;
export declare const YFEtfHoldingsDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFEtfHoldingsData = z.infer<typeof YFEtfHoldingsDataSchema>;
export declare class YFEtfHoldingsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): YFEtfHoldingsQueryParams;
    static extractData(query: YFEtfHoldingsQueryParams): Promise<Record<string, unknown>[]>;
    static transformData(_query: YFEtfHoldingsQueryParams, data: Record<string, unknown>[]): YFEtfHoldingsData[];
}

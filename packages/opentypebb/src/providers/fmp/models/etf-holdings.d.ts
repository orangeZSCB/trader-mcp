/**
 * FMP ETF Holdings Model.
 * Maps to: openbb_fmp/models/etf_holdings.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEtfHoldingsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    date: string | null;
    cik: string | null;
}, {
    symbol: string;
    date?: string | null | undefined;
    cik?: string | null | undefined;
}>;
export type FMPEtfHoldingsQueryParams = z.infer<typeof FMPEtfHoldingsQueryParamsSchema>;
export declare const FMPEtfHoldingsDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    weight: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cusip: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    isin: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    asset_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    weight: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cusip: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    isin: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    asset_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    weight: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cusip: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    isin: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    asset_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEtfHoldingsData = z.infer<typeof FMPEtfHoldingsDataSchema>;
export declare class FMPEtfHoldingsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEtfHoldingsQueryParams;
    static extractData(query: FMPEtfHoldingsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPEtfHoldingsQueryParams, data: Record<string, unknown>[]): FMPEtfHoldingsData[];
}

/**
 * FMP ETF Search Model.
 * Maps to: openbb_fmp/models/etf_search.py
 *
 * Uses the company-screener endpoint filtered to ETFs only,
 * matching the Python implementation.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEtfSearchQueryParamsSchema: z.ZodObject<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    is_active: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    exchange: string | null;
    query: string | null;
    is_active: boolean;
}, {
    exchange?: string | null | undefined;
    query?: string | null | undefined;
    is_active?: boolean | undefined;
}>;
export type FMPEtfSearchQueryParams = z.infer<typeof FMPEtfSearchQueryParamsSchema>;
export declare const FMPEtfSearchDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    sector: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    industry: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    beta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_annual_dividend: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    sector: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    industry: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    beta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_annual_dividend: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    sector: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    industry: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    beta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_annual_dividend: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEtfSearchData = z.infer<typeof FMPEtfSearchDataSchema>;
export declare class FMPEtfSearchFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEtfSearchQueryParams;
    static extractData(query: FMPEtfSearchQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPEtfSearchQueryParams, data: Record<string, unknown>[]): FMPEtfSearchData[];
}

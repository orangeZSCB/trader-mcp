/**
 * FMP ETF Countries Model.
 * Maps to: openbb_fmp/models/etf_countries.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEtfCountriesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type FMPEtfCountriesQueryParams = z.infer<typeof FMPEtfCountriesQueryParamsSchema>;
export declare const FMPEtfCountriesDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodString;
    weight: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodString;
    weight: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodString;
    weight: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEtfCountriesData = z.infer<typeof FMPEtfCountriesDataSchema>;
export declare class FMPEtfCountriesFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEtfCountriesQueryParams;
    static extractData(query: FMPEtfCountriesQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPEtfCountriesQueryParams, data: Record<string, unknown>[]): FMPEtfCountriesData[];
}

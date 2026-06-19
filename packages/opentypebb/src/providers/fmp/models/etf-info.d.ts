/**
 * FMP ETF Info Model.
 * Maps to: openbb_fmp/models/etf_info.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEtfInfoQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type FMPEtfInfoQueryParams = z.infer<typeof FMPEtfInfoQueryParamsSchema>;
export declare const FMPEtfInfoDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuer: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    domicile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    website: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    inception_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    cusip: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    isin: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    aum: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    nav: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expense_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    holdings_count: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    asset_class: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sector_list: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuer: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    domicile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    website: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    inception_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    cusip: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    isin: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    aum: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    nav: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expense_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    holdings_count: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    asset_class: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sector_list: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuer: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    domicile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    website: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    inception_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    cusip: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    isin: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    aum: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    nav: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expense_ratio: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    holdings_count: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_avg: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    asset_class: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sector_list: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEtfInfoData = z.infer<typeof FMPEtfInfoDataSchema>;
export declare class FMPEtfInfoFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEtfInfoQueryParams;
    static extractData(query: FMPEtfInfoQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPEtfInfoQueryParams, data: Record<string, unknown>[]): FMPEtfInfoData[];
}

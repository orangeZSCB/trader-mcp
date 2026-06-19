/**
 * FMP ETF Equity Exposure Model.
 * Maps to: openbb_fmp/models/etf_equity_exposure.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEtfEquityExposureQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type FMPEtfEquityExposureQueryParams = z.infer<typeof FMPEtfEquityExposureQueryParamsSchema>;
export declare const FMPEtfEquityExposureDataSchema: z.ZodObject<{
    equity_symbol: z.ZodString;
    etf_symbol: z.ZodString;
    weight: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    equity_symbol: z.ZodString;
    etf_symbol: z.ZodString;
    weight: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    equity_symbol: z.ZodString;
    etf_symbol: z.ZodString;
    weight: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEtfEquityExposureData = z.infer<typeof FMPEtfEquityExposureDataSchema>;
export declare class FMPEtfEquityExposureFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEtfEquityExposureQueryParams;
    static extractData(query: FMPEtfEquityExposureQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPEtfEquityExposureQueryParams, data: Record<string, unknown>[]): FMPEtfEquityExposureData[];
}

/**
 * FMP Historical Market Cap Model.
 * Maps to: openbb_fmp/models/historical_market_cap.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPHistoricalMarketCapQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPHistoricalMarketCapQueryParams = z.infer<typeof FMPHistoricalMarketCapQueryParamsSchema>;
export declare const FMPHistoricalMarketCapDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    date: z.ZodString;
    market_cap: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    date: z.ZodString;
    market_cap: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    date: z.ZodString;
    market_cap: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type FMPHistoricalMarketCapData = z.infer<typeof FMPHistoricalMarketCapDataSchema>;
export declare class FMPHistoricalMarketCapFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPHistoricalMarketCapQueryParams;
    static extractData(query: FMPHistoricalMarketCapQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPHistoricalMarketCapQueryParams, data: Record<string, unknown>[]): FMPHistoricalMarketCapData[];
}

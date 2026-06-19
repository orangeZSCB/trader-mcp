/**
 * YFinance Commodity Spot Price Fetcher.
 * Uses Yahoo Finance futures symbols (GC=F for gold, CL=F for crude, etc.)
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceCommoditySpotPriceQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceCommoditySpotPriceQueryParams = z.infer<typeof YFinanceCommoditySpotPriceQueryParamsSchema>;
export declare class YFinanceCommoditySpotPriceFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): YFinanceCommoditySpotPriceQueryParams;
    static extractData(query: YFinanceCommoditySpotPriceQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: YFinanceCommoditySpotPriceQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

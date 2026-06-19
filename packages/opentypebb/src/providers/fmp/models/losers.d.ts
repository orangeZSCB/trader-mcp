/**
 * FMP Top Losers Model.
 * Maps to: openbb_fmp/models/equity_losers.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPLosersQueryParamsSchema: z.ZodObject<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPLosersQueryParams = z.infer<typeof FMPLosersQueryParamsSchema>;
export declare const FMPLosersDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    exchange: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    exchange: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    exchange: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type FMPLosersData = z.infer<typeof FMPLosersDataSchema>;
export declare class FMPLosersFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPLosersQueryParams;
    static extractData(query: FMPLosersQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPLosersQueryParams, data: Record<string, unknown>[]): FMPLosersData[];
}

/**
 * FMP Top Gainers Model.
 * Maps to: openbb_fmp/models/equity_gainers.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPGainersQueryParamsSchema: z.ZodObject<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPGainersQueryParams = z.infer<typeof FMPGainersQueryParamsSchema>;
export declare const FMPGainersDataSchema: z.ZodObject<{
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
export type FMPGainersData = z.infer<typeof FMPGainersDataSchema>;
export declare class FMPGainersFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPGainersQueryParams;
    static extractData(query: FMPGainersQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPGainersQueryParams, data: Record<string, unknown>[]): FMPGainersData[];
}

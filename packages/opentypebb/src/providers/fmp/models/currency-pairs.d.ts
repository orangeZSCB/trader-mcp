/**
 * FMP Currency Available Pairs Model.
 * Maps to: openbb_fmp/models/currency_pairs.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPCurrencyPairsQueryParamsSchema: z.ZodObject<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    query: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCurrencyPairsQueryParams = z.infer<typeof FMPCurrencyPairsQueryParamsSchema>;
export declare const FMPCurrencyPairsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    from_currency: z.ZodString;
    to_currency: z.ZodString;
    from_name: z.ZodString;
    to_name: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    from_currency: z.ZodString;
    to_currency: z.ZodString;
    from_name: z.ZodString;
    to_name: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    from_currency: z.ZodString;
    to_currency: z.ZodString;
    from_name: z.ZodString;
    to_name: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCurrencyPairsData = z.infer<typeof FMPCurrencyPairsDataSchema>;
export declare class FMPCurrencyPairsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPCurrencyPairsQueryParams;
    static extractData(query: FMPCurrencyPairsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPCurrencyPairsQueryParams, data: Record<string, unknown>[]): FMPCurrencyPairsData[];
}

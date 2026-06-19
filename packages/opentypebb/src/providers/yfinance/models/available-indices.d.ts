/**
 * Yahoo Finance Available Indices Model.
 * Maps to: openbb_yfinance/models/available_indices.py
 *
 * Simply returns the INDICES reference table as structured data.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceAvailableIndicesQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type YFinanceAvailableIndicesQueryParams = z.infer<typeof YFinanceAvailableIndicesQueryParamsSchema>;
export declare const YFinanceAvailableIndicesDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    code: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    code: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    code: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceAvailableIndicesData = z.infer<typeof YFinanceAvailableIndicesDataSchema>;
export declare class YFinanceAvailableIndicesFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): YFinanceAvailableIndicesQueryParams;
    static extractData(_query: YFinanceAvailableIndicesQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: YFinanceAvailableIndicesQueryParams, data: Record<string, unknown>[]): YFinanceAvailableIndicesData[];
}

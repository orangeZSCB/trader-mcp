/**
 * FMP Available Indices Model.
 * Maps to: openbb_fmp/models/available_indices.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPAvailableIndicesQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type FMPAvailableIndicesQueryParams = z.infer<typeof FMPAvailableIndicesQueryParamsSchema>;
export declare const FMPAvailableIndicesDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPAvailableIndicesData = z.infer<typeof FMPAvailableIndicesDataSchema>;
export declare class FMPAvailableIndicesFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPAvailableIndicesQueryParams;
    static extractData(_query: FMPAvailableIndicesQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPAvailableIndicesQueryParams, data: Record<string, unknown>[]): FMPAvailableIndicesData[];
}

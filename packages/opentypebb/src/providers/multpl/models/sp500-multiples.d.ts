/**
 * Multpl S&P 500 Multiples Model.
 * Maps to: openbb_multpl/models/sp500_multiples.py
 *
 * Scrapes data tables from multpl.com.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { SP500MultiplesDataSchema } from '../../../standard-models/sp500-multiples.js';
export declare const MultplSP500MultiplesQueryParamsSchema: z.ZodObject<{
    series_name: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    series_name: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    series_name: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type MultplSP500MultiplesQueryParams = z.infer<typeof MultplSP500MultiplesQueryParamsSchema>;
export type MultplSP500MultiplesData = z.infer<typeof SP500MultiplesDataSchema>;
export declare class MultplSP500MultiplesFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): MultplSP500MultiplesQueryParams;
    static extractData(query: MultplSP500MultiplesQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: MultplSP500MultiplesQueryParams, data: Record<string, unknown>[]): MultplSP500MultiplesData[];
}

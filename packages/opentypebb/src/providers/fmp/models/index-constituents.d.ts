/**
 * FMP Index Constituents Model.
 * Maps to: openbb_fmp/models/index_constituents.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPIndexConstituentsQueryParamsSchema: z.ZodObject<{} & {
    symbol: z.ZodDefault<z.ZodEnum<["dowjones", "sp500", "nasdaq"]>>;
    historical: z.ZodDefault<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{} & {
    symbol: z.ZodDefault<z.ZodEnum<["dowjones", "sp500", "nasdaq"]>>;
    historical: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{} & {
    symbol: z.ZodDefault<z.ZodEnum<["dowjones", "sp500", "nasdaq"]>>;
    historical: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPIndexConstituentsQueryParams = z.infer<typeof FMPIndexConstituentsQueryParamsSchema>;
export declare const FMPIndexConstituentsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    sector: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    industry: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    headquarter: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date_added: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    founded: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    removed_symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    removed_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reason: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    sector: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    industry: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    headquarter: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date_added: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    founded: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    removed_symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    removed_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reason: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    sector: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    industry: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    headquarter: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date_added: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    founded: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    removed_symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    removed_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    reason: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPIndexConstituentsData = z.infer<typeof FMPIndexConstituentsDataSchema>;
export declare class FMPIndexConstituentsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPIndexConstituentsQueryParams;
    static extractData(query: FMPIndexConstituentsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPIndexConstituentsQueryParams, data: Record<string, unknown>[]): FMPIndexConstituentsData[];
}

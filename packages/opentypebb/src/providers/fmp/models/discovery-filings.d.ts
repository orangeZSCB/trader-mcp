/**
 * FMP Discovery Filings Model.
 * Maps to: openbb_fmp/models/discovery_filings.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPDiscoveryFilingsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPDiscoveryFilingsQueryParams = z.infer<typeof FMPDiscoveryFilingsQueryParamsSchema>;
export declare const FMPDiscoveryFilingsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    cik: z.ZodString;
    filing_date: z.ZodString;
    accepted_date: z.ZodString;
    form_type: z.ZodString;
    link: z.ZodString;
} & {
    final_link: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    cik: z.ZodString;
    filing_date: z.ZodString;
    accepted_date: z.ZodString;
    form_type: z.ZodString;
    link: z.ZodString;
} & {
    final_link: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    cik: z.ZodString;
    filing_date: z.ZodString;
    accepted_date: z.ZodString;
    form_type: z.ZodString;
    link: z.ZodString;
} & {
    final_link: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPDiscoveryFilingsData = z.infer<typeof FMPDiscoveryFilingsDataSchema>;
export declare class FMPDiscoveryFilingsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPDiscoveryFilingsQueryParams;
    static extractData(query: FMPDiscoveryFilingsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPDiscoveryFilingsQueryParams, data: Record<string, unknown>[]): FMPDiscoveryFilingsData[];
}

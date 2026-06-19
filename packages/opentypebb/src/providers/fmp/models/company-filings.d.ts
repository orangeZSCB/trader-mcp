/**
 * FMP Company Filings Model.
 * Maps to: openbb_fmp/models/company_filings.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPCompanyFilingsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
} & {
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNumber>;
    page: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    symbol: string | null;
    limit: number;
    cik: string | null;
    start_date: string | null;
    end_date: string | null;
    page: number;
}, {
    symbol?: string | null | undefined;
    limit?: number | undefined;
    cik?: string | null | undefined;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
    page?: number | undefined;
}>;
export type FMPCompanyFilingsQueryParams = z.infer<typeof FMPCompanyFilingsQueryParamsSchema>;
export declare const FMPCompanyFilingsDataSchema: z.ZodObject<{
    filing_date: z.ZodString;
    report_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    report_url: z.ZodString;
} & {
    filing_url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    filing_date: z.ZodString;
    report_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    report_url: z.ZodString;
} & {
    filing_url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    filing_date: z.ZodString;
    report_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    report_url: z.ZodString;
} & {
    filing_url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCompanyFilingsData = z.infer<typeof FMPCompanyFilingsDataSchema>;
export declare class FMPCompanyFilingsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPCompanyFilingsQueryParams;
    static extractData(query: FMPCompanyFilingsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPCompanyFilingsQueryParams, data: Record<string, unknown>[]): FMPCompanyFilingsData[];
}

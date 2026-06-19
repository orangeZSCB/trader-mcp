/**
 * FMP ESG Score Model.
 * Maps to: openbb_fmp/models/esg.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEsgScoreQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEsgScoreQueryParams = z.infer<typeof FMPEsgScoreQueryParamsSchema>;
export declare const FMPEsgScoreDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    environmental_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    social_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    governance_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    esg_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    environmental_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    social_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    governance_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    esg_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    environmental_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    social_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    governance_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    esg_score: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEsgScoreData = z.infer<typeof FMPEsgScoreDataSchema>;
export declare class FMPEsgScoreFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEsgScoreQueryParams;
    static extractData(query: FMPEsgScoreQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPEsgScoreQueryParams, data: Record<string, unknown>[]): FMPEsgScoreData[];
}

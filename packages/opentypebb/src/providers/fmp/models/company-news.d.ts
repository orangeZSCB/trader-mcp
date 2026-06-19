/**
 * FMP Company News Model.
 * Maps to: openbb_fmp/models/company_news.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPCompanyNewsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    page: z.ZodDefault<z.ZodNumber>;
    press_release: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    page: z.ZodDefault<z.ZodNumber>;
    press_release: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    page: z.ZodDefault<z.ZodNumber>;
    press_release: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCompanyNewsQueryParams = z.infer<typeof FMPCompanyNewsQueryParamsSchema>;
export declare const FMPCompanyNewsDataSchema: z.ZodObject<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodString;
    symbols: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    source: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodString;
    symbols: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    source: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodString;
    symbols: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    source: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCompanyNewsData = z.infer<typeof FMPCompanyNewsDataSchema>;
export declare class FMPCompanyNewsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPCompanyNewsQueryParams;
    static extractData(query: FMPCompanyNewsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPCompanyNewsQueryParams, data: Record<string, unknown>[]): FMPCompanyNewsData[];
}

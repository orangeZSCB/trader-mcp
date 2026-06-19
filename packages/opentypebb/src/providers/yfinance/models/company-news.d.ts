/**
 * Yahoo Finance Company News Model.
 * Maps to: openbb_yfinance/models/company_news.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceCompanyNewsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceCompanyNewsQueryParams = z.infer<typeof YFinanceCompanyNewsQueryParamsSchema>;
export declare const YFinanceCompanyNewsDataSchema: z.ZodObject<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodString;
    symbols: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    source: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
    source: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
    source: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceCompanyNewsData = z.infer<typeof YFinanceCompanyNewsDataSchema>;
export declare class YFinanceCompanyNewsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceCompanyNewsQueryParams;
    static extractData(query: YFinanceCompanyNewsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFinanceCompanyNewsQueryParams, data: Record<string, unknown>[]): YFinanceCompanyNewsData[];
}

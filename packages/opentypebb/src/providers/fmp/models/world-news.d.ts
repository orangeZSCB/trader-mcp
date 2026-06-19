/**
 * FMP World News Model.
 * Maps to: openbb_fmp/models/world_news.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPWorldNewsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    topic: z.ZodDefault<z.ZodEnum<["fmp_articles", "general", "press_releases", "stocks", "forex", "crypto"]>>;
    page: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    topic: z.ZodDefault<z.ZodEnum<["fmp_articles", "general", "press_releases", "stocks", "forex", "crypto"]>>;
    page: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    topic: z.ZodDefault<z.ZodEnum<["fmp_articles", "general", "press_releases", "stocks", "forex", "crypto"]>>;
    page: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPWorldNewsQueryParams = z.infer<typeof FMPWorldNewsQueryParamsSchema>;
export declare const FMPWorldNewsDataSchema: z.ZodObject<{
    date: z.ZodString;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    source: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    source: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    source: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type FMPWorldNewsData = z.infer<typeof FMPWorldNewsDataSchema>;
export declare class FMPWorldNewsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPWorldNewsQueryParams;
    static extractData(query: FMPWorldNewsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPWorldNewsQueryParams, data: Record<string, unknown>[]): FMPWorldNewsData[];
}

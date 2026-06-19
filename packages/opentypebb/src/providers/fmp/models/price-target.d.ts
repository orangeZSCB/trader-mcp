/**
 * FMP Price Target Model.
 * Maps to: openbb_fmp/models/price_target.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPPriceTargetQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    limit: number | null;
}, {
    symbol: string;
    limit?: number | null | undefined;
}>;
export type FMPPriceTargetQueryParams = z.infer<typeof FMPPriceTargetQueryParamsSchema>;
export declare const FMPPriceTargetDataSchema: z.ZodObject<{
    published_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    published_time: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodString;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    analyst_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    analyst_firm: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price_target: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    adj_price_target: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_target_previous: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    previous_adj_price_target: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_when_posted: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    rating_current: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    rating_previous: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    action: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    news_title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    news_url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    published_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    published_time: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodString;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    analyst_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    analyst_firm: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price_target: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    adj_price_target: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_target_previous: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    previous_adj_price_target: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_when_posted: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    rating_current: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    rating_previous: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    action: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    news_title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    news_url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    published_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    published_time: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodString;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    analyst_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    analyst_firm: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price_target: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    adj_price_target: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_target_previous: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    previous_adj_price_target: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_when_posted: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    rating_current: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    rating_previous: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    action: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    news_title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    news_url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPPriceTargetData = z.infer<typeof FMPPriceTargetDataSchema>;
export declare class FMPPriceTargetFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPPriceTargetQueryParams;
    static extractData(query: FMPPriceTargetQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPPriceTargetQueryParams, data: Record<string, unknown>[]): FMPPriceTargetData[];
}

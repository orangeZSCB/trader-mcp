/**
 * Price Target Standard Model.
 * Maps to: standard_models/price_target.py
 */
import { z } from 'zod';
export declare const PriceTargetQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    limit: number | null;
}, {
    symbol: string;
    limit?: number | null | undefined;
}>;
export type PriceTargetQueryParams = z.infer<typeof PriceTargetQueryParamsSchema>;
export declare const PriceTargetDataSchema: z.ZodObject<{
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
}, z.ZodTypeAny, "passthrough">>;
export type PriceTargetData = z.infer<typeof PriceTargetDataSchema>;

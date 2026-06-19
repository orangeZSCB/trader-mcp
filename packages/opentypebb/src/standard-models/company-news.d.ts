/**
 * Company News Standard Model.
 * Maps to: openbb_core/provider/standard_models/company_news.py
 */
import { z } from 'zod';
export declare const CompanyNewsQueryParamsSchema: z.ZodObject<{
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
export type CompanyNewsQueryParams = z.infer<typeof CompanyNewsQueryParamsSchema>;
export declare const CompanyNewsDataSchema: z.ZodObject<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodString;
    symbols: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodString;
    symbols: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodString;
    symbols: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type CompanyNewsData = z.infer<typeof CompanyNewsDataSchema>;

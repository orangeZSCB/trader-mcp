/**
 * World News Standard Model.
 * Maps to: openbb_core/provider/standard_models/world_news.py
 */
import { z } from 'zod';
export declare const WorldNewsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type WorldNewsQueryParams = z.infer<typeof WorldNewsQueryParamsSchema>;
export declare const WorldNewsDataSchema: z.ZodObject<{
    date: z.ZodString;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    title: z.ZodString;
    author: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    body: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodNullable<z.ZodUnknown>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type WorldNewsData = z.infer<typeof WorldNewsDataSchema>;

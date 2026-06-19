/**
 * News Collector — Zod configuration schema
 *
 * Loaded from data/config/news.json (optional; defaults used if absent).
 */
import { z } from 'zod';
export declare const newsCollectorSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    intervalMinutes: z.ZodDefault<z.ZodNumber>;
    maxInMemory: z.ZodDefault<z.ZodNumber>;
    retentionDays: z.ZodDefault<z.ZodNumber>;
    feeds: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
        source: z.ZodString;
        categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type NewsCollectorConfig = z.infer<typeof newsCollectorSchema>;

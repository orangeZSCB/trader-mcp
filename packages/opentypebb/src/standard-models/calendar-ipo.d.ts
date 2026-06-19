/**
 * IPO Calendar Standard Model.
 * Maps to: standard_models/calendar_ipo.py
 */
import { z } from 'zod';
export declare const CalendarIpoQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    symbol: string | null;
    limit: number | null;
    start_date: string | null;
    end_date: string | null;
}, {
    symbol?: string | null | undefined;
    limit?: number | null | undefined;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
}>;
export type CalendarIpoQueryParams = z.infer<typeof CalendarIpoQueryParamsSchema>;
export declare const CalendarIpoDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ipo_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ipo_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ipo_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type CalendarIpoData = z.infer<typeof CalendarIpoDataSchema>;

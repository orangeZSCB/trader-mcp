/**
 * Calendar Splits Standard Model.
 * Maps to: standard_models/calendar_splits.py
 */
import { z } from 'zod';
export declare const CalendarSplitsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    start_date: string | null;
    end_date: string | null;
}, {
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
}>;
export type CalendarSplitsQueryParams = z.infer<typeof CalendarSplitsQueryParamsSchema>;
export declare const CalendarSplitsDataSchema: z.ZodObject<{
    date: z.ZodString;
    symbol: z.ZodString;
    numerator: z.ZodNumber;
    denominator: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    symbol: z.ZodString;
    numerator: z.ZodNumber;
    denominator: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    symbol: z.ZodString;
    numerator: z.ZodNumber;
    denominator: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type CalendarSplitsData = z.infer<typeof CalendarSplitsDataSchema>;

/**
 * Earnings Calendar Standard Model.
 * Maps to: openbb_core/provider/standard_models/calendar_earnings.py
 */
import { z } from 'zod';
export declare const CalendarEarningsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type CalendarEarningsQueryParams = z.infer<typeof CalendarEarningsQueryParamsSchema>;
export declare const CalendarEarningsDataSchema: z.ZodObject<{
    report_date: z.ZodString;
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    eps_previous: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    report_date: z.ZodString;
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    eps_previous: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    report_date: z.ZodString;
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    eps_previous: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type CalendarEarningsData = z.infer<typeof CalendarEarningsDataSchema>;

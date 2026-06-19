/**
 * Economic Calendar Standard Model.
 * Maps to: standard_models/economic_calendar.py
 */
import { z } from 'zod';
export declare const EconomicCalendarQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    start_date: string | null;
    end_date: string | null;
}, {
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
}>;
export type EconomicCalendarQueryParams = z.infer<typeof EconomicCalendarQueryParamsSchema>;
export declare const EconomicCalendarDataSchema: z.ZodObject<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    event: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    importance: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    source: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    consensus: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
    previous: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
    revised: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
    actual: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    event: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    importance: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    source: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    consensus: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
    previous: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
    revised: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
    actual: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    event: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    importance: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    source: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    consensus: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
    previous: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
    revised: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
    actual: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
}, z.ZodTypeAny, "passthrough">>;
export type EconomicCalendarData = z.infer<typeof EconomicCalendarDataSchema>;

/**
 * FMP Economic Calendar Model.
 * Maps to: openbb_fmp/models/economic_calendar.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEconomicCalendarQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    start_date: string | null;
    end_date: string | null;
}, {
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
}>;
export type FMPEconomicCalendarQueryParams = z.infer<typeof FMPEconomicCalendarQueryParamsSchema>;
export declare const FMPEconomicCalendarDataSchema: z.ZodObject<{
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
} & {
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    created_at: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
} & {
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    created_at: z.ZodDefault<z.ZodNullable<z.ZodString>>;
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
} & {
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    created_at: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEconomicCalendarData = z.infer<typeof FMPEconomicCalendarDataSchema>;
export declare class FMPEconomicCalendarFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEconomicCalendarQueryParams;
    static extractData(query: FMPEconomicCalendarQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPEconomicCalendarQueryParams, data: Record<string, unknown>[]): FMPEconomicCalendarData[];
}

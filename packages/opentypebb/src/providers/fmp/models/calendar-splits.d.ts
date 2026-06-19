/**
 * FMP Calendar Splits Model.
 * Maps to: openbb_fmp/models/calendar_splits.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPCalendarSplitsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    start_date: string | null;
    end_date: string | null;
}, {
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
}>;
export type FMPCalendarSplitsQueryParams = z.infer<typeof FMPCalendarSplitsQueryParamsSchema>;
export declare const FMPCalendarSplitsDataSchema: z.ZodObject<{
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
export type FMPCalendarSplitsData = z.infer<typeof FMPCalendarSplitsDataSchema>;
export declare class FMPCalendarSplitsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPCalendarSplitsQueryParams;
    static extractData(query: FMPCalendarSplitsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPCalendarSplitsQueryParams, data: Record<string, unknown>[]): FMPCalendarSplitsData[];
}

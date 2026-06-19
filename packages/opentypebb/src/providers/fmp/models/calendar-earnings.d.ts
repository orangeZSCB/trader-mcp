/**
 * FMP Earnings Calendar Model.
 * Maps to: openbb_fmp/models/calendar_earnings.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPCalendarEarningsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCalendarEarningsQueryParams = z.infer<typeof FMPCalendarEarningsQueryParamsSchema>;
export declare const FMPCalendarEarningsDataSchema: z.ZodObject<{
    report_date: z.ZodString;
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    eps_previous: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    eps_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    report_date: z.ZodString;
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    eps_previous: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    eps_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    report_date: z.ZodString;
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    eps_previous: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    eps_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_consensus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    revenue_actual: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_updated: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCalendarEarningsData = z.infer<typeof FMPCalendarEarningsDataSchema>;
export declare class FMPCalendarEarningsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPCalendarEarningsQueryParams;
    static extractData(query: FMPCalendarEarningsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPCalendarEarningsQueryParams, data: Record<string, unknown>[]): FMPCalendarEarningsData[];
}

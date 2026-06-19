/**
 * FMP IPO Calendar Model.
 * Maps to: openbb_fmp/models/calendar_ipo.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPCalendarIpoQueryParamsSchema: z.ZodObject<{
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
export type FMPCalendarIpoQueryParams = z.infer<typeof FMPCalendarIpoQueryParamsSchema>;
export declare const FMPCalendarIpoDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ipo_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    actions: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_range: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ipo_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    actions: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_range: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ipo_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    actions: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_range: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCalendarIpoData = z.infer<typeof FMPCalendarIpoDataSchema>;
export declare class FMPCalendarIpoFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPCalendarIpoQueryParams;
    static extractData(query: FMPCalendarIpoQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPCalendarIpoQueryParams, data: Record<string, unknown>[]): FMPCalendarIpoData[];
}

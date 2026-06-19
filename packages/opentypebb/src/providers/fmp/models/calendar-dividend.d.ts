/**
 * FMP Dividend Calendar Model.
 * Maps to: openbb_fmp/models/calendar_dividend.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPCalendarDividendQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    start_date: string | null;
    end_date: string | null;
}, {
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
}>;
export type FMPCalendarDividendQueryParams = z.infer<typeof FMPCalendarDividendQueryParamsSchema>;
export declare const FMPCalendarDividendDataSchema: z.ZodObject<{
    ex_dividend_date: z.ZodString;
    symbol: z.ZodString;
    amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    record_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    payment_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    declaration_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    adjusted_amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    ex_dividend_date: z.ZodString;
    symbol: z.ZodString;
    amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    record_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    payment_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    declaration_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    adjusted_amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    ex_dividend_date: z.ZodString;
    symbol: z.ZodString;
    amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    record_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    payment_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    declaration_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    adjusted_amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPCalendarDividendData = z.infer<typeof FMPCalendarDividendDataSchema>;
export declare class FMPCalendarDividendFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPCalendarDividendQueryParams;
    static extractData(query: FMPCalendarDividendQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPCalendarDividendQueryParams, data: Record<string, unknown>[]): FMPCalendarDividendData[];
}

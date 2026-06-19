/**
 * FMP Historical Dividends Model.
 * Maps to: openbb_fmp/models/historical_dividends.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPHistoricalDividendsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    limit: number | null;
    start_date: string | null;
    end_date: string | null;
}, {
    symbol: string;
    limit?: number | null | undefined;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
}>;
export type FMPHistoricalDividendsQueryParams = z.infer<typeof FMPHistoricalDividendsQueryParamsSchema>;
export declare const FMPHistoricalDividendsDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ex_dividend_date: z.ZodString;
    amount: z.ZodNumber;
} & {
    declaration_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    record_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    payment_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    adjusted_amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ex_dividend_date: z.ZodString;
    amount: z.ZodNumber;
} & {
    declaration_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    record_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    payment_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    adjusted_amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ex_dividend_date: z.ZodString;
    amount: z.ZodNumber;
} & {
    declaration_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    record_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    payment_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    adjusted_amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPHistoricalDividendsData = z.infer<typeof FMPHistoricalDividendsDataSchema>;
export declare class FMPHistoricalDividendsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPHistoricalDividendsQueryParams;
    static extractData(query: FMPHistoricalDividendsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPHistoricalDividendsQueryParams, data: Record<string, unknown>[]): FMPHistoricalDividendsData[];
}

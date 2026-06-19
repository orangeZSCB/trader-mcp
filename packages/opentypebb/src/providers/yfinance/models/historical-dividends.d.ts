/**
 * YFinance Historical Dividends Model.
 * Maps to: openbb_yfinance/models/historical_dividends.py
 *
 * All data is split-adjusted.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceHistoricalDividendsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    start_date: string | null;
    end_date: string | null;
}, {
    symbol: string;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
}>;
export type YFinanceHistoricalDividendsQueryParams = z.infer<typeof YFinanceHistoricalDividendsQueryParamsSchema>;
export declare const YFinanceHistoricalDividendsDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ex_dividend_date: z.ZodString;
    amount: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ex_dividend_date: z.ZodString;
    amount: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ex_dividend_date: z.ZodString;
    amount: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceHistoricalDividendsData = z.infer<typeof YFinanceHistoricalDividendsDataSchema>;
export declare class YFinanceHistoricalDividendsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceHistoricalDividendsQueryParams;
    static extractData(query: YFinanceHistoricalDividendsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: YFinanceHistoricalDividendsQueryParams, data: Record<string, unknown>[]): YFinanceHistoricalDividendsData[];
}

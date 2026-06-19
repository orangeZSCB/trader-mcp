/**
 * Yahoo Finance Futures Curve Model.
 * Maps to: openbb_yfinance/models/futures_curve.py
 *
 * Uses Yahoo Finance's futuresChain API to get the list of active futures symbols,
 * then fetches current quotes for each. Falls back to manual symbol construction
 * with an exchange mapping if the chain API is unavailable.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceFuturesCurveQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceFuturesCurveQueryParams = z.infer<typeof YFinanceFuturesCurveQueryParamsSchema>;
export declare const YFinanceFuturesCurveDataSchema: z.ZodObject<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiration: z.ZodString;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiration: z.ZodString;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiration: z.ZodString;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceFuturesCurveData = z.infer<typeof YFinanceFuturesCurveDataSchema>;
export declare class YFinanceFuturesCurveFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceFuturesCurveQueryParams;
    static extractData(query: YFinanceFuturesCurveQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: YFinanceFuturesCurveQueryParams, data: Record<string, unknown>[]): YFinanceFuturesCurveData[];
}

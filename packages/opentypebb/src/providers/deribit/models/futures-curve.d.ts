/**
 * Deribit Futures Curve Model.
 * Maps to: openbb_deribit/models/futures_curve.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const DeribitFuturesCurveQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>;
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type DeribitFuturesCurveQueryParams = z.infer<typeof DeribitFuturesCurveQueryParamsSchema>;
export declare const DeribitFuturesCurveDataSchema: z.ZodObject<{
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
export type DeribitFuturesCurveData = z.infer<typeof DeribitFuturesCurveDataSchema>;
export declare class DeribitFuturesCurveFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): DeribitFuturesCurveQueryParams;
    static extractData(query: DeribitFuturesCurveQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: DeribitFuturesCurveQueryParams, data: Record<string, unknown>[]): DeribitFuturesCurveData[];
}
/** "28MAR25" / "4JUL25" → "2025-03-28" / "2025-07-04". Unknown shapes pass
 *  through unchanged (loud in data rather than silently dropped). */
export declare function deribitExpiryToIso(raw: string): string;

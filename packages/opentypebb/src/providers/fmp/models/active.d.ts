/**
 * FMP Most Active Model.
 * Maps to: openbb_fmp/models/equity_most_active.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEquityActiveQueryParamsSchema: z.ZodObject<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sort: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEquityActiveQueryParams = z.infer<typeof FMPEquityActiveQueryParamsSchema>;
export declare const FMPEquityActiveDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    exchange: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    exchange: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    exchange: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEquityActiveData = z.infer<typeof FMPEquityActiveDataSchema>;
export declare class FMPEquityActiveFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEquityActiveQueryParams;
    static extractData(query: FMPEquityActiveQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPEquityActiveQueryParams, data: Record<string, unknown>[]): FMPEquityActiveData[];
}

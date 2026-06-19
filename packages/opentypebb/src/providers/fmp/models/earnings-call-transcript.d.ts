/**
 * FMP Earnings Call Transcript Model.
 * Maps to: openbb_fmp/models/earnings_call_transcript.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEarningsCallTranscriptQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    quarter: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    quarter: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    quarter: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEarningsCallTranscriptQueryParams = z.infer<typeof FMPEarningsCallTranscriptQueryParamsSchema>;
export declare const FMPEarningsCallTranscriptDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    year: z.ZodNumber;
    quarter: z.ZodString;
    date: z.ZodString;
    content: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    year: z.ZodNumber;
    quarter: z.ZodString;
    date: z.ZodString;
    content: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    year: z.ZodNumber;
    quarter: z.ZodString;
    date: z.ZodString;
    content: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEarningsCallTranscriptData = z.infer<typeof FMPEarningsCallTranscriptDataSchema>;
export declare class FMPEarningsCallTranscriptFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEarningsCallTranscriptQueryParams;
    static extractData(query: FMPEarningsCallTranscriptQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPEarningsCallTranscriptQueryParams, data: Record<string, unknown>[]): FMPEarningsCallTranscriptData[];
}

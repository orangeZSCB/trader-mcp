/**
 * Earnings Call Transcript Standard Model.
 * Maps to: openbb_core/provider/standard_models/earnings_call_transcript.py
 */
import { z } from 'zod';
export declare const EarningsCallTranscriptQueryParamsSchema: z.ZodObject<{
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
export type EarningsCallTranscriptQueryParams = z.infer<typeof EarningsCallTranscriptQueryParamsSchema>;
export declare const EarningsCallTranscriptDataSchema: z.ZodObject<{
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
export type EarningsCallTranscriptData = z.infer<typeof EarningsCallTranscriptDataSchema>;

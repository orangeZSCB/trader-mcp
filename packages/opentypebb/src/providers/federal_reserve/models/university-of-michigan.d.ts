/**
 * Federal Reserve University of Michigan Consumer Sentiment Fetcher.
 * Uses FRED series: UMCSENT (Sentiment), UMCSENT1 is not available, so we use
 * UMCSENT (Consumer Sentiment), CURRCOND (Current Conditions), EXPINF1YR + EXPINF5YR.
 * Actual FRED IDs: UMCSENT, UMCSENT (we approximate with available data).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedUMichQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedUMichQueryParams = z.infer<typeof FedUMichQueryParamsSchema>;
export declare class FedUniversityOfMichiganFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedUMichQueryParams;
    static extractData(query: FedUMichQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedUMichQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        consumer_sentiment: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        current_conditions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        expectations: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        inflation_expectation_1y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        inflation_expectation_5y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

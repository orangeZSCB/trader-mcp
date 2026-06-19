/**
 * Federal Reserve SLOOS (Senior Loan Officer Opinion Survey) Fetcher.
 * Uses FRED series: DRTSCILM (C&I Loan Tightening), DRTSCLCC (Consumer Loan Tightening).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedSloosQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedSloosQueryParams = z.infer<typeof FedSloosQueryParamsSchema>;
export declare class FedSloosFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedSloosQueryParams;
    static extractData(query: FedSloosQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedSloosQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        ci_loan_tightening: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        consumer_loan_tightening: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

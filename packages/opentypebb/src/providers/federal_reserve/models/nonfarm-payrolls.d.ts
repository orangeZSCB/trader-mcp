/**
 * Federal Reserve Nonfarm Payrolls Fetcher.
 * Uses FRED series: PAYEMS (Total Nonfarm), USPRIV (Private), USGOVT (Government).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedNonfarmPayrollsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedNonfarmPayrollsQueryParams = z.infer<typeof FedNonfarmPayrollsQueryParamsSchema>;
export declare class FedNonfarmPayrollsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedNonfarmPayrollsQueryParams;
    static extractData(query: FedNonfarmPayrollsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedNonfarmPayrollsQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        total_nonfarm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        private_sector: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        government: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

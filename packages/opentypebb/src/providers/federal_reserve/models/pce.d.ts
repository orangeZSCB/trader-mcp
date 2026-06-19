/**
 * Federal Reserve PCE Fetcher.
 * Uses FRED series: PCEPI (PCE Price Index), PCEPILFE (Core PCE).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedPCEQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedPCEQueryParams = z.infer<typeof FedPCEQueryParamsSchema>;
export declare class FedPCEFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedPCEQueryParams;
    static extractData(query: FedPCEQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedPCEQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        pce: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        core_pce: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

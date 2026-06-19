/**
 * Federal Reserve Primary Dealer Fails Fetcher.
 * Uses FRED series for delivery failures data.
 * Series: DTBSPCKF (Fails to Deliver), DTBSPCKR (Fails to Receive).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedPrimaryDealerFailsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedPrimaryDealerFailsQueryParams = z.infer<typeof FedPrimaryDealerFailsQueryParamsSchema>;
export declare class FedPrimaryDealerFailsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedPrimaryDealerFailsQueryParams;
    static extractData(query: FedPrimaryDealerFailsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedPrimaryDealerFailsQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[];
}

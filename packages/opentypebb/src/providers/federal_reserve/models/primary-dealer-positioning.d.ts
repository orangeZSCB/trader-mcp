/**
 * Federal Reserve Primary Dealer Positioning Fetcher.
 *
 * Primary dealer statistics do NOT live on FRED (the original port pointed
 * at made-up FRED ids and 400'd forever) — they come from the NY Fed
 * markets API, keyless:
 *   https://markets.newyorkfed.org/api/pd/get/{keyid}.json
 *
 * We fetch the major net-position totals (weekly, $ millions):
 *   PDPOSGST-TOT  US Treasuries total
 *   PDPOSMBS-TOT  Mortgage-backed securities
 *   PDPOSCS-TOT   Corporate securities
 *   PDPOSABS-TOT  Asset-backed securities
 *   PDPOSFGS-TOT  Federal agency (non-MBS)
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedPrimaryDealerPositioningQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedPrimaryDealerPositioningQueryParams = z.infer<typeof FedPrimaryDealerPositioningQueryParamsSchema>;
export declare class FedPrimaryDealerPositioningFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedPrimaryDealerPositioningQueryParams;
    static extractData(query: FedPrimaryDealerPositioningQueryParams): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedPrimaryDealerPositioningQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[];
}

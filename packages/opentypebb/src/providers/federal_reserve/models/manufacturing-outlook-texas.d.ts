/**
 * Federal Reserve Dallas Fed Manufacturing Outlook Fetcher.
 * Uses FRED series: DALLASMANOUTGEN (General Activity).
 * Note: actual FRED ID may vary; falls back to BCTDAL for Dallas Fed data.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedManufacturingOutlookTexasQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedManufacturingOutlookTexasQueryParams = z.infer<typeof FedManufacturingOutlookTexasQueryParamsSchema>;
export declare class FedManufacturingOutlookTexasFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedManufacturingOutlookTexasQueryParams;
    static extractData(query: FedManufacturingOutlookTexasQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedManufacturingOutlookTexasQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        general_activity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        production: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        new_orders: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

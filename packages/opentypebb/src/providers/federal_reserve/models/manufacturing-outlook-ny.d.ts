/**
 * Federal Reserve NY Manufacturing Outlook (Empire State) Fetcher.
 * Uses FRED series: GACDISA066MSFRBNY (General Business Conditions).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedManufacturingOutlookNYQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedManufacturingOutlookNYQueryParams = z.infer<typeof FedManufacturingOutlookNYQueryParamsSchema>;
export declare class FedManufacturingOutlookNYFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedManufacturingOutlookNYQueryParams;
    static extractData(query: FedManufacturingOutlookNYQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedManufacturingOutlookNYQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        general_business_conditions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        new_orders: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        employees: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

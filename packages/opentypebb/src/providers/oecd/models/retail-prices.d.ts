/**
 * OECD Retail Prices Fetcher.
 * Uses OECD MEI Prices dataset.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const OECDRetailPricesQueryParamsSchema: z.ZodObject<{
    country: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type OECDRetailPricesQueryParams = z.infer<typeof OECDRetailPricesQueryParamsSchema>;
export declare class OECDRetailPricesFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): OECDRetailPricesQueryParams;
    static extractData(query: OECDRetailPricesQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: OECDRetailPricesQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

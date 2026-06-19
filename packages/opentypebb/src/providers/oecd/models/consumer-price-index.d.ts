/**
 * OECD Consumer Price Index Model.
 * Maps to: openbb_oecd/models/consumer_price_index.py
 *
 * Uses CSV format from OECD SDMX REST API (same as Python implementation).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { ConsumerPriceIndexDataSchema } from '../../../standard-models/consumer-price-index.js';
export declare const OECDCPIQueryParamsSchema: z.ZodObject<{
    country: z.ZodDefault<z.ZodString>;
    transform: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
    harmonized: z.ZodDefault<z.ZodBoolean>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodDefault<z.ZodString>;
    transform: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
    harmonized: z.ZodDefault<z.ZodBoolean>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodDefault<z.ZodString>;
    transform: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter", "monthly"]>>;
    harmonized: z.ZodDefault<z.ZodBoolean>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type OECDCPIQueryParams = z.infer<typeof OECDCPIQueryParamsSchema>;
export type OECDCPIData = z.infer<typeof ConsumerPriceIndexDataSchema>;
export declare class OECDConsumerPriceIndexFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): OECDCPIQueryParams;
    static extractData(query: OECDCPIQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: OECDCPIQueryParams, data: Record<string, unknown>[]): OECDCPIData[];
}

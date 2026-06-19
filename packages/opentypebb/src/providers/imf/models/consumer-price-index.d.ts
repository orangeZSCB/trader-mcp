/**
 * IMF Consumer Price Index Model.
 * Maps to: openbb_imf/models/consumer_price_index.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { ConsumerPriceIndexDataSchema } from '../../../standard-models/consumer-price-index.js';
export declare const IMFCPIQueryParamsSchema: z.ZodObject<{
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
export type IMFCPIQueryParams = z.infer<typeof IMFCPIQueryParamsSchema>;
export type IMFCPIData = z.infer<typeof ConsumerPriceIndexDataSchema>;
export declare class IMFConsumerPriceIndexFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): IMFCPIQueryParams;
    static extractData(query: IMFCPIQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: IMFCPIQueryParams, data: Record<string, unknown>[]): IMFCPIData[];
}

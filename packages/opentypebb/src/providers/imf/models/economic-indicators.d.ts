/**
 * IMF Economic Indicators Model.
 * Maps to: openbb_imf/models/economic_indicators.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { EconomicIndicatorsDataSchema } from '../../../standard-models/economic-indicators.js';
export declare const IMFEconomicIndicatorsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type IMFEconomicIndicatorsQueryParams = z.infer<typeof IMFEconomicIndicatorsQueryParamsSchema>;
export type IMFEconomicIndicatorsData = z.infer<typeof EconomicIndicatorsDataSchema>;
export declare class IMFEconomicIndicatorsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): IMFEconomicIndicatorsQueryParams;
    static extractData(query: IMFEconomicIndicatorsQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: IMFEconomicIndicatorsQueryParams, data: Record<string, unknown>[]): IMFEconomicIndicatorsData[];
}

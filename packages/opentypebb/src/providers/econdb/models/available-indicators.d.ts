/**
 * EconDB Available Indicators Model.
 * Maps to: openbb_econdb/models/available_indicators.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { AvailableIndicatorsDataSchema } from '../../../standard-models/available-indicators.js';
export declare const EconDBAvailableIndicatorsQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type EconDBAvailableIndicatorsQueryParams = z.infer<typeof EconDBAvailableIndicatorsQueryParamsSchema>;
export type EconDBAvailableIndicatorsData = z.infer<typeof AvailableIndicatorsDataSchema>;
export declare class EconDBAvailableIndicatorsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): EconDBAvailableIndicatorsQueryParams;
    static extractData(_query: EconDBAvailableIndicatorsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: EconDBAvailableIndicatorsQueryParams, data: Record<string, unknown>[]): EconDBAvailableIndicatorsData[];
}

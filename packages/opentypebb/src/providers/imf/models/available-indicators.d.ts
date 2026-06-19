/**
 * IMF Available Indicators Model.
 * Maps to: openbb_imf/models/available_indicators.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { AvailableIndicatorsDataSchema } from '../../../standard-models/available-indicators.js';
export declare const IMFAvailableIndicatorsQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type IMFAvailableIndicatorsQueryParams = z.infer<typeof IMFAvailableIndicatorsQueryParamsSchema>;
export type IMFAvailableIndicatorsData = z.infer<typeof AvailableIndicatorsDataSchema>;
export declare class IMFAvailableIndicatorsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): IMFAvailableIndicatorsQueryParams;
    static extractData(_query: IMFAvailableIndicatorsQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: IMFAvailableIndicatorsQueryParams, data: Record<string, unknown>[]): IMFAvailableIndicatorsData[];
}

/**
 * OECD Composite Leading Indicator Model.
 * Maps to: openbb_oecd/models/composite_leading_indicator.py
 *
 * Uses CSV format from OECD SDMX REST API (same as Python implementation).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CompositeLeadingIndicatorDataSchema } from '../../../standard-models/composite-leading-indicator.js';
export declare const OECDCLIQueryParamsSchema: z.ZodObject<{
    country: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type OECDCLIQueryParams = z.infer<typeof OECDCLIQueryParamsSchema>;
export type OECDCLIData = z.infer<typeof CompositeLeadingIndicatorDataSchema>;
export declare class OECDCompositeLeadingIndicatorFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): OECDCLIQueryParams;
    static extractData(query: OECDCLIQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: OECDCLIQueryParams, data: Record<string, unknown>[]): OECDCLIData[];
}

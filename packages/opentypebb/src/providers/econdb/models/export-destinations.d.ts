/**
 * EconDB Export Destinations Model.
 * Maps to: openbb_econdb/models/export_destinations.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { ExportDestinationsDataSchema } from '../../../standard-models/export-destinations.js';
export declare const EconDBExportDestinationsQueryParamsSchema: z.ZodObject<{
    country: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type EconDBExportDestinationsQueryParams = z.infer<typeof EconDBExportDestinationsQueryParamsSchema>;
export type EconDBExportDestinationsData = z.infer<typeof ExportDestinationsDataSchema>;
export declare class EconDBExportDestinationsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): EconDBExportDestinationsQueryParams;
    static extractData(query: EconDBExportDestinationsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: EconDBExportDestinationsQueryParams, data: Record<string, unknown>[]): EconDBExportDestinationsData[];
}

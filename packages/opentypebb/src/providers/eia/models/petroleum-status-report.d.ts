/**
 * EIA Petroleum Status Report Fetcher.
 * Uses EIA Open Data API v2.
 * API docs: https://www.eia.gov/opendata/
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const EIAPetroleumStatusReportQueryParamsSchema: z.ZodObject<{
    category: z.ZodDefault<z.ZodEnum<["crude_oil_production", "crude_oil_stocks", "gasoline_stocks", "distillate_stocks", "refinery_utilization"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    category: z.ZodDefault<z.ZodEnum<["crude_oil_production", "crude_oil_stocks", "gasoline_stocks", "distillate_stocks", "refinery_utilization"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    category: z.ZodDefault<z.ZodEnum<["crude_oil_production", "crude_oil_stocks", "gasoline_stocks", "distillate_stocks", "refinery_utilization"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type EIAPetroleumStatusReportQueryParams = z.infer<typeof EIAPetroleumStatusReportQueryParamsSchema>;
export declare class EIAPetroleumStatusReportFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): EIAPetroleumStatusReportQueryParams;
    static extractData(query: EIAPetroleumStatusReportQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: EIAPetroleumStatusReportQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[];
}

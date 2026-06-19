/**
 * EIA Short-Term Energy Outlook (STEO) Fetcher.
 * Uses EIA Open Data API v2.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const EIAShortTermEnergyOutlookQueryParamsSchema: z.ZodObject<{
    category: z.ZodDefault<z.ZodEnum<["crude_oil_price", "gasoline_price", "natural_gas_price", "crude_oil_production", "petroleum_consumption"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    category: z.ZodDefault<z.ZodEnum<["crude_oil_price", "gasoline_price", "natural_gas_price", "crude_oil_production", "petroleum_consumption"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    category: z.ZodDefault<z.ZodEnum<["crude_oil_price", "gasoline_price", "natural_gas_price", "crude_oil_production", "petroleum_consumption"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type EIAShortTermEnergyOutlookQueryParams = z.infer<typeof EIAShortTermEnergyOutlookQueryParamsSchema>;
export declare class EIAShortTermEnergyOutlookFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): EIAShortTermEnergyOutlookQueryParams;
    static extractData(query: EIAShortTermEnergyOutlookQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: EIAShortTermEnergyOutlookQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        forecast: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
    }, z.ZodTypeAny, "passthrough">[];
}

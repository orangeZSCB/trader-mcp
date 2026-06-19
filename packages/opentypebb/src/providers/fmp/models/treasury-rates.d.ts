/**
 * FMP Treasury Rates Model.
 * Maps to: openbb_fmp/models/treasury_rates.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPTreasuryRatesQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPTreasuryRatesQueryParams = z.infer<typeof FMPTreasuryRatesQueryParamsSchema>;
export declare const FMPTreasuryRatesDataSchema: z.ZodObject<{
    date: z.ZodString;
    week_4: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_6: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_5: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_7: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_10: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_20: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_30: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    week_4: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_6: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_5: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_7: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_10: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_20: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_30: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    week_4: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_6: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_5: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_7: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_10: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_20: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_30: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPTreasuryRatesData = z.infer<typeof FMPTreasuryRatesDataSchema>;
export declare class FMPTreasuryRatesFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPTreasuryRatesQueryParams;
    static extractData(query: FMPTreasuryRatesQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPTreasuryRatesQueryParams, data: Record<string, unknown>[]): FMPTreasuryRatesData[];
}

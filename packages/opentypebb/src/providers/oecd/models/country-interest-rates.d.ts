/**
 * OECD Country Interest Rates Model.
 * Maps to: openbb_oecd/models/country_interest_rates.py
 *
 * Uses CSV format from OECD SDMX REST API (same as Python implementation).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CountryInterestRatesDataSchema } from '../../../standard-models/country-interest-rates.js';
export declare const OECDInterestRatesQueryParamsSchema: z.ZodObject<{
    country: z.ZodDefault<z.ZodString>;
    duration: z.ZodDefault<z.ZodEnum<["short", "long"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodDefault<z.ZodString>;
    duration: z.ZodDefault<z.ZodEnum<["short", "long"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodDefault<z.ZodString>;
    duration: z.ZodDefault<z.ZodEnum<["short", "long"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type OECDInterestRatesQueryParams = z.infer<typeof OECDInterestRatesQueryParamsSchema>;
export type OECDInterestRatesData = z.infer<typeof CountryInterestRatesDataSchema>;
export declare class OECDCountryInterestRatesFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): OECDInterestRatesQueryParams;
    static extractData(query: OECDInterestRatesQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: OECDInterestRatesQueryParams, data: Record<string, unknown>[]): OECDInterestRatesData[];
}

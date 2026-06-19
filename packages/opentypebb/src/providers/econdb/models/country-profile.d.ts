/**
 * EconDB Country Profile Model.
 * Maps to: openbb_econdb/models/country_profile.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CountryProfileDataSchema } from '../../../standard-models/country-profile.js';
export declare const EconDBCountryProfileQueryParamsSchema: z.ZodObject<{
    country: z.ZodEffects<z.ZodString, string, string>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">>;
export type EconDBCountryProfileQueryParams = z.infer<typeof EconDBCountryProfileQueryParamsSchema>;
export type EconDBCountryProfileData = z.infer<typeof CountryProfileDataSchema>;
export declare class EconDBCountryProfileFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): EconDBCountryProfileQueryParams;
    static extractData(query: EconDBCountryProfileQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: EconDBCountryProfileQueryParams, data: Record<string, unknown>[]): EconDBCountryProfileData[];
}

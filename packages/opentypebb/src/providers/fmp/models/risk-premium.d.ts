/**
 * FMP Risk Premium Model.
 * Maps to: openbb_fmp/models/risk_premium.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPRiskPremiumQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type FMPRiskPremiumQueryParams = z.infer<typeof FMPRiskPremiumQueryParamsSchema>;
export declare const FMPRiskPremiumDataSchema: z.ZodObject<{
    country: z.ZodString;
    continent: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    total_equity_risk_premium: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    country_risk_premium: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodString;
    continent: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    total_equity_risk_premium: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    country_risk_premium: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodString;
    continent: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    total_equity_risk_premium: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    country_risk_premium: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPRiskPremiumData = z.infer<typeof FMPRiskPremiumDataSchema>;
export declare class FMPRiskPremiumFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPRiskPremiumQueryParams;
    static extractData(_query: FMPRiskPremiumQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPRiskPremiumQueryParams, data: Record<string, unknown>[]): FMPRiskPremiumData[];
}

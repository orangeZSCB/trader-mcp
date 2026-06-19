/**
 * Risk Premium Standard Model.
 * Maps to: openbb_core/provider/standard_models/risk_premium.py
 */
import { z } from 'zod';
export declare const RiskPremiumQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type RiskPremiumQueryParams = z.infer<typeof RiskPremiumQueryParamsSchema>;
export declare const RiskPremiumDataSchema: z.ZodObject<{
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
export type RiskPremiumData = z.infer<typeof RiskPremiumDataSchema>;

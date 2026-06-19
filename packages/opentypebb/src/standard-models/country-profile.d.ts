/**
 * Country Profile Standard Model.
 * Maps to: openbb_core/provider/standard_models/country_profile.py
 */
import { z } from 'zod';
export declare const CountryProfileQueryParamsSchema: z.ZodObject<{
    country: z.ZodEffects<z.ZodString, string, string>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">>;
export type CountryProfileQueryParams = z.infer<typeof CountryProfileQueryParamsSchema>;
export declare const CountryProfileDataSchema: z.ZodObject<{
    country: z.ZodString;
    population: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gdp_usd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gdp_qoq: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gdp_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cpi_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    core_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    retail_sales_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    industrial_production_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    policy_rate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    yield_10y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    govt_debt_gdp: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_account_gdp: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    jobless_rate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodString;
    population: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gdp_usd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gdp_qoq: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gdp_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cpi_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    core_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    retail_sales_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    industrial_production_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    policy_rate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    yield_10y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    govt_debt_gdp: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_account_gdp: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    jobless_rate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodString;
    population: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gdp_usd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gdp_qoq: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gdp_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cpi_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    core_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    retail_sales_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    industrial_production_yoy: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    policy_rate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    yield_10y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    govt_debt_gdp: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_account_gdp: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    jobless_rate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type CountryProfileData = z.infer<typeof CountryProfileDataSchema>;

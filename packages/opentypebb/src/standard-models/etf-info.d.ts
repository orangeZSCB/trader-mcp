/**
 * ETF Info Standard Model.
 * Maps to: standard_models/etf_info.py
 */
import { z } from 'zod';
export declare const EtfInfoQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type EtfInfoQueryParams = z.infer<typeof EtfInfoQueryParamsSchema>;
export declare const EtfInfoDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuer: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    domicile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    website: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    inception_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuer: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    domicile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    website: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    inception_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    issuer: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    domicile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    website: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    inception_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type EtfInfoData = z.infer<typeof EtfInfoDataSchema>;

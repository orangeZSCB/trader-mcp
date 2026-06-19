/**
 * Institutional Ownership Standard Model.
 * Maps to: standard_models/institutional_ownership.py
 */
import { z } from 'zod';
export declare const InstitutionalOwnershipQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type InstitutionalOwnershipQueryParams = z.infer<typeof InstitutionalOwnershipQueryParamsSchema>;
export declare const InstitutionalOwnershipDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type InstitutionalOwnershipData = z.infer<typeof InstitutionalOwnershipDataSchema>;

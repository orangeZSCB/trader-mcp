/**
 * Company Filings Standard Model.
 * Maps to: standard_models/company_filings.py
 */
import { z } from 'zod';
export declare const CompanyFilingsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, "strip", z.ZodTypeAny, {
    symbol: string | null;
}, {
    symbol?: string | null | undefined;
}>;
export type CompanyFilingsQueryParams = z.infer<typeof CompanyFilingsQueryParamsSchema>;
export declare const CompanyFilingsDataSchema: z.ZodObject<{
    filing_date: z.ZodString;
    report_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    report_url: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    filing_date: z.ZodString;
    report_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    report_url: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    filing_date: z.ZodString;
    report_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    report_url: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type CompanyFilingsData = z.infer<typeof CompanyFilingsDataSchema>;

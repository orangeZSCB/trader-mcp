/**
 * Discovery Filings Standard Model.
 * Maps to: openbb_core/provider/standard_models/discovery_filings.py
 */
import { z } from 'zod';
export declare const DiscoveryFilingsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type DiscoveryFilingsQueryParams = z.infer<typeof DiscoveryFilingsQueryParamsSchema>;
export declare const DiscoveryFilingsDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    cik: z.ZodString;
    filing_date: z.ZodString;
    accepted_date: z.ZodString;
    form_type: z.ZodString;
    link: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    cik: z.ZodString;
    filing_date: z.ZodString;
    accepted_date: z.ZodString;
    form_type: z.ZodString;
    link: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    cik: z.ZodString;
    filing_date: z.ZodString;
    accepted_date: z.ZodString;
    form_type: z.ZodString;
    link: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type DiscoveryFilingsData = z.infer<typeof DiscoveryFilingsDataSchema>;

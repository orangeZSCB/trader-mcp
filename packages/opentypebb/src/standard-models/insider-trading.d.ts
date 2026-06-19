/**
 * Insider Trading Standard Model.
 * Maps to: openbb_core/provider/standard_models/insider_trading.py
 */
import { z } from 'zod';
export declare const InsiderTradingQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type InsiderTradingQueryParams = z.infer<typeof InsiderTradingQueryParamsSchema>;
export declare const InsiderTradingDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    transaction_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    owner_cik: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodNumber, z.ZodString]>>>;
    owner_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    owner_title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ownership_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    transaction_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    acquisition_or_disposition: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    security_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    securities_owned: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    securities_transacted: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    transaction_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    filing_url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    transaction_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    owner_cik: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodNumber, z.ZodString]>>>;
    owner_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    owner_title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ownership_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    transaction_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    acquisition_or_disposition: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    security_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    securities_owned: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    securities_transacted: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    transaction_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    filing_url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    filing_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    transaction_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    owner_cik: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodNumber, z.ZodString]>>>;
    owner_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    owner_title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    ownership_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    transaction_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    acquisition_or_disposition: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    security_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    securities_owned: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    securities_transacted: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    transaction_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    filing_url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type InsiderTradingData = z.infer<typeof InsiderTradingDataSchema>;

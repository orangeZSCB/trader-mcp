/**
 * Yahoo Finance Insider Trading Model.
 *
 * Keyless fallback for the FMP insider-trading endpoint, fed by the
 * quoteSummary `insiderTransactions` module (Form-4 derived rows).
 * Yahoo carries fewer fields than FMP (no CIKs / filing dates); the
 * shared columns map onto the standard model, the rest stay null.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFInsiderTradingQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFInsiderTradingQueryParams = z.infer<typeof YFInsiderTradingQueryParamsSchema>;
export declare const YFInsiderTradingDataSchema: z.ZodObject<{
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
export type YFInsiderTradingData = z.infer<typeof YFInsiderTradingDataSchema>;
export declare class YFInsiderTradingFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): YFInsiderTradingQueryParams;
    static extractData(query: YFInsiderTradingQueryParams): Promise<Record<string, unknown>[]>;
    static transformData(query: YFInsiderTradingQueryParams, data: Record<string, unknown>[]): YFInsiderTradingData[];
}

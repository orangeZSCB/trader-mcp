/**
 * FMP Insider Trading Model.
 * Maps to: openbb_fmp/models/insider_trading.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPInsiderTradingQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    transaction_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    statistics: z.ZodDefault<z.ZodBoolean>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    transaction_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    statistics: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    transaction_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    statistics: z.ZodDefault<z.ZodBoolean>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPInsiderTradingQueryParams = z.infer<typeof FMPInsiderTradingQueryParamsSchema>;
export declare const FMPInsiderTradingDataSchema: z.ZodObject<{
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
} & {
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    quarter: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
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
} & {
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    quarter: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
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
} & {
    form_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    quarter: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPInsiderTradingData = z.infer<typeof FMPInsiderTradingDataSchema>;
export declare class FMPInsiderTradingFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPInsiderTradingQueryParams;
    static extractData(query: FMPInsiderTradingQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPInsiderTradingQueryParams, data: Record<string, unknown>[]): FMPInsiderTradingData[];
}

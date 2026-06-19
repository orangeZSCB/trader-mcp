/**
 * FMP Equity Screener Model.
 * Maps to: openbb_fmp/models/equity_screener.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEquityScreenerQueryParamsSchema: z.ZodObject<{
    mktcap_min: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mktcap_max: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_min: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_max: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    beta_min: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    beta_max: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_min: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_max: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_min: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_max: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    sector: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    industry: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    is_etf: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
    is_active: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
    is_fund: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
    all_share_classes: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    limit: number | null;
    exchange: string | null;
    industry: string | null;
    sector: string | null;
    country: string | null;
    is_etf: boolean | null;
    is_fund: boolean | null;
    is_active: boolean | null;
    mktcap_min: number | null;
    mktcap_max: number | null;
    price_min: number | null;
    price_max: number | null;
    beta_min: number | null;
    beta_max: number | null;
    volume_min: number | null;
    volume_max: number | null;
    dividend_min: number | null;
    dividend_max: number | null;
    all_share_classes: boolean | null;
}, {
    limit?: number | null | undefined;
    exchange?: string | null | undefined;
    industry?: string | null | undefined;
    sector?: string | null | undefined;
    country?: string | null | undefined;
    is_etf?: boolean | null | undefined;
    is_fund?: boolean | null | undefined;
    is_active?: boolean | null | undefined;
    mktcap_min?: number | null | undefined;
    mktcap_max?: number | null | undefined;
    price_min?: number | null | undefined;
    price_max?: number | null | undefined;
    beta_min?: number | null | undefined;
    beta_max?: number | null | undefined;
    volume_min?: number | null | undefined;
    volume_max?: number | null | undefined;
    dividend_min?: number | null | undefined;
    dividend_max?: number | null | undefined;
    all_share_classes?: boolean | null | undefined;
}>;
export type FMPEquityScreenerQueryParams = z.infer<typeof FMPEquityScreenerQueryParamsSchema>;
export declare const FMPEquityScreenerDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    sector: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    industry: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    beta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_annual_dividend: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    is_etf: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
    is_fund: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
    actively_trading: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    sector: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    industry: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    beta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_annual_dividend: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    is_etf: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
    is_fund: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
    actively_trading: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    sector: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    industry: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    beta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_annual_dividend: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    is_etf: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
    is_fund: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
    actively_trading: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPEquityScreenerData = z.infer<typeof FMPEquityScreenerDataSchema>;
export declare class FMPEquityScreenerFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEquityScreenerQueryParams;
    static extractData(query: FMPEquityScreenerQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPEquityScreenerQueryParams, data: Record<string, unknown>[]): FMPEquityScreenerData[];
}

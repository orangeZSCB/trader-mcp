/**
 * Yahoo Finance Options Chains Model.
 * Maps to: openbb_yfinance/models/options_chains.py
 *
 * Fetches full options chain for a given symbol using yahoo-finance2's options API,
 * with fallback to direct Yahoo Finance HTTP endpoint.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceOptionsChainsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceOptionsChainsQueryParams = z.infer<typeof YFinanceOptionsChainsQueryParamsSchema>;
export declare const YFinanceOptionsChainsDataSchema: z.ZodObject<{
    underlying_symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    underlying_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    contract_symbol: z.ZodString;
    eod_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiration: z.ZodString;
    dte: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    strike: z.ZodNumber;
    option_type: z.ZodString;
    contract_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open_interest: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    theoretical_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_trade_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_trade_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_trade_time: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    tick: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    bid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bid_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mark: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    implied_volatility: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    delta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gamma: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    theta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vega: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    rho: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    underlying_symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    underlying_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    contract_symbol: z.ZodString;
    eod_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiration: z.ZodString;
    dte: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    strike: z.ZodNumber;
    option_type: z.ZodString;
    contract_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open_interest: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    theoretical_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_trade_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_trade_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_trade_time: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    tick: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    bid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bid_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mark: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    implied_volatility: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    delta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gamma: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    theta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vega: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    rho: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    underlying_symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    underlying_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    contract_symbol: z.ZodString;
    eod_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    expiration: z.ZodString;
    dte: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    strike: z.ZodNumber;
    option_type: z.ZodString;
    contract_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open_interest: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    theoretical_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_trade_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_trade_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_trade_time: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    tick: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    bid: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bid_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ask_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mark: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    implied_volatility: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    delta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    gamma: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    theta: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    vega: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    rho: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceOptionsChainsData = z.infer<typeof YFinanceOptionsChainsDataSchema>;
export declare class YFinanceOptionsChainsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceOptionsChainsQueryParams;
    static extractData(query: YFinanceOptionsChainsQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: YFinanceOptionsChainsQueryParams, data: Record<string, unknown>[]): YFinanceOptionsChainsData[];
}

/**
 * SDK Derivatives Client
 *
 * Maps to openTypeBB derivatives-router endpoints.
 */
import { SDKBaseClient } from './base-client.js';
export declare class SDKDerivativesClient extends SDKBaseClient {
    getFuturesHistorical(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        open: import("zod").ZodNumber;
        high: import("zod").ZodNumber;
        low: import("zod").ZodNumber;
        close: import("zod").ZodNumber;
        volume: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getFuturesCurve(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        expiration: import("zod").ZodString;
        price: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getFuturesInfo(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getFuturesInstruments(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{}, import("zod").ZodTypeAny, "passthrough">[]>;
    getOptionsChains(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        underlying_symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        underlying_price: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        contract_symbol: import("zod").ZodString;
        eod_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        expiration: import("zod").ZodString;
        dte: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        strike: import("zod").ZodNumber;
        option_type: import("zod").ZodString;
        contract_size: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        open_interest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        theoretical_price: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        last_trade_price: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        last_trade_size: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        last_trade_time: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        tick: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        bid: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        bid_size: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        ask: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        ask_size: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        mark: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        open: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        close: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        prev_close: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        change: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        change_percent: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        implied_volatility: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        delta: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        gamma: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        theta: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        vega: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        rho: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getOptionsSnapshots(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        underlying_symbol: import("zod").ZodString;
        contract_symbol: import("zod").ZodString;
        expiration: import("zod").ZodString;
        dte: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        strike: import("zod").ZodNumber;
        option_type: import("zod").ZodString;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        open_interest: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        last_price: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        last_size: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        last_timestamp: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        open: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        close: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getOptionsUnusual(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        underlying_symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        contract_symbol: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
}

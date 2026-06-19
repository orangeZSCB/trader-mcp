/**
 * Derivatives AI Tools
 *
 * Crypto options surface (Deribit, keyless). The futures curve is already
 * served by the Term Structure board / reference contract; this exposes the
 * options chain to the agent for vol / skew / positioning reads.
 */
import type { DerivativesClientLike } from '@openalice-trading/alice-core/domain/market-data/client/types.js';
export declare function createDerivativesTools(derivativesClient: DerivativesClientLike): {
    cryptoOptionsChains: import("ai").Tool<{
        symbol: "BTC" | "ETH" | "PAXG";
    }, import("zod").objectOutputType<{
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
    cryptoFuturesInstruments: import("ai").Tool<Record<string, never>, import("zod").objectOutputType<{}, import("zod").ZodTypeAny, "passthrough">[]>;
};

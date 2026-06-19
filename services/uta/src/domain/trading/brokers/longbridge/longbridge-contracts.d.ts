/**
 * Contract resolution helpers for Longbridge.
 *
 * Longbridge uses suffixed symbols: `700.HK`, `AAPL.US`, `600519.SH`,
 * `000001.SZ`, etc. The market suffix is the unique key — without it
 * a bare ticker is ambiguous (`700` exists on multiple boards).
 */
import { Contract, ContractDescription, OrderState } from '@traderalice/ibkr';
import '../../contract-ext.js';
/**
 * Build a fully qualified IBKR Contract for a Longbridge symbol.
 *
 * @param lbSymbol — the LB-native suffixed symbol (e.g. "700.HK"). Bare
 *                   tickers are accepted as a fallback (treated as US).
 */
export declare function makeContract(lbSymbol: string): Contract;
/**
 * Parse `"700.HK"` → `{ ticker: "700", suffix: "HK" }`.
 * Bare tickers without a suffix come back as `{ ticker, suffix: "US" }` —
 * Longbridge accepts US tickers without an explicit suffix on some
 * endpoints, so this is the most-forgiving default.
 */
export declare function parseLbSymbol(lbSymbol: string): {
    ticker: string;
    suffix: string;
};
/**
 * Resolve a Contract back to a Longbridge symbol (e.g. "700.HK").
 *
 * Preferred sources, in order:
 *   1. `localSymbol` — set by makeContract; round-trips losslessly.
 *   2. `aliceId` after the `|` separator — the UTA-stamped native key.
 *   3. `symbol` + currency-derived suffix — best-effort fallback.
 */
export declare function resolveSymbol(contract: Contract): string | null;
/**
 * Map the `Market` enum value (numeric) returned by the SDK to a
 * suffix string. Used when emitting Position contracts.
 */
export declare function marketToSuffix(market: number): string;
/**
 * Map Longbridge's `OrderStatus` enum (numeric) to IBKR-style status string.
 * IBKR statuses we emit: Submitted, Filled, Cancelled, Inactive.
 */
export declare function mapLbOrderStatus(status: number): string;
/** Make an OrderState from an LB status enum + optional reject message. */
export declare function makeOrderState(status: number, msg?: string): OrderState;
/** Produce a single-result ContractDescription for echo fallback. */
export declare function echoContractDescription(lbSymbol: string): ContractDescription;

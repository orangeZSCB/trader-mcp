/**
 * Hyperliquid-specific overrides for CcxtBroker.
 *
 * Hyperliquid quirks:
 * - No native market orders. CCXT emulates them as IOC limit orders with
 *   a slippage-bounded price (default 5%). To compute the bound, CCXT
 *   requires the caller to pass a reference price even for type='market'.
 *   Server enforces an 80% deviation cap from mark price, so we can't
 *   send an extreme dummy value — we have to fetchTicker first.
 *
 * - CCXT's parsePosition leaves markPrice undefined for hyperliquid (hardcoded
 *   in node_modules/ccxt/js/src/hyperliquid.js, line 3613). Hyperliquid does
 *   return positionValue (mapped to notional by CCXT), so we recover markPrice
 *   from notional / contracts.
 */
import type { CcxtExchangeOverrides } from '../overrides.js';
export declare const hyperliquidOverrides: CcxtExchangeOverrides;

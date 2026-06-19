/**
 * Contract resolution helpers for Alpaca.
 *
 * Pure functions parameterized by provider string.
 * Now returns IBKR Contract class instances with aliceId extension.
 */
import { Contract, OrderState } from '@traderalice/ibkr';
import '../../contract-ext.js';
import type { BarInterval } from '../types.js';
/** Normalized BarInterval → Alpaca v2 timeframe string. */
export declare const ALPACA_TIMEFRAME: Record<BarInterval, string>;
/** Build a fully qualified IBKR Contract for an Alpaca ticker. */
export declare function makeContract(ticker: string): Contract;
/**
 * Resolve a Contract to an Alpaca ticker symbol.
 * Uses symbol directly. aliceId is managed by UTA layer, not broker.
 */
export declare function resolveSymbol(contract: Contract): string | null;
/** Map Alpaca order status string to IBKR-style OrderState status. */
export declare function mapAlpacaOrderStatus(alpacaStatus: string): string;
/** Create an IBKR OrderState from an Alpaca status string. */
export declare function makeOrderState(alpacaStatus: string, rejectReason?: string): OrderState;

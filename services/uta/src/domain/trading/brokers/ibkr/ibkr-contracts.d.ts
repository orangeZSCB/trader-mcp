/**
 * Contract helpers and IBKR error classification.
 *
 * Unlike Alpaca/CCXT, IBKR contracts ARE our native Contract type —
 * no translation layer is needed. Helpers just ensure required fields are set.
 */
import { Contract } from '@traderalice/ibkr';
import { BrokerError } from '../types.js';
import '../../contract-ext.js';
import type { SecType } from '../../contract-discipline.js';
/** Build a standard IBKR Contract (defaults: STK + SMART + USD). */
export declare function makeContract(symbol: string, secType?: SecType, exchange?: string, currency?: string): Contract;
/**
 * Resolve a Contract to a display symbol string.
 * Prefers localSymbol > symbol. Returns null if neither is set.
 */
export declare function resolveSymbol(contract: Contract): string | null;
/**
 * Classify an IBKR TWS error code into a BrokerError.
 *
 * TWS errors follow a numeric code system:
 * - Codes < 1000: request-level errors (order rejected, contract not found, etc.)
 * - Codes 1100-1300: system/connectivity events
 * - Codes >= 2000: informational (data farm status, market data messages)
 */
export declare function classifyIbkrError(code: number, msg: string): BrokerError;

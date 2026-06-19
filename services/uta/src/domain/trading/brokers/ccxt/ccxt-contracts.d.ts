/**
 * Contract resolution helpers for CCXT exchanges.
 *
 * Pure functions parameterized by (markets, exchangeName) —
 * no dependency on the CcxtBroker instance. aliceId is owned by
 * UnifiedTradingAccount, not this layer — see `UTA.stampAliceId`.
 */
import { Contract, OrderState } from '@traderalice/ibkr';
import '../../contract-ext.js';
import type { CcxtMarket } from './ccxt-types.js';
import type { BarInterval } from '../types.js';
/** Normalized BarInterval → CCXT timeframe string. CCXT happens to use the
 *  same tokens, but keep the map explicit + validate against the exchange's
 *  actual `timeframes` at call time (per-exchange support varies). */
export declare const CCXT_TIMEFRAME: Record<BarInterval, string>;
export declare function ccxtTypeToSecType(type: string): string;
export declare function mapOrderStatus(status: string | undefined): string;
/** Create an IBKR OrderState from a CCXT status string. */
export declare function makeOrderState(ccxtStatus: string | undefined): OrderState;
/**
 * Convert a CcxtMarket to an IBKR Contract.
 *
 * `Contract.localSymbol` is set to `market.symbol` — CCXT's unified wire
 * format (`BTC/USDT:USDT`, `BTC/USDT`, `BTC/USDT:USDT-220929`). That's
 * CCXT's own uniqueness primitive: it encodes base + quote + (optional)
 * settle + (optional) expiry in one string, distinguishing every product
 * the exchange offers. We do not normalize this across brokers —
 * `aliceId`'s `{utaId}|` prefix already scopes per-broker, and each
 * broker's `getNativeKey` reads its own native key out of Contract.
 *
 * For FUT/OPT/FOP markets, derives `lastTradeDateOrContractMonth` from
 * `market.expiry` (CCXT exposes it as ms epoch on dated derivatives) and
 * `multiplier` from `market.contractSize`. CCXT-typed `optionType` and
 * `strike` populate the OPT-specific fields. `assertContract` (called
 * inside `buildContract`) verifies all required taxonomy fields are
 * present — malformed market data throws here so callers can decide
 * whether to skip or surface the error.
 */
export declare function marketToContract(market: CcxtMarket, exchangeName: string): Contract;
/**
 * Resolve a Contract to a CCXT symbol for API calls.
 * Tries: localSymbol → symbol as CCXT key → search by base+secType.
 * aliceId is managed by UTA layer; broker uses localSymbol/symbol for resolution.
 */
export declare function contractToCcxt(contract: Contract, markets: Record<string, CcxtMarket>, exchangeName: string): string | null;
/** Synchronous search returning CCXT symbols. Used by contractToCcxt. */
export declare function resolveContractSync(query: Contract, markets: Record<string, CcxtMarket>): string[];

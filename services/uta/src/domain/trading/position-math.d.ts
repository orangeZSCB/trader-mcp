/**
 * Position math — single source for `marketValue` and `unrealizedPnL`.
 *
 * The IBroker.Position contract requires marketValue and unrealizedPnL
 * to be multiplier-applied. Historically every broker implemented the
 * math itself, leading to drift (Mock had three multiplier-related bugs
 * surfaced in 2026-05-07 QA). This module is the only place that math
 * lives — brokers, UTA reconcile, and UI consumers all funnel here so
 * the multiplier rule is enforced in exactly one implementation.
 *
 * Convention recap (matches the docstring on `Position.multiplier`):
 *   - `quantity`, `avgCost`, `marketPrice` are per-unit values.
 *   - `multiplier` is shares-per-contract: 1 for stocks/crypto, typically
 *     100 for US equity options, broker-specific for futures.
 *   - `marketValue   = quantity × marketPrice × multiplier`
 *   - `unrealizedPnL = quantity × (marketPrice − avgCost) × multiplier × side`
 *     where `side = +1` for long, `−1` for short.
 */
import Decimal from 'decimal.js';
export interface PositionMathInput {
    quantity: Decimal | string | number;
    marketPrice: Decimal | string | number;
    avgCost: Decimal | string | number;
    multiplier: string;
    side: 'long' | 'short';
}
export interface PositionMathOutput {
    marketValue: string;
    unrealizedPnL: string;
}
/** Coerce multiplier string to Decimal; empty → 1 (the canonical default). */
export declare function multiplierToDecimal(m: string | undefined): Decimal;
/**
 * Compute marketValue and unrealizedPnL from raw position inputs. Brokers
 * call this in their `getPositions` instead of computing the values inline.
 */
export declare function derivePositionMath(input: PositionMathInput): PositionMathOutput;
/**
 * PnL-only convenience for consumers that already have marketValue but
 * need to recompute PnL after avgCost changes (UTA reconcile pipeline,
 * simulator UI on price tick). Same multiplier discipline as derive.
 */
export declare function pnlOf(input: PositionMathInput): string;
export interface AggregateInput {
    side: 'long' | 'short';
    marketValue: Decimal | string | number;
}
export interface AggregateOutput {
    /** cash + Σ(marketValue × side_sign). */
    netLiquidation: Decimal;
    /** Σ(marketValue × side_sign). Signed: positive for net-long books, negative for net-short. */
    totalMarketValue: Decimal;
}
/**
 * Compute account equity from cash + per-position marketValues.
 *
 * The `Position.marketValue` convention in this codebase is always-positive
 * (notional), with side carried separately. Naively summing those into
 * netLiquidation double-counts short positions: a SELL-to-open short adds
 * its premium to cash AND its marketValue gets added on top, leaving netLiq
 * inflated by 2 × |short marketValue|. This helper applies side sign during
 * aggregation so short positions correctly subtract their notional from
 * equity. Use it everywhere a broker's getAccount() builds netLiq from
 * positions instead of reading an upstream-reported equity field.
 */
export declare function aggregateAccountFromPositions(cash: Decimal | string | number, positions: Iterable<AggregateInput>): AggregateOutput;

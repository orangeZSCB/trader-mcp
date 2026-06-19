/**
 * Technical indicator functions — 纯数学计算
 *
 * Trend / momentum:  RSI, BBANDS, MACD, ATR
 * Volume (right-side): RVOL, OBV, MFI, VWAP
 * 接受 number[] 或 TrackedValues（自动提取 values）
 */
import { type TrackedValues } from '../types';
type NumericInput = number[] | TrackedValues;
/** Relative Strength Index (RSI) */
export declare function RSI(data: NumericInput, period?: number): number;
/** Bollinger Bands (BBANDS) */
export declare function BBANDS(data: NumericInput, period?: number, stdDevMultiplier?: number): {
    upper: number;
    middle: number;
    lower: number;
};
/** MACD (Moving Average Convergence Divergence) */
export declare function MACD(data: NumericInput, fastPeriod?: number, slowPeriod?: number, signalPeriod?: number): {
    macd: number;
    signal: number;
    histogram: number;
};
/** Average True Range (ATR) */
export declare function ATR(highs: NumericInput, lows: NumericInput, closes: NumericInput, period?: number): number;
/**
 * Relative Volume (RVOL) — latest bar's volume divided by the average of the
 * preceding `period` bars. The single most useful right-side read: absolute
 * volume is meaningless across tickers (10M shares is huge for one, noise for
 * another); RVOL normalizes it against the symbol's own baseline. >1 means
 * the bar is trading heavier than usual; a 2–3+ print on a move is the
 * volume-confirmation signal momentum traders look for.
 */
export declare function RVOL(volumes: NumericInput, period?: number): number;
/**
 * On-Balance Volume (OBV) — running total that adds the bar's volume on an
 * up-close and subtracts it on a down-close. Returns the latest cumulative
 * value; its slope (vs price) is what carries the accumulation/distribution
 * signal. Pair with CLOSE and VOLUME of the same length.
 */
export declare function OBV(closes: NumericInput, volumes: NumericInput): number;
/**
 * Money Flow Index (MFI) — a volume-weighted RSI on the typical price
 * ((H+L+C)/3), bounded 0–100. Above ~80 = overbought on heavy money inflow,
 * below ~20 = oversold. Needs highs/lows/closes/volumes of equal length.
 */
export declare function MFI(highs: NumericInput, lows: NumericInput, closes: NumericInput, volumes: NumericInput, period?: number): number;
/**
 * Volume-Weighted Average Price (VWAP) over the supplied series — the average
 * price weighted by volume at each bar, using the typical price ((H+L+C)/3).
 * Price above VWAP = buyers in control over the window. Needs
 * highs/lows/closes/volumes of equal length.
 */
export declare function VWAP(highs: NumericInput, lows: NumericInput, closes: NumericInput, volumes: NumericInput): number;
export {};

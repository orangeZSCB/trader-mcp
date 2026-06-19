/**
 * Statistics functions — 纯数学计算
 *
 * SMA, EMA, STDEV, MAX, MIN, SUM, AVERAGE, MEDIAN, ROC, ZSCORE, SLOPE,
 * CORRELATION, HIGHEST, LOWEST
 * 接受 number[] 或 TrackedValues（自动提取 values）
 */
import { type TrackedValues } from '../types';
type NumericInput = number[] | TrackedValues;
/** Simple Moving Average */
export declare function SMA(data: NumericInput, period: number): number;
/** Exponential Moving Average */
export declare function EMA(data: NumericInput, period: number): number;
/** Standard Deviation */
export declare function STDEV(data: NumericInput): number;
/** Maximum value */
export declare function MAX(data: NumericInput): number;
/** Minimum value */
export declare function MIN(data: NumericInput): number;
/** Sum */
export declare function SUM(data: NumericInput): number;
/** Average */
export declare function AVERAGE(data: NumericInput): number;
/** Median */
export declare function MEDIAN(data: NumericInput): number;
/** Rate of change over `period` bars, as a PERCENT: (last − prior) / prior × 100. */
export declare function ROC(data: NumericInput, period: number): number;
/** Z-score of the latest value vs the trailing window: (last − mean) / stdev.
 *  `period` defaults to the whole series. Population stdev (matches STDEV). */
export declare function ZSCORE(data: NumericInput, period?: number): number;
/** Least-squares regression slope over the last `period` points (price change
 *  per bar) — a signed, rankable trend strength. x = 0..period-1. */
export declare function SLOPE(data: NumericInput, period: number): number;
/** Pearson correlation of two series, aligned from the most-recent end over the
 *  overlapping length. Returns −1..1 (0 if either series is flat). */
export declare function CORRELATION(a: NumericInput, b: NumericInput): number;
/** Highest value over the last `period` bars (e.g. a breakout / Donchian top). */
export declare function HIGHEST(data: NumericInput, period: number): number;
/** Lowest value over the last `period` bars. */
export declare function LOWEST(data: NumericInput, period: number): number;
export {};

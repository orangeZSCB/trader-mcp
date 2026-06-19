/**
 * FMP Literal Definitions.
 * Maps to: openbb_fmp/utils/definitions.py
 */
export type FinancialPeriods = 'q1' | 'q2' | 'q3' | 'q4' | 'fy' | 'annual' | 'quarter';
export type FinancialStatementPeriods = 'q1' | 'q2' | 'q3' | 'q4' | 'fy' | 'ttm' | 'annual' | 'quarter';
export type TransactionType = 'award' | 'conversion' | 'return' | 'expire_short' | 'in_kind' | 'gift' | 'expire_long' | 'discretionary' | 'other' | 'small' | 'exempt' | 'otm' | 'purchase' | 'sale' | 'tender' | 'will' | 'itm' | 'trust';
export declare const TRANSACTION_TYPES_DICT: Record<string, string>;

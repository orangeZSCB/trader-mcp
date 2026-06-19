/**
 * Decimal ↔ wei bigint conversions for LeverUp.
 *
 * LeverUp uses a non-uniform decimal scheme that's easy to get wrong:
 * - amountIn: collateral token's native decimals (USDC = 6)
 * - qty: 10 decimals (NOT 18 — protocol-specific)
 * - price / stopLoss / takeProfit: 18 decimals
 *
 * One mistake here and orders go in at 1e8x or 1e8/x the intended size.
 * All conversions are explicit-named to make miswiring loud at the call site.
 */
import Decimal from 'decimal.js';
/** Position size in base asset units (e.g., BTC). 10 decimals per LeverUp protocol. */
export declare const QTY_DECIMALS = 10;
/** Prices, stop-loss, take-profit. 18 decimals. */
export declare const PRICE_DECIMALS = 18;
/** USDC's native decimals — applies to `amountIn` when collateral is USDC. */
export declare const USDC_DECIMALS = 6;
export declare function qtyToWei(qty: Decimal | string): bigint;
export declare function weiToQty(wei: bigint | string): Decimal;
export declare function priceToWei(price: Decimal | string): bigint;
export declare function weiToPrice(wei: bigint | string): Decimal;
export declare function amountInToWei(amount: Decimal | string, tokenDecimals: number): bigint;
export declare function weiToAmountIn(wei: bigint | string, tokenDecimals: number): Decimal;

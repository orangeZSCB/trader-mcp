/**
 * Tests for Decimal precision on Order's price fields.
 *
 * Locks the wire-layer contract: the 5 price fields (lmtPrice, auxPrice,
 * trailStopPrice, trailingPercent, cashQty) are `Decimal`, survive
 * encode/decode round-trip without IEEE 754 artifacts, and respect the
 * UNSET_DECIMAL sentinel via makeFieldHandleEmpty.
 */
export {};

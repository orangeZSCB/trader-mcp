/**
 * Tests for the CCXT-side contract translators.
 *
 * `marketToContract` writes CCXT's wire symbol (`market.symbol`) into
 * `Contract.localSymbol` directly — that string is CCXT's own uniqueness
 * primitive (encodes base/quote/settle) and feeds straight into
 * `getNativeKey` → aliceId. No normalization across brokers.
 */
export {};

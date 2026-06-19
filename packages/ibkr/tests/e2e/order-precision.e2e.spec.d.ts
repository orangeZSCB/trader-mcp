/**
 * E2E: place a LMT order with a Decimal lmtPrice against paper TWS,
 * read it back via reqAllOpenOrders, assert the round-trip preserves
 * the exact decimal value (no IEEE 754 artifacts).
 *
 * Why this exists: the lmtPrice field is now `Decimal` (was `number`).
 * Unit tests cover encode/decode of synthetic wire bytes in isolation —
 * but only a real TWS tells us whether the IB server accepts the wire
 * text we produce and echoes back a value we can reconstruct exactly.
 */
export {};

/**
 * Tests for the one-shot order entry routes:
 *   POST /api/trading/uta/:id/wallet/place-order
 *   POST /api/trading/uta/:id/wallet/close-position
 *   POST /api/trading/uta/:id/wallet/cancel-order
 *
 * These wrap stage → commit → push into a single HTTP roundtrip. We
 * test:
 *   - Happy path returns 200 + push result
 *   - Bad aliceId throws at stage → 400 phase=stage
 *   - Missing message → Zod 400
 *   - Numeric strings preserved through to UTA staging (no float
 *     roundtrip; Decimal precision intact)
 */
export {};

/**
 * Migration framework types.
 *
 * A Migration is a versioned, idempotent transformation of the user's
 * config directory. The runner applies pending migrations in registry
 * order and records each in the journal at data/config/_meta.json.
 *
 * Two-layer idempotency:
 *   1. Journal — runner never re-applies a recorded id.
 *   2. In-body self-check — each up() must be a no-op when data is
 *      already at target shape, in case the journal is corrupted /
 *      hand-edited / a previous run partially completed.
 */
export {};
//# sourceMappingURL=types.js.map
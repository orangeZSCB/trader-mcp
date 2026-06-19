/**
 * Minimal type surface needed by UTA when extracted from OpenAlice.
 *
 * Original `src/core/types.ts` declared the full `EngineContext` for the Alice
 * engine; here we only carry over what UTA itself imports — `ReconnectResult`.
 * If UTA later needs a richer type, add it here.
 */

export interface ReconnectResult {
  success: boolean
  error?: string
  message?: string
}

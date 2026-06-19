/**
 * UTA-side runtime context.
 *
 * Separate from Alice's `EngineContext` (`@/core/types.js`) by design —
 * Alice holds the HTTP SDK adapter `UTAManagerSDK` (`resolve()` returns
 * Promise), while UTA holds the in-process `UTAManager` (`resolve()` is
 * synchronous). Sharing the type name caused tsc errors to flow into
 * the wrong process: see ANG-65 for the original four findings.
 *
 * Only three fields are exposed because that's all the UTA HTTP route
 * handlers actually read (verified by grep). If a new route needs
 * anything else off ctx, add it here — not via casting back to Alice's
 * `EngineContext`.
 */
export {};
//# sourceMappingURL=types.js.map
/**
 * Trading-tools SDK — wraps UTA's HTTP surface in `UTAManagerSDK` +
 * `UTAAccountSDK` so trading tools can consume UTA the same way OpenAlice's
 * in-process callers used to. The public method shape mirrors UTA's original
 * `UTAManager` / `UnifiedTradingAccount` (with formerly-sync methods now
 * returning Promises).
 */
export * from './manager.js';
export * from './account.js';

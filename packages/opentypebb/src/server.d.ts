/**
 * OpenTypeBB — HTTP Server entry point.
 *
 * Usage:
 *   npx tsx src/server.ts
 *   # or after build:
 *   node dist/server.js
 *
 * Environment variables:
 *   OPENTYPEBB_PORT   — Server port (default: 6901)
 *   FMP_API_KEY       — Financial Modeling Prep API key
 *
 * Credentials can also be passed per-request via:
 *   X-OpenBB-Credentials: {"fmp_api_key": "..."}
 */
export {};

/** CCXT standard credential field names (matches base Exchange.requiredCredentials map). */
export const CCXT_CREDENTIAL_FIELDS = [
    'apiKey', 'secret', 'uid', 'accountId', 'login',
    'password', 'twofa', 'privateKey', 'walletAddress', 'token',
];
// Init-retry budget. Defaults are tuned for production where transient
// network blips warrant aggressive retries. E2E (and any harness that can't
// tolerate a single broker burning ~140s per type) overrides via env:
//   CCXT_INIT_RETRIES=2 CCXT_INIT_RETRY_BASE_MS=250
function envInt(name, fallback) {
    const raw = process.env[name];
    if (!raw)
        return fallback;
    const n = Number(raw);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
}
export const MAX_INIT_RETRIES = envInt('CCXT_INIT_RETRIES', 8);
export const INIT_RETRY_BASE_MS = envInt('CCXT_INIT_RETRY_BASE_MS', 500);
//# sourceMappingURL=ccxt-types.js.map
/**
 * Trader-facing projections of the Trading-as-Git commit log.
 *
 * The git log is the faithful narrative (operations + results + sync
 * updates); these are the exchange-frontend views of it: Order History
 * (every order's lifecycle collapsed to one row) and Trade History (fills
 * only). Projection lives in the UTA domain so every surface — UI, MCP
 * tools, CLI — reads the same translation.
 *
 * Contract fields follow the IBKR superset deliberately: options/futures
 * (strike / right / expiry / multiplier) must render correctly the day
 * they arrive, not get retrofitted around a crypto-shaped subset.
 */
export {};
//# sourceMappingURL=history.js.map
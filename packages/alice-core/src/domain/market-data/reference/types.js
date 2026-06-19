/**
 * Reference-data contract — OpenAlice's OWN low-frequency data standard.
 *
 * This is the seam that replaces the OpenBB-compatible passthrough
 * (`/api/market-data-v1`, OBBject envelope, widgets.json). The contract is
 * shaped by what OpenAlice actually consumes (boards + detail panels), not
 * by what any provider happens to expose. Two implementations are planned:
 * in-process (this module, user's own keys) and the hosted OpenAlice hub
 * (same shapes over HTTP, shared cache) — clients must not be able to tell
 * the difference except through `meta`.
 *
 * Row shapes reuse the opentypebb standard models (they are ours — the TS
 * port owns them); what this contract adds is the board grouping and the
 * explicit `meta` envelope.
 */
export {};
//# sourceMappingURL=types.js.map
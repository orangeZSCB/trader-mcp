/**
 * Hub-first wrappers at the client-method seam.
 *
 * Client methods ARE the endpoint catalog: wrapping here means tools, the
 * CLI, and the reference boards all inherit hub coverage with zero changes.
 *
 * v1 covers the FMP calendars (parameterized windows; the boards only
 * cache the default window). FRED/EIA/BLS ride the credential sentinel
 * instead (see credential-map.ts) — their fetchers swap origins, which
 * covers every method of those families at once.
 */
import type { EquityClientLike } from './client/types.js';
import type { HubConfig } from './reference/hub.js';
export declare function withHubCalendars(client: EquityClientLike, hub: HubConfig | undefined): EquityClientLike;

/**
 * TraderHub client — the hosted-boards seam.
 *
 * The hub (https://traderhub.openalice.ai, self-hostable via baseUrl) serves
 * the same reference contract this module builds locally, but with its own
 * upstream keys and caching. Resolution order per board:
 *
 *   hub (enabled + reachable) → local build (user's own keys) → loud error
 *
 * The hub is a convenience layer, never a correctness dependency: with it
 * disabled or down, behavior is exactly the pre-hub behavior. meta.origin
 * says which path served — loud, never silent.
 *
 * Security boundary: hub responses are DATA only. Shape-checked, never
 * interpreted as configuration or instructions.
 */
import type { ReferenceMeta } from './types.js';
export interface HubConfig {
    enabled: boolean;
    baseUrl: string;
}
/** Official hosted hub. Overridable via marketData.hub.baseUrl. */
export declare const DEFAULT_HUB_URL = "https://traderhub.openalice.ai";
export type HubFetcher = <T extends {
    meta: ReferenceMeta;
}>(board: string) => Promise<T | null>;
/** Returns null when the hub is disabled, open-circuited, unreachable, or
 *  returns a non-contract shape — the caller falls through to local. */
export declare function createHubFetcher(cfg: HubConfig | undefined, opts?: {
    timeoutMs?: number;
    breakerMs?: number;
}): HubFetcher;
/** Stamp a locally-built board so the origin is always explicit. */
export declare function markLocal<T extends {
    meta: ReferenceMeta;
}>(board: T): T;

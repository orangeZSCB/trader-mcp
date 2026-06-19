/**
 * Reference cache — the single-node version of the hub's cache layer.
 *
 * Low-frequency data behind per-IP-quota'd upstreams (OECD especially: the
 * data changes quarterly but the anonymous API rate-limits aggressively) is
 * the textbook cache case. Semantics match the future hosted hub exactly —
 * `meta.cachedAt` marks a cache hit, `meta.stale` marks stale-while-error —
 * so moving this behind the hub later swaps the storage, not the contract.
 */
import type { ReferenceMeta } from './types.js';
/** Wrap a board fetcher with TTL caching + in-flight dedupe + stale-while-error. */
export declare function cachedBoard<T extends {
    meta: ReferenceMeta;
}>(ttlMs: number, fn: () => Promise<T>): () => Promise<T>;

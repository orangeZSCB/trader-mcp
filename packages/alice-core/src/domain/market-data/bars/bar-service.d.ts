/**
 * Federated bar layer — service.
 *
 * `getBars(ref, opts)` resolves a bar request to a single source and fetches
 * OHLCV, tagging the result with source metadata. `searchBarSources(query)`
 * surfaces candidate sources for an asset.
 *
 * Phase 0 scope: the vendor branch is fully wired; the UTA branch calls
 * `UTAAccountSDK.getHistorical` (404s until the Phase-1 server route + a
 * per-broker `getHistorical` land). `searchBarSources` is vendor-only here —
 * the UTA search side (and the `ContractSearchResult` wire-shape fix) lands in
 * Phase 1 alongside CCXT. No Phase-0 consumer calls `searchBarSources`.
 */
import type { BarService, BarServiceDeps } from './types.js';
export declare function createBarService(deps: BarServiceDeps): BarService;

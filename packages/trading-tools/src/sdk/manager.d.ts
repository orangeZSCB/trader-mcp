/**
 * UTAManagerSDK — HTTP-backed adapter mirroring `UTAManager`'s public
 * surface so Alice's `main.ts`, telegram-plugin, trading-config UI, and
 * tool layer keep working unchanged after UTA-split v1.
 *
 * Key design choices (memory:linear-vscode-hybrid, port-architecture-3-layers):
 *   - All formerly-sync methods (`resolve`, `get`, `size`, `listUTAs`)
 *     become async. Callsites add a single `await` keyword.
 *   - State-mutating calls (`reconnectUTA`, `removeUTA`) trigger the
 *     Guardian flag protocol — Guardian SIGTERMs UTA and respawns,
 *     picking up whatever Alice wrote to `accounts.json`.
 *   - Setup hooks (`setSnapshotHooks`, `setFxService`,
 *     `registerCcxtToolsIfNeeded`, `initUTA`, `closeAll`) become no-ops
 *     in Alice — UTA owns those concerns end-to-end.
 *
 * The SDK does NOT extend `UTAManager` (which lives in UTA's process,
 * not Alice's after the physical move). It mirrors the *shape* of the
 * public API only.
 */
import type { UTAClient, UTASummary, AggregatedEquity, ContractSearchHit } from '@traderalice/uta-protocol';
import type { ContractDescription, Contract, ContractDetails } from '@traderalice/ibkr';
import type { ReconnectResult } from '@openalice-trading/alice-core/core/types.js';
import { UTAAccountSDK } from './account.js';
export interface UTAManagerSDKDeps {
    client: UTAClient;
}
export declare class UTAManagerSDK {
    private readonly client;
    constructor(deps: UTAManagerSDKDeps);
    /** No-op on the Alice side; UTA bootstraps its own snapshot scheduler. */
    setSnapshotHooks(_hooks: unknown): void;
    /** No-op on the Alice side; UTA owns its own FxService. */
    setFxService(_fx: unknown): void;
    /** No-op on the Alice side; UTA owns the CCXT tool registration. */
    registerCcxtToolsIfNeeded(): void;
    /** No-op on the Alice side — UTA reads accounts.json on boot. Alice
     *  triggering "initUTA" actually means: write accounts.json, touch the
     *  restart flag, let Guardian respawn UTA. That flow lives in
     *  trading-config routes, not here. */
    initUTA(_cfg: unknown): Promise<UTAAccountSDK>;
    /** No-op — Alice has no in-process broker connections to add. */
    add(_uta: unknown): void;
    /** No-op — Alice has no in-process broker connections to remove. */
    remove(_id: string): void;
    /** No-op shutdown — Alice has no broker connections. UTA's own
     *  SIGTERM handler closes its brokers. */
    closeAll(): Promise<void>;
    listUTAs(): Promise<UTASummary[]>;
    /** Async equivalent of `UTAManager.resolve(source?)`. Filters by id or
     *  provider prefix when `source` is given. */
    resolve(source?: string): Promise<UTAAccountSDK[]>;
    /** Like `UTAManager.resolveOne(source)` but async and throws when
     *  resolution is ambiguous or empty. */
    resolveOne(source: string): Promise<UTAAccountSDK>;
    get(id: string): Promise<UTAAccountSDK | undefined>;
    has(id: string): Promise<boolean>;
    /** UTAManager exposed `size` as a sync getter — SDK can't avoid the
     *  HTTP round-trip, so this is a method. Callsites become
     *  `await manager.size()`. */
    size(): Promise<number>;
    getAggregatedEquity(): Promise<AggregatedEquity>;
    /** USD FX rates for the currencies currently in use across all active
     *  UTAs (collected server-side from positions + account base currency).
     *  Used by the AI portfolio tool for cross-currency percentage math. */
    getFxRates(): Promise<Array<{
        currency: string;
        rate: number;
        source: string;
        updatedAt: string;
    }>>;
    reconnectUTA(_id: string): Promise<ReconnectResult>;
    removeUTA(_id: string): Promise<void>;
    searchContracts(pattern: string, _assetClass?: unknown): Promise<ContractSearchHit[]>;
    getContractDetails(_aliceId: string, _query: Contract): Promise<ContractDetails | null>;
}
export type { ContractDescription };

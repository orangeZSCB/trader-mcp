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

import type {
  UTAClient,
  UTASummary,
  AggregatedEquity,
  ContractSearchHit,
} from '@traderalice/uta-protocol'
import type { ContractDescription, Contract, ContractDetails } from '@traderalice/ibkr'
import type { ReconnectResult } from '@openalice-trading/alice-core/core/types.js'
import { UTAAccountSDK, NotImplementedInSDK } from './account.js'

export interface UTAManagerSDKDeps {
  client: UTAClient
}

export class UTAManagerSDK {
  private readonly client: UTAClient

  constructor(deps: UTAManagerSDKDeps) {
    this.client = deps.client
  }

  // ==================== Setup hooks — UTA owns these now ====================

  /** No-op on the Alice side; UTA bootstraps its own snapshot scheduler. */
  setSnapshotHooks(_hooks: unknown): void { /* no-op */ }

  /** No-op on the Alice side; UTA owns its own FxService. */
  setFxService(_fx: unknown): void { /* no-op */ }

  /** No-op on the Alice side; UTA owns the CCXT tool registration. */
  registerCcxtToolsIfNeeded(): void { /* no-op */ }

  /** No-op on the Alice side — UTA reads accounts.json on boot. Alice
   *  triggering "initUTA" actually means: write accounts.json, touch the
   *  restart flag, let Guardian respawn UTA. That flow lives in
   *  trading-config routes, not here. */
  async initUTA(_cfg: unknown): Promise<UTAAccountSDK> {
    throw new NotImplementedInSDK('initUTA', 'Alice does not bootstrap UTAs; write accounts.json + triggerUTARestart()')
  }

  /** No-op — Alice has no in-process broker connections to add. */
  add(_uta: unknown): void { /* no-op */ }

  /** No-op — Alice has no in-process broker connections to remove. */
  remove(_id: string): void { /* no-op */ }

  /** No-op shutdown — Alice has no broker connections. UTA's own
   *  SIGTERM handler closes its brokers. */
  async closeAll(): Promise<void> { /* no-op */ }

  // ==================== Reads (HTTP-backed) ====================

  async listUTAs(): Promise<UTASummary[]> {
    const res = await this.client.get<{ utas: UTASummary[] }>(`/api/trading/uta`)
    return res.utas
  }

  /** Async equivalent of `UTAManager.resolve(source?)`. Filters by id or
   *  provider prefix when `source` is given. */
  async resolve(source?: string): Promise<UTAAccountSDK[]> {
    const all = await this.listUTAs()
    const matches = source
      ? all.filter((u) => u.id === source || u.id.startsWith(`${source}-`))
      : all
    return matches.map((u) => new UTAAccountSDK({ client: this.client, id: u.id, label: u.label }))
  }

  /** Like `UTAManager.resolveOne(source)` but async and throws when
   *  resolution is ambiguous or empty. */
  async resolveOne(source: string): Promise<UTAAccountSDK> {
    const hits = await this.resolve(source)
    if (hits.length === 0) throw new Error(`No UTA matched source "${source}"`)
    if (hits.length > 1) {
      throw new Error(`Source "${source}" is ambiguous — ${hits.length} UTAs match. Use an explicit accountId.`)
    }
    return hits[0]
  }

  async get(id: string): Promise<UTAAccountSDK | undefined> {
    const all = await this.listUTAs()
    const match = all.find((u) => u.id === id)
    return match ? new UTAAccountSDK({ client: this.client, id: match.id, label: match.label }) : undefined
  }

  async has(id: string): Promise<boolean> {
    const all = await this.listUTAs()
    return all.some((u) => u.id === id)
  }

  /** UTAManager exposed `size` as a sync getter — SDK can't avoid the
   *  HTTP round-trip, so this is a method. Callsites become
   *  `await manager.size()`. */
  async size(): Promise<number> {
    return (await this.listUTAs()).length
  }

  async getAggregatedEquity(): Promise<AggregatedEquity> {
    return this.client.get<AggregatedEquity>(`/api/trading/equity`)
  }

  /** USD FX rates for the currencies currently in use across all active
   *  UTAs (collected server-side from positions + account base currency).
   *  Used by the AI portfolio tool for cross-currency percentage math. */
  async getFxRates(): Promise<Array<{ currency: string; rate: number; source: string; updatedAt: string }>> {
    const res = await this.client.get<{ rates: Array<{ currency: string; rate: number; source: string; updatedAt: string }> }>(`/api/trading/fx-rates`)
    return res.rates
  }

  // ==================== Lifecycle ====================
  // In trading-mcp, UTA process lifecycle is owned by the spawn-and-supervise
  // mcp-server. The SDK does not expose restart / remove operations to AI tools
  // — those are deliberately out of scope (UTA management is the server's job,
  // not an agent capability).

  async reconnectUTA(_id: string): Promise<ReconnectResult> {
    throw new NotImplementedInSDK('reconnectUTA', 'UTA process lifecycle is owned by the trading-mcp server, not the SDK.')
  }

  async removeUTA(_id: string): Promise<void> {
    throw new NotImplementedInSDK('removeUTA', 'UTA process lifecycle is owned by the trading-mcp server, not the SDK.')
  }

  // ==================== Search ====================

  async searchContracts(
    pattern: string,
    _assetClass?: unknown,
  ): Promise<ContractSearchHit[]> {
    // The route returns flat per-account hits ({ source, contract,
    // derivativeSecTypes }), NOT the grouped ContractSearchResult shape.
    const res = await this.client.get<{ results: ContractSearchHit[] }>(
      `/api/trading/contracts/search`,
      { pattern },
    )
    return res.results
  }

  async getContractDetails(
    _aliceId: string,
    _query: Contract,
  ): Promise<ContractDetails | null> {
    throw new NotImplementedInSDK(
      'getContractDetails',
      'GET /api/trading/uta/:id/contracts/details',
    )
  }
}

export type { ContractDescription }

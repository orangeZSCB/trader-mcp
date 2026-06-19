/**
 * Reference-data service — in-process implementation of the reference
 * contract (see types.ts). Aggregates the opentypebb SDK clients into
 * board-shaped payloads with the explicit meta envelope.
 */
import type { DerivativesClientLike, EconomyClientLike, EquityClientLike, IndexClientLike } from '../client/types.js';
import type { ReferenceDataService } from './types.js';
import { type HubConfig } from './hub.js';
export interface ReferenceDataDeps {
    equityClient: EquityClientLike;
    economyClient: EconomyClientLike;
    derivativesClient: DerivativesClientLike;
    indexClient: IndexClientLike;
    /** Configured default equity provider — the meta label. The client routes
     *  by its constructed default, so the label is the REQUESTED provider
     *  (same caveat as the bar layer's vendor meta). */
    equityProvider: string;
    /** Hosted-hub config (marketData.hub). Undefined = local-only. */
    hub?: HubConfig;
}
export declare function createReferenceData(deps: ReferenceDataDeps): ReferenceDataService;

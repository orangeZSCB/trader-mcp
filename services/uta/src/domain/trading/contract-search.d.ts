/**
 * Aggregate broker-side contract search across all configured UTAs.
 *
 * Shared by the AI tool (`searchContracts`) and the HTTP route
 * (`GET /api/trading/contracts/search`) — both surfaces must return the
 * same shape so a Market workbench card and an LLM see exactly what the
 * other one would.
 *
 * Important — this is the **trading**-side identity layer. The pattern
 * is matched fuzzy / heuristically against each broker's catalogue and
 * the returned `aliceId` is the canonical identifier downstream order
 * APIs expect. Don't try to bridge the resulting symbol back to a
 * data-vendor identity (that's structurally a different namespace).
 */
import type { UTAManager } from './uta-manager.js';
import { type AssetClassHint } from './contract-search-rules.js';
export type { ContractSearchHit } from '@traderalice/uta-protocol';
import type { ContractSearchHit } from '@traderalice/uta-protocol';
export declare function searchTradeableContracts(manager: UTAManager, pattern: string, assetClass?: AssetClassHint): Promise<ContractSearchHit[]>;

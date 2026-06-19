/**
 * Sector Rotation Tool
 *
 * sectorRotation: cross-sectional view of the 11 GICS sector ETFs (+ SPY anchor)
 *   on multi-period momentum and the two volume axes, ranked by a blended
 *   rotation score. Pure orchestration: fetch daily histories, hand to the
 *   domain compute (`domain/analysis/sector-rotation`).
 */
import type { EquityClientLike } from '@openalice-trading/alice-core/domain/market-data/client/types.js';
import { type SectorRotationResult } from '@openalice-trading/alice-core/domain/analysis/sector-rotation.js';
import { type HubConfig } from '@openalice-trading/alice-core/domain/market-data/reference/hub.js';
import type { ReferenceMeta } from '@openalice-trading/alice-core/domain/market-data/reference/types.js';
export declare function createSectorRotationTools(equityClient: EquityClientLike, hub?: HubConfig): {
    sectorRotation: import("ai").Tool<Record<string, never>, SectorRotationResult & {
        meta: ReferenceMeta;
    }>;
};

/**
 * Shipping board — daily transit volume through the headline maritime
 * chokepoints (IMF PortWatch satellite AIS, keyless, weekly updates).
 *
 * The supply-chain narrative read: Red Sea reroutes show as Suez ↓ /
 * Cape of Good Hope ↑; Panama drought shows as Panama ↓.
 */
import type { EconomyClientLike } from '../client/types.js';
import type { ReferenceMeta } from './types.js';
export interface ShippingPoint {
    date: string;
    /** Total trade volume estimate, metric tons. */
    tons: number | null;
    /** Number of transiting vessels. */
    vessels: number | null;
}
export interface ShippingCurve {
    /** Name fragment we queried with (stable key for the UI). */
    key: string;
    /** Resolved chokepoint name from the data, e.g. 'Suez Canal'. */
    name: string;
    points: ShippingPoint[];
    latest: ShippingPoint | null;
}
export interface ShippingBoard {
    curves: ShippingCurve[];
    errors?: Record<string, string>;
    meta: ReferenceMeta;
}
export declare function fetchShipping(economyClient: EconomyClientLike): Promise<ShippingBoard>;

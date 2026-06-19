/**
 * Crypto futures term structure — Deribit curve (keyless).
 *
 * The PERPETUAL row anchors as the spot proxy; dated futures get an
 * annualized basis vs that anchor: (fut/spot − 1) × 365/days. Contango /
 * backwardation reads directly off the sign.
 */
import type { DerivativesClientLike } from '../client/types.js';
import type { ReferenceMeta } from './types.js';
export interface TermPoint {
    /** ISO expiry date, e.g. '2026-09-25'. */
    expiration: string;
    price: number | null;
    daysToExpiry: number | null;
    /** Annualized basis vs the perpetual, in percent. Null when either leg
     *  is missing or expiry is too near for the annualization to be sane. */
    annualizedBasis: number | null;
}
export interface TermCurve {
    symbol: string;
    /** Perpetual price — the spot proxy the basis is computed against. */
    spot: number | null;
    points: TermPoint[];
}
export interface TermStructureBoard {
    curves: TermCurve[];
    errors?: Record<string, string>;
    meta: ReferenceMeta;
}
export declare function fetchTermStructure(derivativesClient: DerivativesClientLike): Promise<TermStructureBoard>;

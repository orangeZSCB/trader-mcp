/**
 * Fed board — the central-bank-policy read in one screen:
 *   - H.4.1 balance sheet (FRED): total assets / Treasuries / MBS → QT/QE
 *   - Primary dealer net positions (NY Fed, keyless) → intermediation
 *   - FOMC documents (federalreserve.gov, keyless) → statements & minutes
 *
 * Three independent sources — per-section failures annotate, total failure
 * throws (two-grain loud-failure, same as the other boards).
 */
import type { EconomyClientLike } from '../client/types.js';
import type { MacroSeriesCard, ReferenceMeta } from './types.js';
export interface FedDocument {
    date: string;
    title: string;
    type: string;
    url: string;
}
export interface FedBoard {
    /** Balance-sheet + dealer-positioning sparkline cards (USD, absolute). */
    cards: MacroSeriesCard[];
    /** Latest FOMC statements / minutes / projections, newest first. */
    documents: FedDocument[];
    errors?: Partial<Record<'balanceSheet' | 'dealers' | 'documents', string>>;
    meta: ReferenceMeta;
}
export declare function fetchFedBoard(economyClient: EconomyClientLike): Promise<FedBoard>;

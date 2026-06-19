/**
 * Global macro board — cross-country comparison from OECD (keyless).
 *
 * Columns: CPI YoY, short-term interest rate, composite leading indicator.
 * (Real GDP is deliberately absent: the OECD GDP dataset paths 404 since
 * the upstream SDMX reshuffle — tracked in Linear, not silently empty.)
 *
 * Unit normalization happens HERE, not in the UI: OECD returns CPI YoY in
 * percent (3.81) but interest rates as fractions (0.0372) — cells always
 * carry display percent.
 */
import type { EconomyClientLike } from '../client/types.js';
import type { ReferenceMeta } from './types.js';
export interface GlobalMacroCell {
    value: number | null;
    date: string | null;
    error?: string;
}
export interface GlobalMacroRow {
    /** opentypebb country slug, e.g. 'united_states'. */
    country: string;
    label: string;
    cpiYoy: GlobalMacroCell;
    shortRate: GlobalMacroCell;
    cli: GlobalMacroCell;
    /** Real house price index, 2015 = 100 — cross-country comparable. */
    housePrice: GlobalMacroCell;
    /** Share price index, 2015 = 100. */
    sharePrice: GlobalMacroCell;
}
export interface GlobalMacroBoard {
    rows: GlobalMacroRow[];
    meta: ReferenceMeta;
}
export declare function fetchGlobalMacro(economyClient: EconomyClientLike): Promise<GlobalMacroBoard>;

/**
 * Sector rotation — cross-sectional comparison of the GICS sector ETFs on
 * multi-period momentum and the two volume axes, to read where capital is
 * rotating (ANG-80).
 *
 * The launcher enumerates ONLY the broad sector ETFs (stable, ~MECE coordinate
 * system). Specific themes are reached by the agent via the ETF tools (etfSearch
 * / etfGetInfo), not enumerated here.
 *
 * This module is pure: `computeSectorRotation` takes already-fetched OHLCV
 * histories and returns the ranked table. Fetching lives in the tool layer.
 */
import type { OhlcvData } from './indicator/types.js';
import type { EquityClientLike } from '../market-data/client/types.js';
export interface SectorEtf {
    symbol: string;
    sector: string;
}
/** The 11 SPDR Select Sector ETFs (GICS). The enumerated rotation universe. */
export declare const GICS_SECTOR_ETFS: SectorEtf[];
/** Broad-market anchor for relative strength (beat/lag the tape). */
export declare const BENCHMARK_SYMBOL = "SPY";
/** Trading-day lookbacks per period label. */
export declare const PERIOD_DAYS: {
    readonly '1D': 1;
    readonly '1W': 5;
    readonly '1M': 21;
    readonly '3M': 63;
    readonly '6M': 126;
};
export type RotationPeriod = keyof typeof PERIOD_DAYS;
export interface SectorRotationRow {
    symbol: string;
    sector: string;
    /** Cumulative % return over each lookback (fraction, e.g. 0.034 = +3.4%). */
    returns: Record<RotationPeriod, number | null>;
    /** Return minus the benchmark's over the same lookback. */
    rel_strength: Record<RotationPeriod, number | null>;
    /** Per-trading-day pace of the 1W window minus the 3M window. >0 = accelerating. */
    momentum_acceleration: number | null;
    /** Latest traded notional (close × volume). */
    dollar_volume: number | null;
    /** This sector's share of the 11-set's total dollar volume today. */
    dv_share: number | null;
    /** dv_share minus the sector's share computed off 20-day-average dollar volume.
     *  >0 = taking a bigger slice of sector volume than its recent norm = rotating in. */
    dv_share_change: number | null;
    /** Today's volume / 20-day average volume. */
    rvol: number | null;
    /** Blended cross-sectional rank: mean of z(momentum_acceleration) and
     *  z(dv_share_change) across the 11 sectors. Higher = rotating in. Null if
     *  neither input is available. */
    rotation_score: number | null;
    bars: number;
}
export interface SectorRotationResult {
    asOf: string;
    benchmark: {
        symbol: string;
        returns: Record<RotationPeriod, number | null>;
    };
    /** Sorted by rotation_score desc; rows with a null score sink to the bottom. */
    sectors: SectorRotationRow[];
    methodology: string;
}
/**
 * Compute the sector rotation table from pre-fetched daily OHLCV histories.
 * `histories` is keyed by symbol and must include the GICS sector ETFs; the
 * benchmark (SPY) is optional but enables rel_strength.
 */
export declare function computeSectorRotation(histories: Record<string, OhlcvData[]>): SectorRotationResult;
/**
 * Fetch the daily histories for the GICS sector ETFs (+ SPY) and compute the
 * rotation table. Shared by the `sectorRotation` AI tool and the
 * `/api/market/sector-rotation` HTTP route so both read identically.
 */
export declare function fetchSectorRotation(equityClient: EquityClientLike): Promise<SectorRotationResult>;

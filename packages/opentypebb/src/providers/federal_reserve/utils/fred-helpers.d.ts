/**
 * FRED API shared helpers.
 *
 * Provides reusable functions for fetching data from the
 * Federal Reserve Economic Data (FRED) API.
 */
export interface FredObservation {
    date: string;
    value: string;
}
export interface FredSeriesInfo {
    id: string;
    title: string;
    frequency_short: string;
    units_short: string;
    seasonal_adjustment_short: string;
    last_updated: string;
    notes: string;
}
/**
 * Fetch observations for a single FRED series.
 *
 * When the caller supplies `limit` without an explicit start date,
 * "limit N" means "the latest N observations" — fetch desc and reverse
 * to ascending so downstream date-based merges keep working. Asking
 * upstream desc + reversing is what aligns with the OpenBB Python
 * upstream and with user intuition; the prior asc default returned
 * 1946-era observations for any limited query without an anchor date.
 */
export declare function fetchFredSeries(seriesId: string, apiKey: string, opts?: {
    startDate?: string | null;
    endDate?: string | null;
    limit?: number;
    sortOrder?: 'asc' | 'desc';
    frequency?: string;
    units?: string;
}): Promise<FredObservation[]>;
/**
 * Fetch multiple FRED series and merge by date.
 * Returns records keyed by date, with each series as a field.
 */
export declare function fetchFredMultiSeries(seriesIds: string[], apiKey: string, opts?: {
    startDate?: string | null;
    endDate?: string | null;
    limit?: number;
    frequency?: string;
}): Promise<Record<string, Record<string, number | null>>>;
/**
 * Search FRED series by keyword.
 */
export declare function fredSearchApi(query: string, apiKey: string, opts?: {
    limit?: number;
    offset?: number;
}): Promise<FredSeriesInfo[]>;
/**
 * Fetch a FRED release table.
 */
export declare function fredReleaseTableApi(releaseId: string, apiKey: string, opts?: {
    elementId?: number;
    date?: string;
}): Promise<Record<string, unknown>[]>;
/**
 * Fetch FRED regional/GeoFRED data.
 *
 * GeoFRED lives at api.stlouisfed.org/geofred/... — a sibling tree of
 * /fred/, not a child. The endpoint takes `series_id` (e.g. WIPCPI for
 * per-capita income), and returns data nested under `meta.data`, keyed
 * by observation date.
 */
export declare function fredRegionalApi(seriesId: string, apiKey: string, opts?: {
    regionType?: string;
    date?: string;
    startDate?: string;
    seasonalAdjustment?: string;
    units?: string;
    frequency?: string;
    transformationCode?: string;
}): Promise<Record<string, unknown>[]>;
/**
 * Convert a FRED multi-series result to an array of flat records.
 */
export declare function multiSeriesToRecords(dataMap: Record<string, Record<string, number | null>>, fieldMap?: Record<string, string>): Record<string, unknown>[];
/**
 * Get credentials helper — extracts the FRED API key.
 *
 * The SDK path delivers the key as `federal_reserve_api_key` (the
 * provider-prefixed form, see Provider constructor). Older callers
 * and direct helper invocations may still pass `fred_api_key` or
 * `api_key`; keep them as fallback so this helper stays compatible
 * with both call sites.
 */
export declare function getFredApiKey(credentials: Record<string, string> | null): string;

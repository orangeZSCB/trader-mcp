/**
 * FX Rate Service — provides USD exchange rates with a dual-table architecture:
 *
 * 1. **Default table** (hardcoded) — developer-maintained, updated with releases.
 *    Guarantees UTA can run even with zero network connectivity.
 * 2. **Live table** (runtime cache) — populated from the market-data currency client.
 *    Provides fresh rates when available.
 *
 * Lookup priority: live (fresh) → live (stale cache) → default table → 1:1 fallback.
 */
import type { CurrencyClientLike } from '@openalice-trading/alice-core/domain/market-data/client/types.js';
export interface FxRateEntry {
    rate: number;
    updatedAt: string;
}
export type FxRateTable = Record<string, FxRateEntry>;
export interface FxRate {
    /** Conversion rate: 1 unit of `from` currency = `rate` units of USD. */
    rate: number;
    /** Where this rate came from. */
    source: 'live' | 'cached' | 'default';
    /** When this rate was last updated (ISO 8601). */
    updatedAt: string;
    /** True when live data has expired but is still being used. */
    stale?: boolean;
}
export interface ConvertResult {
    /** Amount converted to USD (string to prevent IEEE 754 artifacts). */
    usd: string;
    /** Present only when a default (hardcoded) rate was used. Includes the updatedAt date. */
    fxWarning?: string;
}
export declare class FxService {
    private readonly liveRates;
    private readonly ttlMs;
    private readonly client?;
    /** Track which default-rate currencies have already been warned about, to avoid log spam. */
    private readonly defaultWarned;
    private readonly hub?;
    /** Whole hub FX table, cached. The hub refreshes hourly; 30min here. */
    private hubTable;
    private hubDownUntil;
    /**
     * @param currencyClient — optional. Without it, FxService works purely from the default table.
     * @param ttlMs — cache TTL in milliseconds. Default 5 minutes.
     * @param hub — optional TraderHub config; one GET serves the whole table.
     */
    constructor(currencyClient?: CurrencyClientLike, ttlMs?: number, hub?: {
        enabled: boolean;
        baseUrl: string;
    });
    /**
     * Hub FX table lookup. DATA boundary: rates are shape- and
     * sanity-checked (finite, > 0) and only ever feed display-level USD
     * conversion — never order placement.
     */
    private hubRate;
    /**
     * Get the USD exchange rate for a given currency.
     *
     * Priority: fresh cache → hub table → vendor client → stale cache →
     * default table → 1:1 fallback.
     */
    getRate(from: string): Promise<FxRate>;
    /**
     * Convert an amount in the given currency to USD.
     * Returns a warning only when the default (hardcoded) table is used.
     */
    convertToUsd(amount: string, currency: string): Promise<ConvertResult>;
}

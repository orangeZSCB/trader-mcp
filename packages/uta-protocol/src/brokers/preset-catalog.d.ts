/**
 * Broker Preset Catalog — Zod-defined preset declarations.
 *
 * Single source of truth for every broker preset the wizard offers.
 * Each preset is one user-facing "account type" (e.g., OKX, Bybit, Alpaca).
 * Multiple presets map to a small set of engine implementations
 * (CcxtBroker, AlpacaBroker, IbkrBroker) — same many-to-few pattern as
 * the AI provider preset system in src/ai-providers/preset-catalog.ts.
 *
 * To add a new preset: add an entry below + register in BROKER_PRESET_CATALOG.
 */
import { z } from 'zod';
export type BrokerEngine = 'ccxt' | 'alpaca' | 'ibkr' | 'leverup' | 'longbridge' | 'mock';
export interface ModeOption {
    id: string;
    label: string;
}
/** Field shown on an account card under the account name (e.g., "OKX · Demo Trading"). */
export interface SubtitleSegment {
    /** Field path inside presetConfig (e.g., "mode"). */
    field: string;
    /** Static text rendered when the field is truthy. */
    label?: string;
    /** Static text rendered when the field is falsy (boolean fields only). */
    falseLabel?: string;
    /** Prefix prepended to the value (text fields). */
    prefix?: string;
}
export interface BrokerPresetDef {
    /** Stable id stored on disk in UTAConfig.presetId. Used as the prefix
     * of derived UTA ids — e.g. an OKX preset → `okx-a3f2b1c4`. Renaming
     * this is a breaking change for existing UTA ids on disk. */
    id: string;
    /** User-facing label in the wizard. */
    label: string;
    /** Short description shown under the label. */
    description: string;
    /**
     * Group in the picker UI. Wizard renders 'recommended' first, then
     * 'crypto', then 'testing'. Securities + Longbridge HK + Hyperliquid sit
     * in 'recommended' (Hyperliquid grandfathered for product-history reasons,
     * not because it's not crypto). Everything else crypto-native — incl.
     * CCXT Custom — lands in 'crypto'. The Simulator preset (mock engine)
     * lives alone in 'testing' so users can't conflate it with real-money brokers.
     */
    category: 'recommended' | 'crypto' | 'testing';
    /** Optional explanatory text rendered with the form (mode-specific gotchas, etc.). */
    hint?: string;
    /** Default account id suggested in the wizard (e.g., "okx-main"). */
    defaultName: string;
    /** 2–3-char badge text for the account card. */
    badge: string;
    /** Tailwind text color for the badge. */
    badgeColor: string;
    /** Engine class invoked after preset resolution. */
    engine: BrokerEngine;
    /** Guard category for the guards UI. */
    guardCategory: 'crypto' | 'securities';
    /** Zod schema for presetConfig — validates only the fields this preset uses. */
    zodSchema: z.ZodType;
    /** Optional "Mode" dropdown (Live/Demo/Testnet/Paper/etc.). */
    modes?: ModeOption[];
    /** Account-card subtitle layout. */
    subtitleFields: SubtitleSegment[];
    /** Field names that should render as password inputs. */
    writeOnlyFields?: string[];
    /**
     * presetConfig field names that determine broker physical identity.
     * `deriveUtaId` reads these (and only these) from validated presetConfig
     * to compute a deterministic UTA id. Two configs with the same values
     * across these fields → same id → same on-disk commit log inheritance.
     *
     * Pick fields that uniquely identify a broker account: API key for
     * centralized exchanges, wallet address for DEX, mode for paper/live
     * separation, etc. Don't include cosmetic fields (label, etc.).
     */
    fingerprintFields: string[];
    /**
     * Translate validated preset form data into the engine's internal
     * config dict. This is where preset-specific knowledge (e.g., "OKX
     * demo mode = sandbox=true") lives.
     */
    toEngineConfig: (presetData: Record<string, unknown>) => Record<string, unknown>;
    /**
     * Whether a given preset config represents a paper/demo/testnet
     * account. Used by E2E test setup to filter out live accounts.
     * Default: true if presetData.mode is one of demo/testnet/paper.
     */
    isPaper?: (presetData: Record<string, unknown>) => boolean;
}
export declare const BINANCE_PRESET: BrokerPresetDef;
export declare const OKX_PRESET: BrokerPresetDef;
export declare const BYBIT_PRESET: BrokerPresetDef;
export declare const HYPERLIQUID_PRESET: BrokerPresetDef;
export declare const BITGET_PRESET: BrokerPresetDef;
export declare const CCXT_CUSTOM_PRESET: BrokerPresetDef;
export declare const ALPACA_PRESET: BrokerPresetDef;
export declare const IBKR_PRESET: BrokerPresetDef;
export declare const LONGBRIDGE_PRESET: BrokerPresetDef;
export declare const LEVERUP_PRESET: BrokerPresetDef;
export declare const SIMULATOR_PRESET: BrokerPresetDef;
export declare const BROKER_PRESET_CATALOG: BrokerPresetDef[];
/** Lookup by id. Throws if unknown. */
export declare function getBrokerPreset(presetId: string): BrokerPresetDef;
/** Returns true if presetId resolves to a paper/demo/testnet account. */
export declare function isPaperPreset(presetId: string, presetConfig: Record<string, unknown>): boolean;
/**
 * Derive a stable, broker-identity-anchored UTA id from a preset and its
 * presetConfig. Reads only the fields listed in `preset.fingerprintFields`
 * — missing keys fill as null so identity is stable across optional-field
 * presence variations.
 *
 * Format: `${preset.id}-${8 hex}` (8 hex = 32 bits, ~4 billion buckets;
 * collision risk is negligible for typical user UTA counts).
 *
 * Stability guarantees:
 *   - Same preset + same fingerprint-field values → byte-identical id.
 *   - Object key order doesn't matter (canonical JSON sorts).
 *   - Renaming preset.id breaks all derived ids for that preset (treat
 *     preset id as a stable on-disk identifier; same as we already do).
 */
export declare function deriveUtaId(preset: BrokerPresetDef, presetConfig: Record<string, unknown>): string;
/**
 * Mint a random short hex token. Used by the create route to seed
 * `_instanceId` on Mock presets so each sim UTA gets a unique fingerprint.
 */
export declare function mintInstanceId(): string;

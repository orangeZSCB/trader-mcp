/**
 * Broker Preset serialization layer.
 *
 * Reads BrokerPresetDef from preset-catalog.ts and converts each Zod
 * schema to a JSON Schema that the frontend can render via the
 * shared `useSchemaForm` hook (ui/src/hooks/useSchemaForm.ts).
 *
 * Mirrors src/ai-providers/presets.ts — same buildJsonSchema pipeline,
 * same writeOnly + oneOf-with-titles conventions for password inputs and
 * labeled dropdowns.
 */
import { type ModeOption, type SubtitleSegment } from './preset-catalog.js';
export interface SerializedBrokerPreset {
    id: string;
    label: string;
    description: string;
    category: 'recommended' | 'crypto' | 'testing';
    hint?: string;
    defaultName: string;
    badge: string;
    badgeColor: string;
    engine: 'ccxt' | 'alpaca' | 'ibkr' | 'leverup' | 'longbridge' | 'mock';
    guardCategory: 'crypto' | 'securities';
    modes?: ModeOption[];
    subtitleFields: SubtitleSegment[];
    schema: Record<string, unknown>;
}
export declare const BUILTIN_BROKER_PRESETS: SerializedBrokerPreset[];

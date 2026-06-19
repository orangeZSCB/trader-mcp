/**
 * Broker Factory — preset → engine resolver.
 *
 * Looks up the UTAConfig's preset, validates the user-facing form
 * data against the preset's own Zod schema, calls preset.toEngineConfig
 * to translate it into the engine-shaped dict, then delegates to the
 * target engine's fromConfig.
 *
 * UTAConfig.presetId is the only thing tying account records to
 * engine implementations — the engine identity is never serialized
 * directly. Swapping CCXT for a native client later means changing the
 * preset's `engine` field; on-disk account records stay valid.
 */
import type { IBroker } from './types.js';
import type { UTAConfig } from '@openalice-trading/alice-core/core/config.js';
import type { FxService } from '../fx-service.js';
/** Optional services brokers can opt into via duck-typed setters. */
export interface BrokerServices {
    fxService?: FxService;
}
/** Create an IBroker from account config via preset resolution. */
export declare function createBroker(config: UTAConfig, services?: BrokerServices): IBroker;

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
import { BROKER_ENGINE_REGISTRY } from './registry.js';
import { getBrokerPreset } from '@traderalice/uta-protocol';
/** Create an IBroker from account config via preset resolution. */
export function createBroker(config, services) {
    const preset = getBrokerPreset(config.presetId);
    const presetData = preset.zodSchema.parse(config.presetConfig);
    const engineConfig = preset.toEngineConfig(presetData);
    const entry = BROKER_ENGINE_REGISTRY[preset.engine];
    if (!entry) {
        throw new Error(`Unknown broker engine "${preset.engine}" referenced by preset "${preset.id}"`);
    }
    const broker = entry.fromConfig({
        id: config.id,
        label: config.label,
        // keyless flows through brokerConfig so engines that support public-data-only
        // mode (CCXT) can skip credential validation; others ignore it.
        brokerConfig: { ...engineConfig, keyless: config.keyless ?? false },
    });
    // Multi-currency-aware brokers (e.g. Longbridge) opt in via setFxService.
    // Single-currency brokers don't expose this method and skip the call.
    if (services?.fxService && typeof broker.setFxService === 'function') {
        broker.setFxService(services.fxService);
    }
    return broker;
}
//# sourceMappingURL=factory.js.map
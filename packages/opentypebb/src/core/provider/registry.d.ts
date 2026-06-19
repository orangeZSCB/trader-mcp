/**
 * Provider Registry.
 * Maps to: openbb_core/provider/registry.py
 *
 * Maintains a registry of all available providers.
 * In Python, RegistryLoader uses entry_points for dynamic discovery.
 * In TypeScript, providers are explicitly imported and registered.
 */
import type { Provider } from './abstract/provider.js';
export declare class Registry {
    private readonly _providers;
    /** Return a map of registered providers. */
    get providers(): ReadonlyMap<string, Provider>;
    /** Include a provider in the registry. */
    includeProvider(provider: Provider): void;
}

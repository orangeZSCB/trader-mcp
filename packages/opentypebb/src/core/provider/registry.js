/**
 * Provider Registry.
 * Maps to: openbb_core/provider/registry.py
 *
 * Maintains a registry of all available providers.
 * In Python, RegistryLoader uses entry_points for dynamic discovery.
 * In TypeScript, providers are explicitly imported and registered.
 */
export class Registry {
    _providers = new Map();
    /** Return a map of registered providers. */
    get providers() {
        return this._providers;
    }
    /** Include a provider in the registry. */
    includeProvider(provider) {
        this._providers.set(provider.name.toLowerCase(), provider);
    }
}
//# sourceMappingURL=registry.js.map
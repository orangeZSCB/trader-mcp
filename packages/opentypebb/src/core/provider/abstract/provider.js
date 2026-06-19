/**
 * Provider class.
 * Maps to: openbb_core/provider/abstract/provider.py
 *
 * Serves as the provider extension entry point. Each data provider
 * (yfinance, fmp, sec, etc.) creates a Provider instance with its
 * name, description, credentials, and a fetcher_dict mapping model
 * names to Fetcher classes.
 */
export class Provider {
    name;
    description;
    website;
    credentials;
    fetcherDict;
    reprName;
    instructions;
    constructor(config) {
        this.name = config.name;
        this.description = config.description;
        this.website = config.website;
        this.fetcherDict = config.fetcherDict;
        this.reprName = config.reprName;
        this.instructions = config.instructions;
        // Auto-prefix credentials with provider name (matches Python behavior)
        // Example: credentials=["api_key"], name="fmp" → ["fmp_api_key"]
        if (config.credentials) {
            this.credentials = config.credentials.map((c) => `${this.name.toLowerCase()}_${c}`);
        }
        else {
            this.credentials = [];
        }
    }
}
//# sourceMappingURL=provider.js.map
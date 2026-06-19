// Factory
export { createBroker } from './factory.js';
// Presets (the user-facing surface — many presets, few engines) — re-export
// from the shared `@traderalice/uta-protocol` package so existing consumers
// importing `from '@openalice-trading/alice-core/domain/trading/brokers/index.js'` keep working.
export { BROKER_PRESET_CATALOG, getBrokerPreset, isPaperPreset, BUILTIN_BROKER_PRESETS, } from '@traderalice/uta-protocol';
// Alpaca
export { AlpacaBroker } from './alpaca/index.js';
// CCXT
export { CcxtBroker } from './ccxt/index.js';
export { createCcxtProviderTools } from './ccxt/index.js';
// IBKR
export { IbkrBroker } from './ibkr/index.js';
//# sourceMappingURL=index.js.map
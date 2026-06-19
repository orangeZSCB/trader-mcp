/**
 * Internal Broker Engine Registry — maps engine names to implementation classes.
 *
 * NOT exposed to the frontend. The user-facing surface is BROKER_PRESET_CATALOG
 * (preset-catalog.ts), which decides *which* engine to use and translates
 * preset form data into the engine's internal config dict.
 *
 * This keeps the option open to swap CcxtBroker for native exchange clients
 * later without touching the preset surface or any UI.
 */

import type { z } from 'zod'
import type { IBroker } from './types.js'
import { CcxtBroker } from './ccxt/CcxtBroker.js'
import { AlpacaBroker } from './alpaca/AlpacaBroker.js'
import { IbkrBroker } from './ibkr/IbkrBroker.js'
import { LeverupBroker } from './others/leverup/index.js'
// LongbridgeBroker is lazy-imported below — its native binding (longbridge-linux-x64-gnu)
// has no published 4.3.2 release on npm, so eager import would break startup on Linux
// until a longbridge account is actually configured. Trading-mcp v1 keeps the engine
// available but only loads it on demand.
import { MockBroker } from './mock/MockBroker.js'
import type { BrokerEngine } from '@traderalice/uta-protocol'

/** Minimal engine entry: just enough to validate + instantiate. */
export interface BrokerEngineEntry {
  /** Zod schema for the engine-shaped config dict (post preset translation). */
  configSchema: z.ZodType
  /** Construct a broker instance from { id, label, brokerConfig }. */
  fromConfig: (config: { id: string; label?: string; brokerConfig: Record<string, unknown> }) => IBroker
}

export const BROKER_ENGINE_REGISTRY: Record<BrokerEngine, BrokerEngineEntry> = {
  ccxt: {
    configSchema: CcxtBroker.configSchema,
    fromConfig: CcxtBroker.fromConfig,
  },
  alpaca: {
    configSchema: AlpacaBroker.configSchema,
    fromConfig: AlpacaBroker.fromConfig,
  },
  ibkr: {
    configSchema: IbkrBroker.configSchema,
    fromConfig: IbkrBroker.fromConfig,
  },
  leverup: {
    configSchema: LeverupBroker.configSchema,
    fromConfig: LeverupBroker.fromConfig,
  },
  longbridge: {
    // Lazy-load to avoid eager native-binding crash on platforms where the
    // longbridge optional dep didn't ship a binary.
    get configSchema(): z.ZodType {
      // ESM `import()` is async, but configSchema must be sync. Throw if read
      // when the binding wasn't installed; preset-catalog only reads this when
      // a user actually configures a longbridge account.
      throw new Error('LongbridgeBroker engine not available: native binding missing.')
    },
    fromConfig: (config) => {
      // Sync entry point that lazy-requires longbridge. Errors here surface
      // to UTAManager.initUTA's per-account try/catch, so other brokers stay
      // up.
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { LongbridgeBroker } = require('./longbridge/index.js') as typeof import('./longbridge/index.js')
      return LongbridgeBroker.fromConfig(config)
    },
  },
  mock: {
    configSchema: MockBroker.configSchema,
    fromConfig: MockBroker.fromConfig,
  },
}

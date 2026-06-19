/**
 * Bybit-specific overrides for CcxtBroker.
 *
 * Bybit quirks:
 * - fetchOrder() requires { acknowledged: true } and only searches last 500 orders
 * - fetchOpenOrder / fetchClosedOrder are reliable, query by ID directly with no limit
 * - Both support { stop: true } for conditional/trigger orders
 */
import type { CcxtExchangeOverrides } from '../overrides.js';
export declare const bybitOverrides: CcxtExchangeOverrides;

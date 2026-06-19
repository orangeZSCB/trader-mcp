/**
 * Exchange-specific overrides for CcxtBroker.
 *
 * CCXT's "unified API" behaves differently across exchanges:
 * - Bybit: fetchOrder requires { acknowledged: true }, limited to last 500 orders
 * - Binance: fetchOrder works fine, but conditional orders need { stop: true }
 * - OKX/Bitget: no fetchOpenOrder/fetchClosedOrder singular methods
 * - Hyperliquid: market orders require a ref price, fetchPositions omits markPrice
 *
 * Each tested exchange gets its own override file in exchanges/. Only override
 * what's different — unset methods fall through to the default.
 *
 * Override convention: every override receives the original args plus a final
 * `defaultImpl` parameter. The override can choose to:
 *   - call defaultImpl(...args)        → run the default behavior
 *   - call defaultImpl(modifiedArgs)   → modify inputs, then run default
 *   - postprocess defaultImpl's result → modify outputs
 *   - ignore defaultImpl entirely      → completely replace the implementation
 *
 * To add a new exchange:
 *   1. Create exchanges/<name>.ts exporting a CcxtExchangeOverrides object
 *   2. Only implement the methods that differ from defaults
 *   3. Register it in exchangeOverrides below
 */
import { bybitOverrides } from './exchanges/bybit.js';
import { hyperliquidOverrides } from './exchanges/hyperliquid.js';
// ==================== Default implementations ====================
/** Default: fetchOrder + { stop: true } fallback. Works for binance, okx, bitget, etc. */
export async function defaultFetchOrderById(exchange, orderId, symbol) {
    try {
        return await exchange.fetchOrder(orderId, symbol);
    }
    catch { /* not a regular order */ }
    try {
        return await exchange.fetchOrder(orderId, symbol, { stop: true });
    }
    catch { /* not found */ }
    throw new Error(`Order ${orderId} not found`);
}
/** Default: cancelOrder + { stop: true } fallback. */
export async function defaultCancelOrderById(exchange, orderId, symbol) {
    try {
        await exchange.cancelOrder(orderId, symbol);
        return;
    }
    catch (err) {
        if (symbol) {
            try {
                await exchange.cancelOrder(orderId, symbol, { stop: true });
                return;
            }
            catch { /* fall through to original error */ }
        }
        throw err;
    }
}
/** Default: pass straight through to ccxt.createOrder. Works for bybit, binance, alpaca-via-ccxt, etc. */
export async function defaultPlaceOrder(exchange, symbol, type, side, amount, price, params) {
    return await exchange.createOrder(symbol, type, side, amount, price, params);
}
/** Default: pass straight through to ccxt.fetchPositions. */
export async function defaultFetchPositions(exchange) {
    return await exchange.fetchPositions();
}
/**
 * Default: one unscoped fetchOpenOrders call. Verified live on OKX — its
 * pending-orders endpoint is NOT instType-scoped, so a single call returns
 * spot + swap together. Do NOT assume that generalizes: ccxt has no
 * semantics here, it's an SDK over whatever the venue does. Exchanges whose
 * listing is category-scoped (bybit) get their own override; new exchanges
 * should be probed live before trusting this default.
 */
export async function defaultFetchAllOpenOrders(exchange) {
    return await exchange.fetchOpenOrders();
}
// ==================== Registry ====================
export const exchangeOverrides = {
    bybit: bybitOverrides,
    hyperliquid: hyperliquidOverrides,
};
//# sourceMappingURL=overrides.js.map
/**
 * Shared TWS connection for all e2e tests.
 *
 * Usage in test files:
 *   import { client, available, waitFor } from './setup'
 *
 * The connection is established once and reused across all e2e files.
 * If TWS is not running, `available` is false and tests should skip.
 */
import { EClient, DefaultEWrapper } from '../../src/index.js';
import { isTwsAvailable, TWS_HOST, TWS_PORT } from '../helpers/tws.js';
// --- Collected results from TWS callbacks ---
export const results = {
    serverVersion: 0,
    connTime: '',
    nextValidId: undefined,
    managedAccounts: undefined,
    currentTime: undefined,
    errors: [],
    contractDetails: new Map(),
    contractDetailsEnded: new Set(),
    // openOrder callback payloads keyed by orderId (last-write wins)
    openOrders: new Map(),
    openOrderEnded: false,
    orderStatus: new Map(),
};
// --- Wrapper that collects everything ---
class E2EWrapper extends DefaultEWrapper {
    connectAck() {
        results.serverVersion = client.serverVersion();
        results.connTime = client.twsConnectionTime() ?? '';
    }
    nextValidId(orderId) {
        results.nextValidId = orderId;
    }
    managedAccounts(list) {
        results.managedAccounts = list;
    }
    currentTime(time) {
        results.currentTime = time;
    }
    contractDetails(reqId, cd) {
        if (!results.contractDetails.has(reqId)) {
            results.contractDetails.set(reqId, []);
        }
        results.contractDetails.get(reqId).push(cd);
    }
    contractDetailsEnd(reqId) {
        results.contractDetailsEnded.add(reqId);
    }
    error(reqId, _t, code, msg) {
        // Capture everything during order-flow debugging. Informational (2000+)
        // is useful too: 2109 ("order located behind market"), 2110 ("order
        // rejected—no trading permissions"), etc.
        results.errors.push({ reqId, code, msg });
    }
    openOrder(orderId, contract, order, orderState) {
        results.openOrders.set(orderId, { contract, order, orderState });
    }
    openOrderEnd() {
        results.openOrderEnded = true;
    }
    orderStatus(orderId, status, filled, remaining) {
        results.orderStatus.set(orderId, { status, filled, remaining });
    }
}
// --- Shared client instance ---
export const client = new EClient(new E2EWrapper());
// --- Connection state ---
export const available = await isTwsAvailable();
if (available) {
    await client.connect(TWS_HOST, TWS_PORT, 0);
    // Wait for initial messages (nextValidId, managedAccounts, etc.)
    await sleep(2000);
}
// --- Helpers ---
/** Wait for a condition to become true, with timeout. */
export async function waitFor(condition, timeoutMs = 5000, intervalMs = 100) {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
        if (condition())
            return true;
        await sleep(intervalMs);
    }
    return condition();
}
export function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}
/** Cleanup — call in globalTeardown or afterAll at the suite level. */
export function disconnect() {
    if (client.isConnected()) {
        client.disconnect();
    }
}
//# sourceMappingURL=setup.js.map
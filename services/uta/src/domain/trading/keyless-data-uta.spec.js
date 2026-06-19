/**
 * Built-in keyless read-only data UTAs (binance/okx/bybit-readonly) — verify the
 * code-injection path constructs them correctly (no API key) so they auto-register
 * for OOTB crypto K-lines. Pure construction; no network.
 */
import { describe, it, expect } from 'vitest';
import { createBroker } from './brokers/factory.js';
function cfgFor(ex) {
    return {
        id: `${ex}-readonly`, label: `${ex} (read-only)`, presetId: 'ccxt-custom',
        enabled: true, guards: [], presetConfig: { exchange: ex },
        keyless: true, readOnly: true, editable: false,
    };
}
describe('keyless data UTA injection (createBroker)', () => {
    for (const ex of ['binance', 'okx', 'bybit']) {
        it(`${ex}-readonly: constructs a keyless broker (no throw, keyless flag flows)`, () => {
            let broker;
            expect(() => { broker = createBroker(cfgFor(ex)); }).not.toThrow();
            expect(broker.id).toBe(`${ex}-readonly`);
            // keyless must reach the broker (factory → fromConfig → constructor) so
            // init() skips the credential check.
            expect(broker.keyless).toBe(true);
            // and it declares the historical-bars capability for the federation.
            expect(broker.getCapabilities().historicalBars?.supported).toBe(true);
        });
    }
    it('reports every contract as crypto (a crypto venue\'s "stock" is synthetic)', () => {
        const broker = createBroker(cfgFor('okx'));
        // Even a "FUT" or a tokenized-equity-looking contract → crypto, by venue.
        expect(broker.assetClassFor({ symbol: 'BTC', secType: 'FUT' })).toBe('crypto');
        expect(broker.assetClassFor({ symbol: 'AAPL', secType: 'STK' })).toBe('crypto');
    });
    it('keyless account-reads return empty without auth (no fetchBalance / no init)', async () => {
        const broker = createBroker(cfgFor('binance'));
        const acct = await broker.getAccount();
        expect(acct.totalCashValue).toBe('0');
        expect(acct.netLiquidation).toBe('0');
        expect(await broker.getPositions()).toEqual([]);
        expect(await broker.getOrders([])).toEqual([]);
    });
});
//# sourceMappingURL=keyless-data-uta.spec.js.map
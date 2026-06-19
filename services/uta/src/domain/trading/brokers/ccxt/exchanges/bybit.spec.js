import { describe, it, expect, vi } from 'vitest';
import { bybitOverrides } from './bybit.js';
function fakeOrder(id, symbol) {
    return { id, symbol };
}
describe('bybitOverrides.fetchAllOpenOrders', () => {
    it('sweeps spot + swap categories and merges by id', async () => {
        // The live failure mode this guards: defaultType is 'swap', so an
        // unscoped fetchOpenOrders() silently returns only swap orders while a
        // real spot order sits open (observed on bybit demo, no error raised).
        const byType = {
            spot: [fakeOrder('s1', 'ETH/USDT')],
            swap: [fakeOrder('w1', 'BTC/USDT:USDT'), fakeOrder('s1', 'ETH/USDT')], // overlap dedupes
        };
        const exchange = {
            fetchOpenOrders: vi.fn(async (_s, _since, _limit, params) => byType[params.type] ?? []),
        };
        const result = await bybitOverrides.fetchAllOpenOrders(exchange, async () => []);
        expect(result.map((o) => o.id).sort()).toEqual(['s1', 'w1']);
        expect(exchange.fetchOpenOrders.mock.calls.map((c) => c[3])).toEqual([
            { type: 'spot' },
            { type: 'swap' },
        ]);
    });
    it('throws when a category fails — partial listings must not ghost real orders', async () => {
        const exchange = {
            fetchOpenOrders: vi.fn(async (_s, _since, _limit, params) => {
                if (params.type === 'swap')
                    throw new Error('bybit 10016 service error');
                return [fakeOrder('s1', 'ETH/USDT')];
            }),
        };
        await expect(bybitOverrides.fetchAllOpenOrders(exchange, async () => [])).rejects.toThrow('10016');
    });
});
//# sourceMappingURL=bybit.spec.js.map
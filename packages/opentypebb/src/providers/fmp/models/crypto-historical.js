/**
 * FMP Crypto Historical Price Model.
 * Maps to: openbb_fmp/models/crypto_historical.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CryptoHistoricalQueryParamsSchema, CryptoHistoricalDataSchema } from '../../../standard-models/crypto-historical.js';
import { applyAliases } from '../../../core/provider/utils/helpers.js';
import { getHistoricalOhlc } from '../utils/helpers.js';
export const FMPCryptoHistoricalQueryParamsSchema = CryptoHistoricalQueryParamsSchema.extend({
    interval: z.enum(['1m', '5m', '1h', '1d']).default('1d').describe('Time interval of the data.'),
});
const ALIAS_DICT = { change_percent: 'changeOverTime' };
export const FMPCryptoHistoricalDataSchema = CryptoHistoricalDataSchema.extend({
    change: z.number().nullable().default(null).describe('Change in the price from the previous close.'),
    change_percent: z.number().nullable().default(null).describe('Change in the price from the previous close, as a normalized percent.'),
}).passthrough();
export class FMPCryptoHistoricalFetcher extends Fetcher {
    static transformQuery(params) {
        const now = new Date();
        const oneYearAgo = new Date(now);
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        if (params.start_date == null)
            params.start_date = oneYearAgo.toISOString().split('T')[0];
        if (params.end_date == null)
            params.end_date = now.toISOString().split('T')[0];
        return FMPCryptoHistoricalQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        return getHistoricalOhlc(query, credentials);
    }
    static transformData(query, data) {
        const multiSymbol = query.symbol.split(',').length > 1;
        const sorted = [...data].sort((a, b) => {
            if (multiSymbol) {
                const dc = String(a.date ?? '').localeCompare(String(b.date ?? ''));
                return dc !== 0 ? dc : String(a.symbol ?? '').localeCompare(String(b.symbol ?? ''));
            }
            return String(a.date ?? '').localeCompare(String(b.date ?? ''));
        });
        return sorted.map((d) => {
            const aliased = applyAliases(d, ALIAS_DICT);
            if (typeof aliased.change_percent === 'number')
                aliased.change_percent = aliased.change_percent / 100;
            return FMPCryptoHistoricalDataSchema.parse(aliased);
        });
    }
}
//# sourceMappingURL=crypto-historical.js.map
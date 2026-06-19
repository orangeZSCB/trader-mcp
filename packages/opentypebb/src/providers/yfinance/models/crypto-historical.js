/**
 * Yahoo Finance Crypto Historical Price Model.
 * Maps to: openbb_yfinance/models/crypto_historical.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CryptoHistoricalQueryParamsSchema, CryptoHistoricalDataSchema } from '../../../standard-models/crypto-historical.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { getHistoricalData } from '../utils/helpers.js';
import { INTERVALS_DICT } from '../utils/references.js';
export const YFinanceCryptoHistoricalQueryParamsSchema = CryptoHistoricalQueryParamsSchema.extend({
    interval: z.enum(['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h', '1d', '5d', '1W', '1M', '1Q']).default('1d').describe('Data granularity.'),
});
export const YFinanceCryptoHistoricalDataSchema = CryptoHistoricalDataSchema;
export class YFinanceCryptoHistoricalFetcher extends Fetcher {
    static transformQuery(params) {
        const now = new Date();
        if (!params.start_date) {
            const oneYearAgo = new Date(now);
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            params.start_date = oneYearAgo.toISOString().slice(0, 10);
        }
        if (!params.end_date) {
            params.end_date = now.toISOString().slice(0, 10);
        }
        return YFinanceCryptoHistoricalQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const tickers = query.symbol.split(',').map(s => s.trim()).filter(Boolean);
        // Convert crypto symbols: BTCUSD → BTC-USD (Yahoo Finance format)
        const yahooTickers = tickers.map(t => {
            if (!t.includes('-') && t.length > 3) {
                return t.slice(0, -3) + '-' + t.slice(-3);
            }
            return t;
        });
        const interval = INTERVALS_DICT[query.interval] ?? '1d';
        const allData = [];
        const results = await Promise.allSettled(yahooTickers.map(async (sym) => {
            return getHistoricalData(sym, {
                startDate: query.start_date,
                endDate: query.end_date,
                interval,
            });
        }));
        for (const r of results) {
            if (r.status === 'fulfilled')
                allData.push(...r.value);
        }
        if (!allData.length)
            throw new EmptyDataError('No crypto historical data returned');
        return allData;
    }
    static transformData(query, data) {
        return data.map(d => YFinanceCryptoHistoricalDataSchema.parse(d));
    }
}
//# sourceMappingURL=crypto-historical.js.map
/**
 * Yahoo Finance Currency Price Model.
 * Maps to: openbb_yfinance/models/currency_historical.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CurrencyHistoricalQueryParamsSchema, CurrencyHistoricalDataSchema } from '../../../standard-models/currency-historical.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { getHistoricalData } from '../utils/helpers.js';
import { INTERVALS_DICT } from '../utils/references.js';
export const YFinanceCurrencyHistoricalQueryParamsSchema = CurrencyHistoricalQueryParamsSchema.extend({
    interval: z.enum(['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h', '1d', '5d', '1W', '1M', '1Q']).default('1d').describe('Data granularity.'),
});
export const YFinanceCurrencyHistoricalDataSchema = CurrencyHistoricalDataSchema;
export class YFinanceCurrencyHistoricalFetcher extends Fetcher {
    static transformQuery(params) {
        const now = new Date();
        // Append =X suffix for Yahoo Finance currency symbols
        if (typeof params.symbol === 'string') {
            const symbols = params.symbol.split(',').map(s => {
                const sym = s.trim().toUpperCase();
                return sym.includes('=X') ? sym : sym + '=X';
            });
            params.symbol = symbols.join(',');
        }
        if (!params.start_date) {
            const oneYearAgo = new Date(now);
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            params.start_date = oneYearAgo.toISOString().slice(0, 10);
        }
        if (!params.end_date) {
            params.end_date = now.toISOString().slice(0, 10);
        }
        return YFinanceCurrencyHistoricalQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const symbols = query.symbol.split(',').map(s => s.trim()).filter(Boolean);
        const interval = INTERVALS_DICT[query.interval] ?? '1d';
        const allData = [];
        const results = await Promise.allSettled(symbols.map(async (sym) => {
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
            throw new EmptyDataError('No currency historical data returned');
        return allData;
    }
    static transformData(query, data) {
        return data.map(d => YFinanceCurrencyHistoricalDataSchema.parse(d));
    }
}
//# sourceMappingURL=currency-historical.js.map
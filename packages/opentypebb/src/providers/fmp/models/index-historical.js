/**
 * FMP Index Historical Model.
 * Maps to: openbb_fmp/models/index_historical.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { IndexHistoricalQueryParamsSchema, IndexHistoricalDataSchema } from '../../../standard-models/index-historical.js';
import { getHistoricalOhlc } from '../utils/helpers.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
export const FMPIndexHistoricalQueryParamsSchema = IndexHistoricalQueryParamsSchema.extend({
    interval: z.enum(['1m', '5m', '1h', '1d']).default('1d').describe('Time interval of the data.'),
});
export const FMPIndexHistoricalDataSchema = IndexHistoricalDataSchema.extend({
    vwap: z.number().nullable().default(null).describe('Volume-weighted average price.'),
    change: z.number().nullable().default(null).describe('Change in the price from the previous close.'),
    change_percent: z.number().nullable().default(null).describe('Change percent from previous close.'),
}).passthrough();
export class FMPIndexHistoricalFetcher extends Fetcher {
    static transformQuery(params) {
        // Default start_date to 1 year ago, end_date to today
        const now = new Date();
        if (!params.start_date) {
            const oneYearAgo = new Date(now);
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            params.start_date = oneYearAgo.toISOString().split('T')[0];
        }
        if (!params.end_date) {
            params.end_date = now.toISOString().split('T')[0];
        }
        return FMPIndexHistoricalQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        return getHistoricalOhlc({
            symbol: query.symbol,
            interval: query.interval,
            start_date: query.start_date,
            end_date: query.end_date,
        }, credentials);
    }
    static transformData(query, data) {
        if (!data || data.length === 0) {
            throw new EmptyDataError();
        }
        // Normalize change_percent
        for (const d of data) {
            if (typeof d.changePercentage === 'number') {
                d.changePercentage = d.changePercentage / 100;
            }
            if (typeof d.change_percent === 'number') {
                d.change_percent = d.change_percent / 100;
            }
        }
        // Sort by date ascending
        const sorted = data.sort((a, b) => {
            const da = String(a.date ?? '');
            const db = String(b.date ?? '');
            return da.localeCompare(db);
        });
        return sorted.map(d => FMPIndexHistoricalDataSchema.parse(d));
    }
}
//# sourceMappingURL=index-historical.js.map
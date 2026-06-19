/**
 * FMP Price Performance Model.
 * Maps to: openbb_fmp/models/price_performance.py
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { RecentPerformanceQueryParamsSchema, RecentPerformanceDataSchema } from '../../../standard-models/recent-performance.js';
import { applyAliases } from '../../../core/provider/utils/helpers.js';
import { getDataMany } from '../utils/helpers.js';
const ALIAS_DICT = {
    one_day: '1D',
    one_week: '5D',
    one_month: '1M',
    three_month: '3M',
    six_month: '6M',
    one_year: '1Y',
    three_year: '3Y',
    five_year: '5Y',
    ten_year: '10Y',
};
export const FMPPricePerformanceQueryParamsSchema = RecentPerformanceQueryParamsSchema;
export const FMPPricePerformanceDataSchema = RecentPerformanceDataSchema;
export class FMPPricePerformanceFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPPricePerformanceQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        const symbols = query.symbol.toUpperCase().split(',');
        // Chunk by 200 (FMP limit)
        const chunkSize = 200;
        const allResults = [];
        for (let i = 0; i < symbols.length; i += chunkSize) {
            const chunk = symbols.slice(i, i + chunkSize);
            const url = `https://financialmodelingprep.com/stable/stock-price-change?symbol=${chunk.join(',')}&apikey=${apiKey}`;
            try {
                const data = await getDataMany(url);
                allResults.push(...data);
            }
            catch {
                // If a chunk fails, continue with others
            }
        }
        if (allResults.length === 0) {
            return getDataMany(`https://financialmodelingprep.com/stable/stock-price-change?symbol=${query.symbol.toUpperCase()}&apikey=${apiKey}`);
        }
        return allResults;
    }
    static transformData(_query, data) {
        return data.map(d => {
            // Replace zero with null and convert percents to normalized values
            for (const [key, value] of Object.entries(d)) {
                if (key !== 'symbol') {
                    d[key] = value === 0 ? null : typeof value === 'number' ? value / 100 : value;
                }
            }
            const aliased = applyAliases(d, ALIAS_DICT);
            return FMPPricePerformanceDataSchema.parse(aliased);
        });
    }
}
//# sourceMappingURL=price-performance.js.map
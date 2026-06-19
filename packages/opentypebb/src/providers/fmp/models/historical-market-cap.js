/**
 * FMP Historical Market Cap Model.
 * Maps to: openbb_fmp/models/historical_market_cap.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { HistoricalMarketCapQueryParamsSchema, HistoricalMarketCapDataSchema } from '../../../standard-models/historical-market-cap.js';
import { applyAliases } from '../../../core/provider/utils/helpers.js';
import { getDataMany } from '../utils/helpers.js';
const ALIAS_DICT = {
    market_cap: 'marketCap',
};
export const FMPHistoricalMarketCapQueryParamsSchema = HistoricalMarketCapQueryParamsSchema.extend({
    limit: z.coerce.number().nullable().default(500).describe('The number of data entries to return.'),
});
export const FMPHistoricalMarketCapDataSchema = HistoricalMarketCapDataSchema;
export class FMPHistoricalMarketCapFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPHistoricalMarketCapQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        const qs = new URLSearchParams();
        qs.set('symbol', query.symbol);
        qs.set('apikey', apiKey);
        if (query.limit)
            qs.set('limit', String(query.limit));
        if (query.start_date)
            qs.set('from', query.start_date);
        if (query.end_date)
            qs.set('to', query.end_date);
        return getDataMany(`https://financialmodelingprep.com/stable/historical-market-capitalization?${qs.toString()}`);
    }
    static transformData(_query, data) {
        return data.map(d => {
            const aliased = applyAliases(d, ALIAS_DICT);
            return FMPHistoricalMarketCapDataSchema.parse(aliased);
        });
    }
}
//# sourceMappingURL=historical-market-cap.js.map
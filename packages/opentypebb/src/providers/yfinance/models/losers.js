/**
 * Yahoo Finance Top Losers Model.
 * Maps to: openbb_yfinance/models/losers.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { EquityPerformanceQueryParamsSchema } from '../../../standard-models/equity-performance.js';
import { applyAliases } from '../../../core/provider/utils/helpers.js';
import { getPredefinedScreener } from '../utils/helpers.js';
import { YFPredefinedScreenerDataSchema, YF_SCREENER_ALIAS_DICT } from '../utils/references.js';
export const YFLosersQueryParamsSchema = EquityPerformanceQueryParamsSchema.extend({
    limit: z.number().nullable().default(200).describe('Limit the number of results.'),
});
export const YFLosersDataSchema = YFPredefinedScreenerDataSchema;
export class YFLosersFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return YFLosersQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        return getPredefinedScreener('day_losers', query.limit ?? 200);
    }
    static transformData(query, data) {
        const sorted = [...data].sort((a, b) => {
            const diff = Number(b.regularMarketChangePercent ?? 0) - Number(a.regularMarketChangePercent ?? 0);
            return query.sort === 'desc' ? diff : -diff;
        });
        return sorted.map(d => {
            const aliased = applyAliases(d, YF_SCREENER_ALIAS_DICT);
            if (typeof aliased.percent_change === 'number') {
                aliased.percent_change = aliased.percent_change / 100;
            }
            return YFLosersDataSchema.parse(aliased);
        });
    }
}
//# sourceMappingURL=losers.js.map
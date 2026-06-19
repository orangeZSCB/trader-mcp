/**
 * Yahoo Finance Undervalued Large Caps Model.
 * Maps to: openbb_yfinance/models/undervalued_large_caps.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { EquityPerformanceQueryParamsSchema } from '../../../standard-models/equity-performance.js';
import { applyAliases } from '../../../core/provider/utils/helpers.js';
import { getPredefinedScreener } from '../utils/helpers.js';
import { YFPredefinedScreenerDataSchema, YF_SCREENER_ALIAS_DICT } from '../utils/references.js';
export const YFUndervaluedLargeCapsQueryParamsSchema = EquityPerformanceQueryParamsSchema.extend({
    limit: z.number().nullable().default(200).describe('Limit the number of results.'),
});
export const YFUndervaluedLargeCapsDataSchema = YFPredefinedScreenerDataSchema;
export class YFUndervaluedLargeCapsFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return YFUndervaluedLargeCapsQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        return getPredefinedScreener('undervalued_large_caps', query.limit ?? 200);
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
            return YFUndervaluedLargeCapsDataSchema.parse(aliased);
        });
    }
}
//# sourceMappingURL=undervalued-large-caps.js.map
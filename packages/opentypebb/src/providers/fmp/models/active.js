/**
 * FMP Most Active Model.
 * Maps to: openbb_fmp/models/equity_most_active.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { EquityPerformanceQueryParamsSchema, EquityPerformanceDataSchema } from '../../../standard-models/equity-performance.js';
import { applyAliases } from '../../../core/provider/utils/helpers.js';
import { getDataMany } from '../utils/helpers.js';
const ALIAS_DICT = { percent_change: 'changesPercentage' };
export const FMPEquityActiveQueryParamsSchema = EquityPerformanceQueryParamsSchema;
export const FMPEquityActiveDataSchema = EquityPerformanceDataSchema.extend({
    exchange: z.string().describe('Stock exchange where the security is listed.'),
}).passthrough();
export class FMPEquityActiveFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPEquityActiveQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        return getDataMany(`https://financialmodelingprep.com/stable/most-actives?apikey=${apiKey}`);
    }
    static transformData(query, data) {
        const sorted = [...data].sort((a, b) => {
            const diff = Number(b.changesPercentage ?? 0) - Number(a.changesPercentage ?? 0);
            return query.sort === 'desc' ? diff : -diff;
        });
        return sorted.map((d) => {
            const aliased = applyAliases(d, ALIAS_DICT);
            if (typeof aliased.percent_change === 'number')
                aliased.percent_change = aliased.percent_change / 100;
            return FMPEquityActiveDataSchema.parse(aliased);
        });
    }
}
//# sourceMappingURL=active.js.map
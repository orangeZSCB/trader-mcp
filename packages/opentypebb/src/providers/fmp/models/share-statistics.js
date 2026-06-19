/**
 * FMP Share Statistics Model.
 * Maps to: openbb_fmp/models/share_statistics.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { ShareStatisticsQueryParamsSchema, ShareStatisticsDataSchema } from '../../../standard-models/share-statistics.js';
import { applyAliases } from '../../../core/provider/utils/helpers.js';
import { getDataMany } from '../utils/helpers.js';
const ALIAS_DICT = {
    url: 'source',
};
export const FMPShareStatisticsQueryParamsSchema = ShareStatisticsQueryParamsSchema;
export const FMPShareStatisticsDataSchema = ShareStatisticsDataSchema.extend({
    url: z.string().nullable().default(null).describe('URL to the source filing.'),
}).passthrough();
export class FMPShareStatisticsFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPShareStatisticsQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        return getDataMany(`https://financialmodelingprep.com/stable/shares-float?symbol=${query.symbol}&apikey=${apiKey}`);
    }
    static transformData(_query, data) {
        return data.map(d => {
            // Normalize free_float from percent to decimal
            if (typeof d.freeFloat === 'number') {
                d.freeFloat = d.freeFloat / 100;
            }
            if (typeof d.free_float === 'number') {
                d.free_float = d.free_float / 100;
            }
            const aliased = applyAliases(d, ALIAS_DICT);
            return FMPShareStatisticsDataSchema.parse(aliased);
        });
    }
}
//# sourceMappingURL=share-statistics.js.map
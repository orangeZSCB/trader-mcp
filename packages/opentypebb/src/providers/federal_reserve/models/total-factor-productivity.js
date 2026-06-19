/**
 * Federal Reserve Total Factor Productivity Fetcher.
 * Uses FRED series: RTFPNAUSA632NRUG (Annual TFP at constant national prices for US).
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { TotalFactorProductivityQueryParamsSchema, TotalFactorProductivityDataSchema } from '../../../standard-models/total-factor-productivity.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fetchFredSeries, getFredApiKey } from '../utils/fred-helpers.js';
export const FedTFPQueryParamsSchema = TotalFactorProductivityQueryParamsSchema;
export class FedTotalFactorProductivityFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedTFPQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        const observations = await fetchFredSeries('RTFPNAUSA632NRUG', apiKey, {
            startDate: query.start_date,
            endDate: query.end_date,
        });
        if (observations.length === 0)
            throw new EmptyDataError('No TFP data found.');
        return observations.map(o => ({
            date: o.date,
            value: parseFloat(o.value),
        }));
    }
    static transformData(_query, data) {
        return data.map(d => TotalFactorProductivityDataSchema.parse(d));
    }
}
//# sourceMappingURL=total-factor-productivity.js.map
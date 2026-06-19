/**
 * Federal Reserve FRED Search Fetcher.
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { FredSearchQueryParamsSchema, FredSearchDataSchema } from '../../../standard-models/fred-search.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fredSearchApi, getFredApiKey } from '../utils/fred-helpers.js';
export const FedFredSearchQueryParamsSchema = FredSearchQueryParamsSchema;
export class FedFredSearchFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedFredSearchQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        const results = await fredSearchApi(query.query, apiKey, { limit: query.limit });
        if (results.length === 0)
            throw new EmptyDataError('No FRED series found.');
        return results.map(r => ({
            series_id: r.id,
            title: r.title,
            frequency: r.frequency_short || null,
            units: r.units_short || null,
            seasonal_adjustment: r.seasonal_adjustment_short || null,
            last_updated: r.last_updated || null,
            notes: r.notes || null,
        }));
    }
    static transformData(_query, data) {
        return data.map(d => FredSearchDataSchema.parse(d));
    }
}
//# sourceMappingURL=fred-search.js.map
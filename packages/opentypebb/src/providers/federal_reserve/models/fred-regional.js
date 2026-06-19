/**
 * Federal Reserve FRED Regional (GeoFRED) Fetcher.
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { FredRegionalQueryParamsSchema, FredRegionalDataSchema } from '../../../standard-models/fred-regional.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fredRegionalApi, getFredApiKey } from '../utils/fred-helpers.js';
export const FedFredRegionalQueryParamsSchema = FredRegionalQueryParamsSchema;
export class FedFredRegionalFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedFredRegionalQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        const results = await fredRegionalApi(query.symbol, apiKey, {
            regionType: query.region_type,
            date: query.date ?? undefined,
            startDate: query.start_date ?? undefined,
            frequency: query.frequency ?? undefined,
        });
        if (results.length === 0)
            throw new EmptyDataError('No GeoFRED data found.');
        return results;
    }
    static transformData(_query, data) {
        return data.map(d => FredRegionalDataSchema.parse(d));
    }
}
//# sourceMappingURL=fred-regional.js.map
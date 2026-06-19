/**
 * Federal Reserve FRED Release Table Fetcher.
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { FredReleaseTableQueryParamsSchema, FredReleaseTableDataSchema } from '../../../standard-models/fred-release-table.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fredReleaseTableApi, getFredApiKey } from '../utils/fred-helpers.js';
export const FedFredReleaseTableQueryParamsSchema = FredReleaseTableQueryParamsSchema;
export class FedFredReleaseTableFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedFredReleaseTableQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        const results = await fredReleaseTableApi(query.release_id, apiKey, {
            elementId: query.element_id ?? undefined,
            date: query.date ?? undefined,
        });
        if (results.length === 0)
            throw new EmptyDataError('No release table data found.');
        return results;
    }
    static transformData(_query, data) {
        return data.map(d => FredReleaseTableDataSchema.parse(d));
    }
}
//# sourceMappingURL=fred-release-table.js.map
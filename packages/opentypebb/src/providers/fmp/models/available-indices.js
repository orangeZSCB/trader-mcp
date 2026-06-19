/**
 * FMP Available Indices Model.
 * Maps to: openbb_fmp/models/available_indices.py
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { AvailableIndicesQueryParamsSchema, AvailableIndicesDataSchema } from '../../../standard-models/available-indices.js';
import { getDataMany } from '../utils/helpers.js';
export const FMPAvailableIndicesQueryParamsSchema = AvailableIndicesQueryParamsSchema;
export const FMPAvailableIndicesDataSchema = AvailableIndicesDataSchema;
export class FMPAvailableIndicesFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPAvailableIndicesQueryParamsSchema.parse(params);
    }
    static async extractData(_query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        return getDataMany(`https://financialmodelingprep.com/stable/index-list?apikey=${apiKey}`);
    }
    static transformData(_query, data) {
        return data.map(d => FMPAvailableIndicesDataSchema.parse(d));
    }
}
//# sourceMappingURL=available-indices.js.map
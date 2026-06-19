/**
 * FMP Historical Splits Model.
 * Maps to: openbb_fmp/models/historical_splits.py
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { HistoricalSplitsQueryParamsSchema, HistoricalSplitsDataSchema } from '../../../standard-models/historical-splits.js';
import { getDataMany } from '../utils/helpers.js';
export const FMPHistoricalSplitsQueryParamsSchema = HistoricalSplitsQueryParamsSchema;
export const FMPHistoricalSplitsDataSchema = HistoricalSplitsDataSchema.passthrough();
export class FMPHistoricalSplitsFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPHistoricalSplitsQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        return getDataMany(`https://financialmodelingprep.com/stable/splits?symbol=${query.symbol}&apikey=${apiKey}`);
    }
    static transformData(_query, data) {
        return data.map(d => FMPHistoricalSplitsDataSchema.parse(d));
    }
}
//# sourceMappingURL=historical-splits.js.map
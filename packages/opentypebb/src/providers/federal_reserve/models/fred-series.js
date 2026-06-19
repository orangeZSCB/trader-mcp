/**
 * Federal Reserve FRED Series Fetcher.
 * Fetches observations for one or more FRED series.
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { FredSeriesQueryParamsSchema, FredSeriesDataSchema } from '../../../standard-models/fred-series.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fetchFredMultiSeries, multiSeriesToRecords, getFredApiKey } from '../utils/fred-helpers.js';
export const FedFredSeriesQueryParamsSchema = FredSeriesQueryParamsSchema;
export class FedFredSeriesFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedFredSeriesQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        if (!apiKey) {
            throw new Error('FRED API key required — set the fred provider key in Settings → Market Data (free at fred.stlouisfed.org).');
        }
        const seriesIds = query.symbol.split(',').map(s => s.trim()).filter(Boolean);
        if (seriesIds.length === 0)
            throw new EmptyDataError('No series IDs provided.');
        const dataMap = await fetchFredMultiSeries(seriesIds, apiKey, {
            startDate: query.start_date,
            endDate: query.end_date,
            limit: query.limit ?? undefined,
        });
        const records = multiSeriesToRecords(dataMap);
        if (records.length === 0)
            throw new EmptyDataError('No FRED series data found.');
        return records;
    }
    static transformData(_query, data) {
        return data.map(d => FredSeriesDataSchema.parse(d));
    }
}
//# sourceMappingURL=fred-series.js.map
/**
 * Federal Reserve Inflation Expectations Fetcher.
 * Uses FRED series: MICH (Michigan 1y), MICH5Y (Michigan 5y),
 * T5YIE (5y Breakeven), T10YIE (10y Breakeven).
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { InflationExpectationsQueryParamsSchema, InflationExpectationsDataSchema } from '../../../standard-models/inflation-expectations.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fetchFredMultiSeries, multiSeriesToRecords, getFredApiKey } from '../utils/fred-helpers.js';
export const FedInflationExpectationsQueryParamsSchema = InflationExpectationsQueryParamsSchema;
const SERIES = ['MICH', 'T5YIE', 'T10YIE'];
const FIELD_MAP = {
    MICH: 'michigan_1y',
    T5YIE: 'breakeven_5y',
    T10YIE: 'breakeven_10y',
};
export class FedInflationExpectationsFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedInflationExpectationsQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        const dataMap = await fetchFredMultiSeries(SERIES, apiKey, {
            startDate: query.start_date,
            endDate: query.end_date,
        });
        const records = multiSeriesToRecords(dataMap, FIELD_MAP);
        if (records.length === 0)
            throw new EmptyDataError('No inflation expectations data found.');
        return records;
    }
    static transformData(_query, data) {
        return data.map(d => InflationExpectationsDataSchema.parse(d));
    }
}
//# sourceMappingURL=inflation-expectations.js.map
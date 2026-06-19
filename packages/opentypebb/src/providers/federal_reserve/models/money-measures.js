/**
 * Federal Reserve Money Measures Fetcher.
 * Uses FRED series: M1SL (M1), M2SL (M2) — seasonally adjusted.
 * Or: M1NS, M2NS — not adjusted.
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { MoneyMeasuresQueryParamsSchema, MoneyMeasuresDataSchema } from '../../../standard-models/money-measures.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fetchFredMultiSeries, multiSeriesToRecords, getFredApiKey } from '../utils/fred-helpers.js';
export const FedMoneyMeasuresQueryParamsSchema = MoneyMeasuresQueryParamsSchema;
export class FedMoneyMeasuresFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedMoneyMeasuresQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        const adjusted = query.adjusted !== false;
        const m1Series = adjusted ? 'M1SL' : 'M1NS';
        const m2Series = adjusted ? 'M2SL' : 'M2NS';
        const dataMap = await fetchFredMultiSeries([m1Series, m2Series], apiKey, {
            startDate: query.start_date,
            endDate: query.end_date,
        });
        const fieldMap = {
            [m1Series]: 'm1',
            [m2Series]: 'm2',
        };
        const records = multiSeriesToRecords(dataMap, fieldMap);
        if (records.length === 0)
            throw new EmptyDataError('No money measures data found.');
        return records;
    }
    static transformData(_query, data) {
        return data.map(d => MoneyMeasuresDataSchema.parse(d));
    }
}
//# sourceMappingURL=money-measures.js.map
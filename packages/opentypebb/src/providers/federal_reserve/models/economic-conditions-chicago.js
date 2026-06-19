/**
 * Federal Reserve Chicago Fed National Activity Index Fetcher.
 * Uses FRED series: CFNAI (CFNAI), CFNAIMA3 (3-month moving average).
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { EconomicConditionsChicagoQueryParamsSchema, EconomicConditionsChicagoDataSchema } from '../../../standard-models/economic-conditions-chicago.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fetchFredMultiSeries, multiSeriesToRecords, getFredApiKey } from '../utils/fred-helpers.js';
export const FedChicagoQueryParamsSchema = EconomicConditionsChicagoQueryParamsSchema;
const SERIES = ['CFNAI', 'CFNAIMA3'];
const FIELD_MAP = {
    CFNAI: 'cfnai',
    CFNAIMA3: 'cfnai_ma3',
};
export class FedEconomicConditionsChicagoFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedChicagoQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        const dataMap = await fetchFredMultiSeries(SERIES, apiKey, {
            startDate: query.start_date,
            endDate: query.end_date,
        });
        const records = multiSeriesToRecords(dataMap, FIELD_MAP);
        if (records.length === 0)
            throw new EmptyDataError('No Chicago Fed data found.');
        return records;
    }
    static transformData(_query, data) {
        return data.map(d => EconomicConditionsChicagoDataSchema.parse(d));
    }
}
//# sourceMappingURL=economic-conditions-chicago.js.map
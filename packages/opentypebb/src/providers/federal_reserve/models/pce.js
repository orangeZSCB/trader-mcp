/**
 * Federal Reserve PCE Fetcher.
 * Uses FRED series: PCEPI (PCE Price Index), PCEPILFE (Core PCE).
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { PersonalConsumptionExpendituresQueryParamsSchema, PersonalConsumptionExpendituresDataSchema } from '../../../standard-models/pce.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fetchFredMultiSeries, multiSeriesToRecords, getFredApiKey } from '../utils/fred-helpers.js';
export const FedPCEQueryParamsSchema = PersonalConsumptionExpendituresQueryParamsSchema;
export class FedPCEFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedPCEQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        const dataMap = await fetchFredMultiSeries(['PCEPI', 'PCEPILFE'], apiKey, {
            startDate: query.start_date,
            endDate: query.end_date,
        });
        const records = multiSeriesToRecords(dataMap, {
            PCEPI: 'pce',
            PCEPILFE: 'core_pce',
        });
        if (records.length === 0)
            throw new EmptyDataError('No PCE data found.');
        return records;
    }
    static transformData(_query, data) {
        return data.map(d => PersonalConsumptionExpendituresDataSchema.parse(d));
    }
}
//# sourceMappingURL=pce.js.map
/**
 * Federal Reserve Primary Dealer Fails Fetcher.
 * Uses FRED series for delivery failures data.
 * Series: DTBSPCKF (Fails to Deliver), DTBSPCKR (Fails to Receive).
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { PrimaryDealerFailsQueryParamsSchema, PrimaryDealerFailsDataSchema } from '../../../standard-models/primary-dealer-fails.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fetchFredMultiSeries, multiSeriesToRecords, getFredApiKey } from '../utils/fred-helpers.js';
export const FedPrimaryDealerFailsQueryParamsSchema = PrimaryDealerFailsQueryParamsSchema;
const SERIES = ['DTBSPCKF', 'DTBSPCKR'];
const FIELD_MAP = {
    DTBSPCKF: 'fails_to_deliver',
    DTBSPCKR: 'fails_to_receive',
};
export class FedPrimaryDealerFailsFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedPrimaryDealerFailsQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        const dataMap = await fetchFredMultiSeries(SERIES, apiKey, {
            startDate: query.start_date,
            endDate: query.end_date,
        });
        const records = multiSeriesToRecords(dataMap, FIELD_MAP);
        if (records.length === 0)
            throw new EmptyDataError('No primary dealer fails data found.');
        return records;
    }
    static transformData(_query, data) {
        return data.map(d => PrimaryDealerFailsDataSchema.parse(d));
    }
}
//# sourceMappingURL=primary-dealer-fails.js.map
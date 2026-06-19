/**
 * Federal Reserve SLOOS (Senior Loan Officer Opinion Survey) Fetcher.
 * Uses FRED series: DRTSCILM (C&I Loan Tightening), DRTSCLCC (Consumer Loan Tightening).
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { SloosQueryParamsSchema, SloosDataSchema } from '../../../standard-models/sloos.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fetchFredMultiSeries, multiSeriesToRecords, getFredApiKey } from '../utils/fred-helpers.js';
export const FedSloosQueryParamsSchema = SloosQueryParamsSchema;
const SERIES = ['DRTSCILM', 'DRTSCLCC'];
const FIELD_MAP = {
    DRTSCILM: 'ci_loan_tightening',
    DRTSCLCC: 'consumer_loan_tightening',
};
export class FedSloosFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedSloosQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        const dataMap = await fetchFredMultiSeries(SERIES, apiKey, {
            startDate: query.start_date,
            endDate: query.end_date,
        });
        const records = multiSeriesToRecords(dataMap, FIELD_MAP);
        if (records.length === 0)
            throw new EmptyDataError('No SLOOS data found.');
        return records;
    }
    static transformData(_query, data) {
        return data.map(d => SloosDataSchema.parse(d));
    }
}
//# sourceMappingURL=sloos.js.map
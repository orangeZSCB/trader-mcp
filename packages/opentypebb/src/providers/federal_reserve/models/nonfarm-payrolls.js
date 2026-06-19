/**
 * Federal Reserve Nonfarm Payrolls Fetcher.
 * Uses FRED series: PAYEMS (Total Nonfarm), USPRIV (Private), USGOVT (Government).
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { NonfarmPayrollsQueryParamsSchema, NonfarmPayrollsDataSchema } from '../../../standard-models/nonfarm-payrolls.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fetchFredMultiSeries, multiSeriesToRecords, getFredApiKey } from '../utils/fred-helpers.js';
export const FedNonfarmPayrollsQueryParamsSchema = NonfarmPayrollsQueryParamsSchema;
const SERIES = ['PAYEMS', 'USPRIV', 'USGOVT'];
const FIELD_MAP = {
    PAYEMS: 'total_nonfarm',
    USPRIV: 'private_sector',
    USGOVT: 'government',
};
export class FedNonfarmPayrollsFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedNonfarmPayrollsQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        const dataMap = await fetchFredMultiSeries(SERIES, apiKey, {
            startDate: query.start_date,
            endDate: query.end_date,
        });
        const records = multiSeriesToRecords(dataMap, FIELD_MAP);
        if (records.length === 0)
            throw new EmptyDataError('No nonfarm payrolls data found.');
        return records;
    }
    static transformData(_query, data) {
        return data.map(d => NonfarmPayrollsDataSchema.parse(d));
    }
}
//# sourceMappingURL=nonfarm-payrolls.js.map
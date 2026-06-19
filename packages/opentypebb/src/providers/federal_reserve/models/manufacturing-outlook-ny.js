/**
 * Federal Reserve NY Manufacturing Outlook (Empire State) Fetcher.
 * Uses FRED series: GACDISA066MSFRBNY (General Business Conditions).
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { ManufacturingOutlookNYQueryParamsSchema, ManufacturingOutlookNYDataSchema } from '../../../standard-models/manufacturing-outlook-ny.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fetchFredSeries, getFredApiKey } from '../utils/fred-helpers.js';
export const FedManufacturingOutlookNYQueryParamsSchema = ManufacturingOutlookNYQueryParamsSchema;
export class FedManufacturingOutlookNYFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return FedManufacturingOutlookNYQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = getFredApiKey(credentials);
        const observations = await fetchFredSeries('GACDISA066MSFRBNY', apiKey, {
            startDate: query.start_date,
            endDate: query.end_date,
        });
        if (observations.length === 0)
            throw new EmptyDataError('No Empire State Manufacturing data found.');
        return observations.map(o => ({
            date: o.date,
            general_business_conditions: parseFloat(o.value),
        }));
    }
    static transformData(_query, data) {
        return data.map(d => ManufacturingOutlookNYDataSchema.parse(d));
    }
}
//# sourceMappingURL=manufacturing-outlook-ny.js.map
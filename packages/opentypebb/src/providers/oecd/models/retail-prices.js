/**
 * OECD Retail Prices Fetcher.
 * Uses OECD MEI Prices dataset.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { RetailPricesDataSchema } from '../../../standard-models/retail-prices.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fetchOecdCsv, resolveCountryCodes, periodToDate, CODE_TO_NAME, FREQ_MAP, filterAndSort } from '../utils/oecd-helpers.js';
export const OECDRetailPricesQueryParamsSchema = z.object({
    country: z.string().default('united_states'),
    frequency: z.enum(['annual', 'quarter', 'monthly']).default('monthly'),
    start_date: z.string().nullable().default(null),
    end_date: z.string().nullable().default(null),
}).passthrough();
export class OECDRetailPricesFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return OECDRetailPricesQueryParamsSchema.parse(params);
    }
    static async extractData(query, _credentials) {
        const cc = resolveCountryCodes(query.country);
        const freq = FREQ_MAP[query.frequency] ?? 'M';
        const rows = await fetchOecdCsv('OECD.SDD.TPS,DSD_PRICES@DF_PRICES_ALL,1.0', `${cc}.${freq}.N.CPI.PA._T.N.`);
        return rows
            .filter(r => r.OBS_VALUE && r.OBS_VALUE !== '')
            .map(r => ({
            date: periodToDate(r.TIME_PERIOD ?? ''),
            country: CODE_TO_NAME[r.REF_AREA] ?? r.REF_AREA ?? query.country,
            value: parseFloat(r.OBS_VALUE),
        }));
    }
    static transformData(query, data) {
        if (data.length === 0)
            throw new EmptyDataError();
        return filterAndSort(data, query.start_date, query.end_date)
            .map(d => RetailPricesDataSchema.parse(d));
    }
}
//# sourceMappingURL=retail-prices.js.map
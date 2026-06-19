/**
 * OECD GDP Nominal Fetcher.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { GdpNominalDataSchema } from '../../../standard-models/gdp-nominal.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { fetchOecdCsv, resolveCountryCode, periodToDate, CODE_TO_NAME, FREQ_MAP, filterAndSort } from '../utils/oecd-helpers.js';
export const OECDGdpNominalQueryParamsSchema = z.object({
    country: z.string().default('united_states'),
    start_date: z.string().nullable().default(null),
    end_date: z.string().nullable().default(null),
    frequency: z.enum(['annual', 'quarter']).default('annual'),
}).passthrough();
export class OECDGdpNominalFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return OECDGdpNominalQueryParamsSchema.parse(params);
    }
    static async extractData(query, _credentials) {
        const cc = resolveCountryCode(query.country);
        const freq = FREQ_MAP[query.frequency] ?? 'A';
        const rows = await fetchOecdCsv('OECD.SDD.NAD,DSD_NAMAIN1@DF_TABLE1_EXPENDITURE_HCPC,1.0', `${cc}.${freq}.S1.S1.B1GQ._Z._Z._Z.V.N.`);
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
            .map(d => GdpNominalDataSchema.parse(d));
    }
}
//# sourceMappingURL=gdp-nominal.js.map
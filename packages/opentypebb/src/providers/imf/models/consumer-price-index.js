/**
 * IMF Consumer Price Index Model.
 * Maps to: openbb_imf/models/consumer_price_index.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { ConsumerPriceIndexDataSchema } from '../../../standard-models/consumer-price-index.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { nativeFetch } from '../../../core/provider/utils/helpers.js';
export const IMFCPIQueryParamsSchema = z.object({
    country: z.string().default('united_states').describe('The country to get data for.'),
    transform: z.string().default('yoy').describe('Transformation: yoy, period, index.'),
    frequency: z.enum(['annual', 'quarter', 'monthly']).default('monthly').describe('Data frequency.'),
    harmonized: z.boolean().default(false).describe('If true, returns harmonized data.'),
    start_date: z.string().nullable().default(null).describe('Start date in YYYY-MM-DD.'),
    end_date: z.string().nullable().default(null).describe('End date in YYYY-MM-DD.'),
}).passthrough();
const COUNTRY_ISO2 = {
    united_states: 'US', united_kingdom: 'GB', japan: 'JP', germany: 'DE',
    france: 'FR', italy: 'IT', canada: 'CA', australia: 'AU',
    china: 'CN', india: 'IN', brazil: 'BR', mexico: 'MX',
};
const FREQ_MAP = { annual: 'A', quarter: 'Q', monthly: 'M' };
export class IMFConsumerPriceIndexFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return IMFCPIQueryParamsSchema.parse(params);
    }
    static async extractData(query, _credentials) {
        const iso = COUNTRY_ISO2[query.country] ?? query.country.toUpperCase().slice(0, 2);
        const freq = FREQ_MAP[query.frequency] ?? 'M';
        // IMF CPI data from the CPI database
        const indicator = query.transform === 'yoy' ? 'PCPIEPCH' : 'PCPIPCH';
        const url = `https://dataservices.imf.org/REST/SDMX_JSON.svc/CompactData/CPI/${freq}.${iso}.${indicator}`;
        try {
            const resp = await nativeFetch(url, { timeoutMs: 30000 });
            if (resp.status !== 200)
                throw new EmptyDataError(`IMF API returned ${resp.status}`);
            const data = JSON.parse(resp.text);
            const dataset = data.CompactData;
            const dataSet = dataset?.DataSet;
            let series = dataSet?.Series;
            if (!series)
                throw new EmptyDataError();
            if (!Array.isArray(series))
                series = [series];
            const results = [];
            for (const s of series) {
                let obs = (s.Obs ?? []);
                if (!Array.isArray(obs))
                    obs = [obs];
                for (const o of obs) {
                    const period = o['@TIME_PERIOD'];
                    const value = parseFloat(o['@OBS_VALUE']);
                    if (period && !isNaN(value)) {
                        const date = period.length === 7 ? period + '-01' : period.length === 4 ? period + '-01-01' : period;
                        results.push({ date, country: query.country, value });
                    }
                }
            }
            return results;
        }
        catch (err) {
            if (err instanceof EmptyDataError)
                throw err;
            throw new EmptyDataError(`Failed to fetch IMF CPI data: ${err}`);
        }
    }
    static transformData(query, data) {
        if (data.length === 0)
            throw new EmptyDataError();
        let filtered = data;
        if (query.start_date)
            filtered = filtered.filter(d => String(d.date) >= query.start_date);
        if (query.end_date)
            filtered = filtered.filter(d => String(d.date) <= query.end_date);
        return filtered
            .sort((a, b) => String(a.date).localeCompare(String(b.date)))
            .map(d => ConsumerPriceIndexDataSchema.parse(d));
    }
}
//# sourceMappingURL=consumer-price-index.js.map
/**
 * ECB Balance of Payments Model.
 * Maps to: openbb_ecb/models/balance_of_payments.py
 *
 * Uses ECB data-detail-api to fetch individual BOP series and merge by period.
 * Requires proxy for network access (uses globalThis.fetch via undici).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { BalanceOfPaymentsDataSchema } from '../../../standard-models/balance-of-payments.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
export const ECBBalanceOfPaymentsQueryParamsSchema = z.object({
    report_type: z.string().default('main').describe('Report type: main, summary.'),
    frequency: z.enum(['monthly', 'quarterly']).default('monthly').describe('Data frequency.'),
    start_date: z.string().nullable().default(null).describe('Start date in YYYY-MM-DD.'),
    end_date: z.string().nullable().default(null).describe('End date in YYYY-MM-DD.'),
}).passthrough();
const ECB_BASE = 'https://data.ecb.europa.eu/data-detail-api';
function getMainSeries(freq) {
    return {
        current_account: `BPS.${freq}.N.I9.W1.S1.S1.T.B.CA._Z._Z._Z.EUR._T._X.N.ALL`,
        goods: `BPS.${freq}.N.I9.W1.S1.S1.T.B.G._Z._Z._Z.EUR._T._X.N.ALL`,
        services: `BPS.${freq}.N.I9.W1.S1.S1.T.B.S._Z._Z._Z.EUR._T._X.N.ALL`,
        primary_income: `BPS.${freq}.N.I9.W1.S1.S1.T.B.IN1._Z._Z._Z.EUR._T._X.N.ALL`,
        secondary_income: `BPS.${freq}.N.I9.W1.S1.S1.T.B.IN2._Z._Z._Z.EUR._T._X.N.ALL`,
        capital_account: `BPS.${freq}.N.I9.W1.S1.S1.T.B.KA._Z._Z._Z.EUR._T._X.N.ALL`,
        financial_account: `BPS.${freq}.N.I9.W1.S1.S1.T.N.FA._T.F._Z.EUR._T._X.N.ALL`,
    };
}
/** Fetch a single ECB series via data-detail-api */
async function fetchSeries(seriesId, startDate, endDate) {
    const url = `${ECB_BASE}/${seriesId}?startPeriod=${startDate.replace(/-/g, '')}&endPeriod=${endDate.replace(/-/g, '')}`;
    try {
        const resp = await fetch(url, { signal: AbortSignal.timeout(30000) });
        if (!resp.ok)
            return [];
        const data = await resp.json();
        if (!Array.isArray(data))
            return [];
        return data
            .filter((d) => d?.PERIOD && (d?.OBS != null || d?.OBS_VALUE != null))
            .map((d) => ({
            period: String(d.PERIOD),
            value: parseFloat(String(d.OBS ?? d.OBS_VALUE ?? 0)),
        }));
    }
    catch {
        return [];
    }
}
export class ECBBalanceOfPaymentsFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return ECBBalanceOfPaymentsQueryParamsSchema.parse(params);
    }
    static async extractData(query, _credentials) {
        const freq = query.frequency === 'monthly' ? 'M' : 'Q';
        const series = getMainSeries(freq);
        const startDate = query.start_date ?? '2000-01-01';
        const endDate = query.end_date ?? new Date().toISOString().slice(0, 10);
        // Fetch all series in parallel
        const entries = Object.entries(series);
        const results = await Promise.all(entries.map(async ([fieldName, seriesId]) => {
            const data = await fetchSeries(seriesId, startDate, endDate);
            return { fieldName, data };
        }));
        // Merge by period
        const periodMap = {};
        for (const { fieldName, data } of results) {
            for (const { period, value } of data) {
                if (!periodMap[period]) {
                    // Format period: already "2025-12-01" from API, or "20241231" -> "2024-12-31"
                    let formatted = period;
                    if (/^\d{8}$/.test(period)) {
                        formatted = `${period.slice(0, 4)}-${period.slice(4, 6)}-${period.slice(6, 8)}`;
                    }
                    periodMap[period] = { period: formatted };
                }
                periodMap[period][fieldName] = value;
            }
        }
        const rows = Object.values(periodMap);
        if (!rows.length)
            throw new EmptyDataError('No ECB BOP data found');
        return rows;
    }
    static transformData(_query, data) {
        if (data.length === 0)
            throw new EmptyDataError();
        return data
            .sort((a, b) => String(a.period).localeCompare(String(b.period)))
            .map(d => BalanceOfPaymentsDataSchema.parse(d));
    }
}
//# sourceMappingURL=balance-of-payments.js.map
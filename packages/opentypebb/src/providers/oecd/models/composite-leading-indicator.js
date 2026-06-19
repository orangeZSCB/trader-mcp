/**
 * OECD Composite Leading Indicator Model.
 * Maps to: openbb_oecd/models/composite_leading_indicator.py
 *
 * Uses CSV format from OECD SDMX REST API (same as Python implementation).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CompositeLeadingIndicatorDataSchema } from '../../../standard-models/composite-leading-indicator.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { nativeFetch } from '../../../core/provider/utils/helpers.js';
export const OECDCLIQueryParamsSchema = z.object({
    country: z.string().default('g20').describe('Country or group code (g20, united_states, all, etc).'),
    start_date: z.string().nullable().default(null).describe('Start date in YYYY-MM-DD.'),
    end_date: z.string().nullable().default(null).describe('End date in YYYY-MM-DD.'),
}).passthrough();
const COUNTRIES = {
    g20: 'G20', g7: 'G7', asia5: 'A5M', north_america: 'NAFTA', europe4: 'G4E',
    australia: 'AUS', brazil: 'BRA', canada: 'CAN', china: 'CHN', france: 'FRA',
    germany: 'DEU', india: 'IND', indonesia: 'IDN', italy: 'ITA', japan: 'JPN',
    mexico: 'MEX', spain: 'ESP', south_africa: 'ZAF', south_korea: 'KOR',
    turkey: 'TUR', united_states: 'USA', united_kingdom: 'GBR',
};
const CODE_TO_NAME = Object.fromEntries(Object.entries(COUNTRIES).map(([k, v]) => [v, k.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())]));
/** Parse simple CSV text into rows */
function parseCSV(text) {
    const lines = text.trim().split('\n');
    if (lines.length < 2)
        return [];
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
        const values = line.split(',');
        const row = {};
        headers.forEach((h, i) => { row[h.trim()] = values[i]?.trim() ?? ''; });
        return row;
    });
}
export class OECDCompositeLeadingIndicatorFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        if (!params.start_date)
            params.start_date = '1947-01-01';
        if (!params.end_date) {
            const y = new Date().getFullYear();
            params.end_date = `${y}-12-31`;
        }
        return OECDCLIQueryParamsSchema.parse(params);
    }
    static async extractData(query, _credentials) {
        // Build country code string
        let countryCode = '';
        if (query.country && query.country !== 'all') {
            const parts = query.country.split(',');
            countryCode = parts.map(c => COUNTRIES[c.toLowerCase().trim()] ?? c.toUpperCase()).join('+');
        }
        const url = `https://sdmx.oecd.org/public/rest/data/OECD.SDD.STES,DSD_STES@DF_CLI,4.1` +
            `/${countryCode}.M.LI...AA.IX..H` +
            `?startPeriod=${query.start_date}&endPeriod=${query.end_date}` +
            `&dimensionAtObservation=TIME_PERIOD&detail=dataonly&format=csvfile`;
        try {
            const resp = await nativeFetch(url, {
                headers: { Accept: 'application/vnd.sdmx.data+csv; charset=utf-8' },
                timeoutMs: 30000,
            });
            if (resp.status !== 200)
                throw new EmptyDataError(`OECD API returned ${resp.status}`);
            const text = resp.text;
            const rows = parseCSV(text);
            if (!rows.length)
                throw new EmptyDataError();
            return rows
                .filter(r => r.OBS_VALUE && r.OBS_VALUE !== '')
                .map(r => ({
                date: r.TIME_PERIOD ? r.TIME_PERIOD + '-01' : '',
                value: parseFloat(r.OBS_VALUE),
                country: CODE_TO_NAME[r.REF_AREA] ?? r.REF_AREA ?? 'Unknown',
            }));
        }
        catch (err) {
            if (err instanceof EmptyDataError)
                throw err;
            throw new EmptyDataError(`Failed to fetch OECD CLI data: ${err}`);
        }
    }
    static transformData(_query, data) {
        if (data.length === 0)
            throw new EmptyDataError();
        return data
            .sort((a, b) => String(a.date).localeCompare(String(b.date)))
            .map(d => CompositeLeadingIndicatorDataSchema.parse(d));
    }
}
//# sourceMappingURL=composite-leading-indicator.js.map
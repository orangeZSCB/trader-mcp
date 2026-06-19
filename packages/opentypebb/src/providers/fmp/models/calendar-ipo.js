/**
 * FMP IPO Calendar Model.
 * Maps to: openbb_fmp/models/calendar_ipo.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CalendarIpoQueryParamsSchema, CalendarIpoDataSchema } from '../../../standard-models/calendar-ipo.js';
import { applyAliases } from '../../../core/provider/utils/helpers.js';
import { getDataMany } from '../utils/helpers.js';
// --- Query Params ---
export const FMPCalendarIpoQueryParamsSchema = CalendarIpoQueryParamsSchema.extend({});
// --- Data ---
const ALIAS_DICT = {
    ipo_date: 'date',
    name: 'company',
};
export const FMPCalendarIpoDataSchema = CalendarIpoDataSchema.extend({
    name: z.string().nullable().default(null).describe('The name of the entity going public.'),
    exchange: z.string().nullable().default(null).describe('The exchange where the IPO is listed.'),
    actions: z.string().nullable().default(null).describe('Actions related to the IPO.'),
    shares: z.number().nullable().default(null).describe('The number of shares being offered in the IPO.'),
    price_range: z.string().nullable().default(null).describe('The expected price range for the IPO shares.'),
    market_cap: z.number().nullable().default(null).describe('The estimated market capitalization at IPO time.'),
}).passthrough();
// --- Fetcher ---
export class FMPCalendarIpoFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPCalendarIpoQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        const now = new Date();
        const startDate = query.start_date ?? now.toISOString().slice(0, 10);
        const endDate = query.end_date ?? new Date(now.getTime() + 3 * 86400000).toISOString().slice(0, 10);
        const url = 'https://financialmodelingprep.com/stable/ipos-calendar'
            + `?from=${startDate}&to=${endDate}&apikey=${apiKey}`;
        return getDataMany(url);
    }
    static transformData(query, data) {
        const sorted = [...data].sort((a, b) => String(b.date ?? '').localeCompare(String(a.date ?? '')));
        return sorted.map(d => {
            const aliased = applyAliases(d, ALIAS_DICT);
            return FMPCalendarIpoDataSchema.parse(aliased);
        });
    }
}
//# sourceMappingURL=calendar-ipo.js.map
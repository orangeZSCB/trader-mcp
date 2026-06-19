/**
 * FMP Calendar Splits Model.
 * Maps to: openbb_fmp/models/calendar_splits.py
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CalendarSplitsQueryParamsSchema, CalendarSplitsDataSchema } from '../../../standard-models/calendar-splits.js';
import { getDataMany } from '../utils/helpers.js';
// --- Query Params ---
export const FMPCalendarSplitsQueryParamsSchema = CalendarSplitsQueryParamsSchema.extend({});
// --- Data ---
export const FMPCalendarSplitsDataSchema = CalendarSplitsDataSchema.extend({}).passthrough();
// --- Fetcher ---
export class FMPCalendarSplitsFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPCalendarSplitsQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        const now = new Date();
        const startDate = query.start_date ?? new Date(now.getTime() - 7 * 86400000).toISOString().slice(0, 10);
        const endDate = query.end_date ?? new Date(now.getTime() + 14 * 86400000).toISOString().slice(0, 10);
        const url = 'https://financialmodelingprep.com/stable/splits-calendar'
            + `?from=${startDate}&to=${endDate}&apikey=${apiKey}`;
        return getDataMany(url);
    }
    static transformData(query, data) {
        return data.map(d => FMPCalendarSplitsDataSchema.parse(d));
    }
}
//# sourceMappingURL=calendar-splits.js.map
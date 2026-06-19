/**
 * FMP Dividend Calendar Model.
 * Maps to: openbb_fmp/models/calendar_dividend.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CalendarDividendQueryParamsSchema, CalendarDividendDataSchema } from '../../../standard-models/calendar-dividend.js';
import { applyAliases } from '../../../core/provider/utils/helpers.js';
import { getDataMany } from '../utils/helpers.js';
// --- Query Params ---
export const FMPCalendarDividendQueryParamsSchema = CalendarDividendQueryParamsSchema.extend({});
// --- Data ---
const ALIAS_DICT = {
    amount: 'dividend',
    ex_dividend_date: 'date',
    record_date: 'recordDate',
    payment_date: 'paymentDate',
    declaration_date: 'declarationDate',
    adjusted_amount: 'adjDividend',
    dividend_yield: 'yield',
};
export const FMPCalendarDividendDataSchema = CalendarDividendDataSchema.extend({
    adjusted_amount: z.number().nullable().default(null).describe('The adjusted-dividend amount.'),
    dividend_yield: z.number().nullable().default(null).describe('Annualized dividend yield.'),
    frequency: z.string().nullable().default(null).describe('Frequency of the regular dividend payment.'),
}).passthrough();
// --- Fetcher ---
export class FMPCalendarDividendFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPCalendarDividendQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        const now = new Date();
        const startDate = query.start_date ?? now.toISOString().slice(0, 10);
        const endDate = query.end_date ?? new Date(now.getTime() + 14 * 86400000).toISOString().slice(0, 10);
        const url = 'https://financialmodelingprep.com/stable/dividends-calendar'
            + `?from=${startDate}&to=${endDate}&apikey=${apiKey}`;
        return getDataMany(url);
    }
    static transformData(query, data) {
        const sorted = [...data].sort((a, b) => String(a.date ?? '').localeCompare(String(b.date ?? '')));
        return sorted.map(d => {
            const aliased = applyAliases(d, ALIAS_DICT);
            // Normalize dividend_yield from percent to decimal
            if (typeof aliased.dividend_yield === 'number') {
                aliased.dividend_yield = aliased.dividend_yield / 100;
            }
            return FMPCalendarDividendDataSchema.parse(aliased);
        });
    }
}
//# sourceMappingURL=calendar-dividend.js.map
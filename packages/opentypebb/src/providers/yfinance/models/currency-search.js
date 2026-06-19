/**
 * Yahoo Finance Currency Search Model.
 * Maps to: openbb_yfinance/models/currency_search.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CurrencyPairsQueryParamsSchema, CurrencyPairsDataSchema } from '../../../standard-models/currency-pairs.js';
import { searchYahooFinance } from '../utils/helpers.js';
export const YFinanceCurrencySearchQueryParamsSchema = CurrencyPairsQueryParamsSchema;
export const YFinanceCurrencySearchDataSchema = CurrencyPairsDataSchema.extend({
    exchange: z.string().nullable().default(null).describe('The exchange the currency pair trades on.'),
    quote_type: z.string().nullable().default(null).describe('The quote type of the asset.'),
}).passthrough();
export class YFinanceCurrencySearchFetcher extends Fetcher {
    static transformQuery(params) {
        return YFinanceCurrencySearchQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        if (!query.query)
            return [];
        const quotes = await searchYahooFinance(query.query);
        return quotes
            .filter((q) => q.quoteType === 'CURRENCY')
            .map((q) => ({
            symbol: (q.symbol ?? '').replace('=X', ''),
            name: q.longname ?? q.shortname ?? null,
            exchange: q.exchDisp ?? null,
            quote_type: q.quoteType ?? null,
        }));
    }
    static transformData(query, data) {
        return data.map(d => YFinanceCurrencySearchDataSchema.parse(d));
    }
}
//# sourceMappingURL=currency-search.js.map
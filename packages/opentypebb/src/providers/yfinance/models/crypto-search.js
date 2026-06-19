/**
 * Yahoo Finance Crypto Search Model.
 * Maps to: openbb_yfinance/models/crypto_search.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CryptoSearchQueryParamsSchema, CryptoSearchDataSchema } from '../../../standard-models/crypto-search.js';
import { searchYahooFinance } from '../utils/helpers.js';
export const YFinanceCryptoSearchQueryParamsSchema = CryptoSearchQueryParamsSchema;
export const YFinanceCryptoSearchDataSchema = CryptoSearchDataSchema.extend({
    exchange: z.string().nullable().default(null).describe('The exchange the crypto trades on.'),
    quote_type: z.string().nullable().default(null).describe('The quote type of the asset.'),
}).passthrough();
export class YFinanceCryptoSearchFetcher extends Fetcher {
    static transformQuery(params) {
        return YFinanceCryptoSearchQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        if (!query.query)
            return [];
        const quotes = await searchYahooFinance(query.query);
        return quotes
            .filter((q) => q.quoteType === 'CRYPTOCURRENCY')
            .map((q) => ({
            symbol: (q.symbol ?? '').replace('-', ''),
            name: q.longname ?? q.shortname ?? null,
            exchange: q.exchDisp ?? null,
            quote_type: q.quoteType ?? null,
        }));
    }
    static transformData(query, data) {
        return data.map(d => YFinanceCryptoSearchDataSchema.parse(d));
    }
}
//# sourceMappingURL=crypto-search.js.map
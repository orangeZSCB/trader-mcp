/**
 * Yahoo Finance ETF Search Model.
 *
 * No OpenBB Python counterpart (openbb_yfinance has no etf_search). Added so
 * theme/keyword ETF lookup works keyless: FMP's etf_search hits company-screener
 * which filters by financials, not name, so "robotics" returns junk. Yahoo's
 * fuzzy search name-matches and tags ETFs via quoteType, which is exactly what
 * thematic discovery needs.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { EtfSearchQueryParamsSchema, EtfSearchDataSchema } from '../../../standard-models/etf-search.js';
import { searchYahooFinance } from '../utils/helpers.js';
export const YFinanceEtfSearchQueryParamsSchema = EtfSearchQueryParamsSchema;
export const YFinanceEtfSearchDataSchema = EtfSearchDataSchema.extend({
    exchange: z.string().nullable().default(null).describe('The exchange the ETF trades on.'),
    quote_type: z.string().nullable().default(null).describe('The quote type of the asset.'),
}).passthrough();
export class YFinanceEtfSearchFetcher extends Fetcher {
    static transformQuery(params) {
        return YFinanceEtfSearchQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        if (!query.query)
            return [];
        const quotes = await searchYahooFinance(query.query);
        return quotes
            .filter((q) => String(q.quoteType ?? '').toUpperCase() === 'ETF')
            .map((q) => ({
            symbol: q.symbol ?? '',
            name: q.longname ?? q.shortname ?? null,
            exchange: q.exchDisp ?? null,
            quote_type: q.quoteType ?? null,
        }));
    }
    static transformData(query, data) {
        return data.map(d => YFinanceEtfSearchDataSchema.parse(d));
    }
}
//# sourceMappingURL=etf-search.js.map
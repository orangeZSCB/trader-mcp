/**
 * FMP Crypto Search Model.
 * Maps to: openbb_fmp/models/crypto_search.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CryptoSearchQueryParamsSchema, CryptoSearchDataSchema } from '../../../standard-models/crypto-search.js';
import { getDataMany } from '../utils/helpers.js';
export const FMPCryptoSearchQueryParamsSchema = CryptoSearchQueryParamsSchema;
export const FMPCryptoSearchDataSchema = CryptoSearchDataSchema.extend({
    exchange: z.string().nullable().default(null).describe('The exchange code the crypto trades on.'),
}).passthrough();
export class FMPCryptoSearchFetcher extends Fetcher {
    static transformQuery(params) {
        // Remove dashes from query
        if (typeof params.query === 'string') {
            params.query = params.query.replace(/-/g, '');
        }
        return FMPCryptoSearchQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        return getDataMany(`https://financialmodelingprep.com/stable/cryptocurrency-list?apikey=${apiKey}`);
    }
    static transformData(query, data) {
        let filtered = data;
        if (query.query) {
            const q = query.query.toLowerCase();
            filtered = data.filter((d) => String(d.symbol ?? '').toLowerCase().includes(q) ||
                String(d.name ?? '').toLowerCase().includes(q) ||
                String(d.exchange ?? '').toLowerCase().includes(q));
        }
        return filtered.map((d) => FMPCryptoSearchDataSchema.parse(d));
    }
}
//# sourceMappingURL=crypto-search.js.map
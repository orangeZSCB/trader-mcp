/**
 * ETF Search Standard Model.
 * Maps to: standard_models/etf_search.py
 */
import { z } from 'zod';
export const EtfSearchQueryParamsSchema = z.object({
    query: z.string().nullable().default(null).describe('Search query.'),
});
export const EtfSearchDataSchema = z.object({
    symbol: z.string().describe('Symbol of the ETF.'),
    name: z.string().nullable().default(null).describe('Name of the ETF.'),
}).passthrough();
//# sourceMappingURL=etf-search.js.map
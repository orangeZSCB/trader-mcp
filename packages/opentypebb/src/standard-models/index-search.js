/**
 * Index Search Standard Model.
 * Maps to: openbb_core/provider/standard_models/index_search.py
 */
import { z } from 'zod';
export const IndexSearchQueryParamsSchema = z.object({
    query: z.string().default('').describe('Search query.'),
    is_symbol: z.boolean().default(false).describe('Whether to search by ticker symbol.'),
}).passthrough();
export const IndexSearchDataSchema = z.object({
    symbol: z.string().describe('Symbol representing the entity.'),
    name: z.string().describe('Name of the index.'),
}).passthrough();
//# sourceMappingURL=index-search.js.map
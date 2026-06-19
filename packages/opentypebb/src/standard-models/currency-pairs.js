/**
 * Currency Available Pairs Standard Model.
 * Maps to: openbb_core/provider/standard_models/currency_pairs.py
 */
import { z } from 'zod';
export const CurrencyPairsQueryParamsSchema = z.object({
    query: z.string().nullable().default(null).describe('Query to search for currency pairs.'),
}).passthrough();
export const CurrencyPairsDataSchema = z.object({
    symbol: z.string().describe('Symbol representing the entity requested in the data.'),
    name: z.string().nullable().default(null).describe('Name of the currency pair.'),
}).passthrough();
//# sourceMappingURL=currency-pairs.js.map
/**
 * ETF Holdings Standard Model.
 * Maps to: standard_models/etf_holdings.py
 */
import { z } from 'zod';
export const EtfHoldingsQueryParamsSchema = z.object({
    symbol: z.string().transform(v => v.toUpperCase()).describe('Symbol to get data for.'),
});
export const EtfHoldingsDataSchema = z.object({
    symbol: z.string().nullable().default(null).describe('Symbol representing the holding.'),
    name: z.string().nullable().default(null).describe('Name of the holding.'),
}).passthrough();
//# sourceMappingURL=etf-holdings.js.map
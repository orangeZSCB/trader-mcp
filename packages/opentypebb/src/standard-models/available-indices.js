/**
 * Available Indices Standard Model.
 * Maps to: openbb_core/provider/standard_models/available_indices.py
 */
import { z } from 'zod';
export const AvailableIndicesQueryParamsSchema = z.object({}).passthrough();
export const AvailableIndicesDataSchema = z.object({
    symbol: z.string().describe('Symbol representing the entity.'),
    name: z.string().nullable().default(null).describe('Name of the index.'),
    exchange: z.string().nullable().default(null).describe('Stock exchange where the index is listed.'),
    currency: z.string().nullable().default(null).describe('Currency the index is traded in.'),
}).passthrough();
//# sourceMappingURL=available-indices.js.map
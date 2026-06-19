/**
 * FRED Search Standard Model.
 * Maps to: openbb_core/provider/standard_models/fred_search.py
 */
import { z } from 'zod';
export const FredSearchQueryParamsSchema = z.object({
    query: z.string().describe('Search query for FRED series.'),
    limit: z.number().default(100).describe('Maximum number of results.'),
}).passthrough();
export const FredSearchDataSchema = z.object({
    series_id: z.string().describe('FRED series ID.'),
    title: z.string().describe('Series title.'),
    frequency: z.string().nullable().default(null).describe('Data frequency.'),
    units: z.string().nullable().default(null).describe('Data units.'),
    seasonal_adjustment: z.string().nullable().default(null).describe('Seasonal adjustment.'),
    last_updated: z.string().nullable().default(null).describe('Last updated timestamp.'),
    notes: z.string().nullable().default(null).describe('Series notes.'),
}).passthrough();
//# sourceMappingURL=fred-search.js.map
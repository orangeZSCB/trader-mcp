/**
 * Key Metrics Standard Model.
 * Maps to: openbb_core/provider/standard_models/key_metrics.py
 */
import { z } from 'zod';
export const KeyMetricsQueryParamsSchema = z.object({
    symbol: z.string().transform((v) => v.toUpperCase()),
}).passthrough();
export const KeyMetricsDataSchema = z.object({
    symbol: z.string().describe('Symbol representing the entity requested in the data.'),
    period_ending: z.string().nullable().default(null).describe('End date of the reporting period.'),
    fiscal_year: z.number().int().nullable().default(null).describe('Fiscal year for the fiscal period.'),
    fiscal_period: z.string().nullable().default(null).describe('Fiscal period for the data.'),
    currency: z.string().nullable().default(null).describe('Currency in which the data is reported.'),
    market_cap: z.number().nullable().default(null).describe('Market capitalization.'),
}).passthrough();
//# sourceMappingURL=key-metrics.js.map
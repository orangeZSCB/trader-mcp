/**
 * Cash Flow Statement Growth Standard Model.
 * Maps to: standard_models/cash_flow_growth.py
 */
import { z } from 'zod';
// --- Query Params ---
export const CashFlowStatementGrowthQueryParamsSchema = z.object({
    symbol: z.string().transform(v => v.toUpperCase()).describe('Symbol to get data for.'),
    limit: z.coerce.number().int().nullable().default(null).describe('The number of data entries to return.'),
});
// --- Data ---
export const CashFlowStatementGrowthDataSchema = z.object({
    period_ending: z.string().describe('The end date of the reporting period.'),
    fiscal_period: z.string().nullable().default(null).describe('The fiscal period of the report.'),
    fiscal_year: z.coerce.number().int().nullable().default(null).describe('The fiscal year of the fiscal period.'),
}).passthrough();
//# sourceMappingURL=cash-flow-growth.js.map
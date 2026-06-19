/**
 * Yahoo Finance Available Indices Model.
 * Maps to: openbb_yfinance/models/available_indices.py
 *
 * Simply returns the INDICES reference table as structured data.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { AvailableIndicesQueryParamsSchema, AvailableIndicesDataSchema } from '../../../standard-models/available-indices.js';
import { INDICES } from '../utils/references.js';
export const YFinanceAvailableIndicesQueryParamsSchema = AvailableIndicesQueryParamsSchema;
export const YFinanceAvailableIndicesDataSchema = AvailableIndicesDataSchema.extend({
    code: z.string().describe('ID code for keying the index in the OpenBB Terminal.'),
}).passthrough();
export class YFinanceAvailableIndicesFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return YFinanceAvailableIndicesQueryParamsSchema.parse(params);
    }
    static async extractData(_query, _credentials) {
        const records = [];
        for (const [code, entry] of Object.entries(INDICES)) {
            records.push({
                code,
                name: entry.name,
                symbol: entry.ticker,
            });
        }
        return records;
    }
    static transformData(_query, data) {
        return data.map(d => YFinanceAvailableIndicesDataSchema.parse(d));
    }
}
//# sourceMappingURL=available-indices.js.map
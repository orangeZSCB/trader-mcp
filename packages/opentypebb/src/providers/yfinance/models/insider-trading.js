/**
 * Yahoo Finance Insider Trading Model.
 *
 * Keyless fallback for the FMP insider-trading endpoint, fed by the
 * quoteSummary `insiderTransactions` module (Form-4 derived rows).
 * Yahoo carries fewer fields than FMP (no CIKs / filing dates); the
 * shared columns map onto the standard model, the rest stay null.
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { InsiderTradingQueryParamsSchema, InsiderTradingDataSchema } from '../../../standard-models/insider-trading.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { getRawQuoteSummary } from '../utils/helpers.js';
export const YFInsiderTradingQueryParamsSchema = InsiderTradingQueryParamsSchema;
export const YFInsiderTradingDataSchema = InsiderTradingDataSchema.passthrough();
export class YFInsiderTradingFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return YFInsiderTradingQueryParamsSchema.parse(params);
    }
    static async extractData(query) {
        const summary = await getRawQuoteSummary(query.symbol, ['insiderTransactions']);
        const rows = (summary.insiderTransactions?.transactions ?? []);
        if (rows.length === 0)
            throw new EmptyDataError(`No insider transactions for ${query.symbol}.`);
        return query.limit ? rows.slice(0, query.limit) : rows;
    }
    static transformData(query, data) {
        return data.map((d) => {
            const shares = typeof d.shares === 'number' ? d.shares : null;
            const value = typeof d.value === 'number' ? d.value : null;
            const start = d.startDate instanceof Date
                ? d.startDate.toISOString().slice(0, 10)
                : typeof d.startDate === 'string'
                    ? d.startDate.slice(0, 10)
                    : null;
            return YFInsiderTradingDataSchema.parse({
                symbol: query.symbol,
                transaction_date: start,
                owner_name: d.filerName ?? null,
                owner_title: d.filerRelation ?? null,
                transaction_type: d.transactionText || null,
                securities_transacted: shares,
                // Yahoo gives total value, not unit price — derive when possible.
                transaction_price: value && shares ? value / shares : null,
                ownership_type: d.ownership ?? null,
                filing_url: d.filerUrl || null,
            });
        });
    }
}
//# sourceMappingURL=insider-trading.js.map
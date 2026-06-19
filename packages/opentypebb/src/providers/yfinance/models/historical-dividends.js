/**
 * YFinance Historical Dividends Model.
 * Maps to: openbb_yfinance/models/historical_dividends.py
 *
 * All data is split-adjusted.
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { HistoricalDividendsQueryParamsSchema, HistoricalDividendsDataSchema } from '../../../standard-models/historical-dividends.js';
import { getHistoricalDividends } from '../utils/helpers.js';
export const YFinanceHistoricalDividendsQueryParamsSchema = HistoricalDividendsQueryParamsSchema;
export const YFinanceHistoricalDividendsDataSchema = HistoricalDividendsDataSchema;
export class YFinanceHistoricalDividendsFetcher extends Fetcher {
    static transformQuery(params) {
        return YFinanceHistoricalDividendsQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        return getHistoricalDividends(query.symbol, query.start_date, query.end_date);
    }
    static transformData(_query, data) {
        return data.map(d => YFinanceHistoricalDividendsDataSchema.parse(d));
    }
}
//# sourceMappingURL=historical-dividends.js.map
/**
 * Regression tests for CryptoHistoricalDataSchema.
 * @see https://github.com/TraderAlice/OpenAlice/issues/66
 *
 * yfinance can return null for the close price (e.g. current day before market
 * close, data delays, or missing data points). The schema must accept null for
 * close, consistent with all other price fields.
 */
export {};

/**
 * Yahoo Finance helpers module.
 * Maps to: openbb_yfinance/utils/helpers.py
 *
 * Uses yahoo-finance2 npm package for authenticated access to Yahoo Finance API.
 * The package handles cookie/crumb authentication automatically.
 */
/**
 * Get data from Yahoo Finance predefined screener.
 * Uses yahoo-finance2's screener() method with scrIds parameter.
 * Maps to: get_custom_screener() in helpers.py
 *
 * @param scrId - Predefined screener ID: 'day_gainers', 'day_losers', 'most_actives', etc.
 * @param count - Max results to return (default: 250)
 */
export declare function getPredefinedScreener(scrId: string, count?: number): Promise<Record<string, unknown>[]>;
/** @deprecated Use getPredefinedScreener instead */
export declare const getCustomScreener: any;
/**
 * Fetch quote summary data from Yahoo Finance for one symbol.
 * Uses yahoo-finance2's quoteSummary which handles authentication.
 * Maps to: yfinance Ticker.get_info() pattern.
 */
export declare function getQuoteSummary(symbol: string, modules?: string[]): Promise<Record<string, unknown>>;
/**
 * Fetch historical chart data from Yahoo Finance.
 * Uses yahoo-finance2's chart method which handles authentication.
 * Maps to: yf.download() pattern.
 */
export declare function getHistoricalData(symbol: string, options?: {
    startDate?: string | null;
    endDate?: string | null;
    interval?: string;
}): Promise<Record<string, unknown>[]>;
/**
 * Search Yahoo Finance for symbols.
 * Used by crypto-search and currency-search models.
 */
export declare function searchYahooFinance(query: string): Promise<Record<string, unknown>[]>;
/**
 * Fetch financial statement data from Yahoo Finance via fundamentalsTimeSeries.
 * Used by balance-sheet, income-statement, and cash-flow fetchers.
 *
 * Note: The old quoteSummary modules (balanceSheetHistory, incomeStatementHistory,
 * cashflowStatementHistory) have been deprecated since Nov 2024 and return almost
 * no data. fundamentalsTimeSeries returns ALL financial data fields mixed together.
 *
 * @param symbol - Stock ticker
 * @param period - "annual" or "quarter"
 * @param limit - max periods to return (default: 5)
 */
export declare function getFinancialStatements(symbol: string, period: string, limit?: number): Promise<Record<string, unknown>[]>;
/**
 * Fetch raw (unflattened) quoteSummary modules from Yahoo Finance.
 * Unlike getQuoteSummary(), this preserves nested objects like companyOfficers.
 * Useful for endpoints that need array-type nested data.
 */
export declare function getRawQuoteSummary(symbol: string, modules: string[]): Promise<Record<string, any>>;
/**
 * Fetch historical dividend data from Yahoo Finance using the chart API.
 * Maps to: yfinance Ticker.get_dividends() pattern.
 */
export declare function getHistoricalDividends(symbol: string, startDate?: string | null, endDate?: string | null): Promise<Record<string, unknown>[]>;
/**
 * Get the list of futures chain symbols from Yahoo Finance.
 * Uses quoteSummary with 'futuresChain' module on the continuation symbol (SYMBOL=F).
 * Maps to: get_futures_symbols() in helpers.py
 */
export declare function getFuturesSymbols(symbol: string): Promise<string[]>;
/**
 * Get options chain data from Yahoo Finance for a symbol.
 * Uses yahoo-finance2 options() with retry and instance reset logic.
 */
export declare function getOptionsData(symbol: string, date?: Date | null): Promise<any>;
/**
 * Get news from Yahoo Finance for a symbol.
 */
export declare function getYahooNews(symbol: string, limit?: number): Promise<Record<string, unknown>[]>;

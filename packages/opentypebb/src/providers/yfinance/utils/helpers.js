/**
 * Yahoo Finance helpers module.
 * Maps to: openbb_yfinance/utils/helpers.py
 *
 * Uses yahoo-finance2 npm package for authenticated access to Yahoo Finance API.
 * The package handles cookie/crumb authentication automatically.
 */
import YahooFinance from 'yahoo-finance2';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { SCREENER_FIELDS } from './references.js';
// Singleton Yahoo Finance instance — reset on persistent failures
let _yf = null;
let _yfFailCount = 0;
function getYF() {
    if (!_yf || _yfFailCount >= 3) {
        _yf = new YahooFinance({ suppressNotices: ['yahooSurvey'] });
        _yfFailCount = 0;
    }
    return _yf;
}
function recordYFSuccess() { _yfFailCount = 0; }
function recordYFFailure() { _yfFailCount++; }
/** Retry a function up to maxRetries times with delay between attempts */
async function withRetry(fn, maxRetries = 2, delayMs = 1000) {
    let lastError;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await fn();
        }
        catch (err) {
            lastError = err;
            if (attempt < maxRetries) {
                await new Promise(r => setTimeout(r, delayMs * (attempt + 1)));
            }
        }
    }
    throw lastError;
}
/**
 * Get data from Yahoo Finance predefined screener.
 * Uses yahoo-finance2's screener() method with scrIds parameter.
 * Maps to: get_custom_screener() in helpers.py
 *
 * @param scrId - Predefined screener ID: 'day_gainers', 'day_losers', 'most_actives', etc.
 * @param count - Max results to return (default: 250)
 */
export async function getPredefinedScreener(scrId, count = 250) {
    let result;
    // Screener requires crumb authentication which can become stale in long-running
    // server processes. On failure, reset the YF singleton to force a fresh crumb,
    // then retry once.
    for (let attempt = 0; attempt < 2; attempt++) {
        const yf = getYF();
        try {
            // validateResult: false — Yahoo keeps adding fields to the screener
            // response (predefined screeners gained a large includeFields set),
            // tripping yahoo-finance2's strict ScreenerResult schema. Same treatment
            // as search() below. We only read the whitelisted SCREENER_FIELDS anyway.
            // moduleOptions (validateResult) is the THIRD arg — screener(overrides, queryOpts, moduleOpts).
            result = await yf.screener({ scrIds: scrId, count }, undefined, { validateResult: false });
            recordYFSuccess();
            break;
        }
        catch (err) {
            recordYFFailure();
            if (attempt === 0) {
                // Force singleton reset for fresh crumb on retry
                _yf = null;
                _yfFailCount = 0;
                await new Promise(r => setTimeout(r, 1000));
                continue;
            }
            throw err;
        }
    }
    const quotes = result?.quotes ?? [];
    if (!quotes.length) {
        throw new EmptyDataError(`No data found for screener: ${scrId}`);
    }
    // Normalize quotes
    const output = [];
    for (const item of quotes) {
        // Format earnings date if available
        if (item.earningsTimestamp) {
            try {
                const ts = typeof item.earningsTimestamp === 'number'
                    ? item.earningsTimestamp
                    : item.earningsTimestamp instanceof Date
                        ? item.earningsTimestamp.getTime() / 1000
                        : null;
                if (ts) {
                    item.earnings_date = new Date(ts * 1000).toISOString().replace('T', ' ').slice(0, 19);
                }
            }
            catch {
                item.earnings_date = null;
            }
        }
        const result = {};
        for (const k of SCREENER_FIELDS) {
            result[k] = item[k] ?? null;
        }
        // Derive right-side volume reads while the raw yahoo keys are still present.
        // These snake_case keys aren't in the alias dict, so they pass straight
        // through applyAliases + the schema's passthrough() to the consumer.
        const vol = result.regularMarketVolume;
        const avgVol = result.averageDailyVolume3Month;
        const sharesOut = result.sharesOutstanding;
        const price = result.regularMarketPrice;
        result.relative_volume =
            typeof vol === 'number' && typeof avgVol === 'number' && avgVol > 0 ? vol / avgVol : null;
        result.turnover =
            typeof vol === 'number' && typeof sharesOut === 'number' && sharesOut > 0
                ? vol / sharesOut
                : null;
        // dollar_volume (price × volume) is the cross-ticker-comparable absolute:
        // raw share volume isn't (1M shares means different money at $5 vs $500).
        // This is the unit that aggregates to a sector. relative_volume answers
        // "unusual for itself?"; dollar_volume answers "how much money is here?".
        result.dollar_volume =
            typeof vol === 'number' && typeof price === 'number' ? vol * price : null;
        if (result.regularMarketChange != null && result.regularMarketVolume != null) {
            output.push(result);
        }
    }
    return output;
}
/** @deprecated Use getPredefinedScreener instead */
export const getCustomScreener = getPredefinedScreener;
/**
 * Fetch quote summary data from Yahoo Finance for one symbol.
 * Uses yahoo-finance2's quoteSummary which handles authentication.
 * Maps to: yfinance Ticker.get_info() pattern.
 */
export async function getQuoteSummary(symbol, modules = ['defaultKeyStatistics', 'summaryDetail', 'summaryProfile', 'financialData', 'price']) {
    const yf = getYF();
    let result;
    try {
        result = await withRetry(() => yf.quoteSummary(symbol, { modules: modules }));
        recordYFSuccess();
    }
    catch (err) {
        recordYFFailure();
        throw err;
    }
    if (!result) {
        throw new EmptyDataError(`No quote summary data for ${symbol}`);
    }
    // Flatten all modules into a single dict
    const flat = { symbol };
    for (const [_modName, mod] of Object.entries(result)) {
        if (mod && typeof mod === 'object') {
            for (const [key, value] of Object.entries(mod)) {
                if (value !== undefined && value !== null) {
                    if (value instanceof Date) {
                        flat[key] = value.toISOString().slice(0, 10);
                    }
                    else if (typeof value !== 'object') {
                        flat[key] = value;
                    }
                    else if (typeof value === 'object' && value !== null && 'raw' in value) {
                        flat[key] = value.raw;
                    }
                    // Skip nested objects (companyOfficers, etc.)
                }
            }
        }
    }
    return flat;
}
/**
 * Fetch historical chart data from Yahoo Finance.
 * Uses yahoo-finance2's chart method which handles authentication.
 * Maps to: yf.download() pattern.
 */
export async function getHistoricalData(symbol, options = {}) {
    const yf = getYF();
    const interval = options.interval ?? '1d';
    const period1 = options.startDate
        ? new Date(options.startDate)
        : new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
    const period2 = options.endDate
        ? new Date(options.endDate)
        : new Date();
    const chartResult = await withRetry(() => yf.chart(symbol, {
        period1,
        period2,
        interval: interval,
    }));
    if (!chartResult?.quotes?.length) {
        throw new EmptyDataError(`No historical data for ${symbol}`);
    }
    const isIntraday = ['1m', '2m', '5m', '15m', '30m', '60m', '90m', '1h'].includes(interval);
    const records = [];
    for (const q of chartResult.quotes) {
        if (q.open == null || q.open <= 0)
            continue;
        const date = q.date instanceof Date ? q.date : new Date(q.date);
        const dateStr = isIntraday
            ? date.toISOString().replace('T', ' ').slice(0, 19)
            : date.toISOString().slice(0, 10);
        records.push({
            date: dateStr,
            open: q.open ?? null,
            high: q.high ?? null,
            low: q.low ?? null,
            close: q.close ?? null,
            volume: q.volume ?? null,
            ...(q.adjclose != null ? { adj_close: q.adjclose } : {}),
        });
    }
    if (records.length === 0) {
        throw new EmptyDataError(`No valid historical data for ${symbol}`);
    }
    return records;
}
/**
 * Search Yahoo Finance for symbols.
 * Used by crypto-search and currency-search models.
 */
export async function searchYahooFinance(query) {
    const yf = getYF();
    // validateResult: false — Yahoo changed typeDisp casing (e.g. "cryptocurrency" vs
    // "Cryptocurrency"), causing yahoo-finance2's strict schema validation to throw.
    const result = await withRetry(() => yf.search(query, { quotesCount: 20, newsCount: 0 }, { validateResult: false }));
    return (result.quotes ?? []);
}
/**
 * Convert a camelCase string to snake_case, preserving acronyms.
 * `EBITDA` → `ebitda` (not `e_b_i_t_d_a`),
 * `totalRevenue` → `total_revenue`,
 * `EBITDAMargin` → `ebitda_margin`.
 *
 * Maps to: openbb_core.provider.utils.helpers.to_snake_case.
 */
function toSnakeCase(s) {
    return s
        // boundary between a run of caps and a following word (EBITDAMargin → EBITDA_Margin)
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
        // boundary between a lowercase/digit and an uppercase (totalRevenue → total_Revenue)
        .replace(/([a-z\d])([A-Z])/g, '$1_$2')
        .toLowerCase()
        .replace(/^_/, '');
}
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
export async function getFinancialStatements(symbol, period, limit = 5) {
    const yf = getYF();
    const type = period === 'quarter' ? 'quarterly' : 'annual';
    // Fetch 10 years back for annual, 3 years for quarterly
    const yearsBack = period === 'quarter' ? 3 : 10;
    const period1 = new Date();
    period1.setFullYear(period1.getFullYear() - yearsBack);
    let result;
    try {
        result = await withRetry(() => yf.fundamentalsTimeSeries(symbol, {
            period1: period1.toISOString().slice(0, 10),
            period2: new Date().toISOString().slice(0, 10),
            type,
            module: 'all',
        }));
        recordYFSuccess();
    }
    catch (err) {
        recordYFFailure();
        throw err;
    }
    if (!Array.isArray(result) || result.length === 0) {
        throw new EmptyDataError(`No financial statement data for ${symbol}`);
    }
    // Sort by date descending (most recent first) and apply limit
    const sorted = result.sort((a, b) => {
        const da = a.date instanceof Date ? a.date.getTime() : new Date(a.date).getTime();
        const db = b.date instanceof Date ? b.date.getTime() : new Date(b.date).getTime();
        return db - da;
    });
    const limited = sorted.slice(0, limit);
    // Convert each period's data to snake_case records
    return limited.map((stmt) => {
        const record = {};
        for (const [key, value] of Object.entries(stmt)) {
            // Skip metadata fields
            if (key === 'TYPE')
                continue;
            const snakeKey = toSnakeCase(key);
            if (value instanceof Date) {
                record[snakeKey] = value.toISOString().slice(0, 10);
            }
            else if (value != null && typeof value === 'object' && 'raw' in value) {
                record[snakeKey] = value.raw;
            }
            else if (typeof value !== 'object' || value === null) {
                record[snakeKey] = value ?? null;
            }
        }
        // Map 'date' → 'period_ending' for standard model
        if (record.date && !record.period_ending) {
            record.period_ending = record.date;
            delete record.date;
        }
        return record;
    });
}
/**
 * Fetch raw (unflattened) quoteSummary modules from Yahoo Finance.
 * Unlike getQuoteSummary(), this preserves nested objects like companyOfficers.
 * Useful for endpoints that need array-type nested data.
 */
export async function getRawQuoteSummary(symbol, modules) {
    const yf = getYF();
    let result;
    try {
        result = await withRetry(() => yf.quoteSummary(symbol, { modules: modules }));
        recordYFSuccess();
    }
    catch (err) {
        recordYFFailure();
        throw err;
    }
    if (!result) {
        throw new EmptyDataError(`No quote summary data for ${symbol}`);
    }
    return result;
}
/**
 * Fetch historical dividend data from Yahoo Finance using the chart API.
 * Maps to: yfinance Ticker.get_dividends() pattern.
 */
export async function getHistoricalDividends(symbol, startDate, endDate) {
    const yf = getYF();
    const period1 = startDate
        ? new Date(startDate)
        : new Date('1970-01-01');
    const period2 = endDate
        ? new Date(endDate)
        : new Date();
    let result;
    try {
        result = await withRetry(() => yf.chart(symbol, {
            period1,
            period2,
            interval: '1d',
            events: 'div',
        }));
        recordYFSuccess();
    }
    catch (err) {
        recordYFFailure();
        throw err;
    }
    // Extract dividends from events
    const dividends = [];
    const events = result?.events;
    if (events?.dividends) {
        const divEntries = Array.isArray(events.dividends)
            ? events.dividends
            : Object.values(events.dividends);
        for (const div of divEntries) {
            const date = div.date instanceof Date
                ? div.date.toISOString().slice(0, 10)
                : typeof div.date === 'number'
                    ? new Date(div.date * 1000).toISOString().slice(0, 10)
                    : String(div.date ?? '').slice(0, 10);
            dividends.push({
                ex_dividend_date: date,
                amount: div.amount ?? div.dividend ?? 0,
            });
        }
    }
    if (!dividends.length) {
        throw new EmptyDataError(`No dividend data found for ${symbol}`);
    }
    // Filter by date range if specified
    let filtered = dividends;
    if (startDate) {
        filtered = filtered.filter(d => String(d.ex_dividend_date) >= startDate);
    }
    if (endDate) {
        filtered = filtered.filter(d => String(d.ex_dividend_date) <= endDate);
    }
    return filtered;
}
/**
 * Get the list of futures chain symbols from Yahoo Finance.
 * Uses quoteSummary with 'futuresChain' module on the continuation symbol (SYMBOL=F).
 * Maps to: get_futures_symbols() in helpers.py
 */
export async function getFuturesSymbols(symbol) {
    try {
        const result = await getRawQuoteSummary(`${symbol}=F`, ['futuresChain']);
        const chain = result?.futuresChain;
        if (chain?.futures && Array.isArray(chain.futures)) {
            return chain.futures;
        }
    }
    catch {
        // Fall through to empty
    }
    return [];
}
/**
 * Get options chain data from Yahoo Finance for a symbol.
 * Uses yahoo-finance2 options() with retry and instance reset logic.
 */
export async function getOptionsData(symbol, date) {
    for (let attempt = 0; attempt < 2; attempt++) {
        const yf = getYF();
        try {
            const result = date
                ? await yf.options(symbol, { date })
                : await yf.options(symbol);
            recordYFSuccess();
            return result;
        }
        catch (err) {
            recordYFFailure();
            if (attempt === 0) {
                // Force singleton reset for fresh crumb on retry
                _yf = null;
                _yfFailCount = 0;
                await new Promise(r => setTimeout(r, 1000));
                continue;
            }
            throw err;
        }
    }
}
/**
 * Get news from Yahoo Finance for a symbol.
 */
export async function getYahooNews(symbol, limit = 20) {
    const yf = getYF();
    const result = await withRetry(() => yf.search(symbol, { quotesCount: 0, newsCount: limit }));
    return (result.news ?? []);
}
//# sourceMappingURL=helpers.js.map
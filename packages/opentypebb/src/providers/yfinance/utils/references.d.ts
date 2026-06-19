/**
 * Yahoo Finance References.
 * Maps to: openbb_yfinance/utils/references.py
 */
import { z } from 'zod';
export declare const INTERVALS_DICT: Record<string, string>;
/** Futures month code mapping. Maps month number (1-12) to futures month letter code. */
export declare const MONTHS: Record<number, string>;
/**
 * Index code → { name, ticker } mapping.
 * Maps to: INDICES dict in openbb_yfinance/utils/references.py
 */
export declare const INDICES: Record<string, {
    name: string;
    ticker: string;
}>;
export declare const SCREENER_FIELDS: readonly ["symbol", "shortName", "regularMarketPrice", "regularMarketChange", "regularMarketChangePercent", "regularMarketVolume", "averageDailyVolume3Month", "regularMarketOpen", "regularMarketDayHigh", "regularMarketDayLow", "regularMarketPreviousClose", "fiftyDayAverage", "twoHundredDayAverage", "fiftyTwoWeekHigh", "fiftyTwoWeekLow", "marketCap", "sharesOutstanding", "epsTrailingTwelveMonths", "forwardPE", "epsForward", "bookValue", "priceToBook", "trailingAnnualDividendYield", "currency", "exchange", "exchangeTimezoneName", "earnings_date"];
export declare const YF_SCREENER_ALIAS_DICT: Record<string, string>;
export declare const YFPredefinedScreenerDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    avg_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    relative_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    turnover: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dollar_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    previous_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    book_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_book: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    pe_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_timezone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    earnings_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    avg_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    relative_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    turnover: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dollar_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    previous_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    book_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_book: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    pe_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_timezone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    earnings_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodNumber;
    change: z.ZodNumber;
    percent_change: z.ZodNumber;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    avg_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    relative_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    turnover: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dollar_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    previous_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma50: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ma200: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    market_cap: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    shares_outstanding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    book_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    price_to_book: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_ttm: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    eps_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    pe_forward: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dividend_yield: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    exchange: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    exchange_timezone: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    earnings_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFPredefinedScreenerData = z.infer<typeof YFPredefinedScreenerDataSchema>;

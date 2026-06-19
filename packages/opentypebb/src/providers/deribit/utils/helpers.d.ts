/**
 * Deribit Helpers Module.
 * Maps to: openbb_deribit/utils/helpers.py
 */
export declare const BASE_URL = "https://www.deribit.com";
export declare const DERIBIT_FUTURES_CURVE_SYMBOLS: string[];
export declare const DERIBIT_OPTIONS_SYMBOLS: string[];
export declare const CURRENCIES: string[];
/**
 * Get instruments from Deribit.
 * Maps to: get_instruments() in helpers.py
 */
export declare function getInstruments(currency: string, derivativeType: string, expired?: boolean): Promise<Record<string, unknown>[]>;
/**
 * Get all instruments for all currencies.
 */
export declare function getAllFuturesInstruments(): Promise<Record<string, unknown>[]>;
/**
 * Get ticker data for a single instrument.
 * Maps to: get_ticker_data() in helpers.py
 */
export declare function getTickerData(instrumentName: string): Promise<Record<string, unknown>>;
/**
 * Get futures curve symbols for a given currency.
 * Maps to: get_futures_curve_symbols() in helpers.py
 */
export declare function getFuturesCurveSymbols(symbol: string): Promise<string[]>;
/**
 * Get perpetual symbols mapping short names to full names.
 * Maps to: get_perpetual_symbols() in helpers.py
 */
export declare function getPerpetualSymbols(): Promise<Record<string, string>>;
/**
 * Get all futures symbols.
 * Maps to: get_futures_symbols() in helpers.py
 */
export declare function getFuturesSymbols(): Promise<string[]>;
/**
 * Get options symbols grouped by expiration.
 * Maps to: get_options_symbols() in helpers.py
 */
export declare function getOptionsSymbols(symbol: string): Promise<Record<string, string[]>>;

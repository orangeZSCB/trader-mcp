/**
 * FMP Helpers Module.
 * Maps to: openbb_fmp/utils/helpers.py
 */
/**
 * Response callback for FMP API requests.
 * Maps to: response_callback() in helpers.py
 */
export declare function responseCallback(response: Response): Promise<Response>;
/**
 * Get data from FMP endpoint.
 * Maps to: get_data() in helpers.py
 */
export declare function getData<T = unknown>(url: string): Promise<T>;
/**
 * Get data from FMP for several urls.
 * Maps to: get_data_urls() in helpers.py
 */
export declare function getDataUrls<T = unknown>(urls: string[]): Promise<T[]>;
/**
 * Get data from FMP endpoint and convert to list of dicts.
 * Maps to: get_data_many() in helpers.py
 */
export declare function getDataMany(url: string, subDict?: string): Promise<Record<string, unknown>[]>;
/**
 * Get data from FMP endpoint and convert to a single dict.
 * Maps to: get_data_one() in helpers.py
 */
export declare function getDataOne(url: string): Promise<Record<string, unknown>>;
/**
 * Create a URL for the FMP API.
 * Maps to: create_url() in helpers.py
 */
export declare function createUrl(version: number, endpoint: string, apiKey: string | null, query?: Record<string, unknown>, exclude?: string[]): string;
/**
 * Get the FMP interval string.
 * Maps to: get_interval() in helpers.py
 */
export declare function getInterval(value: string): string;
/**
 * Get the most recent quarter date.
 * Maps to: most_recent_quarter() in helpers.py
 */
export declare function mostRecentQuarter(base?: Date): Date;
/**
 * Build query string from params, excluding specified keys.
 * Maps to: get_querystring() in helpers.py
 */
export declare function getQueryString(params: Record<string, unknown>, exclude?: string[]): string;
/**
 * Return the raw data from the FMP historical OHLC endpoint.
 * Maps to: get_historical_ohlc() in helpers.py
 */
export declare function getHistoricalOhlc(query: {
    symbol: string;
    interval: string;
    start_date?: string | null;
    end_date?: string | null;
    adjustment?: string;
    [key: string]: unknown;
}, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;

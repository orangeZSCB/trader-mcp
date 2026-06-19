/**
 * HTTP helpers and utility functions.
 * Maps to: openbb_core/provider/utils/helpers.py
 */
/**
 * Make an async HTTP request and return the parsed JSON response.
 * Maps to: amake_request() in helpers.py
 *
 * @param url - The URL to request.
 * @param options - Optional fetch options.
 * @param responseCallback - Optional callback to process the response before parsing.
 * @param timeoutMs - Request timeout in milliseconds (default: 30000).
 * @returns Parsed JSON response.
 */
export declare function amakeRequest<T = unknown>(url: string, options?: {
    method?: string;
    headers?: Record<string, string>;
    body?: string;
    timeoutMs?: number;
    responseCallback?: (response: Response) => Promise<Response>;
}): Promise<T>;
/**
 * Apply alias dictionary to a data record.
 * Maps to: Data.__alias_dict__ + _use_alias model_validator in data.py
 *
 * The alias dict maps {targetFieldName: sourceFieldName}.
 * This renames source keys to target keys in the data.
 *
 * @param data - The raw data object.
 * @param aliasDict - Mapping of {targetName: sourceName}.
 * @returns Data with renamed keys.
 */
export declare function applyAliases(data: Record<string, unknown>, aliasDict: Record<string, string>): Record<string, unknown>;
/**
 * Replace empty strings and "NA" with null in a data record.
 * Common pattern in FMP/YFinance providers.
 */
export declare function replaceEmptyStrings(data: Record<string, unknown>): Record<string, unknown>;
/**
 * Make an HTTP GET request using Node's native https module.
 * Bypasses the undici global dispatcher (and its proxy agent).
 * Useful for APIs that are incompatible with HTTP proxy tunneling
 * (e.g. OECD SDMX, ECB, IMF) but are accessible via OS network stack (TUN).
 */
export declare function nativeFetch(url: string, options?: {
    headers?: Record<string, string>;
    timeoutMs?: number;
}): Promise<{
    status: number;
    text: string;
}>;
/**
 * Build a query string from params, omitting null/undefined values.
 */
export declare function buildQueryString(params: Record<string, unknown>): string;

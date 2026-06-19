/**
 * OECD SDMX API shared helpers.
 * Extracted from the existing CPI/CLI/InterestRates fetchers to avoid repetition.
 */
export declare const COUNTRY_MAP: Record<string, string>;
export declare const CODE_TO_NAME: Record<string, string>;
export declare const FREQ_MAP: Record<string, string>;
/**
 * Parse simple CSV text into rows.
 */
export declare function parseCSV(text: string): Record<string, string>[];
/**
 * Convert OECD period format to date string.
 * "2024" → "2024-01-01", "2024-01" → "2024-01-01", "2024-Q1" → "2024-01-01"
 */
export declare function periodToDate(period: string): string;
/**
 * Fetch data from OECD SDMX REST API in CSV format.
 */
export declare function fetchOecdCsv(dataflow: string, dimensions: string): Promise<Record<string, string>[]>;
/**
 * Resolve country name to OECD 3-letter code.
 */
export declare function resolveCountryCode(country: string): string;
/**
 * Resolve one or many countries ("united_states,china") to an SDMX
 * REF_AREA filter ("USA+CHN"). Batching countries into ONE request is the
 * difference between a dashboard load costing N calls and 1 call against
 * OECD's small anonymous per-IP quota.
 */
export declare function resolveCountryCodes(country: string): string;
/**
 * Apply date filters and sort results.
 */
export declare function filterAndSort<T extends {
    date?: unknown;
}>(data: T[], startDate?: string | null, endDate?: string | null): T[];

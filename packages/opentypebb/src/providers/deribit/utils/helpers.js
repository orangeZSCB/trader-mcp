/**
 * Deribit Helpers Module.
 * Maps to: openbb_deribit/utils/helpers.py
 */
import { OpenBBError } from '../../../core/provider/utils/errors.js';
export const BASE_URL = 'https://www.deribit.com';
export const DERIBIT_FUTURES_CURVE_SYMBOLS = ['BTC', 'ETH', 'PAXG'];
export const DERIBIT_OPTIONS_SYMBOLS = ['BTC', 'ETH', 'SOL', 'XRP', 'BNB', 'PAXG'];
export const CURRENCIES = ['BTC', 'ETH', 'USDC', 'USDT', 'EURR', 'all'];
/**
 * Get instruments from Deribit.
 * Maps to: get_instruments() in helpers.py
 */
export async function getInstruments(currency, derivativeType, expired = false) {
    const url = `${BASE_URL}/api/v2/public/get_instruments?currency=${currency}&kind=${derivativeType}&expired=${expired}`;
    const res = await fetch(url);
    if (!res.ok)
        throw new OpenBBError(`Deribit API error: ${res.status}`);
    const json = await res.json();
    return (json.result ?? []);
}
/**
 * Get all instruments for all currencies.
 */
export async function getAllFuturesInstruments() {
    const results = [];
    for (const currency of CURRENCIES.filter(c => c !== 'all')) {
        try {
            const instruments = await getInstruments(currency, 'future');
            results.push(...instruments);
        }
        catch {
            // skip currencies with no futures
        }
    }
    // Also try 'all'
    try {
        const allInstruments = await getInstruments('all', 'future');
        // Deduplicate by instrument_name
        const seen = new Set(results.map(i => i.instrument_name));
        for (const inst of allInstruments) {
            if (!seen.has(inst.instrument_name)) {
                results.push(inst);
            }
        }
    }
    catch { /* ignore */ }
    return results;
}
/**
 * Get ticker data for a single instrument.
 * Maps to: get_ticker_data() in helpers.py
 */
export async function getTickerData(instrumentName) {
    const url = `${BASE_URL}/api/v2/public/ticker?instrument_name=${instrumentName}`;
    const res = await fetch(url);
    if (!res.ok)
        throw new OpenBBError(`Deribit ticker error: ${res.status}`);
    const json = await res.json();
    return (json.result ?? {});
}
/**
 * Get futures curve symbols for a given currency.
 * Maps to: get_futures_curve_symbols() in helpers.py
 */
export async function getFuturesCurveSymbols(symbol) {
    const instruments = await getInstruments(symbol, 'future');
    return instruments
        .map(i => i.instrument_name)
        .filter(name => name !== undefined);
}
/**
 * Get perpetual symbols mapping short names to full names.
 * Maps to: get_perpetual_symbols() in helpers.py
 */
export async function getPerpetualSymbols() {
    const result = {};
    for (const currency of CURRENCIES.filter(c => c !== 'all')) {
        try {
            const instruments = await getInstruments(currency, 'future');
            for (const inst of instruments) {
                const name = inst.instrument_name;
                if (name?.includes('PERPETUAL')) {
                    const short = name.replace('-PERPETUAL', '').replace('_', '');
                    result[short] = name;
                }
            }
        }
        catch { /* skip */ }
    }
    return result;
}
/**
 * Get all futures symbols.
 * Maps to: get_futures_symbols() in helpers.py
 */
export async function getFuturesSymbols() {
    const instruments = await getAllFuturesInstruments();
    return instruments.map(i => i.instrument_name).filter(Boolean);
}
/**
 * Get options symbols grouped by expiration.
 * Maps to: get_options_symbols() in helpers.py
 */
export async function getOptionsSymbols(symbol) {
    const instruments = await getInstruments(symbol, 'option');
    const result = {};
    for (const inst of instruments) {
        const name = inst.instrument_name;
        if (!name)
            continue;
        // Parse expiration from instrument name: e.g., BTC-28MAR25-100000-C
        const parts = name.split('-');
        if (parts.length >= 3) {
            const expiration = parts[1];
            if (!result[expiration])
                result[expiration] = [];
            result[expiration].push(name);
        }
    }
    return result;
}
//# sourceMappingURL=helpers.js.map
/**
 * Federated bar layer — types.
 *
 * The bar layer is the *operational* identity namespace for K-lines (vs the
 * *reference* namespace — fundamentals/macro — which stays provider-first in
 * OpenTypeBB). A bar source is identified by a `barId`:
 *
 *   barId = "{sourceId}|{nativeSymbol}"
 *
 * For UTA/broker sources this EQUALS the contract's `aliceId`
 * ("{utaId}|{nativeKey}"). For vendor sources it is "{vendorId}|{symbol}"
 * (e.g. "yfinance|AAPL"). There is NO cross-source normalization — the same
 * asset from N sources yields N distinct barIds; redundancy is the feature.
 *
 * Kept market-data-native (OhlcvBar/BarMeta) so `domain/market-data` carries
 * no dependency on `domain/analysis`; the analysis tool bridges to its own
 * structurally-identical `OhlcvData`/`DataSourceMeta` for free.
 */
/** Split a barId on the FIRST `|` (nativeKey may itself contain separators). */
export function parseBarId(barId) {
    const idx = barId.indexOf('|');
    if (idx <= 0)
        return null;
    return { sourceId: barId.slice(0, idx), nativeSymbol: barId.slice(idx + 1) };
}
export function formatBarId(sourceId, nativeSymbol) {
    return `${sourceId}|${nativeSymbol}`;
}
//# sourceMappingURL=types.js.map
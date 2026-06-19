/**
 * Score a result against the query. Higher is better.
 * Tiers:
 *   100  exact match on symbol, id, or name (case-insensitive)
 *    90  exact match on a commodity alias (e.g. "xau" → gold)
 *    80  symbol/id starts with the query
 *    70  name starts with the query (at a word boundary)
 *    50  name contains the query as a whole word
 *    30  name contains the query as a substring
 *    10  fallback — matched upstream but nothing we can explain
 */
function matchScore(query, r) {
    const q = query.toLowerCase();
    const sym = String(r.symbol ?? r.id ?? '').toLowerCase();
    const name = String(r.name ?? '').toLowerCase();
    const aliases = Array.isArray(r.aliases) ? r.aliases.map((a) => a.toLowerCase()) : [];
    if (sym === q || name === q)
        return 100;
    if (aliases.includes(q))
        return 90;
    if (sym && sym.startsWith(q))
        return 80;
    // Name starts with query only counts as a strong match when the match
    // ends at a word boundary — otherwise "gold" would rank "goldman" above
    // "SPDR gold trust".
    if (name.startsWith(q) && (name.length === q.length || !/[a-z0-9]/i.test(name[q.length])))
        return 70;
    if (new RegExp(`\\b${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(name))
        return 50;
    if (name.includes(q))
        return 30;
    return 10;
}
export async function aggregateSymbolSearch(deps, query, limit = 20) {
    const q = query.trim();
    if (!q)
        return [];
    const equityResults = deps.symbolIndex
        .search(q, limit)
        .map((r) => ({ ...r, assetClass: 'equity' }));
    const commodityResults = deps.commodityCatalog
        .search(q, limit)
        .map((r) => ({ ...r, assetClass: 'commodity' }));
    const [cryptoSettled, currencySettled] = await Promise.allSettled([
        deps.cryptoClient.search({ query: q, provider: 'yfinance' }),
        deps.currencyClient.search({ query: q, provider: 'yfinance' }),
    ]);
    const cryptoResults = (cryptoSettled.status === 'fulfilled' ? cryptoSettled.value : []).map((r) => ({ ...r, assetClass: 'crypto' }));
    const currencyResults = (currencySettled.status === 'fulfilled' ? currencySettled.value : [])
        .filter((r) => {
        const sym = r.symbol;
        return sym?.endsWith('USD');
    })
        .map((r) => ({ ...r, assetClass: 'currency' }));
    const all = [
        ...equityResults,
        ...cryptoResults,
        ...currencyResults,
        ...commodityResults,
    ];
    // Stable sort by match quality descending; ties keep upstream order.
    return all
        .map((r, i) => ({ r, i, s: matchScore(q, r) }))
        .sort((a, b) => b.s - a.s || a.i - b.i)
        .map((x) => x.r);
}
//# sourceMappingURL=aggregate-search.js.map
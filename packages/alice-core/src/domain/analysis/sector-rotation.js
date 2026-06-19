/**
 * Sector rotation — cross-sectional comparison of the GICS sector ETFs on
 * multi-period momentum and the two volume axes, to read where capital is
 * rotating (ANG-80).
 *
 * The launcher enumerates ONLY the broad sector ETFs (stable, ~MECE coordinate
 * system). Specific themes are reached by the agent via the ETF tools (etfSearch
 * / etfGetInfo), not enumerated here.
 *
 * This module is pure: `computeSectorRotation` takes already-fetched OHLCV
 * histories and returns the ranked table. Fetching lives in the tool layer.
 */
/** The 11 SPDR Select Sector ETFs (GICS). The enumerated rotation universe. */
export const GICS_SECTOR_ETFS = [
    { symbol: 'XLK', sector: 'Technology' },
    { symbol: 'XLC', sector: 'Communication Services' },
    { symbol: 'XLY', sector: 'Consumer Discretionary' },
    { symbol: 'XLP', sector: 'Consumer Staples' },
    { symbol: 'XLE', sector: 'Energy' },
    { symbol: 'XLF', sector: 'Financials' },
    { symbol: 'XLV', sector: 'Health Care' },
    { symbol: 'XLI', sector: 'Industrials' },
    { symbol: 'XLB', sector: 'Materials' },
    { symbol: 'XLRE', sector: 'Real Estate' },
    { symbol: 'XLU', sector: 'Utilities' },
];
/** Broad-market anchor for relative strength (beat/lag the tape). */
export const BENCHMARK_SYMBOL = 'SPY';
/** Trading-day lookbacks per period label. */
export const PERIOD_DAYS = { '1D': 1, '1W': 5, '1M': 21, '3M': 63, '6M': 126 };
/** Trailing window for average dollar-volume / RVOL baselines. */
const VOLUME_BASELINE_DAYS = 20;
// ──────────────────────────── helpers ────────────────────────────
function sortAsc(data) {
    return [...data].sort((a, b) => a.date.localeCompare(b.date));
}
/** Cumulative return over the last `nDays` bars, or null if not enough data. */
function periodReturn(closes, nDays) {
    if (closes.length < nDays + 1)
        return null;
    const last = closes[closes.length - 1];
    const prior = closes[closes.length - 1 - nDays];
    if (prior === 0)
        return null;
    return last / prior - 1;
}
function mean(xs) {
    return xs.reduce((a, b) => a + b, 0) / xs.length;
}
/** Population standard deviation. */
function stdev(xs) {
    if (xs.length < 2)
        return 0;
    const m = mean(xs);
    return Math.sqrt(mean(xs.map((x) => (x - m) ** 2)));
}
/** Z-score a value against a population; 0 if the population can't discriminate. */
function zscore(value, population) {
    const sd = stdev(population);
    if (sd === 0)
        return 0;
    return (value - mean(population)) / sd;
}
function round(n, places) {
    if (n === null || !Number.isFinite(n))
        return null;
    return parseFloat(n.toFixed(places));
}
function rawMetrics(symbol, sector, history) {
    const sorted = sortAsc(history);
    const closes = sorted.map((d) => d.close);
    const vols = sorted.map((d) => d.volume ?? 0);
    const returns = {};
    for (const [label, n] of Object.entries(PERIOD_DAYS)) {
        returns[label] = periodReturn(closes, n);
    }
    // Momentum acceleration: per-trading-day pace of the short window vs the long.
    const r1w = returns['1W'];
    const r3m = returns['3M'];
    const momentumAccel = r1w !== null && r3m !== null ? r1w / PERIOD_DAYS['1W'] - r3m / PERIOD_DAYS['3M'] : null;
    // Dollar volume: latest, and the trailing baseline average.
    const n = sorted.length;
    const dvToday = n > 0 ? closes[n - 1] * vols[n - 1] : null;
    let dvBase = null;
    let rvol = null;
    if (n >= VOLUME_BASELINE_DAYS + 1) {
        const dvSeries = [];
        let volSum = 0;
        for (let i = n - VOLUME_BASELINE_DAYS; i < n; i++)
            dvSeries.push(closes[i] * vols[i]);
        for (let i = n - VOLUME_BASELINE_DAYS - 1; i < n - 1; i++)
            volSum += vols[i];
        dvBase = mean(dvSeries);
        const avgVol = volSum / VOLUME_BASELINE_DAYS;
        rvol = avgVol > 0 ? vols[n - 1] / avgVol : null;
    }
    return { symbol, sector, closes, returns, momentumAccel, dvToday, dvBase, rvol, bars: n };
}
// ──────────────────────────── compute ────────────────────────────
const METHODOLOGY = 'rotation_score = mean of cross-sectional z-scores of momentum_acceleration ' +
    '(1W per-day pace minus 3M per-day pace) and dv_share_change (today\'s share of ' +
    'the 11-sector dollar volume minus its share off the 20-day average). Ranked desc = ' +
    'rotating in. CAVEAT: ETF dollar volume approximates sector capital but misses ' +
    'single-name concentration, and is distorted by creation/redemption & hedging flows — ' +
    'a proxy for fund flow, not a clean read.';
/**
 * Compute the sector rotation table from pre-fetched daily OHLCV histories.
 * `histories` is keyed by symbol and must include the GICS sector ETFs; the
 * benchmark (SPY) is optional but enables rel_strength.
 */
export function computeSectorRotation(histories) {
    const benchRaw = histories[BENCHMARK_SYMBOL]
        ? rawMetrics(BENCHMARK_SYMBOL, 'Benchmark', histories[BENCHMARK_SYMBOL])
        : null;
    const raws = GICS_SECTOR_ETFS.map((e) => rawMetrics(e.symbol, e.sector, histories[e.symbol] ?? []));
    // Dollar-volume shares (sector universe only; exclude the benchmark).
    const totalToday = raws.reduce((s, r) => s + (r.dvToday ?? 0), 0);
    const totalBase = raws.reduce((s, r) => s + (r.dvBase ?? 0), 0);
    const shareChanges = new Map();
    for (const r of raws) {
        if (r.dvToday !== null && r.dvBase !== null && totalToday > 0 && totalBase > 0) {
            shareChanges.set(r.symbol, r.dvToday / totalToday - r.dvBase / totalBase);
        }
        else {
            shareChanges.set(r.symbol, null);
        }
    }
    // Cross-sectional populations for z-scoring.
    const accelPop = raws.map((r) => r.momentumAccel).filter((x) => x !== null);
    const sharePop = [...shareChanges.values()].filter((x) => x !== null);
    const rows = raws.map((r) => {
        const relStrength = {};
        for (const label of Object.keys(PERIOD_DAYS)) {
            const sr = r.returns[label];
            const br = benchRaw?.returns[label] ?? null;
            relStrength[label] = sr !== null && br !== null ? round(sr - br, 4) : null;
        }
        const shareChange = shareChanges.get(r.symbol) ?? null;
        const zAccel = r.momentumAccel !== null ? zscore(r.momentumAccel, accelPop) : null;
        const zShare = shareChange !== null ? zscore(shareChange, sharePop) : null;
        const zParts = [zAccel, zShare].filter((x) => x !== null);
        const rotationScore = zParts.length > 0 ? mean(zParts) : null;
        const roundedReturns = {};
        for (const label of Object.keys(PERIOD_DAYS)) {
            roundedReturns[label] = round(r.returns[label], 4);
        }
        return {
            symbol: r.symbol,
            sector: r.sector,
            returns: roundedReturns,
            rel_strength: relStrength,
            momentum_acceleration: round(r.momentumAccel, 6),
            dollar_volume: round(r.dvToday, 0),
            dv_share: r.dvToday !== null && totalToday > 0 ? round(r.dvToday / totalToday, 4) : null,
            dv_share_change: round(shareChange, 4),
            rvol: round(r.rvol, 2),
            rotation_score: round(rotationScore, 3),
            bars: r.bars,
        };
    });
    rows.sort((a, b) => (b.rotation_score ?? -Infinity) - (a.rotation_score ?? -Infinity));
    const benchReturns = {};
    for (const label of Object.keys(PERIOD_DAYS)) {
        benchReturns[label] = round(benchRaw?.returns[label] ?? null, 4);
    }
    // asOf = latest bar date across the inputs (no clock dependency).
    const allDates = Object.values(histories)
        .flatMap((h) => h.map((d) => d.date))
        .sort();
    const asOf = allDates.length > 0 ? allDates[allDates.length - 1] : '';
    return {
        asOf,
        benchmark: { symbol: BENCHMARK_SYMBOL, returns: benchReturns },
        sectors: rows,
        methodology: METHODOLOGY,
    };
}
/** Calendar days of daily history to pull — enough for the 6M (126-bar)
 *  lookback plus the 20-day volume baseline, with weekend/holiday headroom. */
const LOOKBACK_CALENDAR_DAYS = 300;
/**
 * Fetch the daily histories for the GICS sector ETFs (+ SPY) and compute the
 * rotation table. Shared by the `sectorRotation` AI tool and the
 * `/api/market/sector-rotation` HTTP route so both read identically.
 */
export async function fetchSectorRotation(equityClient) {
    const start = new Date();
    start.setDate(start.getDate() - LOOKBACK_CALENDAR_DAYS);
    const start_date = start.toISOString().slice(0, 10);
    const symbols = [...GICS_SECTOR_ETFS.map((e) => e.symbol), BENCHMARK_SYMBOL];
    const fetched = await Promise.all(symbols.map(async (symbol) => {
        const raw = await equityClient
            .getHistorical({ symbol, start_date, interval: '1d' })
            .catch(() => []);
        const data = raw.filter((d) => d.close != null && typeof d.date === 'string');
        return [symbol, data];
    }));
    return computeSectorRotation(Object.fromEntries(fetched));
}
//# sourceMappingURL=sector-rotation.js.map
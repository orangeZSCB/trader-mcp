/**
 * S&P 500 valuation strip — multpl.com series (keyless).
 *
 * Reuses the MacroSeriesCard shape so the UI renders these with the same
 * card component as the macro board. One multpl call carries all series
 * (the fetcher accepts a comma-separated series_name).
 */
const SERIES = [
    { id: 'pe_month', label: 'S&P 500 PE', unit: 'index' },
    { id: 'shiller_pe_month', label: 'Shiller PE (CAPE)', unit: 'index' },
    { id: 'earnings_yield_month', label: 'Earnings Yield', unit: 'percent' },
    { id: 'dividend_yield_month', label: 'Dividend Yield', unit: 'percent' },
];
const MAX_POINTS = 60;
export async function fetchValuationStrip(indexClient) {
    const start = new Date();
    start.setFullYear(start.getFullYear() - 5);
    const rows = await indexClient.getSP500Multiples({
        provider: 'multpl',
        series_name: SERIES.map((s) => s.id).join(','),
        start_date: start.toISOString().slice(0, 10),
    });
    const cards = SERIES.map((s) => {
        const points = rows
            .filter((r) => r.name === s.id && typeof r.value === 'number')
            // The provider normalizes percent series to fractions (1% = 0.01,
            // OpenBB convention) — cards carry display units, so ×100 here.
            .map((r) => ({ date: r.date, value: s.unit === 'percent' ? r.value * 100 : r.value }))
            .sort((a, b) => a.date.localeCompare(b.date))
            .slice(-MAX_POINTS);
        const latest = points[points.length - 1] ?? null;
        const prev = points[points.length - 2] ?? null;
        return {
            id: s.id,
            label: s.label,
            unit: s.unit,
            points,
            latest: latest?.value ?? null,
            latestDate: latest?.date ?? null,
            change: latest && prev ? latest.value - prev.value : null,
        };
    });
    return { cards, meta: { provider: 'multpl', asOf: new Date().toISOString() } };
}
//# sourceMappingURL=valuation.js.map
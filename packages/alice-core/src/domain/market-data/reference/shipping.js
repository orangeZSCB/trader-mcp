/**
 * Shipping board — daily transit volume through the headline maritime
 * chokepoints (IMF PortWatch satellite AIS, keyless, weekly updates).
 *
 * The supply-chain narrative read: Red Sea reroutes show as Suez ↓ /
 * Cape of Good Hope ↑; Panama drought shows as Panama ↓.
 */
/** Headline chokepoints — name fragments matched by the PortWatch fetcher. */
const FEATURED = ['suez', 'panama', 'hormuz', 'malacca', 'bab el-mandeb', 'cape of good hope'];
const WINDOW_DAYS = 90;
export async function fetchShipping(economyClient) {
    const start = new Date(Date.now() - WINDOW_DAYS * 86400000).toISOString().slice(0, 10);
    const settled = await Promise.allSettled(FEATURED.map((key) => economyClient.getChokepointVolume({ provider: 'imf', chokepoint: key, start_date: start })));
    if (settled.every((r) => r.status === 'rejected')) {
        const first = settled[0].reason;
        throw first instanceof Error ? first : new Error(String(first));
    }
    const curves = [];
    const errors = {};
    settled.forEach((r, i) => {
        const key = FEATURED[i];
        if (r.status === 'rejected') {
            errors[key] = r.reason instanceof Error ? r.reason.message : String(r.reason);
            return;
        }
        const rows = r.value;
        const points = rows
            .map((row) => ({
            date: String(row.date ?? ''),
            tons: typeof row.volume === 'number' ? row.volume : null,
            vessels: typeof row.vessels_total === 'number' ? row.vessels_total : null,
        }))
            .filter((p) => p.date)
            .sort((a, b) => a.date.localeCompare(b.date));
        const name = rows.find((row) => typeof row.chokepoint === 'string')?.chokepoint ?? key;
        curves.push({ key, name, points, latest: points[points.length - 1] ?? null });
    });
    return {
        curves,
        ...(Object.keys(errors).length ? { errors } : {}),
        meta: { provider: 'imf-portwatch', asOf: new Date().toISOString() },
    };
}
//# sourceMappingURL=shipping.js.map
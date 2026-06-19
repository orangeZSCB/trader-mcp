/**
 * Hub-first wrappers at the client-method seam.
 *
 * Client methods ARE the endpoint catalog: wrapping here means tools, the
 * CLI, and the reference boards all inherit hub coverage with zero changes.
 *
 * v1 covers the FMP calendars (parameterized windows; the boards only
 * cache the default window). FRED/EIA/BLS ride the credential sentinel
 * instead (see credential-map.ts) — their fetchers swap origins, which
 * covers every method of those families at once.
 */
const CALENDAR_DATASETS = {
    getCalendarEarnings: 'earnings-calendar',
    getCalendarIpo: 'ipos-calendar',
    getCalendarDividend: 'dividends-calendar',
};
/** Params the hub dataset understands — anything else bypasses the hub. */
const KNOWN_PARAMS = new Set(['provider', 'start_date', 'end_date']);
const TIMEOUT_MS = 5_000;
const BREAKER_MS = 60_000;
export function withHubCalendars(client, hub) {
    if (!hub?.enabled || !hub.baseUrl)
        return client;
    const base = hub.baseUrl.replace(/\/+$/, '');
    let downUntil = 0;
    const wrap = (method, dataset) => async (params) => {
        const local = () => client[method](params);
        const p = params ?? {};
        const from = p.start_date;
        const to = p.end_date;
        const hasUnknownParams = Object.keys(p).some((k) => !KNOWN_PARAMS.has(k));
        if (hasUnknownParams || typeof from !== 'string' || typeof to !== 'string' || Date.now() < downUntil) {
            return local();
        }
        try {
            const res = await fetch(`${base}/api/data/${dataset}?from=${from}&to=${to}`, {
                signal: AbortSignal.timeout(TIMEOUT_MS),
                headers: { Accept: 'application/json' },
            });
            if (!res.ok)
                throw new Error(`hub returned ${res.status}`);
            const rows = await res.json();
            if (!Array.isArray(rows))
                throw new Error('hub returned a non-array shape');
            return rows;
        }
        catch {
            downUntil = Date.now() + BREAKER_MS;
            return local();
        }
    };
    return new Proxy(client, {
        get(target, prop, receiver) {
            if (typeof prop === 'string' && prop in CALENDAR_DATASETS) {
                return wrap(prop, CALENDAR_DATASETS[prop]);
            }
            // Bind to the target, not the proxy — class internals (private
            // fields) must see their real `this`.
            const value = Reflect.get(target, prop, target);
            return typeof value === 'function' ? value.bind(target) : value;
        },
    });
}
//# sourceMappingURL=hub-data.js.map
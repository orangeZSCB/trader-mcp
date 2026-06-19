/**
 * Reference-data service — in-process implementation of the reference
 * contract (see types.ts). Aggregates the opentypebb SDK clients into
 * board-shaped payloads with the explicit meta envelope.
 */
import { fetchMacroBoard } from './macro.js';
import { fetchTermStructure } from './term-structure.js';
import { fetchValuationStrip } from './valuation.js';
import { fetchGlobalMacro } from './global-macro.js';
import { fetchShipping } from './shipping.js';
import { fetchFedBoard } from './fed.js';
import { cachedBoard } from './cache.js';
import { createHubFetcher, markLocal } from './hub.js';
/** Rows per movers list — enough for a board, small enough to stay snappy. */
const MOVERS_LIMIT = 25;
/** Default forward window for the calendar board (days). */
const CALENDAR_DAYS = 14;
function isoDay(d) {
    return d.toISOString().slice(0, 10);
}
/** Cache TTLs per board — matched to upstream cadence, not UI refresh.
 *  OECD/multpl/PortWatch publish weekly-to-quarterly; intraday surfaces
 *  stay short so the boards keep feeling live. */
const TTL = {
    movers: 60_000, // intraday lists
    termStructure: 120_000, // live-ish crypto curve
    calendar: 30 * 60_000,
    macro: 30 * 60_000,
    fed: 60 * 60_000,
    valuation: 6 * 60 * 60_000, // multpl updates ~daily
    globalMacro: 6 * 60 * 60_000, // OECD updates monthly/quarterly + tiny quota
    shipping: 6 * 60 * 60_000, // PortWatch updates weekly
};
export function createReferenceData(deps) {
    const viaHub = createHubFetcher(deps.hub);
    const movers = cachedBoard(TTL.movers, async () => {
        const hub = await viaHub('movers');
        if (hub)
            return hub;
        // One list failing must not kill the board — same resilience rule as
        // the federated search fan-out.
        const [gainers, losers, active, uvGrowth, gTech, smallCaps, uvLarge] = await Promise.allSettled([
            deps.equityClient.getGainers(),
            deps.equityClient.getLosers(),
            deps.equityClient.getActive(),
            deps.equityClient.getUndervaluedGrowth(),
            deps.equityClient.getGrowthTech(),
            deps.equityClient.getAggressiveSmallCaps(),
            deps.equityClient.getUndervaluedLargeCaps(),
        ]);
        const rows = (r) => r.status === 'fulfilled' ? r.value.slice(0, MOVERS_LIMIT) : [];
        return {
            gainers: rows(gainers),
            losers: rows(losers),
            active: rows(active),
            undervaluedGrowth: rows(uvGrowth),
            growthTech: rows(gTech),
            smallCaps: rows(smallCaps),
            undervaluedLarge: rows(uvLarge),
            meta: { provider: deps.equityProvider, asOf: new Date().toISOString(), origin: 'local' },
        };
    });
    const calendarCached = cachedBoard(TTL.calendar, async () => {
        const hub = await viaHub('calendar');
        if (hub)
            return hub;
        const days = CALENDAR_DAYS;
        const start = new Date();
        const end = new Date(start.getTime() + days * 24 * 60 * 60 * 1000);
        const window = { start: isoDay(start), end: isoDay(end) };
        // Calendars are FMP-only in the provider catalog — explicit, same as
        // the equityGetEarningsCalendar tool.
        const params = { provider: 'fmp', start_date: window.start, end_date: window.end };
        const [earnings, ipos, dividends] = await Promise.allSettled([
            deps.equityClient.getCalendarEarnings(params),
            deps.equityClient.getCalendarIpo(params),
            deps.equityClient.getCalendarDividend(params),
        ]);
        // All three down = the key is missing/invalid — fail loud with the
        // upstream message instead of rendering a silently empty board.
        if (earnings.status === 'rejected' && ipos.status === 'rejected' && dividends.status === 'rejected') {
            throw earnings.reason instanceof Error
                ? earnings.reason
                : new Error(String(earnings.reason));
        }
        const rows = (r) => (r.status === 'fulfilled' ? r.value : []);
        // Partial failures stay loud too: a suspended/limited FMP tier can
        // reject one endpoint while siblings return 200 — annotate per list.
        const errors = {};
        const note = (key, r) => {
            if (r.status === 'rejected') {
                errors[key] = r.reason instanceof Error ? r.reason.message : String(r.reason);
            }
        };
        note('earnings', earnings);
        note('ipos', ipos);
        note('dividends', dividends);
        return {
            earnings: rows(earnings),
            ipos: rows(ipos),
            dividends: rows(dividends),
            window,
            ...(Object.keys(errors).length ? { errors } : {}),
            meta: { provider: 'fmp', asOf: new Date().toISOString(), origin: 'local' },
        };
    });
    const macro = cachedBoard(TTL.macro, async () => (await viaHub('macro')) ?? markLocal(await fetchMacroBoard(deps.economyClient)));
    const globalMacro = cachedBoard(TTL.globalMacro, async () => (await viaHub('global-macro')) ?? markLocal(await fetchGlobalMacro(deps.economyClient)));
    const shipping = cachedBoard(TTL.shipping, async () => (await viaHub('shipping')) ?? markLocal(await fetchShipping(deps.economyClient)));
    const fed = cachedBoard(TTL.fed, async () => (await viaHub('fed')) ?? markLocal(await fetchFedBoard(deps.economyClient)));
    const termStructure = cachedBoard(TTL.termStructure, async () => {
        const hub = await viaHub('term-structure');
        return hub ?? markLocal(await fetchTermStructure(deps.derivativesClient));
    });
    const valuation = cachedBoard(TTL.valuation, async () => {
        const hub = await viaHub('valuation');
        return hub ?? markLocal(await fetchValuationStrip(deps.indexClient));
    });
    return {
        movers,
        // calendar(opts) with a custom window bypasses the cache (rare, AI-only
        // path through the route's ?days=); the default window is cached.
        async calendar(opts) {
            if (opts?.days && opts.days !== CALENDAR_DAYS)
                return uncachedCalendar(deps, opts.days);
            return calendarCached();
        },
        macro,
        termStructure,
        valuation,
        globalMacro,
        shipping,
        fed,
    };
}
async function uncachedCalendar(deps, days) {
    const start = new Date();
    const end = new Date(start.getTime() + days * 24 * 60 * 60 * 1000);
    const window = { start: isoDay(start), end: isoDay(end) };
    const params = { provider: 'fmp', start_date: window.start, end_date: window.end };
    const [earnings, ipos, dividends] = await Promise.allSettled([
        deps.equityClient.getCalendarEarnings(params),
        deps.equityClient.getCalendarIpo(params),
        deps.equityClient.getCalendarDividend(params),
    ]);
    if (earnings.status === 'rejected' && ipos.status === 'rejected' && dividends.status === 'rejected') {
        throw earnings.reason instanceof Error ? earnings.reason : new Error(String(earnings.reason));
    }
    const rows = (r) => (r.status === 'fulfilled' ? r.value : []);
    const errors = {};
    const note = (key, r) => {
        if (r.status === 'rejected')
            errors[key] = r.reason instanceof Error ? r.reason.message : String(r.reason);
    };
    note('earnings', earnings);
    note('ipos', ipos);
    note('dividends', dividends);
    return {
        earnings: rows(earnings),
        ipos: rows(ipos),
        dividends: rows(dividends),
        window,
        ...(Object.keys(errors).length ? { errors } : {}),
        meta: { provider: 'fmp', asOf: new Date().toISOString() },
    };
}
//# sourceMappingURL=service.js.map
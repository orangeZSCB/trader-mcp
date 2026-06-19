/**
 * Duration parsing shared between the cron-engine (user-defined cron jobs)
 * and the Pump primitive (internal scheduled-task timers like heartbeat
 * and snapshot).
 *
 * Format: `<H>h<M>m<S>s` with any subset of parts present in that order
 * (e.g. "30m", "1h", "5m30s", "2h15m"). Trims whitespace. Zero-total
 * durations return null — a zero-interval pump or cron job is almost
 * certainly a config bug, so we surface it as "unparseable" rather than
 * fire-forever-loop.
 */
export declare function parseDuration(s: string): number | null;

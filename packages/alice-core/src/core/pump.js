/**
 * Pump — interval-scheduled callback primitive.
 *
 * The replacement for "register an internal cron job + listen for cron.fire
 * + filter by jobName" for system services like heartbeat and snapshot that
 * are just "fire onTick every N minutes". Owns a setTimeout chain (not
 * setInterval, so the next fire is always spaced after onTick completes).
 *
 * Cron-engine remains for **user-defined** cron jobs (the Automation > Cron
 * UI). Pump is the right primitive when:
 *   - The schedule is `every <duration>` (no cron expressions)
 *   - The callback is private to one module (no need for event-log fan-out
 *     to other listeners)
 *   - Lifecycle (enable/disable, runNow, error backoff) belongs to the
 *     owning module
 *
 * Behaviour:
 *   - `serial: true` (default): a fire while a previous tick is in flight
 *     is dropped (logged), not queued
 *   - On onTick throw: log, increment consecutiveErrors, next fire is
 *     delayed by `errorBackoffMs[consecutiveErrors-1]` (capped at the
 *     last entry); reset on a successful tick
 *   - `stop()` is terminal — clears the pending timer, marks stopped;
 *     subsequent calls to `setEnabled` / `runNow` are no-ops
 */
import { parseDuration } from './duration.js';
const DEFAULT_ERROR_BACKOFF_MS = [
    30_000, // 30s
    60_000, // 1m
    300_000, // 5m
    900_000, // 15m
    3_600_000, // 1h
];
export function createPump(opts) {
    const name = opts.name;
    const every = opts.every;
    const onTick = opts.onTick;
    const serial = opts.serial ?? true;
    const backoff = opts.errorBackoffMs ?? DEFAULT_ERROR_BACKOFF_MS;
    const setTimeoutFn = opts.setTimeoutFn ?? setTimeout;
    const clearTimeoutFn = opts.clearTimeoutFn ?? clearTimeout;
    const logger = opts.logger ?? console;
    const intervalMs = parseDuration(every);
    if (intervalMs === null) {
        throw new Error(`pump[${name}]: invalid duration '${every}'`);
    }
    let enabled = opts.enabled ?? true;
    let stopped = false;
    let started = false;
    let processing = false;
    let consecutiveErrors = 0;
    let timer = null;
    /** Promise of the in-flight tick (if any) — runNow can await this. */
    let inFlight = null;
    function nextDelayMs() {
        if (consecutiveErrors <= 0)
            return intervalMs;
        const idx = Math.min(consecutiveErrors - 1, backoff.length - 1);
        return backoff[idx];
    }
    function armNext() {
        if (stopped || !enabled)
            return;
        if (timer !== null)
            return; // already armed
        timer = setTimeoutFn(() => {
            timer = null;
            void tick();
        }, nextDelayMs());
    }
    function clearTimer() {
        if (timer !== null) {
            clearTimeoutFn(timer);
            timer = null;
        }
    }
    async function tick() {
        if (stopped)
            return;
        if (serial && processing) {
            // Drop this fire — the previous tick hasn't finished. Don't arm
            // another timer; whichever tick wins eventually re-arms.
            logger.warn(`pump[${name}]: tick dropped (still processing previous)`);
            return;
        }
        processing = true;
        const runOne = async () => {
            try {
                await onTick();
                consecutiveErrors = 0;
            }
            catch (err) {
                consecutiveErrors++;
                logger.error(`pump[${name}]: onTick error (consecutive=${consecutiveErrors}):`, err);
            }
            finally {
                processing = false;
                if (inFlight === thisRun)
                    inFlight = null;
                armNext();
            }
        };
        const thisRun = runOne();
        inFlight = thisRun;
        await thisRun;
    }
    return {
        name,
        every,
        start() {
            if (started || stopped)
                return;
            started = true;
            armNext();
        },
        stop() {
            stopped = true;
            clearTimer();
        },
        setEnabled(next) {
            if (stopped)
                return;
            if (enabled === next)
                return;
            enabled = next;
            if (next) {
                armNext();
            }
            else {
                clearTimer();
            }
        },
        isEnabled() {
            return enabled;
        },
        async runNow() {
            if (stopped)
                return;
            // If a tick is already in flight (serial-protected), don't double-fire;
            // just wait for it. Otherwise invoke a fresh tick.
            if (processing && inFlight) {
                await inFlight;
                return;
            }
            await tick();
        },
    };
}
//# sourceMappingURL=pump.js.map
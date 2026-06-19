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
export interface PumpOpts {
    /** Identifier — used in log lines so multiple pumps stay distinguishable. */
    name: string;
    /** Tick interval, parsed via shared parseDuration ("30m", "1h", "5m30s"). */
    every: string;
    /** Initial enabled state. Default true. */
    enabled?: boolean;
    /** Called on each tick. May throw — pump catches and backoffs. */
    onTick: () => Promise<void>;
    /** When true (default), a fire that arrives while the previous tick is
     *  still in flight is dropped. When false, ticks overlap freely. */
    serial?: boolean;
    /** Backoff schedule for consecutive errors. Index is
     *  `consecutiveErrors - 1`, clamped to the last entry. */
    errorBackoffMs?: readonly number[];
    /** Inject clock for tests. */
    now?: () => number;
    /** Inject scheduler — vitest fake timers also work via the global. */
    setTimeoutFn?: typeof setTimeout;
    clearTimeoutFn?: typeof clearTimeout;
    /** Inject logger. */
    logger?: Pick<Console, 'log' | 'warn' | 'error'>;
}
export interface Pump {
    /** Arm the timer if enabled. Idempotent — calling twice is a no-op. */
    start(): void;
    /** Terminal stop. Clears the pending timer; sets stopped flag. */
    stop(): void;
    /** Toggle enabled. `true` re-arms if not already armed; `false` clears
     *  the pending timer (in-flight tick continues but doesn't reschedule). */
    setEnabled(enabled: boolean): void;
    isEnabled(): boolean;
    /** Manually invoke onTick once now, outside the schedule. Returns when
     *  the tick completes (success or caught error). Respects serial guard:
     *  if a tick is already in flight, awaits the in-flight one. */
    runNow(): Promise<void>;
    readonly every: string;
    readonly name: string;
}
export declare function createPump(opts: PumpOpts): Pump;

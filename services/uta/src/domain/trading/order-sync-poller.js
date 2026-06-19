/**
 * Order-sync poller — the missing "成交感知" loop.
 *
 * Trading-as-Git records a pushed order as `submitted` and relies on
 * `UnifiedTradingAccount.sync()` to learn about fills/cancels later. Until
 * this poller, NOTHING called sync automatically: the manual HTTP route and
 * the AI tool were the only triggers, so limit orders stayed `submitted` in
 * git forever unless someone asked. This loop closes the state machine:
 *
 *   place → approve (push) → [poller: poll broker until terminal] → sync
 *   commit records filled/cancelled + execution qty/price.
 *
 * Cost discipline: each tick scans pending order ids from the in-memory git
 * log (cheap, no I/O). Broker round-trips happen ONLY for healthy accounts
 * that actually have pending orders — an idle book costs nothing.
 */
export function startOrderSyncPoller(getInstances, options = {}) {
    const intervalMs = options.intervalMs ?? 10_000;
    const observeIntervalMs = options.observeIntervalMs ?? 15 * 60_000;
    // Slow lane cadence expressed in fast-lane ticks. <=0 disables entirely.
    const observeEveryTicks = observeIntervalMs > 0
        ? Math.max(1, Math.round(observeIntervalMs / intervalMs))
        : 0;
    const log = options.log ?? ((msg) => console.log(msg));
    let running = false;
    let tickCount = 0;
    const tick = async () => {
        // Re-entrancy guard: a slow broker must not stack concurrent passes.
        if (running)
            return;
        running = true;
        tickCount++;
        // Slow lane fires on the FIRST tick (catch pre-existing external orders
        // shortly after boot), then every Nth. The `1 % N` form keeps N=1
        // (observe every tick) working — `x % 1 === 1` would never be true.
        const observePass = observeEveryTicks > 0 && tickCount % observeEveryTicks === 1 % observeEveryTicks;
        try {
            for (const uta of getInstances()) {
                if (uta.keyless || uta.health !== 'healthy')
                    continue;
                if (observePass) {
                    try {
                        const { observed } = await uta.observeExternalOrders();
                        if (observed > 0) {
                            log(`[order-sync] ${uta.id}: recorded ${observed} external order(s)`);
                        }
                    }
                    catch (err) {
                        log(`[order-sync] ${uta.id}: external-order observation failed — ${err instanceof Error ? err.message : String(err)}`);
                    }
                }
                if (uta.getPendingOrderIds().length === 0)
                    continue;
                try {
                    const result = await uta.sync();
                    if (result.updatedCount > 0) {
                        const summary = result.updates
                            .map((u) => `${u.symbol ?? u.orderId}→${u.currentStatus}`)
                            .join(', ');
                        log(`[order-sync] ${uta.id}: ${result.updatedCount} order(s) updated (${summary})`);
                    }
                }
                catch (err) {
                    // Loud but non-fatal: one broker's bad day must not stop fill
                    // detection for the others. Health tracking already escalates
                    // repeated failures on the account itself.
                    log(`[order-sync] ${uta.id}: sync failed — ${err instanceof Error ? err.message : String(err)}`);
                }
            }
        }
        finally {
            running = false;
        }
    };
    const timer = setInterval(() => { void tick(); }, intervalMs);
    timer.unref?.();
    return {
        tick,
        stop: () => clearInterval(timer),
    };
}
//# sourceMappingURL=order-sync-poller.js.map
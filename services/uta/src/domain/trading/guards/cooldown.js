import { getOperationSymbol } from '../git/types.js';
const DEFAULT_MIN_INTERVAL_MS = 60_000;
export class CooldownGuard {
    name = 'cooldown';
    minIntervalMs;
    lastTradeTime = new Map();
    constructor(options) {
        this.minIntervalMs = Number(options.minIntervalMs ?? DEFAULT_MIN_INTERVAL_MS);
    }
    check(ctx) {
        if (ctx.operation.action !== 'placeOrder')
            return null;
        const symbol = getOperationSymbol(ctx.operation);
        const now = Date.now();
        const lastTime = this.lastTradeTime.get(symbol);
        if (lastTime != null) {
            const elapsed = now - lastTime;
            if (elapsed < this.minIntervalMs) {
                const remaining = Math.ceil((this.minIntervalMs - elapsed) / 1000);
                return `Cooldown active for ${symbol}: ${remaining}s remaining`;
            }
        }
        this.lastTradeTime.set(symbol, now);
        return null;
    }
}
//# sourceMappingURL=cooldown.js.map
import type { OperationGuard, GuardContext } from './types.js';
export declare class CooldownGuard implements OperationGuard {
    readonly name = "cooldown";
    private minIntervalMs;
    private lastTradeTime;
    constructor(options: Record<string, unknown>);
    check(ctx: GuardContext): string | null;
}

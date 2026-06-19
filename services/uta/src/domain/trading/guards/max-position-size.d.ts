import type { OperationGuard, GuardContext } from './types.js';
export declare class MaxPositionSizeGuard implements OperationGuard {
    readonly name = "max-position-size";
    private maxPercent;
    constructor(options: Record<string, unknown>);
    check(ctx: GuardContext): string | null;
}

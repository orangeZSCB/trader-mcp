import type { OperationGuard, GuardContext } from './types.js';
export declare class SymbolWhitelistGuard implements OperationGuard {
    readonly name = "symbol-whitelist";
    private allowed;
    constructor(options: Record<string, unknown>);
    check(ctx: GuardContext): string | null;
}

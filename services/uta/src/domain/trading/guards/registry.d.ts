import type { OperationGuard, GuardRegistryEntry } from './types.js';
/** Register a custom guard type (for third-party extensions). */
export declare function registerGuard(entry: GuardRegistryEntry): void;
/** Resolve config entries into guard instances via the registry. */
export declare function resolveGuards(configs: Array<{
    type: string;
    options?: Record<string, unknown>;
}>): OperationGuard[];

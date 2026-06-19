/**
 * Guard Pipeline
 *
 * The only place that touches the account: assembles a GuardContext,
 * then passes it through the guard chain. Guards themselves never
 * see the account.
 */
import type { Operation } from '../git/types.js';
import type { IBroker } from '../brokers/types.js';
import type { OperationGuard } from './types.js';
export declare function createGuardPipeline(dispatcher: (op: Operation) => Promise<unknown>, account: IBroker, guards: OperationGuard[]): (op: Operation) => Promise<unknown>;

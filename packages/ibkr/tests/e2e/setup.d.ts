/**
 * Shared TWS connection for all e2e tests.
 *
 * Usage in test files:
 *   import { client, available, waitFor } from './setup'
 *
 * The connection is established once and reused across all e2e files.
 * If TWS is not running, `available` is false and tests should skip.
 */
import Decimal from 'decimal.js';
import { EClient, type ContractDetails, type Contract, type Order, type OrderState } from '../../src/index.js';
export declare const results: {
    serverVersion: number;
    connTime: string;
    nextValidId: number | undefined;
    managedAccounts: string | undefined;
    currentTime: number | undefined;
    errors: Array<{
        reqId: number;
        code: number;
        msg: string;
    }>;
    contractDetails: Map<number, ContractDetails[]>;
    contractDetailsEnded: Set<number>;
    openOrders: Map<number, {
        contract: Contract;
        order: Order;
        orderState: OrderState;
    }>;
    openOrderEnded: boolean;
    orderStatus: Map<number, {
        status: string;
        filled: Decimal;
        remaining: Decimal;
    }>;
};
export declare const client: EClient;
export declare const available: boolean;
/** Wait for a condition to become true, with timeout. */
export declare function waitFor(condition: () => boolean, timeoutMs?: number, intervalMs?: number): Promise<boolean>;
export declare function sleep(ms: number): Promise<void>;
/** Cleanup — call in globalTeardown or afterAll at the suite level. */
export declare function disconnect(): void;

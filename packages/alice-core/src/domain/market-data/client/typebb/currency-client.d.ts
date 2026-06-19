/**
 * SDK Currency Client
 *
 * Drop-in replacement for OpenBBCurrencyClient.
 */
import { SDKBaseClient } from './base-client.js';
export declare class SDKCurrencyClient extends SDKBaseClient {
    getHistorical(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        open: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        close: import("zod").ZodNumber;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        vwap: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    search(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getReferenceRates(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getSnapshots(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        base_currency: import("zod").ZodString;
        counter_currency: import("zod").ZodString;
        last_rate: import("zod").ZodNumber;
        open: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        close: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        prev_close: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
}

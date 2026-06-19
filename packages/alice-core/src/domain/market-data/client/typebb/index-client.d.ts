/**
 * SDK Index Client
 *
 * Maps to openTypeBB index-router endpoints.
 */
import { SDKBaseClient } from './base-client.js';
export declare class SDKIndexClient extends SDKBaseClient {
    getAvailable(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        exchange: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        currency: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    search(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getConstituents(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getHistorical(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        date: import("zod").ZodString;
        open: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        close: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getSnapshots(params?: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getSectors(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        sector: import("zod").ZodString;
        weight: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getSP500Multiples(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        name: import("zod").ZodString;
        value: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getRiskPremium(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        country: import("zod").ZodString;
        continent: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        total_equity_risk_premium: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        country_risk_premium: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
}

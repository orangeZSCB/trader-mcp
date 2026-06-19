/**
 * SDK ETF Client
 *
 * Maps to openTypeBB etf-router endpoints.
 */
import { SDKBaseClient } from './base-client.js';
export declare class SDKEtfClient extends SDKBaseClient {
    search(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getInfo(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        issuer: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        domicile: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        website: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        description: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        inception_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getHoldings(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getSectors(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        sector: import("zod").ZodString;
        weight: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getCountries(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        country: import("zod").ZodString;
        weight: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getEquityExposure(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        equity_symbol: import("zod").ZodString;
        etf_symbol: import("zod").ZodString;
        weight: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        market_value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        shares: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getHistorical(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
}

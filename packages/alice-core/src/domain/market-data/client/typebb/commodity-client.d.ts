/**
 * SDK Commodity Client
 *
 * Drop-in replacement for OpenBBCommodityClient.
 *
 * NOTE: OpenTypeBB does not yet have commodity routes. These methods will throw
 * "No SDK route for: /commodity/..." until the corresponding fetchers are added.
 */
import { SDKBaseClient } from './base-client.js';
export declare class SDKCommodityClient extends SDKBaseClient {
    getSpotPrices(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        open: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        close: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getPsdData(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getPetroleumStatus(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        category: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        unit: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getEnergyOutlook(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        category: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        unit: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        forecast: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodBoolean>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getPsdReport(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getWeatherBulletins(params?: Record<string, unknown>): Promise<Record<string, unknown>[]>;
}

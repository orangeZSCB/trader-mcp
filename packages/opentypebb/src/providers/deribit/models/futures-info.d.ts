/**
 * Deribit Futures Info Model.
 * Maps to: openbb_deribit/models/futures_info.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const DeribitFuturesInfoQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type DeribitFuturesInfoQueryParams = z.infer<typeof DeribitFuturesInfoQueryParamsSchema>;
export declare const DeribitFuturesInfoDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    state: z.ZodString;
    open_interest: z.ZodNumber;
    index_price: z.ZodNumber;
    best_ask_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    best_ask_amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    best_bid_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    best_bid_amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_usd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mark_price: z.ZodNumber;
    settlement_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    delivery_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_delivery_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_funding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    funding_8h: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    max_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    min_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    state: z.ZodString;
    open_interest: z.ZodNumber;
    index_price: z.ZodNumber;
    best_ask_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    best_ask_amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    best_bid_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    best_bid_amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_usd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mark_price: z.ZodNumber;
    settlement_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    delivery_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_delivery_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_funding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    funding_8h: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    max_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    min_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    state: z.ZodString;
    open_interest: z.ZodNumber;
    index_price: z.ZodNumber;
    best_ask_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    best_ask_amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    best_bid_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    best_bid_amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume_usd: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mark_price: z.ZodNumber;
    settlement_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    delivery_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    estimated_delivery_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    current_funding: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    funding_8h: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    max_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    min_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type DeribitFuturesInfoData = z.infer<typeof DeribitFuturesInfoDataSchema>;
export declare class DeribitFuturesInfoFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): DeribitFuturesInfoQueryParams;
    static extractData(query: DeribitFuturesInfoQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: DeribitFuturesInfoQueryParams, data: Record<string, unknown>[]): DeribitFuturesInfoData[];
}

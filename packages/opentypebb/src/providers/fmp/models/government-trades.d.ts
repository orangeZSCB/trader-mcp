/**
 * FMP Government Trades Model.
 * Maps to: openbb_fmp/models/government_trades.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPGovernmentTradesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    chamber: z.ZodDefault<z.ZodEnum<["house", "senate", "all"]>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    symbol: string | null;
    limit: number | null;
    chamber: "all" | "house" | "senate";
}, {
    symbol?: string | null | undefined;
    limit?: number | null | undefined;
    chamber?: "all" | "house" | "senate" | undefined;
}>;
export type FMPGovernmentTradesQueryParams = z.infer<typeof FMPGovernmentTradesQueryParamsSchema>;
export declare const FMPGovernmentTradesDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodString;
    transaction_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    representative: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    chamber: z.ZodEnum<["House", "Senate"]>;
    owner: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    asset_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    asset_description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    transaction_type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    amount: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    comment: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    symbol: string | null;
    date: string;
    asset_type: string | null;
    transaction_date: string | null;
    transaction_type: string | null;
    url: string | null;
    amount: string | null;
    chamber: "House" | "Senate";
    representative: string | null;
    owner: string | null;
    asset_description: string | null;
    comment: string | null;
}, {
    date: string;
    chamber: "House" | "Senate";
    symbol?: string | null | undefined;
    asset_type?: string | null | undefined;
    transaction_date?: string | null | undefined;
    transaction_type?: string | null | undefined;
    url?: string | null | undefined;
    amount?: string | null | undefined;
    representative?: string | null | undefined;
    owner?: string | null | undefined;
    asset_description?: string | null | undefined;
    comment?: string | null | undefined;
}>;
export type FMPGovernmentTradesData = z.infer<typeof FMPGovernmentTradesDataSchema>;
export declare class FMPGovernmentTradesFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPGovernmentTradesQueryParams;
    static extractData(query: FMPGovernmentTradesQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPGovernmentTradesQueryParams, data: Record<string, unknown>[]): FMPGovernmentTradesData[];
}

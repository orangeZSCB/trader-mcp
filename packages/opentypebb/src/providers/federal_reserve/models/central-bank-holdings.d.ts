/**
 * Federal Reserve Central Bank Holdings Model.
 * Maps to: openbb_federal_reserve/models/central_bank_holdings.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedCentralBankHoldingsQueryParamsSchema: z.ZodObject<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedCentralBankHoldingsQueryParams = z.infer<typeof FedCentralBankHoldingsQueryParamsSchema>;
export declare const FedCentralBankHoldingsDataSchema: z.ZodObject<{
    date: z.ZodString;
} & {
    treasury_holding_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mbs_holding_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    agency_holding_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
} & {
    treasury_holding_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mbs_holding_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    agency_holding_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
} & {
    treasury_holding_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    mbs_holding_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    agency_holding_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_assets: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedCentralBankHoldingsData = z.infer<typeof FedCentralBankHoldingsDataSchema>;
export declare class FedCentralBankHoldingsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedCentralBankHoldingsQueryParams;
    static extractData(query: FedCentralBankHoldingsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedCentralBankHoldingsQueryParams, data: Record<string, unknown>[]): FedCentralBankHoldingsData[];
}

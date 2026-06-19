/**
 * FMP Institutional Ownership Model.
 * Maps to: openbb_fmp/models/institutional_ownership.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPInstitutionalOwnershipQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    quarter: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    quarter: number | null;
    year: number | null;
}, {
    symbol: string;
    quarter?: number | null | undefined;
    year?: number | null | undefined;
}>;
export type FMPInstitutionalOwnershipQueryParams = z.infer<typeof FMPInstitutionalOwnershipQueryParamsSchema>;
export declare const FMPInstitutionalOwnershipDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodString;
} & {
    investors_holding: z.ZodNumber;
    last_investors_holding: z.ZodNumber;
    investors_holding_change: z.ZodNumber;
    number_of_13f_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_number_of_13f_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_of_13f_shares_change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_invested: z.ZodNumber;
    last_total_invested: z.ZodNumber;
    total_invested_change: z.ZodNumber;
    ownership_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_ownership_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ownership_percent_change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    new_positions: z.ZodNumber;
    last_new_positions: z.ZodNumber;
    new_positions_change: z.ZodNumber;
    increased_positions: z.ZodNumber;
    last_increased_positions: z.ZodNumber;
    increased_positions_change: z.ZodNumber;
    closed_positions: z.ZodNumber;
    last_closed_positions: z.ZodNumber;
    closed_positions_change: z.ZodNumber;
    reduced_positions: z.ZodNumber;
    last_reduced_positions: z.ZodNumber;
    reduced_positions_change: z.ZodNumber;
    total_calls: z.ZodNumber;
    last_total_calls: z.ZodNumber;
    total_calls_change: z.ZodNumber;
    total_puts: z.ZodNumber;
    last_total_puts: z.ZodNumber;
    total_puts_change: z.ZodNumber;
    put_call_ratio: z.ZodNumber;
    last_put_call_ratio: z.ZodNumber;
    put_call_ratio_change: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodString;
} & {
    investors_holding: z.ZodNumber;
    last_investors_holding: z.ZodNumber;
    investors_holding_change: z.ZodNumber;
    number_of_13f_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_number_of_13f_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_of_13f_shares_change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_invested: z.ZodNumber;
    last_total_invested: z.ZodNumber;
    total_invested_change: z.ZodNumber;
    ownership_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_ownership_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ownership_percent_change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    new_positions: z.ZodNumber;
    last_new_positions: z.ZodNumber;
    new_positions_change: z.ZodNumber;
    increased_positions: z.ZodNumber;
    last_increased_positions: z.ZodNumber;
    increased_positions_change: z.ZodNumber;
    closed_positions: z.ZodNumber;
    last_closed_positions: z.ZodNumber;
    closed_positions_change: z.ZodNumber;
    reduced_positions: z.ZodNumber;
    last_reduced_positions: z.ZodNumber;
    reduced_positions_change: z.ZodNumber;
    total_calls: z.ZodNumber;
    last_total_calls: z.ZodNumber;
    total_calls_change: z.ZodNumber;
    total_puts: z.ZodNumber;
    last_total_puts: z.ZodNumber;
    total_puts_change: z.ZodNumber;
    put_call_ratio: z.ZodNumber;
    last_put_call_ratio: z.ZodNumber;
    put_call_ratio_change: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodString;
} & {
    investors_holding: z.ZodNumber;
    last_investors_holding: z.ZodNumber;
    investors_holding_change: z.ZodNumber;
    number_of_13f_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_number_of_13f_shares: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    number_of_13f_shares_change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total_invested: z.ZodNumber;
    last_total_invested: z.ZodNumber;
    total_invested_change: z.ZodNumber;
    ownership_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_ownership_percent: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    ownership_percent_change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    new_positions: z.ZodNumber;
    last_new_positions: z.ZodNumber;
    new_positions_change: z.ZodNumber;
    increased_positions: z.ZodNumber;
    last_increased_positions: z.ZodNumber;
    increased_positions_change: z.ZodNumber;
    closed_positions: z.ZodNumber;
    last_closed_positions: z.ZodNumber;
    closed_positions_change: z.ZodNumber;
    reduced_positions: z.ZodNumber;
    last_reduced_positions: z.ZodNumber;
    reduced_positions_change: z.ZodNumber;
    total_calls: z.ZodNumber;
    last_total_calls: z.ZodNumber;
    total_calls_change: z.ZodNumber;
    total_puts: z.ZodNumber;
    last_total_puts: z.ZodNumber;
    total_puts_change: z.ZodNumber;
    put_call_ratio: z.ZodNumber;
    last_put_call_ratio: z.ZodNumber;
    put_call_ratio_change: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type FMPInstitutionalOwnershipData = z.infer<typeof FMPInstitutionalOwnershipDataSchema>;
export declare class FMPInstitutionalOwnershipFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPInstitutionalOwnershipQueryParams;
    static extractData(query: FMPInstitutionalOwnershipQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPInstitutionalOwnershipQueryParams, data: Record<string, unknown>[]): FMPInstitutionalOwnershipData[];
}

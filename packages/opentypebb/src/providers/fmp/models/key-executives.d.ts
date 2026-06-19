/**
 * FMP Key Executives Model.
 * Maps to: openbb_fmp/models/key_executives.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPKeyExecutivesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type FMPKeyExecutivesQueryParams = z.infer<typeof FMPKeyExecutivesQueryParamsSchema>;
export declare const FMPKeyExecutivesDataSchema: z.ZodObject<{
    title: z.ZodString;
    name: z.ZodString;
    pay: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency_pay: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gender: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year_born: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    title: string;
    pay: number | null;
    currency_pay: string | null;
    gender: string | null;
    year_born: number | null;
}, {
    name: string;
    title: string;
    pay?: number | null | undefined;
    currency_pay?: string | null | undefined;
    gender?: string | null | undefined;
    year_born?: number | null | undefined;
}>;
export type FMPKeyExecutivesData = z.infer<typeof FMPKeyExecutivesDataSchema>;
export declare class FMPKeyExecutivesFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPKeyExecutivesQueryParams;
    static extractData(query: FMPKeyExecutivesQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPKeyExecutivesQueryParams, data: Record<string, unknown>[]): FMPKeyExecutivesData[];
}

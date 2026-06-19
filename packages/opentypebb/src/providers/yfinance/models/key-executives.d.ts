/**
 * YFinance Key Executives Model.
 * Maps to: openbb_yfinance/models/key_executives.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceKeyExecutivesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type YFinanceKeyExecutivesQueryParams = z.infer<typeof YFinanceKeyExecutivesQueryParamsSchema>;
export declare const YFinanceKeyExecutivesDataSchema: z.ZodObject<{
    title: z.ZodString;
    name: z.ZodString;
    pay: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency_pay: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gender: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year_born: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    exercised_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    unexercised_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    title: z.ZodString;
    name: z.ZodString;
    pay: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency_pay: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gender: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year_born: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    exercised_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    unexercised_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    title: z.ZodString;
    name: z.ZodString;
    pay: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency_pay: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gender: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year_born: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    exercised_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    unexercised_value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceKeyExecutivesData = z.infer<typeof YFinanceKeyExecutivesDataSchema>;
export declare class YFinanceKeyExecutivesFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): YFinanceKeyExecutivesQueryParams;
    static extractData(query: YFinanceKeyExecutivesQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: YFinanceKeyExecutivesQueryParams, data: Record<string, unknown>[]): YFinanceKeyExecutivesData[];
}

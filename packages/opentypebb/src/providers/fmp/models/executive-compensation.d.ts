/**
 * FMP Executive Compensation Model.
 * Maps to: openbb_fmp/models/executive_compensation.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPExecutiveCompensationQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    year: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    year: number;
}, {
    symbol: string;
    year?: number | undefined;
}>;
export type FMPExecutiveCompensationQueryParams = z.infer<typeof FMPExecutiveCompensationQueryParamsSchema>;
export declare const FMPExecutiveCompensationDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    report_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    executive: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    salary: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bonus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    stock_award: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    option_award: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    incentive_plan_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    all_other_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    report_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    executive: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    salary: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bonus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    stock_award: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    option_award: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    incentive_plan_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    all_other_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    cik: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    report_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    executive: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    salary: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    bonus: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    stock_award: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    option_award: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    incentive_plan_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    all_other_compensation: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    total: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
} & {
    accepted_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPExecutiveCompensationData = z.infer<typeof FMPExecutiveCompensationDataSchema>;
export declare class FMPExecutiveCompensationFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPExecutiveCompensationQueryParams;
    static extractData(query: FMPExecutiveCompensationQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: FMPExecutiveCompensationQueryParams, data: Record<string, unknown>[]): FMPExecutiveCompensationData[];
}

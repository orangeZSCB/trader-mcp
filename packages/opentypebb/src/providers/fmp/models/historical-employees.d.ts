/**
 * FMP Historical Employees Model.
 * Maps to: openbb_fmp/models/historical_employees.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPHistoricalEmployeesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
} & {
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    limit: number | null;
    start_date: string | null;
    end_date: string | null;
}, {
    symbol: string;
    limit?: number | null | undefined;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
}>;
export type FMPHistoricalEmployeesQueryParams = z.infer<typeof FMPHistoricalEmployeesQueryParamsSchema>;
export declare const FMPHistoricalEmployeesDataSchema: z.ZodObject<{
    date: z.ZodString;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    employees: z.ZodNumber;
} & {
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    source: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    employees: z.ZodNumber;
} & {
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    source: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    employees: z.ZodNumber;
} & {
    company_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    source: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FMPHistoricalEmployeesData = z.infer<typeof FMPHistoricalEmployeesDataSchema>;
export declare class FMPHistoricalEmployeesFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPHistoricalEmployeesQueryParams;
    static extractData(query: FMPHistoricalEmployeesQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPHistoricalEmployeesQueryParams, data: Record<string, unknown>[]): FMPHistoricalEmployeesData[];
}

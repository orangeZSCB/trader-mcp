/**
 * Historical Employees Standard Model.
 * Maps to: standard_models/historical_employees.py
 */
import { z } from 'zod';
export declare const HistoricalEmployeesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    start_date: string | null;
    end_date: string | null;
}, {
    symbol: string;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
}>;
export type HistoricalEmployeesQueryParams = z.infer<typeof HistoricalEmployeesQueryParamsSchema>;
export declare const HistoricalEmployeesDataSchema: z.ZodObject<{
    date: z.ZodString;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    employees: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    employees: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    employees: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type HistoricalEmployeesData = z.infer<typeof HistoricalEmployeesDataSchema>;

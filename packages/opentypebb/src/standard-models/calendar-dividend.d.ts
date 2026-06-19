/**
 * Dividend Calendar Standard Model.
 * Maps to: standard_models/calendar_dividend.py
 */
import { z } from 'zod';
export declare const CalendarDividendQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    start_date: string | null;
    end_date: string | null;
}, {
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
}>;
export type CalendarDividendQueryParams = z.infer<typeof CalendarDividendQueryParamsSchema>;
export declare const CalendarDividendDataSchema: z.ZodObject<{
    ex_dividend_date: z.ZodString;
    symbol: z.ZodString;
    amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    record_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    payment_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    declaration_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    ex_dividend_date: z.ZodString;
    symbol: z.ZodString;
    amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    record_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    payment_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    declaration_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    ex_dividend_date: z.ZodString;
    symbol: z.ZodString;
    amount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    record_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    payment_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    declaration_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type CalendarDividendData = z.infer<typeof CalendarDividendDataSchema>;

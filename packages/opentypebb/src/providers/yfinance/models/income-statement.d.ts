/**
 * YFinance Income Statement Model.
 * Maps to: openbb_yfinance/models/income_statement.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceIncomeStatementQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    period: z.ZodDefault<z.ZodEnum<["annual", "quarter"]>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    period: z.ZodDefault<z.ZodEnum<["annual", "quarter"]>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
} & {
    period: z.ZodDefault<z.ZodEnum<["annual", "quarter"]>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceIncomeStatementQueryParams = z.infer<typeof YFinanceIncomeStatementQueryParamsSchema>;
export declare const YFinanceIncomeStatementDataSchema: z.ZodObject<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    period_ending: z.ZodString;
    fiscal_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    fiscal_year: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type YFinanceIncomeStatementData = z.infer<typeof YFinanceIncomeStatementDataSchema>;
export declare class YFinanceIncomeStatementFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): YFinanceIncomeStatementQueryParams;
    static extractData(query: YFinanceIncomeStatementQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFinanceIncomeStatementQueryParams, data: Record<string, unknown>[]): YFinanceIncomeStatementData[];
}

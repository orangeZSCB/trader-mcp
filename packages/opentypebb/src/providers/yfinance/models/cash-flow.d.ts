/**
 * YFinance Cash Flow Statement Model.
 * Maps to: openbb_yfinance/models/cash_flow.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFinanceCashFlowStatementQueryParamsSchema: z.ZodObject<{
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
export type YFinanceCashFlowStatementQueryParams = z.infer<typeof YFinanceCashFlowStatementQueryParamsSchema>;
export declare const YFinanceCashFlowStatementDataSchema: z.ZodObject<{
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
export type YFinanceCashFlowStatementData = z.infer<typeof YFinanceCashFlowStatementDataSchema>;
export declare class YFinanceCashFlowStatementFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): YFinanceCashFlowStatementQueryParams;
    static extractData(query: YFinanceCashFlowStatementQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: YFinanceCashFlowStatementQueryParams, data: Record<string, unknown>[]): YFinanceCashFlowStatementData[];
}

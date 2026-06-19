/**
 * Government Trades Standard Model.
 * Maps to: standard_models/government_trades.py
 */
import { z } from 'zod';
export declare const GovernmentTradesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    chamber: z.ZodDefault<z.ZodEnum<["house", "senate", "all"]>>;
    limit: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    symbol: string | null;
    limit: number | null;
    chamber: "all" | "house" | "senate";
}, {
    symbol?: string | null | undefined;
    limit?: number | null | undefined;
    chamber?: "all" | "house" | "senate" | undefined;
}>;
export type GovernmentTradesQueryParams = z.infer<typeof GovernmentTradesQueryParamsSchema>;
export declare const GovernmentTradesDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodString;
    transaction_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    representative: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodString;
    transaction_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    representative: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    date: z.ZodString;
    transaction_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    representative: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type GovernmentTradesData = z.infer<typeof GovernmentTradesDataSchema>;

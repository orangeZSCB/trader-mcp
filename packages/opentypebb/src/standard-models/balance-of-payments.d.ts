/**
 * Balance of Payments Standard Model.
 * Maps to: openbb_core/provider/standard_models/balance_of_payments.py
 *
 * Note: Python defines multiple data classes (BP6BopUsdData, ECBMain, ECBSummary, etc.)
 * for different provider report types. In TypeScript we define a generic base schema
 * and let provider-specific fetchers extend with their own fields via .passthrough().
 */
import { z } from 'zod';
export declare const BalanceOfPaymentsQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type BalanceOfPaymentsQueryParams = z.infer<typeof BalanceOfPaymentsQueryParamsSchema>;
export declare const BalanceOfPaymentsDataSchema: z.ZodObject<{
    period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    current_account: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    goods: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    services: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    primary_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    secondary_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    capital_account: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    financial_account: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    current_account: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    goods: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    services: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    primary_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    secondary_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    capital_account: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    financial_account: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    current_account: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    goods: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    services: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    primary_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    secondary_income: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    capital_account: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    financial_account: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type BalanceOfPaymentsData = z.infer<typeof BalanceOfPaymentsDataSchema>;

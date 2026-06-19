/**
 * Central Bank Holdings Standard Model.
 * Maps to: openbb_core/provider/standard_models/central_bank_holdings.py
 */
import { z } from 'zod';
export declare const CentralBankHoldingsQueryParamsSchema: z.ZodObject<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type CentralBankHoldingsQueryParams = z.infer<typeof CentralBankHoldingsQueryParamsSchema>;
export declare const CentralBankHoldingsDataSchema: z.ZodObject<{
    date: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type CentralBankHoldingsData = z.infer<typeof CentralBankHoldingsDataSchema>;

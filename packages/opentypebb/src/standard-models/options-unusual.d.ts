/**
 * Unusual Options Standard Model.
 * Maps to: openbb_core/provider/standard_models/options_unusual.py
 */
import { z } from 'zod';
export declare const OptionsUnusualQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, z.ZodTypeAny, "passthrough">>;
export type OptionsUnusualQueryParams = z.infer<typeof OptionsUnusualQueryParamsSchema>;
export declare const OptionsUnusualDataSchema: z.ZodObject<{
    underlying_symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    contract_symbol: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    underlying_symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    contract_symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    underlying_symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    contract_symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type OptionsUnusualData = z.infer<typeof OptionsUnusualDataSchema>;

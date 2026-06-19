/**
 * Futures Info Standard Model.
 * Maps to: openbb_core/provider/standard_models/futures_info.py
 */
import { z } from 'zod';
export declare const FuturesInfoQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type FuturesInfoQueryParams = z.infer<typeof FuturesInfoQueryParamsSchema>;
export declare const FuturesInfoDataSchema: z.ZodObject<{
    symbol: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type FuturesInfoData = z.infer<typeof FuturesInfoDataSchema>;

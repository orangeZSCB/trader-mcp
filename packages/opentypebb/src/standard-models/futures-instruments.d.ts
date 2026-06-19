/**
 * Futures Instruments Standard Model.
 * Maps to: openbb_core/provider/standard_models/futures_instruments.py
 */
import { z } from 'zod';
export declare const FuturesInstrumentsQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type FuturesInstrumentsQueryParams = z.infer<typeof FuturesInstrumentsQueryParamsSchema>;
export declare const FuturesInstrumentsDataSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type FuturesInstrumentsData = z.infer<typeof FuturesInstrumentsDataSchema>;

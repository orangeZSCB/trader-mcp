/**
 * Index Sectors Standard Model.
 * Maps to: openbb_core/provider/standard_models/index_sectors.py
 */
import { z } from 'zod';
export declare const IndexSectorsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, z.ZodTypeAny, "passthrough">>;
export type IndexSectorsQueryParams = z.infer<typeof IndexSectorsQueryParamsSchema>;
export declare const IndexSectorsDataSchema: z.ZodObject<{
    sector: z.ZodString;
    weight: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sector: z.ZodString;
    weight: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sector: z.ZodString;
    weight: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type IndexSectorsData = z.infer<typeof IndexSectorsDataSchema>;

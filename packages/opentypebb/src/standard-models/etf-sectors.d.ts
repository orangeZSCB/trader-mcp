/**
 * ETF Sectors Standard Model.
 * Maps to: standard_models/etf_sectors.py
 */
import { z } from 'zod';
export declare const EtfSectorsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type EtfSectorsQueryParams = z.infer<typeof EtfSectorsQueryParamsSchema>;
export declare const EtfSectorsDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sector: z.ZodString;
    weight: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sector: z.ZodString;
    weight: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sector: z.ZodString;
    weight: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type EtfSectorsData = z.infer<typeof EtfSectorsDataSchema>;

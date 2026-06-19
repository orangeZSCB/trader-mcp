/**
 * Available Indicators Standard Model.
 * Maps to: openbb_core/provider/standard_models/available_indicators.py
 */
import { z } from 'zod';
export declare const AvailableIndicatorsQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type AvailableIndicatorsQueryParams = z.infer<typeof AvailableIndicatorsQueryParamsSchema>;
export declare const AvailableIndicatorsDataSchema: z.ZodObject<{
    symbol_root: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    iso: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol_root: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    iso: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol_root: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    iso: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type AvailableIndicatorsData = z.infer<typeof AvailableIndicatorsDataSchema>;

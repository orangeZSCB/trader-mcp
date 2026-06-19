/**
 * Chokepoint Info Standard Model (Stub).
 */
import { z } from 'zod';
export declare const ChokepointInfoQueryParamsSchema: z.ZodObject<{
    chokepoint: z.ZodDefault<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    chokepoint: z.ZodDefault<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    chokepoint: z.ZodDefault<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export type ChokepointInfoQueryParams = z.infer<typeof ChokepointInfoQueryParamsSchema>;
export declare const ChokepointInfoDataSchema: z.ZodObject<{
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    region: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    latitude: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    longitude: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    region: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    latitude: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    longitude: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    region: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    latitude: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    longitude: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type ChokepointInfoData = z.infer<typeof ChokepointInfoDataSchema>;

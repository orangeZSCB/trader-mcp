/**
 * Chokepoint Volume Standard Model (Stub).
 */
import { z } from 'zod';
export declare const ChokepointVolumeQueryParamsSchema: z.ZodObject<{
    chokepoint: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    chokepoint: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    chokepoint: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type ChokepointVolumeQueryParams = z.infer<typeof ChokepointVolumeQueryParamsSchema>;
export declare const ChokepointVolumeDataSchema: z.ZodObject<{
    date: z.ZodString;
    chokepoint: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    chokepoint: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    chokepoint: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type ChokepointVolumeData = z.infer<typeof ChokepointVolumeDataSchema>;

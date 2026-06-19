/**
 * Port Volume Standard Model (Stub).
 */
import { z } from 'zod';
export declare const PortVolumeQueryParamsSchema: z.ZodObject<{
    port: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    port: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    port: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type PortVolumeQueryParams = z.infer<typeof PortVolumeQueryParamsSchema>;
export declare const PortVolumeDataSchema: z.ZodObject<{
    date: z.ZodString;
    port_code: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    port_code: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    port_code: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type PortVolumeData = z.infer<typeof PortVolumeDataSchema>;

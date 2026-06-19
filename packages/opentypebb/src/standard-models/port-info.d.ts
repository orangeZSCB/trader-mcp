/**
 * Port Info Standard Model (Stub).
 */
import { z } from 'zod';
export declare const PortInfoQueryParamsSchema: z.ZodObject<{
    port: z.ZodDefault<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    port: z.ZodDefault<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    port: z.ZodDefault<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export type PortInfoQueryParams = z.infer<typeof PortInfoQueryParamsSchema>;
export declare const PortInfoDataSchema: z.ZodObject<{
    port_code: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    port_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    latitude: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    longitude: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    port_code: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    port_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    latitude: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    longitude: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    port_code: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    port_name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    latitude: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    longitude: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type PortInfoData = z.infer<typeof PortInfoDataSchema>;

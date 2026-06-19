/**
 * Export Destinations Standard Model.
 * Maps to: openbb_core/provider/standard_models/export_destinations.py
 */
import { z } from 'zod';
export declare const ExportDestinationsQueryParamsSchema: z.ZodObject<{
    country: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type ExportDestinationsQueryParams = z.infer<typeof ExportDestinationsQueryParamsSchema>;
export declare const ExportDestinationsDataSchema: z.ZodObject<{
    origin_country: z.ZodString;
    destination_country: z.ZodString;
    value: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    origin_country: z.ZodString;
    destination_country: z.ZodString;
    value: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    origin_country: z.ZodString;
    destination_country: z.ZodString;
    value: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type ExportDestinationsData = z.infer<typeof ExportDestinationsDataSchema>;

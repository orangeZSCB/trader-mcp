/**
 * FOMC Documents Standard Model.
 * Maps to: openbb_core/provider/standard_models/fomc_documents.py
 */
import { z } from 'zod';
export declare const FomcDocumentsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FomcDocumentsQueryParams = z.infer<typeof FomcDocumentsQueryParamsSchema>;
export declare const FomcDocumentsDataSchema: z.ZodObject<{
    date: z.ZodString;
    title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FomcDocumentsData = z.infer<typeof FomcDocumentsDataSchema>;

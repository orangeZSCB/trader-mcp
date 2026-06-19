/**
 * Dallas Fed Manufacturing Outlook Standard Model.
 * Maps to: openbb_core/provider/standard_models/manufacturing_outlook_texas.py
 */
import { z } from 'zod';
export declare const ManufacturingOutlookTexasQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type ManufacturingOutlookTexasQueryParams = z.infer<typeof ManufacturingOutlookTexasQueryParamsSchema>;
export declare const ManufacturingOutlookTexasDataSchema: z.ZodObject<{
    date: z.ZodString;
    general_activity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    production: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    new_orders: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    general_activity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    production: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    new_orders: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    general_activity: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    production: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    new_orders: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type ManufacturingOutlookTexasData = z.infer<typeof ManufacturingOutlookTexasDataSchema>;

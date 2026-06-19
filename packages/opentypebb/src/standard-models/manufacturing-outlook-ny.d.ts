/**
 * NY Fed Manufacturing Outlook Standard Model.
 * Maps to: openbb_core/provider/standard_models/manufacturing_outlook_ny.py
 */
import { z } from 'zod';
export declare const ManufacturingOutlookNYQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type ManufacturingOutlookNYQueryParams = z.infer<typeof ManufacturingOutlookNYQueryParamsSchema>;
export declare const ManufacturingOutlookNYDataSchema: z.ZodObject<{
    date: z.ZodString;
    general_business_conditions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    new_orders: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    employees: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    general_business_conditions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    new_orders: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    employees: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    general_business_conditions: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    new_orders: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    employees: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type ManufacturingOutlookNYData = z.infer<typeof ManufacturingOutlookNYDataSchema>;

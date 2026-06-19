/**
 * Short-Term Energy Outlook Standard Model.
 * Data from EIA STEO reports.
 */
import { z } from 'zod';
export declare const ShortTermEnergyOutlookQueryParamsSchema: z.ZodObject<{
    category: z.ZodDefault<z.ZodEnum<["crude_oil_price", "gasoline_price", "natural_gas_price", "crude_oil_production", "petroleum_consumption"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    category: z.ZodDefault<z.ZodEnum<["crude_oil_price", "gasoline_price", "natural_gas_price", "crude_oil_production", "petroleum_consumption"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    category: z.ZodDefault<z.ZodEnum<["crude_oil_price", "gasoline_price", "natural_gas_price", "crude_oil_production", "petroleum_consumption"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type ShortTermEnergyOutlookQueryParams = z.infer<typeof ShortTermEnergyOutlookQueryParamsSchema>;
export declare const ShortTermEnergyOutlookDataSchema: z.ZodObject<{
    date: z.ZodString;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    forecast: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    forecast: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    forecast: z.ZodDefault<z.ZodNullable<z.ZodBoolean>>;
}, z.ZodTypeAny, "passthrough">>;
export type ShortTermEnergyOutlookData = z.infer<typeof ShortTermEnergyOutlookDataSchema>;

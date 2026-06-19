/**
 * Petroleum Status Report Standard Model.
 * Data from EIA Weekly Petroleum Status Report.
 */
import { z } from 'zod';
export declare const PetroleumStatusReportQueryParamsSchema: z.ZodObject<{
    category: z.ZodDefault<z.ZodEnum<["crude_oil_production", "crude_oil_stocks", "gasoline_stocks", "distillate_stocks", "refinery_utilization"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    category: z.ZodDefault<z.ZodEnum<["crude_oil_production", "crude_oil_stocks", "gasoline_stocks", "distillate_stocks", "refinery_utilization"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    category: z.ZodDefault<z.ZodEnum<["crude_oil_production", "crude_oil_stocks", "gasoline_stocks", "distillate_stocks", "refinery_utilization"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type PetroleumStatusReportQueryParams = z.infer<typeof PetroleumStatusReportQueryParamsSchema>;
export declare const PetroleumStatusReportDataSchema: z.ZodObject<{
    date: z.ZodString;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    category: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    unit: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type PetroleumStatusReportData = z.infer<typeof PetroleumStatusReportDataSchema>;

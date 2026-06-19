/**
 * BLS Series Standard Model.
 */
import { z } from 'zod';
export declare const BlsSeriesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type BlsSeriesQueryParams = z.infer<typeof BlsSeriesQueryParamsSchema>;
export declare const BlsSeriesDataSchema: z.ZodObject<{
    date: z.ZodString;
    series_id: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    series_id: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    series_id: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type BlsSeriesData = z.infer<typeof BlsSeriesDataSchema>;

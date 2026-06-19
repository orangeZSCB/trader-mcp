/**
 * Inflation Expectations Standard Model.
 * Maps to: openbb_core/provider/standard_models/inflation_expectations.py
 */
import { z } from 'zod';
export declare const InflationExpectationsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type InflationExpectationsQueryParams = z.infer<typeof InflationExpectationsQueryParamsSchema>;
export declare const InflationExpectationsDataSchema: z.ZodObject<{
    date: z.ZodString;
    michigan_1y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    michigan_5y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    breakeven_5y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    breakeven_10y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    michigan_1y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    michigan_5y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    breakeven_5y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    breakeven_10y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    michigan_1y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    michigan_5y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    breakeven_5y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    breakeven_10y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type InflationExpectationsData = z.infer<typeof InflationExpectationsDataSchema>;

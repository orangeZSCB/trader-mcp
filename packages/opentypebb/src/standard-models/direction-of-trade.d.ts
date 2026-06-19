/**
 * Direction of Trade Standard Model.
 * Maps to: openbb_core/provider/standard_models/direction_of_trade.py
 */
import { z } from 'zod';
export declare const DirectionOfTradeQueryParamsSchema: z.ZodObject<{
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    counterpart: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    direction: z.ZodDefault<z.ZodEnum<["exports", "imports", "balance", "all"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["month", "quarter", "annual"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    counterpart: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    direction: z.ZodDefault<z.ZodEnum<["exports", "imports", "balance", "all"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["month", "quarter", "annual"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    counterpart: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    direction: z.ZodDefault<z.ZodEnum<["exports", "imports", "balance", "all"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["month", "quarter", "annual"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type DirectionOfTradeQueryParams = z.infer<typeof DirectionOfTradeQueryParamsSchema>;
export declare const DirectionOfTradeDataSchema: z.ZodObject<{
    date: z.ZodString;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodString;
    counterpart: z.ZodString;
    title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodNumber;
    scale: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodString;
    counterpart: z.ZodString;
    title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodNumber;
    scale: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    country: z.ZodString;
    counterpart: z.ZodString;
    title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    value: z.ZodNumber;
    scale: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type DirectionOfTradeData = z.infer<typeof DirectionOfTradeDataSchema>;

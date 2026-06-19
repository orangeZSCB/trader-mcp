/**
 * Currency Snapshots Standard Model.
 * Maps to: openbb_core/provider/standard_models/currency_snapshots.py
 */
import { z } from 'zod';
export declare const CurrencySnapshotsQueryParamsSchema: z.ZodObject<{
    base: z.ZodDefault<z.ZodString>;
    quote_type: z.ZodDefault<z.ZodEnum<["direct", "indirect"]>>;
    counter_currencies: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    base: z.ZodDefault<z.ZodString>;
    quote_type: z.ZodDefault<z.ZodEnum<["direct", "indirect"]>>;
    counter_currencies: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    base: z.ZodDefault<z.ZodString>;
    quote_type: z.ZodDefault<z.ZodEnum<["direct", "indirect"]>>;
    counter_currencies: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type CurrencySnapshotsQueryParams = z.infer<typeof CurrencySnapshotsQueryParamsSchema>;
export declare const CurrencySnapshotsDataSchema: z.ZodObject<{
    base_currency: z.ZodString;
    counter_currency: z.ZodString;
    last_rate: z.ZodNumber;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    base_currency: z.ZodString;
    counter_currency: z.ZodString;
    last_rate: z.ZodNumber;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    base_currency: z.ZodString;
    counter_currency: z.ZodString;
    last_rate: z.ZodNumber;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    prev_close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type CurrencySnapshotsData = z.infer<typeof CurrencySnapshotsDataSchema>;

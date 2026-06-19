/**
 * Options Snapshots Standard Model.
 * Maps to: openbb_core/provider/standard_models/options_snapshots.py
 *
 * Note: Python uses list-typed fields. In TypeScript we define per-record schema.
 */
import { z } from 'zod';
export declare const OptionsSnapshotsQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type OptionsSnapshotsQueryParams = z.infer<typeof OptionsSnapshotsQueryParamsSchema>;
export declare const OptionsSnapshotsDataSchema: z.ZodObject<{
    underlying_symbol: z.ZodString;
    contract_symbol: z.ZodString;
    expiration: z.ZodString;
    dte: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    strike: z.ZodNumber;
    option_type: z.ZodString;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open_interest: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_timestamp: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    underlying_symbol: z.ZodString;
    contract_symbol: z.ZodString;
    expiration: z.ZodString;
    dte: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    strike: z.ZodNumber;
    option_type: z.ZodString;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open_interest: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_timestamp: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    underlying_symbol: z.ZodString;
    contract_symbol: z.ZodString;
    expiration: z.ZodString;
    dte: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    strike: z.ZodNumber;
    option_type: z.ZodString;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    open_interest: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_size: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    last_timestamp: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    open: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    high: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    low: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    close: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type OptionsSnapshotsData = z.infer<typeof OptionsSnapshotsDataSchema>;

/**
 * Equity Discovery Standard Models (Gainers, Losers, Active).
 * Maps to: openbb_core/provider/standard_models/equity_gainers.py (and similar)
 *
 * Note: In OpenBB Python, equity_gainers.py does not exist as a standard model.
 * The gainers/losers/active endpoints are provider-specific. We define a common
 * standard model here for TypeScript consistency.
 */
import { z } from 'zod';
export declare const EquityDiscoveryQueryParamsSchema: z.ZodObject<{
    sort: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    sort: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    sort: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type EquityDiscoveryQueryParams = z.infer<typeof EquityDiscoveryQueryParamsSchema>;
export declare const EquityDiscoveryDataSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    percent_change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    avg_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    relative_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    turnover: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dollar_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    percent_change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    avg_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    relative_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    turnover: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dollar_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    percent_change: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    avg_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    relative_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    turnover: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    dollar_volume: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type EquityDiscoveryData = z.infer<typeof EquityDiscoveryDataSchema>;

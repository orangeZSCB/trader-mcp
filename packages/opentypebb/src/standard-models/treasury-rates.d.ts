/**
 * Treasury Rates Standard Model.
 * Maps to: openbb_core/provider/standard_models/treasury_rates.py
 */
import { z } from 'zod';
export declare const TreasuryRatesQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type TreasuryRatesQueryParams = z.infer<typeof TreasuryRatesQueryParamsSchema>;
export declare const TreasuryRatesDataSchema: z.ZodObject<{
    date: z.ZodString;
    week_4: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_6: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_5: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_7: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_10: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_20: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_30: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    week_4: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_6: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_5: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_7: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_10: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_20: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_30: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    week_4: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    month_6: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_1: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_2: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_5: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_7: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_10: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_20: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    year_30: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type TreasuryRatesData = z.infer<typeof TreasuryRatesDataSchema>;

/**
 * Primary Dealer Fails Standard Model.
 * Maps to: openbb_core/provider/standard_models/primary_dealer_fails.py
 */
import { z } from 'zod';
export declare const PrimaryDealerFailsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type PrimaryDealerFailsQueryParams = z.infer<typeof PrimaryDealerFailsQueryParamsSchema>;
export declare const PrimaryDealerFailsDataSchema: z.ZodObject<{
    date: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type PrimaryDealerFailsData = z.infer<typeof PrimaryDealerFailsDataSchema>;

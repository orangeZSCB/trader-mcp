/**
 * Primary Dealer Positioning Standard Model.
 * Maps to: openbb_core/provider/standard_models/primary_dealer_positioning.py
 */
import { z } from 'zod';
export declare const PrimaryDealerPositioningQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type PrimaryDealerPositioningQueryParams = z.infer<typeof PrimaryDealerPositioningQueryParamsSchema>;
export declare const PrimaryDealerPositioningDataSchema: z.ZodObject<{
    date: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export type PrimaryDealerPositioningData = z.infer<typeof PrimaryDealerPositioningDataSchema>;

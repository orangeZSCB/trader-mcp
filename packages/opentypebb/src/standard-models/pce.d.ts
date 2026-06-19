/**
 * Personal Consumption Expenditures (PCE) Standard Model.
 * Maps to: openbb_core/provider/standard_models/pce.py
 */
import { z } from 'zod';
export declare const PersonalConsumptionExpendituresQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type PersonalConsumptionExpendituresQueryParams = z.infer<typeof PersonalConsumptionExpendituresQueryParamsSchema>;
export declare const PersonalConsumptionExpendituresDataSchema: z.ZodObject<{
    date: z.ZodString;
    pce: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    core_pce: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    pce: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    core_pce: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    pce: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    core_pce: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type PersonalConsumptionExpendituresData = z.infer<typeof PersonalConsumptionExpendituresDataSchema>;

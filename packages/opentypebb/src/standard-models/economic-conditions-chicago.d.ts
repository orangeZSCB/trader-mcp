/**
 * Chicago Fed National Activity Index Standard Model.
 * Maps to: openbb_core/provider/standard_models/economic_conditions_chicago.py
 */
import { z } from 'zod';
export declare const EconomicConditionsChicagoQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type EconomicConditionsChicagoQueryParams = z.infer<typeof EconomicConditionsChicagoQueryParamsSchema>;
export declare const EconomicConditionsChicagoDataSchema: z.ZodObject<{
    date: z.ZodString;
    cfnai: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cfnai_ma3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    date: z.ZodString;
    cfnai: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cfnai_ma3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    date: z.ZodString;
    cfnai: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    cfnai_ma3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type EconomicConditionsChicagoData = z.infer<typeof EconomicConditionsChicagoDataSchema>;

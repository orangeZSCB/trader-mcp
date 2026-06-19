/**
 * Key Executives Standard Model.
 * Maps to: standard_models/key_executives.py
 */
import { z } from 'zod';
export declare const KeyExecutivesQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type KeyExecutivesQueryParams = z.infer<typeof KeyExecutivesQueryParamsSchema>;
export declare const KeyExecutivesDataSchema: z.ZodObject<{
    title: z.ZodString;
    name: z.ZodString;
    pay: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency_pay: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gender: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year_born: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    title: z.ZodString;
    name: z.ZodString;
    pay: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency_pay: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gender: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year_born: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    title: z.ZodString;
    name: z.ZodString;
    pay: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    currency_pay: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gender: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    year_born: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type KeyExecutivesData = z.infer<typeof KeyExecutivesDataSchema>;

/**
 * Intrinio Options Unusual Model.
 * Maps to: openbb_intrinio/models/options_unusual.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { OptionsUnusualDataSchema } from '../../../standard-models/options-unusual.js';
export declare const IntrinioOptionsUnusualQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, z.ZodTypeAny, "passthrough">>;
export type IntrinioOptionsUnusualQueryParams = z.infer<typeof IntrinioOptionsUnusualQueryParamsSchema>;
export type IntrinioOptionsUnusualData = z.infer<typeof OptionsUnusualDataSchema>;
export declare class IntrinioOptionsUnusualFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): IntrinioOptionsUnusualQueryParams;
    static extractData(query: IntrinioOptionsUnusualQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: IntrinioOptionsUnusualQueryParams, data: Record<string, unknown>[]): IntrinioOptionsUnusualData[];
}

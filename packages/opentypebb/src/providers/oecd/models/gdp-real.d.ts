/**
 * OECD GDP Real Fetcher.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const OECDGdpRealQueryParamsSchema: z.ZodObject<{
    country: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodDefault<z.ZodString>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["annual", "quarter"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type OECDGdpRealQueryParams = z.infer<typeof OECDGdpRealQueryParamsSchema>;
export declare class OECDGdpRealFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): OECDGdpRealQueryParams;
    static extractData(query: OECDGdpRealQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: OECDGdpRealQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        value: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

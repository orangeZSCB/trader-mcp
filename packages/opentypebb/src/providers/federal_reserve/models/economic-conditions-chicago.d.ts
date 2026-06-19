/**
 * Federal Reserve Chicago Fed National Activity Index Fetcher.
 * Uses FRED series: CFNAI (CFNAI), CFNAIMA3 (3-month moving average).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedChicagoQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedChicagoQueryParams = z.infer<typeof FedChicagoQueryParamsSchema>;
export declare class FedEconomicConditionsChicagoFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedChicagoQueryParams;
    static extractData(query: FedChicagoQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedChicagoQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        cfnai: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        cfnai_ma3: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

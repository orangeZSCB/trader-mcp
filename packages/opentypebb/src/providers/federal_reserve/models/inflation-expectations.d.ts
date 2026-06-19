/**
 * Federal Reserve Inflation Expectations Fetcher.
 * Uses FRED series: MICH (Michigan 1y), MICH5Y (Michigan 5y),
 * T5YIE (5y Breakeven), T10YIE (10y Breakeven).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedInflationExpectationsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedInflationExpectationsQueryParams = z.infer<typeof FedInflationExpectationsQueryParamsSchema>;
export declare class FedInflationExpectationsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedInflationExpectationsQueryParams;
    static extractData(query: FedInflationExpectationsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FedInflationExpectationsQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        michigan_1y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        michigan_5y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        breakeven_5y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
        breakeven_10y: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    }, z.ZodTypeAny, "passthrough">[];
}

/**
 * Federal Reserve FOMC Documents Fetcher.
 *
 * Scrapes the FOMC calendar page for REAL document links — policy
 * statements, meeting minutes and projection materials. (The original
 * port returned fed-funds target observations relabelled as "documents",
 * and called FRED without an api key, so it always came back empty.)
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FedFomcDocumentsQueryParamsSchema: z.ZodObject<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type FedFomcDocumentsQueryParams = z.infer<typeof FedFomcDocumentsQueryParamsSchema>;
export declare class FedFomcDocumentsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): FedFomcDocumentsQueryParams;
    static extractData(query: FedFomcDocumentsQueryParams): Promise<Record<string, unknown>[]>;
    static transformData(query: FedFomcDocumentsQueryParams, data: Record<string, unknown>[]): z.objectOutputType<{
        date: z.ZodString;
        title: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        type: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        url: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[];
}

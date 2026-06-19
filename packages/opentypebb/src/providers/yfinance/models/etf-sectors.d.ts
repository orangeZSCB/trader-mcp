/**
 * Yahoo Finance ETF Sectors Model.
 *
 * Keyless fallback for the FMP sector-weightings endpoint. Yahoo's
 * `topHoldings.sectorWeightings` carries the FULL sector breakdown
 * (one `{ key: weight }` entry per sector).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const YFEtfSectorsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type YFEtfSectorsQueryParams = z.infer<typeof YFEtfSectorsQueryParamsSchema>;
export declare const YFEtfSectorsDataSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sector: z.ZodString;
    weight: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sector: z.ZodString;
    weight: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    symbol: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    sector: z.ZodString;
    weight: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>;
export type YFEtfSectorsData = z.infer<typeof YFEtfSectorsDataSchema>;
export declare class YFEtfSectorsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): YFEtfSectorsQueryParams;
    static extractData(query: YFEtfSectorsQueryParams): Promise<Record<string, unknown>[]>;
    static transformData(_query: YFEtfSectorsQueryParams, data: Record<string, unknown>[]): YFEtfSectorsData[];
}

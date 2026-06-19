/**
 * FMP ETF Sectors Model.
 * Maps to: openbb_fmp/models/etf_sectors.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const FMPEtfSectorsQueryParamsSchema: z.ZodObject<{
    symbol: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>;
export type FMPEtfSectorsQueryParams = z.infer<typeof FMPEtfSectorsQueryParamsSchema>;
export declare const FMPEtfSectorsDataSchema: z.ZodObject<{
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
export type FMPEtfSectorsData = z.infer<typeof FMPEtfSectorsDataSchema>;
export declare class FMPEtfSectorsFetcher extends Fetcher {
    static transformQuery(params: Record<string, unknown>): FMPEtfSectorsQueryParams;
    static extractData(query: FMPEtfSectorsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: FMPEtfSectorsQueryParams, data: Record<string, unknown>[]): FMPEtfSectorsData[];
}

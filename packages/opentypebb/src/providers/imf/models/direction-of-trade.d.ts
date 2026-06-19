/**
 * IMF Direction of Trade Model.
 * Maps to: openbb_imf/models/direction_of_trade.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { DirectionOfTradeDataSchema } from '../../../standard-models/direction-of-trade.js';
export declare const IMFDOTQueryParamsSchema: z.ZodObject<{
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    counterpart: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    direction: z.ZodDefault<z.ZodEnum<["exports", "imports", "balance", "all"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["month", "quarter", "annual"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    counterpart: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    direction: z.ZodDefault<z.ZodEnum<["exports", "imports", "balance", "all"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["month", "quarter", "annual"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    country: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    counterpart: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    direction: z.ZodDefault<z.ZodEnum<["exports", "imports", "balance", "all"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    frequency: z.ZodDefault<z.ZodEnum<["month", "quarter", "annual"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type IMFDOTQueryParams = z.infer<typeof IMFDOTQueryParamsSchema>;
export type IMFDOTData = z.infer<typeof DirectionOfTradeDataSchema>;
export declare class IMFDirectionOfTradeFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): IMFDOTQueryParams;
    static extractData(query: IMFDOTQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(query: IMFDOTQueryParams, data: Record<string, unknown>[]): IMFDOTData[];
}

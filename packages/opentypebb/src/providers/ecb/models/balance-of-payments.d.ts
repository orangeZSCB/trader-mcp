/**
 * ECB Balance of Payments Model.
 * Maps to: openbb_ecb/models/balance_of_payments.py
 *
 * Uses ECB data-detail-api to fetch individual BOP series and merge by period.
 * Requires proxy for network access (uses globalThis.fetch via undici).
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { BalanceOfPaymentsDataSchema } from '../../../standard-models/balance-of-payments.js';
export declare const ECBBalanceOfPaymentsQueryParamsSchema: z.ZodObject<{
    report_type: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["monthly", "quarterly"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    report_type: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["monthly", "quarterly"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    report_type: z.ZodDefault<z.ZodString>;
    frequency: z.ZodDefault<z.ZodEnum<["monthly", "quarterly"]>>;
    start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export type ECBBalanceOfPaymentsQueryParams = z.infer<typeof ECBBalanceOfPaymentsQueryParamsSchema>;
export type ECBBalanceOfPaymentsData = z.infer<typeof BalanceOfPaymentsDataSchema>;
export declare class ECBBalanceOfPaymentsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): ECBBalanceOfPaymentsQueryParams;
    static extractData(query: ECBBalanceOfPaymentsQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: ECBBalanceOfPaymentsQueryParams, data: Record<string, unknown>[]): ECBBalanceOfPaymentsData[];
}

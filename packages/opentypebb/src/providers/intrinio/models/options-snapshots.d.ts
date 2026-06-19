/**
 * Intrinio Options Snapshots Model.
 * Maps to: openbb_intrinio/models/options_snapshots.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { OptionsSnapshotsDataSchema } from '../../../standard-models/options-snapshots.js';
export declare const IntrinioOptionsSnapshotsQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type IntrinioOptionsSnapshotsQueryParams = z.infer<typeof IntrinioOptionsSnapshotsQueryParamsSchema>;
export type IntrinioOptionsSnapshotsData = z.infer<typeof OptionsSnapshotsDataSchema>;
export declare class IntrinioOptionsSnapshotsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): IntrinioOptionsSnapshotsQueryParams;
    static extractData(_query: IntrinioOptionsSnapshotsQueryParams, credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: IntrinioOptionsSnapshotsQueryParams, data: Record<string, unknown>[]): IntrinioOptionsSnapshotsData[];
}

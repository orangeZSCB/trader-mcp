/**
 * IMF PortWatch Fetchers — ports + maritime chokepoints.
 * Maps to: openbb_imf/models/{port_info,port_volume,maritime_chokepoint_*}.py
 *
 * Source: IMF PortWatch (portwatch.imf.org) — satellite AIS data for 1,802
 * ports and 24 chokepoints, hosted as public ArcGIS feature layers (keyless,
 * updated weekly on Tuesdays). The daily layers carry vessel counts
 * (n_total / n_cargo / n_tanker / …) and capacity estimates in metric tons.
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { PortInfoQueryParamsSchema } from '../../../standard-models/port-info.js';
import { PortVolumeQueryParamsSchema } from '../../../standard-models/port-volume.js';
import { ChokepointInfoQueryParamsSchema } from '../../../standard-models/chokepoint-info.js';
import { ChokepointVolumeQueryParamsSchema } from '../../../standard-models/chokepoint-volume.js';
export declare class ImfPortInfoFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): z.objectOutputType<{
        port: z.ZodDefault<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">;
    static extractData(query: z.infer<typeof PortInfoQueryParamsSchema>): Promise<Record<string, unknown>[]>;
    static transformData(_query: unknown, data: Record<string, unknown>[]): {
        port_code: {} | null;
        port_name: {} | null;
        country: {} | null;
        latitude: number | null;
        longitude: number | null;
        continent: {} | null;
        vessel_count_total: {} | null;
    }[];
}
export declare class ImfPortVolumeFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): z.objectOutputType<{
        port: z.ZodDefault<z.ZodString>;
        start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">;
    static extractData(query: z.infer<typeof PortVolumeQueryParamsSchema>): Promise<Record<string, unknown>[]>;
    static transformData(_query: unknown, data: Record<string, unknown>[]): {
        date: string;
        port_code: {} | null;
        port_name: {} | null;
        portcalls: {} | null;
        portcalls_container: {} | null;
        portcalls_tanker: {} | null;
        portcalls_dry_bulk: {} | null;
        volume: {} | null;
        import_tons: {} | null;
        export_tons: {} | null;
        unit: string;
    }[];
}
export declare class ImfChokepointInfoFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): z.objectOutputType<{
        chokepoint: z.ZodDefault<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">;
    static extractData(query: z.infer<typeof ChokepointInfoQueryParamsSchema>): Promise<Record<string, unknown>[]>;
    static transformData(_query: unknown, data: Record<string, unknown>[]): {
        chokepoint_code: {} | null;
        name: {} | null;
        latitude: number | null;
        longitude: number | null;
        vessel_count_total: {} | null;
    }[];
}
export declare class ImfChokepointVolumeFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): z.objectOutputType<{
        chokepoint: z.ZodDefault<z.ZodString>;
        start_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        end_date: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">;
    static extractData(query: z.infer<typeof ChokepointVolumeQueryParamsSchema>): Promise<Record<string, unknown>[]>;
    static transformData(_query: unknown, data: Record<string, unknown>[]): {
        date: string;
        chokepoint: {} | null;
        chokepoint_code: {} | null;
        vessels_total: {} | null;
        vessels_cargo: {} | null;
        vessels_tanker: {} | null;
        vessels_container: {} | null;
        vessels_dry_bulk: {} | null;
        volume: {} | null;
        unit: string;
    }[];
}

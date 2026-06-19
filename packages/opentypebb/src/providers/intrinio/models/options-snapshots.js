/**
 * Intrinio Options Snapshots Model.
 * Maps to: openbb_intrinio/models/options_snapshots.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { OptionsSnapshotsDataSchema } from '../../../standard-models/options-snapshots.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { amakeRequest } from '../../../core/provider/utils/helpers.js';
export const IntrinioOptionsSnapshotsQueryParamsSchema = z.object({}).passthrough();
export class IntrinioOptionsSnapshotsFetcher extends Fetcher {
    static requireCredentials = true;
    static transformQuery(params) {
        return IntrinioOptionsSnapshotsQueryParamsSchema.parse(params);
    }
    static async extractData(_query, credentials) {
        const apiKey = credentials?.intrinio_api_key ?? '';
        if (!apiKey)
            throw new EmptyDataError('Intrinio API key required.');
        const url = `https://api-v2.intrinio.com/options/snapshots?api_key=${apiKey}`;
        try {
            const data = await amakeRequest(url);
            const snapshots = (data.snapshots ?? data.options ?? []);
            if (!Array.isArray(snapshots) || snapshots.length === 0)
                throw new EmptyDataError();
            return snapshots;
        }
        catch (err) {
            if (err instanceof EmptyDataError)
                throw err;
            throw new EmptyDataError(`Failed to fetch Intrinio options snapshots: ${err}`);
        }
    }
    static transformData(_query, data) {
        return data.map(d => OptionsSnapshotsDataSchema.parse({
            underlying_symbol: d.underlying_symbol ?? d.ticker ?? '',
            contract_symbol: d.contract_symbol ?? d.code ?? '',
            expiration: d.expiration ?? '',
            dte: d.dte ?? null,
            strike: d.strike ?? 0,
            option_type: d.type ?? d.option_type ?? '',
            volume: d.volume ?? null,
            open_interest: d.open_interest ?? null,
            last_price: d.last ?? d.last_price ?? null,
            last_size: d.last_size ?? null,
            last_timestamp: d.last_timestamp ?? null,
            open: d.open ?? null,
            high: d.high ?? null,
            low: d.low ?? null,
            close: d.close ?? null,
        }));
    }
}
//# sourceMappingURL=options-snapshots.js.map
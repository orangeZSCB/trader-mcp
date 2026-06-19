/**
 * IMF Available Indicators Model.
 * Maps to: openbb_imf/models/available_indicators.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { AvailableIndicatorsDataSchema } from '../../../standard-models/available-indicators.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { nativeFetch } from '../../../core/provider/utils/helpers.js';
export const IMFAvailableIndicatorsQueryParamsSchema = z.object({}).passthrough();
export class IMFAvailableIndicatorsFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return IMFAvailableIndicatorsQueryParamsSchema.parse(params);
    }
    static async extractData(_query, _credentials) {
        // IMF Dataflow endpoint lists available datasets
        const url = 'https://dataservices.imf.org/REST/SDMX_JSON.svc/Dataflow';
        try {
            const resp = await nativeFetch(url, { timeoutMs: 30000 });
            if (resp.status !== 200)
                throw new EmptyDataError(`IMF API returned ${resp.status}`);
            const data = JSON.parse(resp.text);
            const structure = data.Structure;
            const dataflows = structure?.Dataflows?.Dataflow;
            if (!Array.isArray(dataflows) || dataflows.length === 0)
                throw new EmptyDataError();
            return dataflows.map(df => ({
                symbol: df.KeyFamilyRef?.KeyFamilyID ?? df['@id'] ?? '',
                description: (df.Name?.['#text'] ?? df.Name ?? ''),
            }));
        }
        catch (err) {
            if (err instanceof EmptyDataError)
                throw err;
            throw new EmptyDataError(`Failed to fetch IMF indicators: ${err}`);
        }
    }
    static transformData(_query, data) {
        return data.map(d => AvailableIndicatorsDataSchema.parse({
            symbol: d.symbol ?? null,
            description: d.description ?? null,
        }));
    }
}
//# sourceMappingURL=available-indicators.js.map
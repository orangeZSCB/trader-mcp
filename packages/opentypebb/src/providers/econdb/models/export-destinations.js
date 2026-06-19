/**
 * EconDB Export Destinations Model.
 * Maps to: openbb_econdb/models/export_destinations.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { ExportDestinationsDataSchema } from '../../../standard-models/export-destinations.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { amakeRequest } from '../../../core/provider/utils/helpers.js';
export const EconDBExportDestinationsQueryParamsSchema = z.object({
    country: z.string().describe('The country to get data for.'),
}).passthrough();
const COUNTRY_ISO = {
    united_states: 'US', united_kingdom: 'GB', japan: 'JP', germany: 'DE',
    france: 'FR', italy: 'IT', canada: 'CA', china: 'CN',
};
export class EconDBExportDestinationsFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return EconDBExportDestinationsQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const iso = COUNTRY_ISO[query.country] ?? query.country.toUpperCase().slice(0, 2);
        const token = credentials?.econdb_api_key ?? '';
        const tokenParam = token ? `&token=${token}` : '';
        const url = `https://www.econdb.com/api/country/${iso}/trade/?format=json${tokenParam}`;
        try {
            const data = await amakeRequest(url);
            const exports = (data.exports ?? data.results ?? []);
            if (!Array.isArray(exports) || exports.length === 0)
                throw new EmptyDataError();
            return exports.map(e => ({ ...e, origin_country: query.country }));
        }
        catch (err) {
            if (err instanceof EmptyDataError)
                throw err;
            throw new EmptyDataError(`Failed to fetch export destinations: ${err}`);
        }
    }
    static transformData(_query, data) {
        return data.map(d => ExportDestinationsDataSchema.parse({
            origin_country: d.origin_country ?? '',
            destination_country: d.partner ?? d.destination_country ?? '',
            value: d.value ?? d.amount ?? 0,
        }));
    }
}
//# sourceMappingURL=export-destinations.js.map
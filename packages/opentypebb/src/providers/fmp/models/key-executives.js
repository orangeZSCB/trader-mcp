/**
 * FMP Key Executives Model.
 * Maps to: openbb_fmp/models/key_executives.py
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { KeyExecutivesQueryParamsSchema, KeyExecutivesDataSchema } from '../../../standard-models/key-executives.js';
import { getDataMany } from '../utils/helpers.js';
export const FMPKeyExecutivesQueryParamsSchema = KeyExecutivesQueryParamsSchema;
// extra="ignore" in Python → .strip() in Zod
export const FMPKeyExecutivesDataSchema = KeyExecutivesDataSchema.strip();
export class FMPKeyExecutivesFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPKeyExecutivesQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        return getDataMany(`https://financialmodelingprep.com/stable/key-executives?symbol=${query.symbol}&apikey=${apiKey}`);
    }
    static transformData(_query, data) {
        return data.map(d => FMPKeyExecutivesDataSchema.parse(d));
    }
}
//# sourceMappingURL=key-executives.js.map
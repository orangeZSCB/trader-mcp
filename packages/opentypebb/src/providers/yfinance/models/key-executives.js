/**
 * YFinance Key Executives Model.
 * Maps to: openbb_yfinance/models/key_executives.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { KeyExecutivesQueryParamsSchema, KeyExecutivesDataSchema } from '../../../standard-models/key-executives.js';
import { applyAliases } from '../../../core/provider/utils/helpers.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { getRawQuoteSummary } from '../utils/helpers.js';
const ALIAS_DICT = {
    year_born: 'yearBorn',
    fiscal_year: 'fiscalYear',
    pay: 'totalPay',
    exercised_value: 'exercisedValue',
    unexercised_value: 'unexercisedValue',
};
export const YFinanceKeyExecutivesQueryParamsSchema = KeyExecutivesQueryParamsSchema;
export const YFinanceKeyExecutivesDataSchema = KeyExecutivesDataSchema.extend({
    exercised_value: z.number().nullable().default(null).describe('Value of shares exercised.'),
    unexercised_value: z.number().nullable().default(null).describe('Value of shares not exercised.'),
    fiscal_year: z.number().nullable().default(null).describe('Fiscal year of the pay.'),
}).passthrough();
export class YFinanceKeyExecutivesFetcher extends Fetcher {
    static transformQuery(params) {
        return YFinanceKeyExecutivesQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        // Need raw (unflattened) quoteSummary to access companyOfficers array
        const raw = await getRawQuoteSummary(query.symbol, ['assetProfile']);
        const profile = raw.assetProfile;
        if (!profile?.companyOfficers?.length) {
            throw new EmptyDataError(`No executive data found for ${query.symbol}`);
        }
        // Remove maxAge from each officer entry (matches Python)
        const officers = profile.companyOfficers.map((d) => {
            const copy = { ...d };
            delete copy.maxAge;
            // Handle nested raw values (yahoo-finance2 sometimes wraps in { raw, fmt })
            for (const [k, v] of Object.entries(copy)) {
                if (v && typeof v === 'object' && 'raw' in v) {
                    copy[k] = v.raw;
                }
            }
            return copy;
        });
        return officers;
    }
    static transformData(_query, data) {
        return data.map(d => {
            const aliased = applyAliases(d, ALIAS_DICT);
            return YFinanceKeyExecutivesDataSchema.parse(aliased);
        });
    }
}
//# sourceMappingURL=key-executives.js.map
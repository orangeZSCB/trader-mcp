/**
 * FMP Historical Employees Model.
 * Maps to: openbb_fmp/models/historical_employees.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { HistoricalEmployeesQueryParamsSchema, HistoricalEmployeesDataSchema } from '../../../standard-models/historical-employees.js';
import { applyAliases } from '../../../core/provider/utils/helpers.js';
import { getDataMany } from '../utils/helpers.js';
const ALIAS_DICT = {
    company_name: 'companyName',
    employees: 'employeeCount',
    date: 'periodOfReport',
    source: 'formType',
    url: 'source',
};
export const FMPHistoricalEmployeesQueryParamsSchema = HistoricalEmployeesQueryParamsSchema.extend({
    limit: z.coerce.number().nullable().default(null).describe('The number of data entries to return.'),
});
export const FMPHistoricalEmployeesDataSchema = HistoricalEmployeesDataSchema.extend({
    company_name: z.string().nullable().default(null).describe('Name of the company.'),
    source: z.string().nullable().default(null).describe('Source form type.'),
    url: z.string().nullable().default(null).describe('URL to the source filing.'),
}).passthrough();
export class FMPHistoricalEmployeesFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPHistoricalEmployeesQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        let url = `https://financialmodelingprep.com/stable/historical-employee-count?symbol=${query.symbol}&apikey=${apiKey}`;
        if (query.limit)
            url += `&limit=${query.limit}`;
        return getDataMany(url);
    }
    static transformData(_query, data) {
        return data.map(d => {
            const aliased = applyAliases(d, ALIAS_DICT);
            return FMPHistoricalEmployeesDataSchema.parse(aliased);
        });
    }
}
//# sourceMappingURL=historical-employees.js.map
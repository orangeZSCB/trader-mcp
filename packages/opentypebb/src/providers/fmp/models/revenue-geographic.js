/**
 * FMP Revenue Geographic Model.
 * Maps to: openbb_fmp/models/revenue_geographic.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { RevenueGeographicQueryParamsSchema, RevenueGeographicDataSchema } from '../../../standard-models/revenue-geographic.js';
import { getDataMany } from '../utils/helpers.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
export const FMPRevenueGeographicQueryParamsSchema = RevenueGeographicQueryParamsSchema.extend({
    period: z.enum(['quarter', 'annual']).default('annual').describe('Fiscal period.'),
});
export const FMPRevenueGeographicDataSchema = RevenueGeographicDataSchema;
export class FMPRevenueGeographicFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPRevenueGeographicQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        return getDataMany(`https://financialmodelingprep.com/stable/revenue-geographic-segmentation?symbol=${query.symbol}&period=${query.period}&structure=flat&apikey=${apiKey}`);
    }
    static transformData(_query, data) {
        if (!data || data.length === 0) {
            throw new EmptyDataError('The request was returned empty.');
        }
        const results = [];
        for (const item of data) {
            const periodEnding = item.date;
            const fiscalYear = item.fiscalYear;
            const fiscalPeriod = item.period;
            const segment = (item.data ?? {});
            for (const [region, revenueValue] of Object.entries(segment)) {
                if (revenueValue != null) {
                    const revenue = Number(revenueValue);
                    if (!isNaN(revenue)) {
                        results.push(FMPRevenueGeographicDataSchema.parse({
                            period_ending: periodEnding,
                            fiscal_year: fiscalYear,
                            fiscal_period: fiscalPeriod,
                            region: region.replace('Segment', '').trim(),
                            revenue,
                        }));
                    }
                }
            }
        }
        if (results.length === 0) {
            throw new EmptyDataError('Unknown error while transforming the data.');
        }
        return results.sort((a, b) => {
            const dateComp = String(a.period_ending ?? '').localeCompare(String(b.period_ending ?? ''));
            if (dateComp !== 0)
                return dateComp;
            return (a.revenue ?? 0) - (b.revenue ?? 0);
        });
    }
}
//# sourceMappingURL=revenue-geographic.js.map
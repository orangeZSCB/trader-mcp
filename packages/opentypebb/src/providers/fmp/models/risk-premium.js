/**
 * FMP Risk Premium Model.
 * Maps to: openbb_fmp/models/risk_premium.py
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { RiskPremiumQueryParamsSchema, RiskPremiumDataSchema } from '../../../standard-models/risk-premium.js';
import { getDataMany } from '../utils/helpers.js';
export const FMPRiskPremiumQueryParamsSchema = RiskPremiumQueryParamsSchema;
export const FMPRiskPremiumDataSchema = RiskPremiumDataSchema;
export class FMPRiskPremiumFetcher extends Fetcher {
    static transformQuery(params) {
        return FMPRiskPremiumQueryParamsSchema.parse(params);
    }
    static async extractData(_query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        return getDataMany(`https://financialmodelingprep.com/stable/market-risk-premium?apikey=${apiKey}`);
    }
    static transformData(_query, data) {
        return data.map(d => FMPRiskPremiumDataSchema.parse(d));
    }
}
//# sourceMappingURL=risk-premium.js.map
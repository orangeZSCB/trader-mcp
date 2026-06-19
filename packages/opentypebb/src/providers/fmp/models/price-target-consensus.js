/**
 * FMP Price Target Consensus Model.
 * Maps to: openbb_fmp/models/price_target_consensus.py
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { PriceTargetConsensusQueryParamsSchema, PriceTargetConsensusDataSchema } from '../../../standard-models/price-target-consensus.js';
import { amakeRequest } from '../../../core/provider/utils/helpers.js';
import { OpenBBError, EmptyDataError } from '../../../core/provider/utils/errors.js';
import { responseCallback } from '../utils/helpers.js';
// --- Query Params ---
export const FMPPriceTargetConsensusQueryParamsSchema = PriceTargetConsensusQueryParamsSchema;
// --- Data ---
export const FMPPriceTargetConsensusDataSchema = PriceTargetConsensusDataSchema;
// --- Fetcher ---
export class FMPPriceTargetConsensusFetcher extends Fetcher {
    static transformQuery(params) {
        if (!params.symbol) {
            throw new OpenBBError('Symbol is a required field for FMP.');
        }
        return FMPPriceTargetConsensusQueryParamsSchema.parse(params);
    }
    static async extractData(query, credentials) {
        const apiKey = credentials?.fmp_api_key ?? '';
        const symbols = (query.symbol ?? '').split(',');
        const results = [];
        const getOne = async (symbol) => {
            const url = `https://financialmodelingprep.com/stable/price-target-consensus?symbol=${symbol}&apikey=${apiKey}`;
            try {
                const result = await amakeRequest(url, { responseCallback });
                if (result && result.length > 0) {
                    results.push(...result);
                }
                else {
                    // No analyst price targets — common for ETFs, small-caps without
                    // sell-side coverage, or recently IPO'd tickers. Not an error.
                    console.info(`fmp/price-target-consensus: no analyst targets for ${symbol}`);
                }
            }
            catch (err) {
                console.warn(`fmp/price-target-consensus: request failed for ${symbol}:`, err instanceof Error ? err.message : err);
            }
        };
        await Promise.all(symbols.map(getOne));
        if (results.length === 0) {
            throw new EmptyDataError('No data returned for the given symbols.');
        }
        return results.sort((a, b) => {
            const ai = symbols.indexOf(String(a.symbol ?? ''));
            const bi = symbols.indexOf(String(b.symbol ?? ''));
            return ai - bi;
        });
    }
    static transformData(query, data) {
        return data.map((d) => FMPPriceTargetConsensusDataSchema.parse(d));
    }
}
//# sourceMappingURL=price-target-consensus.js.map
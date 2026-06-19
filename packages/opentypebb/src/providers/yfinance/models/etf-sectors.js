/**
 * Yahoo Finance ETF Sectors Model.
 *
 * Keyless fallback for the FMP sector-weightings endpoint. Yahoo's
 * `topHoldings.sectorWeightings` carries the FULL sector breakdown
 * (one `{ key: weight }` entry per sector).
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { EtfSectorsQueryParamsSchema, EtfSectorsDataSchema } from '../../../standard-models/etf-sectors.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { getRawQuoteSummary } from '../utils/helpers.js';
/** Yahoo sector keys → display names (FMP-style labels). */
const SECTOR_NAMES = {
    realestate: 'Real Estate',
    consumer_cyclical: 'Consumer Cyclical',
    basic_materials: 'Basic Materials',
    consumer_defensive: 'Consumer Defensive',
    technology: 'Technology',
    communication_services: 'Communication Services',
    financial_services: 'Financial Services',
    utilities: 'Utilities',
    industrials: 'Industrials',
    energy: 'Energy',
    healthcare: 'Healthcare',
};
export const YFEtfSectorsQueryParamsSchema = EtfSectorsQueryParamsSchema;
export const YFEtfSectorsDataSchema = EtfSectorsDataSchema.passthrough();
export class YFEtfSectorsFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        return YFEtfSectorsQueryParamsSchema.parse(params);
    }
    static async extractData(query) {
        const summary = await getRawQuoteSummary(query.symbol, ['topHoldings']);
        const weightings = (summary.topHoldings?.sectorWeightings ?? []);
        if (weightings.length === 0) {
            throw new EmptyDataError(`No sector data for ${query.symbol} (Yahoo carries sector weights for funds/ETFs only).`);
        }
        // Flatten [{ technology: 0.32 }, { energy: 0.04 }, …] → rows.
        const rows = [];
        for (const entry of weightings) {
            for (const [key, weight] of Object.entries(entry)) {
                if (typeof weight === 'number') {
                    rows.push({ symbol: query.symbol, sector: SECTOR_NAMES[key] ?? key, weight });
                }
            }
        }
        return rows;
    }
    static transformData(_query, data) {
        return data
            .map((d) => YFEtfSectorsDataSchema.parse(d))
            .sort((a, b) => (b.weight ?? 0) - (a.weight ?? 0));
    }
}
//# sourceMappingURL=etf-sectors.js.map
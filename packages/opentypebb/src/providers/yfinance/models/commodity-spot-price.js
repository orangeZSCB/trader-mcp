/**
 * YFinance Commodity Spot Price Fetcher.
 * Uses Yahoo Finance futures symbols (GC=F for gold, CL=F for crude, etc.)
 */
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
import { CommoditySpotPriceQueryParamsSchema, CommoditySpotPriceDataSchema } from '../../../standard-models/commodity-spot-price.js';
import { EmptyDataError } from '../../../core/provider/utils/errors.js';
import { getHistoricalData } from '../utils/helpers.js';
export const YFinanceCommoditySpotPriceQueryParamsSchema = CommoditySpotPriceQueryParamsSchema;
// Well-known commodity futures symbols
const COMMODITY_MAP = {
    gold: 'GC=F',
    silver: 'SI=F',
    platinum: 'PL=F',
    palladium: 'PA=F',
    copper: 'HG=F',
    crude_oil: 'CL=F',
    wti: 'CL=F',
    brent: 'BZ=F',
    natural_gas: 'NG=F',
    heating_oil: 'HO=F',
    gasoline: 'RB=F',
    corn: 'ZC=F',
    wheat: 'ZW=F',
    soybeans: 'ZS=F',
    sugar: 'SB=F',
    coffee: 'KC=F',
    cocoa: 'CC=F',
    cotton: 'CT=F',
    lumber: 'LBS=F',
    live_cattle: 'LE=F',
    lean_hogs: 'HE=F',
};
function resolveSymbol(sym) {
    const lower = sym.toLowerCase().trim();
    return COMMODITY_MAP[lower] ?? sym.trim();
}
export class YFinanceCommoditySpotPriceFetcher extends Fetcher {
    static requireCredentials = false;
    static transformQuery(params) {
        const now = new Date();
        if (!params.start_date) {
            const oneYearAgo = new Date(now);
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            params.start_date = oneYearAgo.toISOString().slice(0, 10);
        }
        if (!params.end_date) {
            params.end_date = now.toISOString().slice(0, 10);
        }
        return YFinanceCommoditySpotPriceQueryParamsSchema.parse(params);
    }
    static async extractData(query, _credentials) {
        const symbols = query.symbol.split(',').map(s => resolveSymbol(s)).filter(Boolean);
        const allData = [];
        const results = await Promise.allSettled(symbols.map(async (sym) => {
            const data = await getHistoricalData(sym, {
                startDate: query.start_date ?? undefined,
                endDate: query.end_date ?? undefined,
                interval: '1d',
            });
            return data.map((d) => ({ ...d, symbol: sym }));
        }));
        for (const result of results) {
            if (result.status === 'fulfilled') {
                allData.push(...result.value);
            }
        }
        if (allData.length === 0) {
            throw new EmptyDataError('No commodity spot price data found.');
        }
        return allData;
    }
    static transformData(_query, data) {
        return data
            .sort((a, b) => String(a.date).localeCompare(String(b.date)))
            .map(d => CommoditySpotPriceDataSchema.parse(d));
    }
}
//# sourceMappingURL=commodity-spot-price.js.map
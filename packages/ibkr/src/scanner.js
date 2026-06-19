/**
 * Mirrors: ibapi/scanner.py
 */
import { UNSET_INTEGER, UNSET_DOUBLE } from './const.js';
export class ScanData {
    contract;
    rank;
    distance;
    benchmark;
    projection;
    legsStr;
    marketName;
    constructor(contract = null, rank = 0, distance = '', benchmark = '', projection = '', legsStr = '', marketName = '') {
        this.contract = contract;
        this.rank = rank;
        this.distance = distance;
        this.benchmark = benchmark;
        this.projection = projection;
        this.legsStr = legsStr;
        this.marketName = marketName;
    }
    toString() {
        return (`Rank: ${this.rank}, Symbol: ${this.contract?.symbol}, ` +
            `SecType: ${this.contract?.secType}, Currency: ${this.contract?.currency}, ` +
            `Distance: ${this.distance}, Benchmark: ${this.benchmark}, ` +
            `Projection: ${this.projection}, Legs String: ${this.legsStr}, ` +
            `MarketName: ${this.marketName}`);
    }
}
export const NO_ROW_NUMBER_SPECIFIED = -1;
export class ScannerSubscription {
    numberOfRows = NO_ROW_NUMBER_SPECIFIED;
    instrument = '';
    locationCode = '';
    scanCode = '';
    abovePrice = UNSET_DOUBLE;
    belowPrice = UNSET_DOUBLE;
    aboveVolume = UNSET_INTEGER;
    marketCapAbove = UNSET_DOUBLE;
    marketCapBelow = UNSET_DOUBLE;
    moodyRatingAbove = '';
    moodyRatingBelow = '';
    spRatingAbove = '';
    spRatingBelow = '';
    maturityDateAbove = '';
    maturityDateBelow = '';
    couponRateAbove = UNSET_DOUBLE;
    couponRateBelow = UNSET_DOUBLE;
    excludeConvertible = false;
    averageOptionVolumeAbove = UNSET_INTEGER;
    scannerSettingPairs = '';
    stockTypeFilter = '';
    toString() {
        return (`Instrument: ${this.instrument}, LocationCode: ${this.locationCode}, ScanCode: ${this.scanCode}`);
    }
}
//# sourceMappingURL=scanner.js.map
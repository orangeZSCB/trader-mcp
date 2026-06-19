/**
 * Mirrors: ibapi/scanner.py
 */
import type { Contract } from './contract.js';
export declare class ScanData {
    contract: Contract | null;
    rank: number;
    distance: string;
    benchmark: string;
    projection: string;
    legsStr: string;
    marketName: string;
    constructor(contract?: Contract | null, rank?: number, distance?: string, benchmark?: string, projection?: string, legsStr?: string, marketName?: string);
    toString(): string;
}
export declare const NO_ROW_NUMBER_SPECIFIED = -1;
export declare class ScannerSubscription {
    numberOfRows: number;
    instrument: string;
    locationCode: string;
    scanCode: string;
    abovePrice: number;
    belowPrice: number;
    aboveVolume: number;
    marketCapAbove: number;
    marketCapBelow: number;
    moodyRatingAbove: string;
    moodyRatingBelow: string;
    spRatingAbove: string;
    spRatingBelow: string;
    maturityDateAbove: string;
    maturityDateBelow: string;
    couponRateAbove: number;
    couponRateBelow: number;
    excludeConvertible: boolean;
    averageOptionVolumeAbove: number;
    scannerSettingPairs: string;
    stockTypeFilter: string;
    toString(): string;
}

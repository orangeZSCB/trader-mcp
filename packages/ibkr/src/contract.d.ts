/**
 * Mirrors: ibapi/contract.py
 */
import Decimal from 'decimal.js';
import type { IneligibilityReason } from './ineligibility-reason.js';
export declare const SAME_POS = 0;
export declare const OPEN_POS = 1;
export declare const CLOSE_POS = 2;
export declare const UNKNOWN_POS = 3;
export declare class ComboLeg {
    conId: number;
    ratio: number;
    action: string;
    exchange: string;
    openClose: number;
    shortSaleSlot: number;
    designatedLocation: string;
    exemptCode: number;
    toString(): string;
}
export declare class DeltaNeutralContract {
    conId: number;
    delta: number;
    price: number;
    toString(): string;
}
/**
 * Wire-side coercion: turns whatever raw secType string TWS sent into
 * either a typed `SecType` or `''`. Use at the bytes-to-objects boundary
 * (decoders) so downstream code can trust `Contract.secType: SecType | ''`
 * without runtime guards. If TWS adds a new secType we don't model yet,
 * decoder logs a warning and stamps `''` rather than corrupt the type.
 */
export declare function coerceSecType(raw: string | undefined | null): SecType | '';
export type SecType = 'STK' | 'OPT' | 'FUT' | 'FOP' | 'IND' | 'CASH' | 'BOND' | 'CMDTY' | 'WAR' | 'IOPT' | 'FUND' | 'BAG' | 'NEWS' | 'CFD' | 'CRYPTO' | 'CRYPTO_PERP';
export declare class Contract {
    conId: number;
    symbol: string;
    /**
     * Strict union — see `SecType` above for the no-extensions policy.
     * Empty `''` is the un-set state on a freshly-constructed Contract;
     * assertContract (in domain/trading/contract-discipline.ts) rejects
     * `''` at broker output boundaries.
     */
    secType: SecType | '';
    lastTradeDateOrContractMonth: string;
    lastTradeDate: string;
    strike: number;
    right: string;
    multiplier: string;
    exchange: string;
    primaryExchange: string;
    currency: string;
    localSymbol: string;
    tradingClass: string;
    includeExpired: boolean;
    secIdType: string;
    secId: string;
    description: string;
    issuerId: string;
    comboLegsDescrip: string;
    comboLegs: ComboLeg[];
    deltaNeutralContract: DeltaNeutralContract | null;
    toString(): string;
}
export declare const FundAssetType: {
    readonly NoneItem: readonly ["None", "None"];
    readonly Others: readonly ["000", "Others"];
    readonly MoneyMarket: readonly ["001", "Money Market"];
    readonly FixedIncome: readonly ["002", "Fixed Income"];
    readonly MultiAsset: readonly ["003", "Multi-asset"];
    readonly Equity: readonly ["004", "Equity"];
    readonly Sector: readonly ["005", "Sector"];
    readonly Guaranteed: readonly ["006", "Guaranteed"];
    readonly Alternative: readonly ["007", "Alternative"];
};
export declare const FundDistributionPolicyIndicator: {
    readonly NoneItem: readonly ["None", "None"];
    readonly AccumulationFund: readonly ["N", "Accumulation Fund"];
    readonly IncomeFund: readonly ["Y", "Income Fund"];
};
export type FundAssetTypeValue = (typeof FundAssetType)[keyof typeof FundAssetType];
export type FundDistributionPolicyIndicatorValue = (typeof FundDistributionPolicyIndicator)[keyof typeof FundDistributionPolicyIndicator];
export declare class ContractDetails {
    contract: Contract;
    marketName: string;
    minTick: number;
    orderTypes: string;
    validExchanges: string;
    priceMagnifier: number;
    underConId: number;
    longName: string;
    contractMonth: string;
    industry: string;
    category: string;
    subcategory: string;
    timeZoneId: string;
    tradingHours: string;
    liquidHours: string;
    evRule: string;
    evMultiplier: number;
    aggGroup: number;
    underSymbol: string;
    underSecType: string;
    marketRuleIds: string;
    secIdList: Array<{
        tag: string;
        value: string;
    }> | null;
    realExpirationDate: string;
    lastTradeTime: string;
    stockType: string;
    minSize: Decimal;
    sizeIncrement: Decimal;
    suggestedSizeIncrement: Decimal;
    minAlgoSize: Decimal;
    lastPricePrecision: Decimal;
    lastSizePrecision: Decimal;
    cusip: string;
    ratings: string;
    descAppend: string;
    bondType: string;
    couponType: string;
    callable: boolean;
    putable: boolean;
    coupon: number;
    convertible: boolean;
    maturity: string;
    issueDate: string;
    nextOptionDate: string;
    nextOptionType: string;
    nextOptionPartial: boolean;
    notes: string;
    fundName: string;
    fundFamily: string;
    fundType: string;
    fundFrontLoad: string;
    fundBackLoad: string;
    fundBackLoadTimeInterval: string;
    fundManagementFee: string;
    fundClosed: boolean;
    fundClosedForNewInvestors: boolean;
    fundClosedForNewMoney: boolean;
    fundNotifyAmount: string;
    fundMinimumInitialPurchase: string;
    fundSubsequentMinimumPurchase: string;
    fundBlueSkyStates: string;
    fundBlueSkyTerritories: string;
    fundDistributionPolicyIndicator: FundDistributionPolicyIndicatorValue;
    fundAssetType: FundAssetTypeValue;
    ineligibilityReasonList: IneligibilityReason[] | null;
    eventContract1: string;
    eventContractDescription1: string;
    eventContractDescription2: string;
    toString(): string;
}
export declare class ContractDescription {
    contract: Contract;
    derivativeSecTypes: string[];
}

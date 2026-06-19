import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { IneligibilityReason } from "./IneligibilityReason.js";
export declare const protobufPackage = "protobuf";
export interface ContractDetails {
    marketName?: string | undefined;
    minTick?: string | undefined;
    orderTypes?: string | undefined;
    validExchanges?: string | undefined;
    priceMagnifier?: number | undefined;
    underConId?: number | undefined;
    longName?: string | undefined;
    contractMonth?: string | undefined;
    industry?: string | undefined;
    category?: string | undefined;
    subcategory?: string | undefined;
    timeZoneId?: string | undefined;
    tradingHours?: string | undefined;
    liquidHours?: string | undefined;
    evRule?: string | undefined;
    evMultiplier?: number | undefined;
    secIdList: {
        [key: string]: string;
    };
    aggGroup?: number | undefined;
    underSymbol?: string | undefined;
    underSecType?: string | undefined;
    marketRuleIds?: string | undefined;
    realExpirationDate?: string | undefined;
    stockType?: string | undefined;
    minSize?: string | undefined;
    sizeIncrement?: string | undefined;
    suggestedSizeIncrement?: string | undefined;
    /** fund	fields */
    fundName?: string | undefined;
    fundFamily?: string | undefined;
    fundType?: string | undefined;
    fundFrontLoad?: string | undefined;
    fundBackLoad?: string | undefined;
    fundBackLoadTimeInterval?: string | undefined;
    fundManagementFee?: string | undefined;
    fundClosed?: boolean | undefined;
    fundClosedForNewInvestors?: boolean | undefined;
    fundClosedForNewMoney?: boolean | undefined;
    fundNotifyAmount?: string | undefined;
    fundMinimumInitialPurchase?: string | undefined;
    fundMinimumSubsequentPurchase?: string | undefined;
    fundBlueSkyStates?: string | undefined;
    fundBlueSkyTerritories?: string | undefined;
    fundDistributionPolicyIndicator?: string | undefined;
    fundAssetType?: string | undefined;
    /** bond fields */
    cusip?: string | undefined;
    issueDate?: string | undefined;
    ratings?: string | undefined;
    bondType?: string | undefined;
    coupon?: number | undefined;
    couponType?: string | undefined;
    convertible?: boolean | undefined;
    callable?: boolean | undefined;
    puttable?: boolean | undefined;
    descAppend?: string | undefined;
    nextOptionDate?: string | undefined;
    nextOptionType?: string | undefined;
    nextOptionPartial?: boolean | undefined;
    bondNotes?: string | undefined;
    ineligibilityReasonList: IneligibilityReason[];
    /** event contract fields */
    eventContract1?: string | undefined;
    eventContractDescription1?: string | undefined;
    eventContractDescription2?: string | undefined;
    minAlgoSize?: string | undefined;
    lastPricePrecision?: string | undefined;
    lastSizePrecision?: string | undefined;
}
export interface ContractDetails_SecIdListEntry {
    key: string;
    value: string;
}
export declare const ContractDetails: MessageFns<ContractDetails>;
export declare const ContractDetails_SecIdListEntry: MessageFns<ContractDetails_SecIdListEntry>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};

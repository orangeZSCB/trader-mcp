import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "protobuf";
export interface ScannerSubscription {
    numberOfRows?: number | undefined;
    instrument?: string | undefined;
    locationCode?: string | undefined;
    scanCode?: string | undefined;
    abovePrice?: number | undefined;
    belowPrice?: number | undefined;
    aboveVolume?: number | undefined;
    marketCapAbove?: number | undefined;
    marketCapBelow?: number | undefined;
    moodyRatingAbove?: string | undefined;
    moodyRatingBelow?: string | undefined;
    spRatingAbove?: string | undefined;
    spRatingBelow?: string | undefined;
    maturityDateAbove?: string | undefined;
    maturityDateBelow?: string | undefined;
    couponRateAbove?: number | undefined;
    couponRateBelow?: number | undefined;
    excludeConvertible?: boolean | undefined;
    averageOptionVolumeAbove?: number | undefined;
    scannerSettingPairs?: string | undefined;
    stockTypeFilter?: string | undefined;
    scannerSubscriptionFilterOptions: {
        [key: string]: string;
    };
    scannerSubscriptionOptions: {
        [key: string]: string;
    };
}
export interface ScannerSubscription_ScannerSubscriptionFilterOptionsEntry {
    key: string;
    value: string;
}
export interface ScannerSubscription_ScannerSubscriptionOptionsEntry {
    key: string;
    value: string;
}
export declare const ScannerSubscription: MessageFns<ScannerSubscription>;
export declare const ScannerSubscription_ScannerSubscriptionFilterOptionsEntry: MessageFns<ScannerSubscription_ScannerSubscriptionFilterOptionsEntry>;
export declare const ScannerSubscription_ScannerSubscriptionOptionsEntry: MessageFns<ScannerSubscription_ScannerSubscriptionOptionsEntry>;
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

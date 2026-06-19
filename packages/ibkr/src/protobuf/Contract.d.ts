import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ComboLeg } from "./ComboLeg.js";
import { DeltaNeutralContract } from "./DeltaNeutralContract.js";
export declare const protobufPackage = "protobuf";
export interface Contract {
    conId?: number | undefined;
    symbol?: string | undefined;
    secType?: string | undefined;
    lastTradeDateOrContractMonth?: string | undefined;
    strike?: number | undefined;
    right?: string | undefined;
    multiplier?: number | undefined;
    exchange?: string | undefined;
    primaryExch?: string | undefined;
    currency?: string | undefined;
    localSymbol?: string | undefined;
    tradingClass?: string | undefined;
    secIdType?: string | undefined;
    secId?: string | undefined;
    description?: string | undefined;
    issuerId?: string | undefined;
    deltaNeutralContract?: DeltaNeutralContract | undefined;
    includeExpired?: boolean | undefined;
    comboLegsDescrip?: string | undefined;
    comboLegs: ComboLeg[];
    lastTradeDate?: string | undefined;
}
export declare const Contract: MessageFns<Contract>;
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

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { HistoricalTick } from "./HistoricalTick.js";
import { HistoricalTickBidAsk } from "./HistoricalTickBidAsk.js";
import { HistoricalTickLast } from "./HistoricalTickLast.js";
export declare const protobufPackage = "protobuf";
export interface TickByTickData {
    reqId?: number | undefined;
    tickType?: number | undefined;
    historicalTickLast?: HistoricalTickLast | undefined;
    historicalTickBidAsk?: HistoricalTickBidAsk | undefined;
    historicalTickMidPoint?: HistoricalTick | undefined;
}
export declare const TickByTickData: MessageFns<TickByTickData>;
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

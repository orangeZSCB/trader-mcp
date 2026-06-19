import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Contract } from "./Contract.js";
export declare const protobufPackage = "protobuf";
export interface MarketDataRequest {
    reqId?: number | undefined;
    contract?: Contract | undefined;
    genericTickList?: string | undefined;
    snapshot?: boolean | undefined;
    regulatorySnapshot?: boolean | undefined;
    marketDataOptions: {
        [key: string]: string;
    };
}
export interface MarketDataRequest_MarketDataOptionsEntry {
    key: string;
    value: string;
}
export declare const MarketDataRequest: MessageFns<MarketDataRequest>;
export declare const MarketDataRequest_MarketDataOptionsEntry: MessageFns<MarketDataRequest_MarketDataOptionsEntry>;
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

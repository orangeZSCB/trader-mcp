import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Contract } from "./Contract.js";
export declare const protobufPackage = "protobuf";
export interface HistoricalTicksRequest {
    reqId?: number | undefined;
    contract?: Contract | undefined;
    startDateTime?: string | undefined;
    endDateTime?: string | undefined;
    numberOfTicks?: number | undefined;
    whatToShow?: string | undefined;
    useRTH?: boolean | undefined;
    ignoreSize?: boolean | undefined;
    miscOptions: {
        [key: string]: string;
    };
}
export interface HistoricalTicksRequest_MiscOptionsEntry {
    key: string;
    value: string;
}
export declare const HistoricalTicksRequest: MessageFns<HistoricalTicksRequest>;
export declare const HistoricalTicksRequest_MiscOptionsEntry: MessageFns<HistoricalTicksRequest_MiscOptionsEntry>;
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

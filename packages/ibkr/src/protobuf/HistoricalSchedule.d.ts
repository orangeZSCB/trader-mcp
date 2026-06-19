import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { HistoricalSession } from "./HistoricalSession.js";
export declare const protobufPackage = "protobuf";
export interface HistoricalSchedule {
    reqId?: number | undefined;
    startDateTime?: string | undefined;
    endDateTime?: string | undefined;
    timeZone?: string | undefined;
    historicalSessions: HistoricalSession[];
}
export declare const HistoricalSchedule: MessageFns<HistoricalSchedule>;
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

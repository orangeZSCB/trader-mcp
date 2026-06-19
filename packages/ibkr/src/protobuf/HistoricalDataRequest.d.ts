import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Contract } from "./Contract.js";
export declare const protobufPackage = "protobuf";
export interface HistoricalDataRequest {
    reqId?: number | undefined;
    contract?: Contract | undefined;
    endDateTime?: string | undefined;
    barSizeSetting?: string | undefined;
    duration?: string | undefined;
    useRTH?: boolean | undefined;
    whatToShow?: string | undefined;
    formatDate?: number | undefined;
    keepUpToDate?: boolean | undefined;
    chartOptions: {
        [key: string]: string;
    };
}
export interface HistoricalDataRequest_ChartOptionsEntry {
    key: string;
    value: string;
}
export declare const HistoricalDataRequest: MessageFns<HistoricalDataRequest>;
export declare const HistoricalDataRequest_ChartOptionsEntry: MessageFns<HistoricalDataRequest_ChartOptionsEntry>;
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

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "protobuf";
export interface HistoricalNewsRequest {
    reqId?: number | undefined;
    conId?: number | undefined;
    providerCodes?: string | undefined;
    startDateTime?: string | undefined;
    endDateTime?: string | undefined;
    totalResults?: number | undefined;
    historicalNewsOptions: {
        [key: string]: string;
    };
}
export interface HistoricalNewsRequest_HistoricalNewsOptionsEntry {
    key: string;
    value: string;
}
export declare const HistoricalNewsRequest: MessageFns<HistoricalNewsRequest>;
export declare const HistoricalNewsRequest_HistoricalNewsOptionsEntry: MessageFns<HistoricalNewsRequest_HistoricalNewsOptionsEntry>;
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

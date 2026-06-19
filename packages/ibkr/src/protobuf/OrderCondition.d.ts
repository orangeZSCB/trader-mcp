import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "protobuf";
export interface OrderCondition {
    type?: number | undefined;
    isConjunctionConnection?: boolean | undefined;
    isMore?: boolean | undefined;
    conId?: number | undefined;
    exchange?: string | undefined;
    symbol?: string | undefined;
    secType?: string | undefined;
    percent?: number | undefined;
    changePercent?: number | undefined;
    price?: number | undefined;
    triggerMethod?: number | undefined;
    time?: string | undefined;
    volume?: number | undefined;
}
export declare const OrderCondition: MessageFns<OrderCondition>;
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

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Contract } from "./Contract.js";
import { Order } from "./Order.js";
import { OrderState } from "./OrderState.js";
export declare const protobufPackage = "protobuf";
export interface OpenOrder {
    orderId?: number | undefined;
    contract?: Contract | undefined;
    order?: Order | undefined;
    orderState?: OrderState | undefined;
}
export declare const OpenOrder: MessageFns<OpenOrder>;
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

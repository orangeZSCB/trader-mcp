import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ApiConfig } from "./ApiConfig.js";
import { LockAndExitConfig } from "./LockAndExitConfig.js";
import { MessageConfig } from "./MessageConfig.js";
import { OrdersConfig } from "./OrdersConfig.js";
import { UpdateConfigWarning } from "./UpdateConfigWarning.js";
export declare const protobufPackage = "protobuf";
export interface UpdateConfigRequest {
    reqId?: number | undefined;
    lockAndExit?: LockAndExitConfig | undefined;
    messages: MessageConfig[];
    api?: ApiConfig | undefined;
    orders?: OrdersConfig | undefined;
    acceptedWarnings: UpdateConfigWarning[];
    resetAPIOrderSequence?: boolean | undefined;
}
export declare const UpdateConfigRequest: MessageFns<UpdateConfigRequest>;
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

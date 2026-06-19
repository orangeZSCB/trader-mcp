import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "protobuf";
export interface Execution {
    orderId?: number | undefined;
    execId?: string | undefined;
    time?: string | undefined;
    acctNumber?: string | undefined;
    exchange?: string | undefined;
    side?: string | undefined;
    shares?: string | undefined;
    price?: number | undefined;
    permId?: number | undefined;
    clientId?: number | undefined;
    isLiquidation?: boolean | undefined;
    cumQty?: string | undefined;
    avgPrice?: number | undefined;
    orderRef?: string | undefined;
    evRule?: string | undefined;
    evMultiplier?: number | undefined;
    modelCode?: string | undefined;
    lastLiquidity?: number | undefined;
    isPriceRevisionPending?: boolean | undefined;
    submitter?: string | undefined;
    optExerciseOrLapseType?: number | undefined;
}
export declare const Execution: MessageFns<Execution>;
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

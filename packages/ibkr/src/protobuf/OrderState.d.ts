import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { OrderAllocation } from "./OrderAllocation.js";
export declare const protobufPackage = "protobuf";
export interface OrderState {
    status?: string | undefined;
    initMarginBefore?: number | undefined;
    maintMarginBefore?: number | undefined;
    equityWithLoanBefore?: number | undefined;
    initMarginChange?: number | undefined;
    maintMarginChange?: number | undefined;
    equityWithLoanChange?: number | undefined;
    initMarginAfter?: number | undefined;
    maintMarginAfter?: number | undefined;
    equityWithLoanAfter?: number | undefined;
    commissionAndFees?: number | undefined;
    minCommissionAndFees?: number | undefined;
    maxCommissionAndFees?: number | undefined;
    commissionAndFeesCurrency?: string | undefined;
    marginCurrency?: string | undefined;
    initMarginBeforeOutsideRTH?: number | undefined;
    maintMarginBeforeOutsideRTH?: number | undefined;
    equityWithLoanBeforeOutsideRTH?: number | undefined;
    initMarginChangeOutsideRTH?: number | undefined;
    maintMarginChangeOutsideRTH?: number | undefined;
    equityWithLoanChangeOutsideRTH?: number | undefined;
    initMarginAfterOutsideRTH?: number | undefined;
    maintMarginAfterOutsideRTH?: number | undefined;
    equityWithLoanAfterOutsideRTH?: number | undefined;
    suggestedSize?: string | undefined;
    rejectReason?: string | undefined;
    orderAllocations: OrderAllocation[];
    warningText?: string | undefined;
    completedTime?: string | undefined;
    completedStatus?: string | undefined;
}
export declare const OrderState: MessageFns<OrderState>;
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

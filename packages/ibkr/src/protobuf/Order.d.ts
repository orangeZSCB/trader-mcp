import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { OrderCondition } from "./OrderCondition.js";
import { SoftDollarTier } from "./SoftDollarTier.js";
export declare const protobufPackage = "protobuf";
export interface Order {
    /** order ids */
    clientId?: number | undefined;
    orderId?: number | undefined;
    permId?: number | undefined;
    parentId?: number | undefined;
    /** primary attributes */
    action?: string | undefined;
    totalQuantity?: string | undefined;
    displaySize?: number | undefined;
    orderType?: string | undefined;
    lmtPrice?: number | undefined;
    auxPrice?: number | undefined;
    tif?: string | undefined;
    /** clearing info */
    account?: string | undefined;
    settlingFirm?: string | undefined;
    clearingAccount?: string | undefined;
    clearingIntent?: string | undefined;
    /** secondary attributes */
    allOrNone?: boolean | undefined;
    blockOrder?: boolean | undefined;
    hidden?: boolean | undefined;
    outsideRth?: boolean | undefined;
    sweepToFill?: boolean | undefined;
    percentOffset?: number | undefined;
    trailingPercent?: number | undefined;
    trailStopPrice?: number | undefined;
    minQty?: number | undefined;
    goodAfterTime?: string | undefined;
    goodTillDate?: string | undefined;
    ocaGroup?: string | undefined;
    orderRef?: string | undefined;
    rule80A?: string | undefined;
    ocaType?: number | undefined;
    triggerMethod?: number | undefined;
    /** extended order fields */
    activeStartTime?: string | undefined;
    activeStopTime?: string | undefined;
    /** advisor allocation orders */
    faGroup?: string | undefined;
    faMethod?: string | undefined;
    faPercentage?: string | undefined;
    /** volatility orders */
    volatility?: number | undefined;
    volatilityType?: number | undefined;
    continuousUpdate?: boolean | undefined;
    referencePriceType?: number | undefined;
    deltaNeutralOrderType?: string | undefined;
    deltaNeutralAuxPrice?: number | undefined;
    deltaNeutralConId?: number | undefined;
    deltaNeutralOpenClose?: string | undefined;
    deltaNeutralShortSale?: boolean | undefined;
    deltaNeutralShortSaleSlot?: number | undefined;
    deltaNeutralDesignatedLocation?: string | undefined;
    /** scale orders */
    scaleInitLevelSize?: number | undefined;
    scaleSubsLevelSize?: number | undefined;
    scalePriceIncrement?: number | undefined;
    scalePriceAdjustValue?: number | undefined;
    scalePriceAdjustInterval?: number | undefined;
    scaleProfitOffset?: number | undefined;
    scaleAutoReset?: boolean | undefined;
    scaleInitPosition?: number | undefined;
    scaleInitFillQty?: number | undefined;
    scaleRandomPercent?: boolean | undefined;
    scaleTable?: string | undefined;
    /** hedge orders */
    hedgeType?: string | undefined;
    hedgeParam?: string | undefined;
    /** algo orders */
    algoStrategy?: string | undefined;
    algoParams: {
        [key: string]: string;
    };
    algoId?: string | undefined;
    /** combo orders */
    smartComboRoutingParams: {
        [key: string]: string;
    };
    /** processing control */
    whatIf?: boolean | undefined;
    transmit?: boolean | undefined;
    overridePercentageConstraints?: boolean | undefined;
    /** Institutional orders only */
    openClose?: string | undefined;
    origin?: number | undefined;
    shortSaleSlot?: number | undefined;
    designatedLocation?: string | undefined;
    exemptCode?: number | undefined;
    deltaNeutralSettlingFirm?: string | undefined;
    deltaNeutralClearingAccount?: string | undefined;
    deltaNeutralClearingIntent?: string | undefined;
    /** SMART routing only */
    discretionaryAmt?: number | undefined;
    optOutSmartRouting?: boolean | undefined;
    /** BOX ORDERS ONLY */
    startingPrice?: number | undefined;
    stockRefPrice?: number | undefined;
    delta?: number | undefined;
    /** pegged to stock or VOL orders */
    stockRangeLower?: number | undefined;
    stockRangeUpper?: number | undefined;
    /** Not Held */
    notHeld?: boolean | undefined;
    /** order misc options */
    orderMiscOptions: {
        [key: string]: string;
    };
    /** order algo id */
    solicited?: boolean | undefined;
    randomizeSize?: boolean | undefined;
    randomizePrice?: boolean | undefined;
    /** PEG2BENCH fields */
    referenceContractId?: number | undefined;
    peggedChangeAmount?: number | undefined;
    isPeggedChangeAmountDecrease?: boolean | undefined;
    referenceChangeAmount?: number | undefined;
    referenceExchangeId?: string | undefined;
    adjustedOrderType?: string | undefined;
    triggerPrice?: number | undefined;
    adjustedStopPrice?: number | undefined;
    adjustedStopLimitPrice?: number | undefined;
    adjustedTrailingAmount?: number | undefined;
    adjustableTrailingUnit?: number | undefined;
    lmtPriceOffset?: number | undefined;
    conditions: OrderCondition[];
    conditionsCancelOrder?: boolean | undefined;
    conditionsIgnoreRth?: boolean | undefined;
    /** models */
    modelCode?: string | undefined;
    extOperator?: string | undefined;
    softDollarTier?: SoftDollarTier | undefined;
    /** native cash quantity */
    cashQty?: number | undefined;
    mifid2DecisionMaker?: string | undefined;
    mifid2DecisionAlgo?: string | undefined;
    mifid2ExecutionTrader?: string | undefined;
    mifid2ExecutionAlgo?: string | undefined;
    /** don't use auto price for hedge */
    dontUseAutoPriceForHedge?: boolean | undefined;
    isOmsContainer?: boolean | undefined;
    discretionaryUpToLimitPrice?: boolean | undefined;
    autoCancelDate?: string | undefined;
    filledQuantity?: string | undefined;
    refFuturesConId?: number | undefined;
    autoCancelParent?: boolean | undefined;
    shareholder?: string | undefined;
    imbalanceOnly?: boolean | undefined;
    routeMarketableToBbo?: number | undefined;
    parentPermId?: number | undefined;
    usePriceMgmtAlgo?: number | undefined;
    duration?: number | undefined;
    postToAts?: number | undefined;
    advancedErrorOverride?: string | undefined;
    manualOrderTime?: string | undefined;
    minTradeQty?: number | undefined;
    minCompeteSize?: number | undefined;
    competeAgainstBestOffset?: number | undefined;
    midOffsetAtWhole?: number | undefined;
    midOffsetAtHalf?: number | undefined;
    customerAccount?: string | undefined;
    professionalCustomer?: boolean | undefined;
    bondAccruedInterest?: string | undefined;
    includeOvernight?: boolean | undefined;
    manualOrderIndicator?: number | undefined;
    submitter?: string | undefined;
    deactivate?: boolean | undefined;
    postOnly?: boolean | undefined;
    allowPreOpen?: boolean | undefined;
    ignoreOpenAuction?: boolean | undefined;
    seekPriceImprovement?: number | undefined;
    whatIfType?: number | undefined;
}
export interface Order_AlgoParamsEntry {
    key: string;
    value: string;
}
export interface Order_SmartComboRoutingParamsEntry {
    key: string;
    value: string;
}
export interface Order_OrderMiscOptionsEntry {
    key: string;
    value: string;
}
export declare const Order: MessageFns<Order>;
export declare const Order_AlgoParamsEntry: MessageFns<Order_AlgoParamsEntry>;
export declare const Order_SmartComboRoutingParamsEntry: MessageFns<Order_SmartComboRoutingParamsEntry>;
export declare const Order_OrderMiscOptionsEntry: MessageFns<Order_OrderMiscOptionsEntry>;
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

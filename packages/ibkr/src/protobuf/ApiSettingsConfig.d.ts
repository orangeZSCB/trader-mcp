import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "protobuf";
export interface ApiSettingsConfig {
    readOnlyApi?: boolean | undefined;
    totalQuantityForMutualFunds?: boolean | undefined;
    downloadOpenOrdersOnConnection?: boolean | undefined;
    includeVirtualFxPositions?: boolean | undefined;
    prepareDailyPnL?: boolean | undefined;
    sendStatusUpdatesForVolatilityOrders?: boolean | undefined;
    encodeApiMessages?: string | undefined;
    socketPort?: number | undefined;
    useNegativeAutoRange?: boolean | undefined;
    createApiMessageLogFile?: boolean | undefined;
    includeMarketDataInLogFile?: boolean | undefined;
    exposeTradingScheduleToApi?: boolean | undefined;
    splitInsuredDepositFromCashBalance?: boolean | undefined;
    sendZeroPositionsForTodayOnly?: boolean | undefined;
    letApiAccountRequestsSwitchSubscription?: boolean | undefined;
    useAccountGroupsWithAllocationMethods?: boolean | undefined;
    loggingLevel?: string | undefined;
    masterClientId?: number | undefined;
    bulkDataTimeout?: number | undefined;
    componentExchSeparator?: string | undefined;
    showForexDataIn110Pips?: boolean | undefined;
    allowForexTradingIn110Pips?: boolean | undefined;
    roundAccountValuesToNearestWholeNumber?: boolean | undefined;
    sendMarketDataInLotsForUsStocks?: boolean | undefined;
    showAdvancedOrderRejectInUi?: boolean | undefined;
    rejectMessagesAboveMaxRate?: boolean | undefined;
    maintainConnectionOnIncorrectFields?: boolean | undefined;
    compatibilityModeNasdaqStocks?: boolean | undefined;
    sendInstrumentTimezone?: string | undefined;
    sendForexDataInCompatibilityMode?: boolean | undefined;
    maintainAndResubmitOrdersOnReconnect?: boolean | undefined;
    historicalDataMaxSize?: number | undefined;
    autoReportNettingEventContractTrades?: boolean | undefined;
    optionExerciseRequestType?: string | undefined;
    allowLocalhostOnly?: boolean | undefined;
    trustedIPs: string[];
}
export declare const ApiSettingsConfig: MessageFns<ApiSettingsConfig>;
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

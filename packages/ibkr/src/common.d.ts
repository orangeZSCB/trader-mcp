/**
 * Mirrors: ibapi/common.py
 */
import Decimal from 'decimal.js';
export type TickerId = number;
export type OrderId = number;
export type TagValueList = Array<{
    tag: string;
    value: string;
}>;
export type FaDataType = number;
export declare const FaDataTypeEnum: {
    readonly 'N/A': 0;
    readonly GROUPS: 1;
    readonly 'N/A2': 2;
    readonly ALIASES: 3;
};
export type MarketDataType = number;
export declare const MarketDataTypeEnum: {
    readonly 'N/A': 0;
    readonly REALTIME: 1;
    readonly FROZEN: 2;
    readonly DELAYED: 3;
    readonly DELAYED_FROZEN: 4;
};
export type Liquidities = number;
export declare const LiquiditiesEnum: {
    readonly None: 0;
    readonly Added: 1;
    readonly Remove: 2;
    readonly RoudedOut: 3;
};
export type SetOfString = Set<string>;
export type SetOfFloat = Set<number>;
export type ListOfOrder = unknown[];
export type ListOfFamilyCode = FamilyCode[];
export type ListOfContractDescription = unknown[];
export type ListOfDepthExchanges = DepthMktDataDescription[];
export type ListOfNewsProviders = NewsProvider[];
export type SmartComponentMap = Map<number, [string, string]>;
export type HistogramDataList = HistogramData[];
export type ListOfPriceIncrements = PriceIncrement[];
export type ListOfHistoricalTick = HistoricalTick[];
export type ListOfHistoricalTickBidAsk = HistoricalTickBidAsk[];
export type ListOfHistoricalTickLast = HistoricalTickLast[];
export type ListOfHistoricalSessions = HistoricalSession[];
export declare const PROTOBUF_MSG_ID = 200;
export declare const PROTOBUF_MSG_IDS: Record<number, number>;
export declare class BarData {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: Decimal;
    wap: Decimal;
    barCount: number;
    toString(): string;
}
export declare class RealTimeBar {
    time: number;
    endTime: number;
    open_: number;
    high: number;
    low: number;
    close: number;
    volume: Decimal;
    wap: Decimal;
    count: number;
    constructor(time?: number, endTime?: number, open_?: number, high?: number, low?: number, close?: number, volume?: Decimal, wap?: Decimal, count?: number);
    toString(): string;
}
export declare class HistogramData {
    price: number;
    size: Decimal;
    toString(): string;
}
export declare class NewsProvider {
    code: string;
    name: string;
    toString(): string;
}
export declare class DepthMktDataDescription {
    exchange: string;
    secType: string;
    listingExch: string;
    serviceDataType: string;
    aggGroup: number;
    toString(): string;
}
export declare class SmartComponent {
    bitNumber: number;
    exchange: string;
    exchangeLetter: string;
    toString(): string;
}
export declare class TickAttrib {
    canAutoExecute: boolean;
    pastLimit: boolean;
    preOpen: boolean;
    toString(): string;
}
export declare class TickAttribBidAsk {
    bidPastLow: boolean;
    askPastHigh: boolean;
    toString(): string;
}
export declare class TickAttribLast {
    pastLimit: boolean;
    unreported: boolean;
    toString(): string;
}
export declare class FamilyCode {
    accountID: string;
    familyCodeStr: string;
    toString(): string;
}
export declare class PriceIncrement {
    lowEdge: number;
    increment: number;
    toString(): string;
}
export declare class HistoricalTick {
    time: number;
    price: number;
    size: Decimal;
    toString(): string;
}
export declare class HistoricalTickBidAsk {
    time: number;
    tickAttribBidAsk: TickAttribBidAsk;
    priceBid: number;
    priceAsk: number;
    sizeBid: Decimal;
    sizeAsk: Decimal;
    toString(): string;
}
export declare class HistoricalTickLast {
    time: number;
    tickAttribLast: TickAttribLast;
    price: number;
    size: Decimal;
    exchange: string;
    specialConditions: string;
    toString(): string;
}
export declare class HistoricalSession {
    startDateTime: string;
    endDateTime: string;
    refDate: string;
    toString(): string;
}
export declare class WshEventData {
    conId: number;
    filter: string;
    fillWatchlist: boolean;
    fillPortfolio: boolean;
    fillCompetitors: boolean;
    startDate: string;
    endDate: string;
    totalLimit: number;
    toString(): string;
}

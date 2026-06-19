/**
 * EClient mixin — historical data, scanner, news, and misc methods.
 * Mirrors: ibapi/client.py (lines ~4842-7500)
 *
 * Applied via applyHistorical() which extends EClient.prototype.
 */
import { EClient } from './base.js';
import type { Contract } from '../contract.js';
import type { ScannerSubscription } from '../scanner.js';
import type { TagValueList } from '../tag-value.js';
import type { WshEventData } from '../common.js';
declare module './base.js' {
    interface EClient {
        reqHistoricalData(reqId: number, contract: Contract, endDateTime: string, durationStr: string, barSizeSetting: string, whatToShow: string, useRTH: number, formatDate: number, keepUpToDate: boolean, chartOptions: TagValueList): void;
        cancelHistoricalData(reqId: number): void;
        reqHeadTimeStamp(reqId: number, contract: Contract, whatToShow: string, useRTH: number, formatDate: number): void;
        cancelHeadTimeStamp(reqId: number): void;
        reqHistogramData(tickerId: number, contract: Contract, useRTH: boolean, timePeriod: string): void;
        cancelHistogramData(tickerId: number): void;
        reqHistoricalTicks(reqId: number, contract: Contract, startDateTime: string, endDateTime: string, numberOfTicks: number, whatToShow: string, useRth: number, ignoreSize: boolean, miscOptions: TagValueList): void;
        reqScannerParameters(): void;
        reqScannerSubscription(reqId: number, subscription: ScannerSubscription, scannerSubscriptionOptions: TagValueList, scannerSubscriptionFilterOptions: TagValueList): void;
        cancelScannerSubscription(reqId: number): void;
        reqRealTimeBars(reqId: number, contract: Contract, barSize: number, whatToShow: string, useRTH: boolean, realTimeBarsOptions: TagValueList): void;
        cancelRealTimeBars(reqId: number): void;
        reqFundamentalData(reqId: number, contract: Contract, reportType: string, fundamentalDataOptions: TagValueList): void;
        cancelFundamentalData(reqId: number): void;
        reqNewsProviders(): void;
        reqNewsArticle(reqId: number, providerCode: string, articleId: string, newsArticleOptions: TagValueList): void;
        reqHistoricalNews(reqId: number, conId: number, providerCodes: string, startDateTime: string, endDateTime: string, totalResults: number, historicalNewsOptions: TagValueList): void;
        queryDisplayGroups(reqId: number): void;
        subscribeToGroupEvents(reqId: number, groupId: number): void;
        updateDisplayGroup(reqId: number, contractInfo: string): void;
        unsubscribeFromGroupEvents(reqId: number): void;
        verifyRequest(apiName: string, apiVersion: string): void;
        verifyMessage(apiData: string): void;
        verifyAndAuthRequest(apiName: string, apiVersion: string, opaqueIsvKey: string): void;
        verifyAndAuthMessage(apiData: string, xyzResponse: string): void;
        reqSecDefOptParams(reqId: number, underlyingSymbol: string, futFopExchange: string, underlyingSecType: string, underlyingConId: number): void;
        reqSoftDollarTiers(reqId: number): void;
        reqFamilyCodes(): void;
        reqMatchingSymbols(reqId: number, pattern: string): void;
        reqWshMetaData(reqId: number): void;
        cancelWshMetaData(reqId: number): void;
        reqWshEventData(reqId: number, wshEventData: WshEventData): void;
        cancelWshEventData(reqId: number): void;
        reqUserInfo(reqId: number): void;
        cancelContractData(reqId: number): void;
        cancelHistoricalTicks(reqId: number): void;
    }
}
export declare function applyHistorical(Client: typeof EClient): void;

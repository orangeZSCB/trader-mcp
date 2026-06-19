/**
 * EClient market data request methods.
 * Mirrors: ibapi/client.py lines 627-1820
 */
import { EClient } from './base.js';
import type { Contract } from '../contract.js';
import type { TagValueList } from '../tag-value.js';
declare module './base.js' {
    interface EClient {
        reqCurrentTime(): void;
        reqCurrentTimeInMillis(): void;
        setServerLogLevel(logLevel: number): void;
        reqMktData(reqId: number, contract: Contract, genericTickList: string, snapshot: boolean, regulatorySnapshot: boolean, mktDataOptions: TagValueList): void;
        cancelMktData(reqId: number): void;
        reqMarketDataType(marketDataType: number): void;
        reqSmartComponents(reqId: number, bboExchange: string): void;
        reqMarketRule(marketRuleId: number): void;
        reqTickByTickData(reqId: number, contract: Contract, tickType: string, numberOfTicks: number, ignoreSize: boolean): void;
        cancelTickByTickData(reqId: number): void;
        calculateImpliedVolatility(reqId: number, contract: Contract, optionPrice: number, underPrice: number, implVolOptions: TagValueList): void;
        cancelCalculateImpliedVolatility(reqId: number): void;
        calculateOptionPrice(reqId: number, contract: Contract, volatility: number, underPrice: number, optPrcOptions: TagValueList): void;
        cancelCalculateOptionPrice(reqId: number): void;
        exerciseOptions(reqId: number, contract: Contract, exerciseAction: number, exerciseQuantity: number, account: string, override: number, manualOrderTime: string, customerAccount: string, professionalCustomer: boolean): void;
    }
}
export declare function applyMarketData(Client: typeof EClient): void;

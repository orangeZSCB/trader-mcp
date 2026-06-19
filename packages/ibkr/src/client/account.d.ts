/**
 * EClient account, positions, executions, contract details methods.
 * Mirrors: ibapi/client.py lines 3210-4840
 */
import { EClient } from './base.js';
import type { Contract } from '../contract.js';
import type { ExecutionFilter } from '../execution.js';
declare module './base.js' {
    interface EClient {
        reqAccountUpdates(subscribe: boolean, acctCode: string): void;
        reqAccountSummary(reqId: number, groupName: string, tags: string): void;
        cancelAccountSummary(reqId: number): void;
        reqPositions(): void;
        cancelPositions(): void;
        reqPositionsMulti(reqId: number, account: string, modelCode: string): void;
        cancelPositionsMulti(reqId: number): void;
        reqAccountUpdatesMulti(reqId: number, account: string, modelCode: string, ledgerAndNLV: boolean): void;
        cancelAccountUpdatesMulti(reqId: number): void;
        reqPnL(reqId: number, account: string, modelCode: string): void;
        cancelPnL(reqId: number): void;
        reqPnLSingle(reqId: number, account: string, modelCode: string, conid: number): void;
        cancelPnLSingle(reqId: number): void;
        reqExecutions(reqId: number, execFilter: ExecutionFilter): void;
        reqContractDetails(reqId: number, contract: Contract): void;
        cancelContractData(reqId: number): void;
        reqMktDepthExchanges(): void;
        reqMktDepth(reqId: number, contract: Contract, numRows: number, isSmartDepth: boolean, mktDepthOptions: unknown): void;
        cancelMktDepth(reqId: number, isSmartDepth: boolean): void;
        reqNewsBulletins(allMsgs: boolean): void;
        cancelNewsBulletins(): void;
        reqManagedAccts(): void;
        requestFA(faData: number): void;
        replaceFA(reqId: number, faData: number, cxml: string): void;
    }
}
export declare function applyAccount(Client: typeof EClient): void;

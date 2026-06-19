/**
 * UTAManager — UTA lifecycle management, registry, and aggregation.
 *
 * Owns the full UTA lifecycle: create → register → reconnect → remove → close.
 * Also provides cross-UTA operations (aggregated equity, contract search).
 */
import type { Contract, ContractDetails } from '@traderalice/ibkr';
import { UnifiedTradingAccount } from './UnifiedTradingAccount.js';
import { type UTAConfig } from '@openalice-trading/alice-core/core/config.js';
import type { EventLog } from '@openalice-trading/alice-core/core/event-log.js';
import type { ToolCenter } from '@openalice-trading/alice-core/core/tool-center.js';
import type { ReconnectResult } from '@openalice-trading/alice-core/core/types.js';
import type { FxService } from './fx-service.js';
import './contract-ext.js';
import type { UTASummary, AggregatedEquity, ContractSearchResult } from '@traderalice/uta-protocol';
export type { UTASummary, AggregatedEquity, ContractSearchResult };
export interface SnapshotHooks {
    onPostPush?: (utaId: string) => void | Promise<void>;
    onPostReject?: (utaId: string) => void | Promise<void>;
}
export declare class UTAManager {
    private entries;
    private reconnecting;
    private eventLog?;
    private toolCenter?;
    private _snapshotHooks?;
    private fxService?;
    constructor(deps?: {
        eventLog: EventLog;
        toolCenter: ToolCenter;
        fxService?: FxService;
    });
    setSnapshotHooks(hooks: SnapshotHooks): void;
    setFxService(fx: FxService): void;
    /** Create a UTA from config, register it, and start async broker connection. */
    initUTA(cfg: UTAConfig): Promise<UnifiedTradingAccount>;
    /** Reconnect a UTA: close old → re-read config → create new → verify connection. */
    reconnectUTA(utaId: string): Promise<ReconnectResult>;
    /** Close and deregister a UTA. No-op if UTA doesn't exist. */
    removeUTA(utaId: string): Promise<void>;
    /** Register CCXT provider tools if any CCXT accounts are present. */
    registerCcxtToolsIfNeeded(): void;
    add(uta: UnifiedTradingAccount): void;
    remove(id: string): void;
    get(id: string): UnifiedTradingAccount | undefined;
    listUTAs(): UTASummary[];
    has(id: string): boolean;
    get size(): number;
    resolve(source?: string): UnifiedTradingAccount[];
    resolveOne(source: string): UnifiedTradingAccount;
    getAggregatedEquity(): Promise<AggregatedEquity>;
    searchContracts(pattern: string, accountId?: string): Promise<ContractSearchResult[]>;
    getContractDetails(query: Contract, accountId: string): Promise<ContractDetails | null>;
    closeAll(): Promise<void>;
}

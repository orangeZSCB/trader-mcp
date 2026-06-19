/**
 * IbkrBroker — IBroker adapter for Interactive Brokers TWS/Gateway.
 *
 * Bridges the callback-based @traderalice/ibkr SDK to the Promise-based
 * IBroker interface via RequestBridge.
 *
 * Key differences from Alpaca/CCXT brokers:
 * - Single TCP socket with reqId multiplexing (not REST)
 * - No API key — auth handled by TWS/Gateway GUI login
 * - IBKR Contract/Order types ARE our native types — zero translation
 * - Order IDs are numeric, assigned by TWS (nextValidId)
 */
import { z } from 'zod';
import Decimal from 'decimal.js';
import { Contract, Order, OrderCancel, ContractDescription, type ContractDetails } from '@traderalice/ibkr';
import { type IBroker, type AccountCapabilities, type AccountInfo, type Position, type PlaceOrderResult, type OpenOrder, type Quote, type MarketClock, type BrokerConfigField, type TpSlParams, type ExpandContractFilters, type ContractExpansion } from '../types.js';
import '../../contract-ext.js';
import type { IbkrBrokerConfig } from './ibkr-types.js';
export declare class IbkrBroker implements IBroker {
    static configSchema: z.ZodObject<{
        host: z.ZodDefault<z.ZodString>;
        port: z.ZodDefault<z.ZodNumber>;
        clientId: z.ZodDefault<z.ZodNumber>;
        accountId: z.ZodOptional<z.ZodString>;
        paper: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>;
    static configFields: BrokerConfigField[];
    static fromConfig(config: {
        id: string;
        label?: string;
        brokerConfig: Record<string, unknown>;
    }): IbkrBroker;
    readonly id: string;
    readonly label: string;
    private bridge;
    private client;
    private readonly config;
    private accountId;
    constructor(config: IbkrBrokerConfig);
    /** Periodic socket probe — see _ensureAlive / issue #294. */
    private heartbeatTimer_;
    /** Loud-refuse on a known-dead connection. The account surface is
     *  cache-backed, so without this gate a dead socket serves stale reads
     *  and accepts orders that never transmit (issue #294). */
    private _ensureAlive;
    private startHeartbeat;
    init(): Promise<void>;
    close(): Promise<void>;
    /**
     * Symbol search, hub-aware. TWS's reqMatchingSymbols returns ENTITIES, not
     * always contracts: stock rows carry their conId (1:1 with a contract), but
     * FX rows are a currency FAMILY (conId=0, no quote currency yet) and BOND
     * rows are an ISSUER directory (conId=0, identity = issuerId). Leaves pass
     * through; CASH hubs are expanded inline into concrete pairs (small
     * fan-out, optionally narrowed by a ".USD" pattern suffix); BOND issuer
     * hubs pass through and become `issuer:` aliceIds (expand explicitly).
     */
    searchContracts(pattern: string): Promise<ContractDescription[]>;
    /** CASH family row → concrete currency pairs (each with its own conId). */
    private expandCashHub;
    getContractDetails(query: Contract): Promise<ContractDetails | null>;
    /** All matching contract details (a conId resolves to one; a family query
     *  like EUR/CASH or an issuerId resolves to many). */
    private contractDetailsQuery;
    /**
     * Hub → leaves expansion (see nativeKey grammar at getNativeKey):
     *   issuer:eXXX        → the issuer's individual bonds (each conId-keyed)
     *   <conId> (no expiry) → option-chain parameter grid for the underlying
     *   <conId> + expiry    → concrete option contracts for that expiry
     *   <conId> secType=FUT → futures contract months
     */
    expandContract(nativeKey: string, filters?: ExpandContractFilters): Promise<ContractExpansion>;
    placeOrder(contract: Contract, order: Order, tpsl?: TpSlParams): Promise<PlaceOrderResult>;
    modifyOrder(orderId: string, changes: Partial<Order>): Promise<PlaceOrderResult>;
    cancelOrder(orderId: string, orderCancel?: OrderCancel): Promise<PlaceOrderResult>;
    closePosition(contract: Contract, quantity?: Decimal): Promise<PlaceOrderResult>;
    /**
     * Get account summary.
     *
     * Data source: reqAccountUpdates → accountDownloadEnd callback.
     *
     * netLiquidation is reconstructed from cash + Σ(position.marketValue)
     * because TWS's account-level NetLiquidation tag is cached server-side
     * and refreshes less frequently than position-level data.
     *
     * Note: position marketPrice comes from updatePortfolio() callbacks,
     * which TWS stops pushing after ~20:00 ET (see README.md "TWS Market
     * Data Channels"). During overnight hours, the reconstructed netLiq
     * will be stale even though Blue Ocean ATS prices may be moving.
     */
    /** TWS-provided FX rate (currency → base) from the ExchangeRate account
     *  tags. Returns null when TWS didn't send one for this currency. */
    private fxRate;
    getAccount(): Promise<AccountInfo>;
    /**
     * Get current positions with market prices.
     *
     * Data source: reqAccountUpdates → updatePortfolio() callbacks.
     * Each position's marketPrice/marketValue comes from TWS's internal
     * portfolio valuation, NOT from a real-time market data subscription.
     *
     * TWS controls the push frequency. During regular hours (09:30-16:00 ET)
     * updates come every few seconds. After ~20:00 ET, updatePortfolio()
     * stops pushing entirely — prices freeze even though overnight trading
     * (Blue Ocean ATS) may be active. See README.md for details.
     *
     * To get fresher prices, use getQuote() which calls reqMktData in
     * snapshot mode and can see overnight session data.
     */
    getPositions(): Promise<Position[]>;
    getOrders(orderIds: string[]): Promise<OpenOrder[]>;
    /**
     * All open orders placed through this client — external-order observation
     * + listing-driven sync surface. NOTE: reqOpenOrders only returns THIS
     * clientId's orders; manual TWS-UI orders need reqAllOpenOrders + permId
     * identity (deferred — tracked in Linear).
     */
    getOpenOrders(): Promise<OpenOrder[]>;
    getOrder(orderId: string): Promise<OpenOrder | null>;
    /** Attach avgFillPrice from cached orderStatus data if available. */
    private enrichWithFillData;
    /**
     * Get a one-time market data snapshot for a contract.
     *
     * Data source: reqMktData with snapshot=true → tickPrice/tickSize/
     * tickSnapshotEnd callbacks. Unlike updatePortfolio(), this channel
     * CAN return overnight session prices (Blue Ocean ATS) and is not
     * limited to positions in the account.
     *
     * Each call briefly occupies one TWS market data line (limit ~100),
     * auto-released after tickSnapshotEnd.
     */
    /** conId → resolved full contract, so by-conId quotes pay reqContractDetails once. */
    private readonly conIdContracts;
    getQuote(contract: Contract): Promise<Quote>;
    getMarketClock(): Promise<MarketClock>;
    getCapabilities(): AccountCapabilities;
    /**
     * IBKR nativeKey grammar (the broker's uniqueness primitives, layered):
     *   "265598"          conId — canonical for every tradeable contract
     *   "issuer:e1400789" bond-issuer DIRECTORY — addressable, NOT tradeable
     *   "AAPL"            bare symbol — STK convenience for hand-typed ids
     * Hubs (directories) live in their own prefixed namespace so trading
     * surfaces can refuse them loudly instead of mis-resolving.
     */
    getNativeKey(contract: Contract): string;
    resolveNativeKey(nativeKey: string): Contract;
}

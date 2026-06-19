/**
 * MockBroker — in-memory exchange implementing IBroker.
 *
 * Same level as CcxtBroker/AlpacaBroker — a full behavioral implementation,
 * not just vi.fn() stubs. Internally all-Decimal for precision guarantees.
 *
 * Market orders fill immediately at current markPrice. Limit/stop orders
 * sit Submitted until either (a) `setMarkPrice()` 触达 the trigger price
 * (auto-match), or (b) the simulator manually calls `fillOrder(orderId)`.
 *
 * Beyond IBroker, MockBroker exposes a "simulator control panel" — methods
 * not on the IBroker interface that let test/dev surfaces inject god-view
 * events: change markPrice, fill or partially fill pending orders, simulate
 * external deposits/withdrawals (空投, transfer-in) and external trades
 * (user manually trading on the exchange app outside Alice). Routes/UI
 * call these to drive scenarios without going through `placeOrder`.
 */
import { z } from 'zod';
import Decimal from 'decimal.js';
import { Contract, ContractDescription, ContractDetails, Order } from '@traderalice/ibkr';
import type { IBroker, AccountCapabilities, AccountInfo, Position, PlaceOrderResult, OpenOrder, Quote, MarketClock, TpSlParams, Bar, BarParams } from '../types.js';
import '../../contract-ext.js';
export interface CallRecord {
    method: string;
    args: unknown[];
    timestamp: number;
}
export interface MockBrokerOptions {
    id?: string;
    label?: string;
    cash?: number;
    accountInfo?: Partial<AccountInfo>;
}
export declare const DEFAULT_ACCOUNT_INFO: AccountInfo;
export declare const DEFAULT_CAPABILITIES: AccountCapabilities;
export declare function makeContract(overrides?: Partial<Contract> & {
    aliceId?: string;
}): Contract;
export declare function makePosition(overrides?: Partial<Position>): Position;
export declare function makeOpenOrder(overrides?: Partial<OpenOrder>): OpenOrder;
export declare function makePlaceOrderResult(overrides?: Partial<PlaceOrderResult>): PlaceOrderResult;
export declare class MockBroker implements IBroker {
    static configSchema: z.ZodObject<{
        cash: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>;
    static configFields: import('../types.js').BrokerConfigField[];
    static fromConfig(config: {
        id: string;
        label?: string;
        brokerConfig: Record<string, unknown>;
    }): MockBroker;
    readonly id: string;
    readonly label: string;
    private _positions;
    private _orders;
    /** Per-nativeKey markPrice. Replaces the legacy `_quotes` map. */
    private _markPrices;
    /**
     * Contracts seen via deposit / placeOrder / externalTrade, keyed by
     * `getNativeKey(contract)`. `resolveNativeKey` looks up here first so
     * orders against an aliceId for a previously-known instrument keep their
     * full secType / strike / multiplier metadata even if the position was
     * fully sold out of (i.e. removed from `_positions`).
     */
    private _contractRegistry;
    private _cash;
    private _realizedPnL;
    private _nextOrderId;
    private _accountOverride;
    private _callLog;
    private _failRemaining;
    private _failMethods;
    constructor(options?: MockBrokerOptions);
    private _record;
    private _checkFail;
    /** Get all calls, optionally filtered by method name. */
    calls(method?: string): CallRecord[];
    /** Count calls to a specific method. */
    callCount(method: string): number;
    /** Get the last call to a specific method, or null. */
    lastCall(method: string): CallRecord | null;
    /** Clear call log. */
    resetCalls(): void;
    init(): Promise<void>;
    close(): Promise<void>;
    searchContracts(_pattern: string): Promise<ContractDescription[]>;
    getContractDetails(_query: Contract): Promise<ContractDetails | null>;
    placeOrder(contract: Contract, order: Order, tpsl?: TpSlParams): Promise<PlaceOrderResult>;
    modifyOrder(orderId: string, changes: Partial<Order>): Promise<PlaceOrderResult>;
    cancelOrder(orderId: string): Promise<PlaceOrderResult>;
    closePosition(contract: Contract, quantity?: Decimal): Promise<PlaceOrderResult>;
    getAccount(): Promise<AccountInfo>;
    getPositions(): Promise<Position[]>;
    getOrders(orderIds: string[]): Promise<OpenOrder[]>;
    getOrder(orderId: string, _symbolHint?: string): Promise<OpenOrder | null>;
    /** All currently-open (Submitted) orders — external-order observation surface. */
    getOpenOrders(): Promise<OpenOrder[]>;
    private _toOpenOrder;
    getQuote(contract: Contract): Promise<Quote>;
    getHistorical(contract: Contract, params: BarParams): Promise<Bar[]>;
    getMarketClock(): Promise<MarketClock>;
    getCapabilities(): AccountCapabilities;
    getNativeKey(contract: Contract): string;
    resolveNativeKey(nativeKey: string): Contract;
    /**
     * Set the markPrice for a native key (= localSymbol or symbol). Auto-matches
     * any pending limit/stop orders触达 the new price; fills happen at the
     * markPrice (better-than-limit semantics). Returns the orderIds filled.
     */
    setMarkPrice(nativeKey: string, price: Decimal | string | number): string[];
    /** Move a markPrice by a relative percent (e.g. +5 = up 5%). */
    tickPrice(nativeKey: string, deltaPercent: number): string[];
    /** Read the current markPrice for a native key (returns null if unset). */
    getMarkPrice(nativeKey: string): Decimal | null;
    /** Manually fill a pending order. Optional price (defaults to markPrice or limit price); optional qty for partial. */
    fillOrder(orderId: string, opts?: {
        price?: Decimal | string | number;
        qty?: Decimal | string | number;
    }): void;
    /** Force-cancel a pending order (simulator surface; bypasses IBroker idempotency). */
    cancelPendingOrder(orderId: string): void;
    /**
     * Build a Contract from caller-supplied partial fields, defaulting only
     * the housekeeping bits (exchange / currency). Carries through every
     * IBKR contract field that distinguishes derivative instruments
     * (lastTradeDateOrContractMonth / strike / right / multiplier) so
     * options + futures + FOP positions render correctly downstream.
     */
    private _buildContract;
    /** Cache the contract under its native key so `resolveNativeKey` can
     *  recover the full IBKR Contract metadata even after the position is
     *  fully sold out of and removed from `_positions`. */
    private _rememberContract;
    /**
     * Simulate an external balance change Alice didn't initiate (airdrop,
     * transfer-in, staking reward, off-exchange option assignment). Adds a
     * position without going through the order pipeline and tags
     * `avgCostSource: 'wallet'` so UTA's reconcile pipeline kicks in and
     * synthesizes a `reconcileBalance` commit at observed markPrice —
     * matching how CCXT spot synthesis behaves in real life.
     *
     * Cash is unchanged (deposit, not purchase).
     */
    externalDeposit(params: {
        nativeKey: string;
        quantity: Decimal | string | number;
        contract?: Partial<Contract>;
    }): void;
    /** Simulate an external withdrawal (transfer-out, burn). Cash unchanged. */
    externalWithdraw(nativeKey: string, quantity: Decimal | string | number): void;
    /**
     * Simulate the user manually trading on the exchange app (outside Alice's
     * order log). Updates position + cash like a real fill, but tags the
     * position as wallet-sourced so UTA reconciles via observed price.
     */
    externalTrade(params: {
        nativeKey: string;
        side: 'BUY' | 'SELL';
        quantity: Decimal | string | number;
        price: Decimal | string | number;
        contract?: Partial<Contract>;
    }): void;
    /**
     * Snapshot of all simulator-relevant state. Used by the webui simulator tab
     * to render the control console without piecing together separate calls.
     */
    getSimulatorState(): {
        cash: string;
        markPrices: Array<{
            nativeKey: string;
            price: string;
        }>;
        positions: Array<{
            nativeKey: string;
            symbol: string;
            localSymbol?: string;
            secType?: string;
            side: 'long' | 'short';
            quantity: string;
            avgCost: string;
            avgCostSource?: 'broker' | 'wallet';
            expiry?: string;
            strike?: number;
            right?: string;
            multiplier?: string;
        }>;
        pendingOrders: Array<{
            orderId: string;
            nativeKey: string;
            symbol: string;
            action: string;
            orderType: string;
            totalQuantity: string;
            lmtPrice?: string;
            auxPrice?: string;
        }>;
    };
    /**
     * Walk pending orders for `nativeKey`, fill any whose trigger has been
     * crossed by `price`. Called from setMarkPrice. Returns filled orderIds.
     *
     * Trigger semantics:
     *  - LMT BUY: fills when markPrice <= lmtPrice (price came down to/below us)
     *  - LMT SELL: fills when markPrice >= lmtPrice
     *  - STP BUY: triggers when markPrice >= auxPrice (breakout up)
     *  - STP SELL: triggers when markPrice <= auxPrice (breakdown)
     * Fill price = markPrice (better-than-limit, like a real exchange).
     */
    private _matchPendingOrders;
    /** Resolve markPrice for a contract via its nativeKey. */
    private _markPriceFor;
    /** Legacy alias for setMarkPrice — number-typed price, no auto-match return. */
    setQuote(symbol: string, price: number): void;
    /** Legacy alias for fillOrder. */
    fillPendingOrder(orderId: string, price: number): void;
    /** Override positions directly (for legacy test compatibility). */
    setPositions(positions: Position[]): void;
    /** Override orders directly (for legacy test compatibility). */
    setOrders(orders: OpenOrder[]): void;
    /** Make the next N broker calls throw. Used to test health transitions. */
    setFailMode(count: number): void;
    /** Make a specific method always throw (until cleared) — lets a test fail
     *  e.g. getAccount while letting init succeed (the capability-ladder case). */
    setFailMethod(method: string): void;
    clearFailMethod(method: string): void;
    /** Override account info directly. Bypasses computed values from positions. */
    setAccountInfo(info: Partial<AccountInfo>): void;
    private _applyFill;
    private _cloneOrder;
}

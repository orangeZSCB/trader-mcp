/**
 * AlpacaBroker — IBroker adapter for Alpaca
 *
 * Direct implementation against @alpacahq/alpaca-trade-api SDK.
 * Supports US equities (STK). Contract resolution uses Alpaca's ticker
 * as nativeId — unambiguous for stocks, extensible when options arrive.
 *
 * Takes IBKR Order objects, reads relevant fields, ignores the rest.
 */
import { z } from 'zod';
import Decimal from 'decimal.js';
import { Contract, ContractDescription, ContractDetails, Order } from '@traderalice/ibkr';
import { type IBroker, type AccountCapabilities, type AccountInfo, type Position, type PlaceOrderResult, type OpenOrder, type Quote, type MarketClock, type BrokerConfigField, type TpSlParams, type Bar, type BarParams } from '../types.js';
import '../../contract-ext.js';
import type { AlpacaBrokerConfig } from './alpaca-types.js';
export declare class AlpacaBroker implements IBroker {
    static configSchema: z.ZodObject<{
        paper: z.ZodDefault<z.ZodBoolean>;
        apiKey: z.ZodOptional<z.ZodString>;
        apiSecret: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    static configFields: BrokerConfigField[];
    static fromConfig(config: {
        id: string;
        label?: string;
        brokerConfig: Record<string, unknown>;
    }): AlpacaBroker;
    readonly id: string;
    readonly label: string;
    private client;
    private readonly config;
    /**
     * Local cache of Alpaca's tradeable asset list. Pulled at connect-time and
     * (eventually) refreshed by a 6h cron in main.ts. Empty array (rather than
     * null) means "we tried and got nothing" — null means "haven't tried yet".
     */
    private catalog;
    constructor(config: AlpacaBrokerConfig);
    private static readonly MAX_INIT_RETRIES;
    private static readonly MAX_AUTH_RETRIES;
    private static readonly INIT_RETRY_BASE_MS;
    init(): Promise<void>;
    close(): Promise<void>;
    /**
     * Pull Alpaca's full active asset list and atomically replace the local
     * cache. Failure preserves the previous cache (better stale than empty).
     *
     * Called once at init() and periodically by main.ts's 6h cron.
     */
    refreshCatalog(): Promise<void>;
    searchContracts(pattern: string): Promise<ContractDescription[]>;
    getContractDetails(query: Contract): Promise<ContractDetails | null>;
    placeOrder(contract: Contract, order: Order, tpsl?: TpSlParams): Promise<PlaceOrderResult>;
    modifyOrder(orderId: string, changes: Partial<Order>): Promise<PlaceOrderResult>;
    cancelOrder(orderId: string): Promise<PlaceOrderResult>;
    closePosition(contract: Contract, quantity?: Decimal): Promise<PlaceOrderResult>;
    getAccount(): Promise<AccountInfo>;
    getPositions(): Promise<Position[]>;
    getOrders(orderIds: string[]): Promise<OpenOrder[]>;
    getOrder(orderId: string): Promise<OpenOrder | null>;
    /** All open orders on the account — external-order observation surface. */
    getOpenOrders(): Promise<OpenOrder[]>;
    getQuote(contract: Contract): Promise<Quote>;
    /**
     * Historical OHLCV via Alpaca's market-data v2 `getBarsV2` (an async
     * generator — drained into an array). `adjustment:'all'` gives split/dividend
     * -adjusted bars. Free-tier accounts get the IEX feed (partial tape), hence
     * capability quality 'iex'; full SIP needs a paid data subscription.
     */
    getHistorical(contract: Contract, params: BarParams): Promise<Bar[]>;
    getCapabilities(): AccountCapabilities;
    getMarketClock(): Promise<MarketClock>;
    getNativeKey(contract: Contract): string;
    resolveNativeKey(nativeKey: string): Contract;
    private mapOpenOrder;
    private extractTpSl;
}

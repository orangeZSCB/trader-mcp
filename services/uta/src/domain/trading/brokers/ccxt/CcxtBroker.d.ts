/**
 * CcxtBroker — IBroker adapter for CCXT exchanges
 *
 * Direct implementation against ccxt unified API.
 * Takes IBKR Order objects, reads relevant fields, ignores the rest.
 * aliceId format: "{exchange}-{encodedSymbol}" (e.g. "bybit-BTC_USDT.USDT").
 */
import { z } from 'zod';
import Decimal from 'decimal.js';
import { Contract, ContractDescription, ContractDetails, Order } from '@traderalice/ibkr';
import { type IBroker, type AccountCapabilities, type AccountInfo, type Position, type PlaceOrderResult, type OpenOrder, type Quote, type MarketClock, type BrokerConfigField, type TpSlParams, type Bar, type BarParams } from '../types.js';
import '../../contract-ext.js';
import { type CcxtBrokerConfig, type FundingRate, type OrderBook } from './ccxt-types.js';
export interface CcxtBrokerMeta {
    exchange: string;
}
export declare class CcxtBroker implements IBroker<CcxtBrokerMeta> {
    static configSchema: z.ZodObject<{
        exchange: z.ZodString;
        sandbox: z.ZodDefault<z.ZodBoolean>;
        demoTrading: z.ZodDefault<z.ZodBoolean>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        apiKey: z.ZodOptional<z.ZodString>;
        secret: z.ZodOptional<z.ZodString>;
        apiSecret: z.ZodOptional<z.ZodString>;
        uid: z.ZodOptional<z.ZodString>;
        accountId: z.ZodOptional<z.ZodString>;
        login: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        twofa: z.ZodOptional<z.ZodString>;
        privateKey: z.ZodOptional<z.ZodString>;
        walletAddress: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    static configFields: BrokerConfigField[];
    static fromConfig(config: {
        id: string;
        label?: string;
        brokerConfig: Record<string, unknown>;
    }): CcxtBroker;
    readonly id: string;
    readonly label: string;
    readonly meta: CcxtBrokerMeta;
    private exchange;
    private exchangeName;
    /** Public-data-only mode — skip credential validation in init(). */
    private keyless;
    private initialized;
    private overrides;
    private orderSymbolCache;
    private warnedOpenOrdersUnsupported;
    constructor(config: CcxtBrokerConfig);
    private get markets();
    private ensureInit;
    init(): Promise<void>;
    close(): Promise<void>;
    /**
     * Re-pull the exchange market list. CCXT's `loadMarkets(true)` (the
     * `reload=true` overload) bypasses the cached snapshot it built during
     * init. Call from a cron periodically — newly listed pairs and
     * delistings come along for the ride.
     */
    refreshCatalog(): Promise<void>;
    searchContracts(pattern: string): Promise<ContractDescription[]>;
    getContractDetails(query: Contract): Promise<ContractDetails | null>;
    placeOrder(contract: Contract, order: Order, tpsl?: TpSlParams, extraParams?: Record<string, unknown>): Promise<PlaceOrderResult>;
    cancelOrder(orderId: string): Promise<PlaceOrderResult>;
    modifyOrder(orderId: string, changes: Partial<Order>): Promise<PlaceOrderResult>;
    closePosition(contract: Contract, quantity?: Decimal): Promise<PlaceOrderResult>;
    /**
     * Synthesize spot holdings (BTC/ETH/etc balances) into Position records.
     *
     * CCXT's fetchPositions() only returns derivative positions
     * (SWAP/FUTURES/MARGIN/OPTION); spot assets sit in fetchBalance() as
     * per-currency entries. Without this synthesis, a UTA user holding only
     * spot would see an empty positions list and a netLiquidation that
     * reflects only their stablecoin balance.
     *
     * Treated as long positions priced at the current ticker — consistent
     * with how IBKR exposes equity holdings. avgCost is filled with markPrice
     * as a placeholder; UTA replaces it with a wallet-ledger-derived value
     * (and bootstraps any unaccounted qty via `reconcileBalance` at observed
     * markPrice) — the `avgCostSource: 'wallet'` flag signals this.
     */
    private fetchSpotHoldings;
    getAccount(): Promise<AccountInfo>;
    getPositions(): Promise<Position[]>;
    getOrders(orderIds: string[]): Promise<OpenOrder[]>;
    getOrder(orderId: string, symbolHint?: string): Promise<OpenOrder | null>;
    private convertCcxtOrder;
    /**
     * All open orders on the account — the surface external-order observation
     * diffs against. Venue-dependent: some exchanges can't enumerate open
     * orders without a symbol scope; those degrade to [] with a once-per-
     * instance warning rather than failing the observation pass.
     */
    getOpenOrders(): Promise<OpenOrder[]>;
    getQuote(contract: Contract): Promise<Quote>;
    /**
     * Historical OHLCV via ccxt `fetchOHLCV`. Free public endpoint on most
     * exchanges (realtime quality, no entitlement tier). Validates the interval
     * against the exchange's actual `timeframes` and loud-refuses if unsupported.
     */
    getHistorical(contract: Contract, params: BarParams): Promise<Bar[]>;
    /** A crypto exchange's instruments are crypto — period. Even a listed "AAPL"
     *  is a synthetic/custodial token here, not the real equity; secType (spot /
     *  CRYPTO_PERP / FUT / OPT) is the instrument shape, not the asset class. */
    assetClassFor(): 'crypto';
    getCapabilities(): AccountCapabilities;
    getMarketClock(): Promise<MarketClock>;
    getNativeKey(contract: Contract): string;
    resolveNativeKey(nativeKey: string): Contract;
    getFundingRate(contract: Contract): Promise<FundingRate>;
    getOrderBook(contract: Contract, limit?: number): Promise<OrderBook>;
}

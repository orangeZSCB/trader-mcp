/**
 * LongbridgeBroker — IBroker adapter for Longbridge OpenAPI.
 *
 * Covers HK / US / SH / SZ / SG securities through a single account,
 * matching how a real Longbridge account is structured (one trading
 * relationship, multiple regional markets, multi-currency cash).
 *
 * Auth: appKey + appSecret + accessToken (long-lived; user rotates
 * manually in the LB dashboard, ~90d).
 *
 * Multi-currency cash folding: LB returns one AccountBalance per
 * currency (HKD/USD/CNY). We pick HKD as `baseCurrency` and roll the
 * other buckets into it via the injected FxService. Without an
 * FxService we fall back to reporting only the HKD bucket — minor
 * non-HKD cash may not show up in totalCashValue.
 */
import { z } from 'zod';
import Decimal from 'decimal.js';
import { Contract, ContractDescription, ContractDetails, Order } from '@traderalice/ibkr';
import { OrderType as LbOrderType, TimeInForceType } from 'longbridge';
import { type IBroker, type AccountCapabilities, type AccountInfo, type Position, type PlaceOrderResult, type OpenOrder, type Quote, type MarketClock, type TpSlParams } from '../types.js';
import '../../contract-ext.js';
import type { FxService } from '../../fx-service.js';
import type { LongbridgeBrokerConfig } from './longbridge-types.js';
/**
 * Translate an IBKR `Order.orderType` string + market suffix into the
 * Longbridge `OrderType` enum. Market-aware because HK does not accept
 * a true MO; ELO is the practical equivalent.
 *
 * Returns null when the IBKR order type has no usable LB analogue
 * (e.g. IOC/FOK on HK side) — caller should reject the order.
 */
export declare function ibkrOrderTypeToLb(ibkrType: string, marketSuffix: string): LbOrderType | null;
/** Map IBKR TIF strings to Longbridge `TimeInForceType`. */
export declare function ibkrTifToLb(tif: string): TimeInForceType | null;
export declare class LongbridgeBroker implements IBroker {
    static configSchema: z.ZodObject<{
        appKey: z.ZodString;
        appSecret: z.ZodString;
        accessToken: z.ZodString;
        paper: z.ZodDefault<z.ZodBoolean>;
        httpUrl: z.ZodOptional<z.ZodString>;
        quoteWsUrl: z.ZodOptional<z.ZodString>;
        tradeWsUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    static fromConfig(config: {
        id: string;
        label?: string;
        brokerConfig: Record<string, unknown>;
    }): LongbridgeBroker;
    readonly id: string;
    readonly label: string;
    private readonly cfg;
    private tradeCtx;
    private quoteCtx;
    private fxService?;
    constructor(cfg: LongbridgeBrokerConfig);
    /** Inject the FxService so multi-currency cash can be folded into HKD. */
    setFxService(fx: FxService): void;
    private static readonly MAX_INIT_RETRIES;
    private static readonly MAX_AUTH_RETRIES;
    private static readonly INIT_RETRY_BASE_MS;
    init(): Promise<void>;
    close(): Promise<void>;
    searchContracts(pattern: string): Promise<ContractDescription[]>;
    getContractDetails(query: Contract): Promise<ContractDetails | null>;
    placeOrder(contract: Contract, order: Order, _tpsl?: TpSlParams): Promise<PlaceOrderResult>;
    modifyOrder(orderId: string, changes: Partial<Order>): Promise<PlaceOrderResult>;
    cancelOrder(orderId: string): Promise<PlaceOrderResult>;
    closePosition(contract: Contract, quantity?: Decimal): Promise<PlaceOrderResult>;
    getAccount(): Promise<AccountInfo>;
    /**
     * Pick HKD as base. Sum every currency's totalCash + netAssets after
     * FX-converting to HKD. Without FxService we fall back to picking the
     * largest single bucket (loses the small-currency tail but doesn't
     * lie about the unit).
     */
    private foldBalancesToBase;
    /**
     * Cross-rate from `from` to `to` via USD. FxService.convertToUsd is
     * the only conversion the service exposes, so we run it twice and
     * divide.
     */
    private fxRate;
    /**
     * Multi-stage position fetch:
     *   1. stockPositions()       → cost / qty / currency / symbol
     *   2. quote()  + staticInfo() → live mark price + derivative-type detection (parallel)
     *   3. optionQuote() + warrantQuote() → multiplier metadata (parallel)
     *
     * stockPositions returns options and warrants under the same channels
     * as plain stocks but does NOT identify the type or carry a multiplier
     * — staticInfo's `stockDerivatives` field is the discriminator, and
     * optionQuote/warrantQuote carry the actual multiplier values.
     *
     * Each enrichment call is independently fault-tolerant: a failure
     * downgrades that field to a safe default (marketPrice → cost,
     * multiplier → '1') rather than aborting the whole fetch. UI degrades
     * gracefully instead of blanking the positions panel.
     */
    getPositions(): Promise<Position[]>;
    private buildPosition;
    /** Batch-fetch live `lastDone` for a symbol set. Returns empty map on failure. */
    private fetchQuoteMap;
    /** Batch-fetch staticInfo for derivative-type detection. Returns empty map on failure. */
    private fetchStaticInfoMap;
    /** Batch-fetch option contract multipliers. Returns empty map on failure. */
    private fetchOptionMultiplierMap;
    /** Batch-fetch warrant conversion ratios. Returns empty map on failure. */
    private fetchWarrantMultiplierMap;
    getOrders(orderIds: string[]): Promise<OpenOrder[]>;
    getOrder(orderId: string): Promise<OpenOrder | null>;
    getQuote(contract: Contract): Promise<Quote>;
    getMarketClock(): Promise<MarketClock>;
    getCapabilities(): AccountCapabilities;
    getNativeKey(contract: Contract): string;
    resolveNativeKey(nativeKey: string): Contract;
    private mapOpenOrder;
}

/**
 * LeverupBroker — IBroker adapter for LeverUp perp DEX on Monad.
 *
 * Flow: sign EIP-712 with 1CT key → POST to OCT relayer → poll status.
 * Funds stay in user's main wallet; relayer pays gas & Pyth oracle fee.
 *
 * Quarantined under brokers/others/ to signal lower-tier ecosystem support
 * (vs first-class brokers/{ccxt,alpaca,ibkr}/). See plan file for context.
 */
import { z } from 'zod';
import Decimal from 'decimal.js';
import { Contract, ContractDescription, ContractDetails, Order } from '@traderalice/ibkr';
import { type IBroker, type AccountCapabilities, type AccountInfo, type Position, type PlaceOrderResult, type OpenOrder, type Quote, type MarketClock, type TpSlParams } from '../../types.js';
import '../../../contract-ext.js';
import { type LeverupBrokerConfig } from './types.js';
import { type SchemaVariant } from './eip712.js';
import { type RestPositionRecord } from './reader-client.js';
import type { PrivateKeyAccount } from 'viem/accounts';
export declare class LeverupBroker implements IBroker {
    static configSchema: z.ZodObject<{
        network: z.ZodEnum<{
            testnet: "testnet";
            live: "live";
        }>;
        privateKey: z.ZodString;
    }, z.core.$strip>;
    static fromConfig(config: {
        id: string;
        label?: string;
        brokerConfig: Record<string, unknown>;
    }): LeverupBroker;
    readonly id: string;
    readonly label: string;
    readonly meta: {
        engine: "leverup";
    };
    private readonly config;
    private readonly net;
    private account;
    private relayer;
    private reader;
    private initialized;
    /** EIP-712 schema variant in active use; flipped if relayer rejects nested. */
    private schemaVariant;
    /** Tracks orders by orderId (= inputHash) for getOrder lookups. */
    private readonly orderTracking;
    constructor(config: LeverupBrokerConfig);
    private get network();
    private get networkConst();
    init(): Promise<void>;
    /** Trader address — derived from privateKey at init(). */
    private get traderAddress();
    close(): Promise<void>;
    private ensureInit;
    searchContracts(pattern: string): Promise<ContractDescription[]>;
    getContractDetails(query: Contract): Promise<ContractDetails | null>;
    private pairToContract;
    private resolvePair;
    placeOrder(contract: Contract, order: Order, tpsl?: TpSlParams): Promise<PlaceOrderResult>;
    modifyOrder(_orderId: string, _changes: Partial<Order>): Promise<PlaceOrderResult>;
    cancelOrder(_orderId: string): Promise<PlaceOrderResult>;
    closePosition(contract: Contract, _quantity?: Decimal): Promise<PlaceOrderResult>;
    getAccount(): Promise<AccountInfo>;
    getPositions(): Promise<Position[]>;
    getOrders(orderIds: string[]): Promise<OpenOrder[]>;
    getOrder(orderId: string): Promise<OpenOrder | null>;
    getQuote(contract: Contract): Promise<Quote>;
    getMarketClock(): Promise<MarketClock>;
    getCapabilities(): AccountCapabilities;
    getNativeKey(contract: Contract): string;
    resolveNativeKey(nativeKey: string): Contract;
    /** @internal — for tests + e2e harness use */
    _account(): PrivateKeyAccount;
    /** @internal — for tests to flip schema variant. */
    _setSchemaVariant(v: SchemaVariant): void;
    /** @internal — REST positions raw, exposed for tests + future debug tools. */
    _fetchOpenPositionsRaw(): Promise<RestPositionRecord[]>;
}

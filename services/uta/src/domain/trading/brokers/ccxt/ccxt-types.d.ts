export interface CcxtBrokerConfig {
    id?: string;
    label?: string;
    exchange: string;
    /** Public-data-only — skip credential validation in init() (no key needed). */
    keyless?: boolean;
    sandbox: boolean;
    demoTrading?: boolean;
    options?: Record<string, unknown>;
    apiKey?: string;
    secret?: string;
    uid?: string;
    accountId?: string;
    login?: string;
    password?: string;
    twofa?: string;
    privateKey?: string;
    walletAddress?: string;
    token?: string;
}
/** CCXT standard credential field names (matches base Exchange.requiredCredentials map). */
export declare const CCXT_CREDENTIAL_FIELDS: readonly ["apiKey", "secret", "uid", "accountId", "login", "password", "twofa", "privateKey", "walletAddress", "token"];
export type CcxtCredentialField = typeof CCXT_CREDENTIAL_FIELDS[number];
export interface CcxtMarket {
    id: string;
    symbol: string;
    base: string;
    quote: string;
    type: string;
    settle?: string;
    active?: boolean;
    precision?: {
        price?: number;
        amount?: number;
    };
}
export declare const MAX_INIT_RETRIES: number;
export declare const INIT_RETRY_BASE_MS: number;
import type { Contract } from '@traderalice/ibkr';
import type { Position } from '../types.js';
/** Position with crypto-specific fields (leverage, margin, liquidation). */
export interface CcxtPosition extends Position {
    leverage?: number;
    margin?: number;
    liquidationPrice?: number;
}
export interface FundingRate {
    contract: Contract;
    fundingRate: number;
    nextFundingTime?: Date;
    previousFundingRate?: number;
    timestamp: Date;
}
/** [price, amount] */
export type OrderBookLevel = [price: number, amount: number];
export interface OrderBook {
    contract: Contract;
    bids: OrderBookLevel[];
    asks: OrderBookLevel[];
    timestamp: Date;
}

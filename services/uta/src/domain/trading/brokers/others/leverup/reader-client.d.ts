/**
 * Read-only data sources for LeverUp.
 *
 * Two surfaces:
 *  1. service.leverup.xyz REST — paginated user positions (mainnet only;
 *     testnet uses api-testnet.leverup.xyz, but the prod base swap is
 *     handled at the network-constants layer).
 *  2. Monad RPC via viem PublicClient — USDC.balanceOf, plus future on-chain
 *     reads if needed.
 *
 * REST is preferred for positions because it's already indexed/paginated;
 * chain reads are reserved for things REST doesn't expose (USDC balance).
 */
import { type PublicClient } from 'viem';
import type { NetworkConstants } from './types.js';
/**
 * Position record as returned by service.leverup.xyz/v1/user/{addr}/positions.
 * Field names mirror LeverUp's response. Fees/funding are decimal strings;
 * prices are in wei strings (per LeverUp's protocol decimals).
 */
export interface RestPositionRecord {
    positionHash: `0x${string}`;
    pairName: string;
    pairBase: string;
    tokenIn: string;
    marginToken: string;
    isLong: boolean;
    /** Margin amount in collateral token's smallest unit (e.g., 6dp for USDC). */
    margin: string;
    /** Position size; 10dp per LeverUp protocol. */
    qty: string;
    /** Entry price; 18dp. */
    entryPrice: string;
    stopLoss: string;
    takeProfit: string;
    openFee: string;
    executionFee: string;
    fundingFee: string;
    holdingFee: string;
    timestamp: number;
    status: 'OPEN' | 'CLOSED';
    closeInfo?: {
        closePrice: string;
        pnl: string;
        closingFee?: string;
    };
}
export declare class ReaderClient {
    readonly publicClient: PublicClient;
    private readonly net;
    constructor(net: NetworkConstants);
    /** Fetch up to `limit` open positions for `userAddress`. */
    fetchOpenPositions(userAddress: `0x${string}`, limit?: number): Promise<RestPositionRecord[]>;
    getUsdcBalance(address: `0x${string}`): Promise<bigint>;
    getUsdcDecimals(): Promise<number>;
}

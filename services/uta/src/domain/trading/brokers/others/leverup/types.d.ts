/**
 * LeverupBroker types and network constants.
 *
 * Centralizes per-network addresses (Diamond, OneClickAgent, USDC, LVUSD, WMON)
 * and RPC URLs so the rest of the broker code reads them by network key only.
 */
export type LeverupNetwork = 'live' | 'testnet';
export interface LeverupBrokerConfig {
    id?: string;
    label?: string;
    /** 'live' = Monad mainnet, 'testnet' = Monad testnet. */
    network: LeverupNetwork;
    /**
     * Private key of the wallet authorized as a Trader Agent on OneClickAgent.
     * Per LeverUp's team this can be the main wallet itself — pasted key has
     * full control over its funds, so users should treat it accordingly. The
     * trader address used in EIP-712 messages is derived from this key.
     */
    privateKey: `0x${string}`;
}
export interface NetworkConstants {
    chainId: number;
    rpcUrl: string;
    diamond: `0x${string}`;
    oneClickAgent: `0x${string}`;
    usdc: `0x${string}`;
    lvusd: `0x${string}`;
    wmon: `0x${string}`;
    /** OCT relayer base URL (open/close/status REST). */
    relayerBase: string;
    /** Reader REST base URL for positions. */
    readerBase: string;
}
export declare const NETWORK_CONSTANTS: Record<LeverupNetwork, NetworkConstants>;

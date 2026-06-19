/**
 * LeverUp pair registry — static map of supported trading pairs.
 *
 * Sourced from https://developer-docs.leverup.xyz/guide/supported-pairs.html.
 * pairBase addresses are LeverUp's internal pair identifiers; each maps to a
 * Pyth Network price feed for oracle pricing.
 *
 * The 500BTC/500ETH pairs are special "high-leverage zero-fee" pairs with
 * placeholder pairBase addresses (0x...0003 / 0x...0004) — we keep them in
 * the table but flag them so the broker's capabilities can advertise them
 * separately.
 */
export interface LeverupPair {
    /** Display symbol, e.g. "BTC/USD". Used as nativeKey in aliceId. */
    symbol: string;
    base: string;
    quote: string;
    /** LeverUp's pair contract address (passed as `pairBase` in OpenDataInput). */
    pairBase: `0x${string}`;
    /** Pyth Network price feed ID — used for fetchTicker and pythUpdateData. */
    pythFeedId: `0x${string}`;
    /** Whether this is one of the 500x high-leverage zero-fee pairs. */
    highLeverage?: boolean;
    /** Asset class — drives guards and aggregation logic. */
    category: 'crypto' | 'forex' | 'stock' | 'commodity';
}
/**
 * Mainnet pair list. 20 of LeverUp's documented 23 pairs are captured here;
 * the remaining 3 stocks/indices not yet visible from the docs snippet —
 * extend this list when surfaced.
 */
export declare const MAINNET_PAIRS: LeverupPair[];
/**
 * Testnet pair list. As of writing, LeverUp's testnet pair addresses are
 * undocumented. Until Monad team confirms, testnet defaults to mainnet pairs
 * — calls against testnet will fail at the relayer, surfacing the divergence
 * loud and early. (Compare to silently skipping unsupported pairs.)
 */
export declare const TESTNET_PAIRS: LeverupPair[];
export declare function getPairs(network: 'live' | 'testnet'): LeverupPair[];
export declare function findPairBySymbol(network: 'live' | 'testnet', symbol: string): LeverupPair | undefined;
export declare function findPairByPairBase(network: 'live' | 'testnet', pairBase: string): LeverupPair | undefined;

/**
 * Pyth Hermes API client.
 *
 * Used for two purposes:
 *   1. Fetching `pythUpdateData` payloads to attach to OCT open-position
 *      requests (relayer uses this to update the on-chain price).
 *   2. Reading the latest price for `getQuote`.
 *
 * Hermes is a public stateless service — no authentication, no rate-limit
 * known, but we still want to keep request volume reasonable and let
 * upstream errors surface as `NETWORK` BrokerErrors.
 */
export interface PythUpdateResponse {
    binary: {
        encoding: string;
        data: `0x${string}`[];
    };
    parsed?: Array<{
        id: string;
        price: {
            price: string;
            conf: string;
            expo: number;
            publish_time: number;
        };
        ema_price: {
            price: string;
            conf: string;
            expo: number;
            publish_time: number;
        };
    }>;
}
/**
 * Fetch the latest signed price update payload(s) for the given Pyth feed IDs.
 * Returns both `binary.data` (for relayer ingestion) and `parsed` (for client-side
 * price display). Pass multiple IDs in one call when a request needs both pair
 * + collateral feeds (e.g., BTC/USD + USDC/USD).
 */
export declare function fetchPythUpdateData(feedIds: `0x${string}`[]): Promise<PythUpdateResponse>;
/**
 * Convenience: fetch a single feed and return both its raw price (price * 10^expo)
 * and the binary update payload (which is what the relayer needs).
 */
export declare function fetchPythPrice(feedId: `0x${string}`): Promise<{
    price: number;
    publishTime: Date;
    updateData: `0x${string}`[];
}>;

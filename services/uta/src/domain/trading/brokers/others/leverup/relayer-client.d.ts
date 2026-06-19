/**
 * OCT relayer REST client — `oneclick-01-keeper.leverup.xyz`.
 *
 * Three endpoints:
 *   POST /v1/trading/send-open-position?blockchain=MONAD
 *   POST /v1/trading/send-close-position?blockchain=MONAD
 *   GET  /v1/trading/{input_hash}/status
 *
 * The relayer takes a pre-signed EIP-712 payload and submits it on-chain on
 * the user's behalf, paying gas + Pyth oracle fee. We just wait on status.
 */
export interface OpenPositionRequest {
    openData: {
        pairBase: string;
        isLong: boolean;
        tokenIn: string;
        lvToken: string;
        /** wei as decimal string */
        amountIn: string;
        qty: string;
        price: string;
        stopLoss: string;
        takeProfit: string;
        broker: string;
    };
    trader: string;
    salt: string;
    /** Unix seconds (integer) */
    deadline: number;
    signature: `0x${string}`;
    /** Hex strings from Pyth Hermes binary.data[] */
    pythUpdateData: `0x${string}`[];
}
export interface ClosePositionRequest {
    positionHash: `0x${string}`;
    deadline: number;
    signature: `0x${string}`;
}
/** Response from open/close: opaque hash to poll status with. */
export interface RelayerSubmitResponse {
    inputHash: `0x${string}`;
}
export interface RelayerStatusResponse {
    executed: boolean;
    success: boolean;
    txnHash?: `0x${string}` | null;
    reason?: string | null;
}
export declare class RelayerClient {
    private readonly baseUrl;
    constructor(baseUrl: string);
    sendOpenPosition(req: OpenPositionRequest): Promise<RelayerSubmitResponse>;
    sendClosePosition(req: ClosePositionRequest): Promise<RelayerSubmitResponse>;
    getStatus(inputHash: `0x${string}`): Promise<RelayerStatusResponse>;
    /**
     * Poll status until executed=true or timeout. Returns the final status.
     * Default: poll every 1.5s for up to 30s — enough for normal Monad blocks
     * (1s) plus relayer queue + propagation slack.
     */
    pollUntilExecuted(inputHash: `0x${string}`, opts?: {
        intervalMs?: number;
        timeoutMs?: number;
    }): Promise<RelayerStatusResponse>;
    private post;
}

/**
 * UTA client SDK — HTTP transport from Alice to the UTA service.
 *
 * `createUTAClient({ baseUrl })` returns a low-level HTTP helper. Higher-
 * level adapters (`UTAManagerSDK`, `UTAAccountSDK` in
 * `src/services/uta-client/`) layer typed domain operations on top.
 *
 * Errors are normalized into JS Errors. Future iterations may add zod-
 * validation per endpoint and `WireBrokerError` round-trip for typed
 * downstream error handling in the AI tool layer.
 */
export interface UTAClientOptions {
    /** UTA service base URL, e.g. `http://127.0.0.1:47333`. */
    baseUrl: string;
    /** Optional fetch override (for testing). Defaults to global fetch. */
    fetch?: typeof globalThis.fetch;
    /** Request timeout in ms. Default 15s. */
    timeoutMs?: number;
}
export interface UTAClient {
    readonly baseUrl: string;
    request<T = unknown>(method: string, path: string, opts?: RequestOpts): Promise<T>;
    get<T = unknown>(path: string, params?: Record<string, string | number | undefined>): Promise<T>;
    post<T = unknown>(path: string, body?: unknown): Promise<T>;
    put<T = unknown>(path: string, body?: unknown): Promise<T>;
    delete<T = unknown>(path: string): Promise<T>;
}
export interface RequestOpts {
    body?: unknown;
    params?: Record<string, string | number | undefined>;
    signal?: AbortSignal;
}
export declare class UTAHttpError extends Error {
    readonly status: number;
    readonly body: unknown;
    constructor(status: number, body: unknown, message: string);
}
export declare function createUTAClient(options: UTAClientOptions): UTAClient;

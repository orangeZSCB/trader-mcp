/**
 * Error classes for OpenTypeBB.
 * Maps to: openbb_core/app/model/abstract/error.py
 *          openbb_core/provider/utils/errors.py
 */
/** Base error for all OpenBB errors. */
export declare class OpenBBError extends Error {
    readonly original?: unknown;
    constructor(message: string, original?: unknown);
}
/** Raised when a query returns no data. */
export declare class EmptyDataError extends OpenBBError {
    constructor(message?: string);
}
/** Raised when credentials are missing or invalid. */
export declare class UnauthorizedError extends OpenBBError {
    constructor(message?: string);
}
/**
 * Raised when the request never reached the provider — DNS failure, TLS
 * failure, connection refused, host unreachable, etc. Distinct from
 * provider-side errors (HTTP 4xx/5xx, malformed JSON) because the fix
 * is on the user's network/proxy, not on the provider, and retrying
 * with the same network state is futile.
 *
 * Surfaced to AI agents with a "do not retry" hint so they don't burn
 * tokens on silent re-attempts that all fail the same way.
 */
export declare class NetworkUnreachableError extends OpenBBError {
    readonly host: string;
    constructor(host: string, cause: string, original?: unknown);
}

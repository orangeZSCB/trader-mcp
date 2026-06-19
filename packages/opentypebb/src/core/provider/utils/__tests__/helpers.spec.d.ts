/**
 * amakeRequest network-error classification.
 *
 * The point of these tests: when fetch fails at the network layer (DNS,
 * TLS, routing, refused), the helper must throw a NetworkUnreachableError
 * with a "do not retry" hint that surfaces verbatim to AI agents — NOT
 * the generic "Request failed (TypeError: fetch failed)" string that
 * looks indistinguishable from a transient flake.
 */
export {};

/**
 * Contract discipline — strict SecType taxonomy + per-secType validation.
 *
 * The `@traderalice/ibkr` Contract class is intentionally permissive (mirrors
 * the IBKR ibapi shape; every field has a default). That permissiveness
 * meant secType drifted to freeform `string` and downstream consumers had
 * no way to know which fields were required for a given instrument.
 *
 * This module promotes IBKR's contract taxonomy to canonical:
 *   - `SecType` is a strict union — adding a new type touches one place.
 *   - `validateContract(c)` enforces per-secType structural requirements
 *     (OPT/FOP need expiry+strike+right+multiplier; FUT needs expiry+
 *     multiplier; STK/CRYPTO/etc. need symbol+exchange+currency).
 *
 * Brokers funnel their Contract construction through `buildContract` (added
 * in Phase 2 of the IBKR-as-truth refactor) which calls `validateContract`
 * at output and throws in dev. Phase 1 (this commit) just makes the
 * machinery available; later phases enforce it.
 */
import { Contract, type SecType } from '@traderalice/ibkr';
export type { SecType };
export declare const SEC_TYPES: readonly SecType[];
export declare function isSecType(v: unknown): v is SecType;
export interface ContractRequirements {
    /** Universal: every contract regardless of secType. */
    universal: ['symbol', 'secType', 'exchange', 'currency'];
    /** Required only when secType matches (in addition to universal). */
    bySecType: Partial<Record<SecType, Array<keyof Contract>>>;
}
export declare const SECTYPE_REQUIREMENTS: ContractRequirements;
export type ValidationResult = {
    ok: true;
} | {
    ok: false;
    errors: string[];
};
/**
 * Validate a Contract against the canonical taxonomy. Returns a list of
 * issues so callers can decide whether to throw or warn.
 */
export declare function validateContract(c: Contract): ValidationResult;
/**
 * Throwing variant for places that want hard enforcement (broker output
 * boundary). Phase 2 wires this into `buildContract`; Phase 1 leaves it
 * available without enforcing.
 */
export declare function assertContract(c: Contract): void;

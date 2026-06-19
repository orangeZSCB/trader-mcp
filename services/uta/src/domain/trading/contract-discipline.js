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
import { UNSET_DOUBLE } from '@traderalice/ibkr';
export const SEC_TYPES = [
    // IBKR canonical
    'STK', 'OPT', 'FUT', 'FOP', 'IND', 'CASH', 'BOND', 'CMDTY',
    'WAR', 'IOPT', 'FUND', 'BAG', 'NEWS', 'CFD', 'CRYPTO',
    // OpenAlice-only extension
    'CRYPTO_PERP',
];
const SEC_TYPE_SET = new Set(SEC_TYPES);
export function isSecType(v) {
    return typeof v === 'string' && SEC_TYPE_SET.has(v);
}
export const SECTYPE_REQUIREMENTS = {
    universal: ['symbol', 'secType', 'exchange', 'currency'],
    bySecType: {
        OPT: ['lastTradeDateOrContractMonth', 'strike', 'right', 'multiplier'],
        FOP: ['lastTradeDateOrContractMonth', 'strike', 'right', 'multiplier'],
        FUT: ['lastTradeDateOrContractMonth', 'multiplier'],
        // STK / CASH / BOND / WAR / CRYPTO / CRYPTO_PERP need only the universal
        // fields. Multiplier defaults to '1' downstream when absent.
    },
};
/**
 * Validate a Contract against the canonical taxonomy. Returns a list of
 * issues so callers can decide whether to throw or warn.
 */
export function validateContract(c) {
    const errors = [];
    // Universal: non-empty
    if (!c.symbol)
        errors.push('symbol is required');
    if (!c.secType)
        errors.push('secType is required');
    else if (!isSecType(c.secType))
        errors.push(`secType "${c.secType}" is not a known SecType (allowed: ${SEC_TYPES.join(', ')})`);
    if (!c.exchange)
        errors.push('exchange is required');
    if (!c.currency)
        errors.push('currency is required');
    // Per-secType (only if secType is itself valid)
    if (isSecType(c.secType)) {
        const required = SECTYPE_REQUIREMENTS.bySecType[c.secType] ?? [];
        for (const field of required) {
            if (!hasContractField(c, field)) {
                errors.push(`${c.secType} requires ${field}`);
            }
        }
        // Right must be C/P/CALL/PUT for OPT/FOP
        if ((c.secType === 'OPT' || c.secType === 'FOP') && c.right) {
            const r = c.right.toUpperCase();
            if (r !== 'C' && r !== 'P' && r !== 'CALL' && r !== 'PUT') {
                errors.push(`${c.secType} right must be C/P/CALL/PUT (got "${c.right}")`);
            }
        }
    }
    return errors.length === 0 ? { ok: true } : { ok: false, errors };
}
/**
 * Throwing variant for places that want hard enforcement (broker output
 * boundary). Phase 2 wires this into `buildContract`; Phase 1 leaves it
 * available without enforcing.
 */
export function assertContract(c) {
    const r = validateContract(c);
    if (!r.ok) {
        throw new Error(`Invalid contract: ${r.errors.join('; ')}`);
    }
}
/**
 * Check whether a Contract field has a non-default value. The IBKR class
 * uses sentinels (UNSET_DOUBLE for strike, '' for strings) — so "missing"
 * means "still at sentinel".
 */
function hasContractField(c, field) {
    const v = c[field];
    if (typeof v === 'string')
        return v !== '';
    if (typeof v === 'number')
        return v !== UNSET_DOUBLE;
    return v != null;
}
//# sourceMappingURL=contract-discipline.js.map
/**
 * Contract / Position output funnel.
 *
 * Phase 2 of the IBKR-as-truth refactor: every broker's `getPositions` and
 * contract-construction call goes through `buildContract` and `buildPosition`.
 * The functions enforce discipline at the broker output boundary:
 *
 *   - `buildContract` runs `assertContract` so any invalid output throws
 *     immediately. The error names the missing/wrong field — the alternative
 *     was bugs that surface days later as "why is OPT PnL wrong?"
 *   - `buildPosition` is the single multiplier-aware position constructor.
 *     If the broker has a pre-computed marketValue / unrealizedPnL from an
 *     upstream API (Alpaca, IBKR/TWS), we trust those. Otherwise we derive
 *     via `derivePositionMath`. Either way, `Position.multiplier` is always
 *     populated (defaults to `contract.multiplier || '1'`), so consumers
 *     can stop defending against optionality.
 */
import { Contract } from '@traderalice/ibkr';
import { assertContract } from '../contract-discipline.js';
import { derivePositionMath } from '../position-math.js';
/**
 * Construct a fully-validated IBKR Contract from broker-supplied fields.
 * Throws via `assertContract` if the result violates the SecType taxonomy
 * (e.g. an OPT without strike). All brokers' contract creation funnels
 * here — adding a new broker means matching this input shape, not
 * spelunking through the IBKR Contract class to remember which fields
 * matter.
 */
export function buildContract(input) {
    const c = new Contract();
    c.symbol = input.symbol;
    c.secType = input.secType;
    c.exchange = input.exchange;
    c.currency = input.currency;
    c.localSymbol = input.localSymbol ?? input.symbol;
    if (input.lastTradeDateOrContractMonth)
        c.lastTradeDateOrContractMonth = input.lastTradeDateOrContractMonth;
    if (input.strike !== undefined)
        c.strike = input.strike;
    if (input.right)
        c.right = input.right;
    if (input.multiplier)
        c.multiplier = input.multiplier;
    if (input.primaryExchange)
        c.primaryExchange = input.primaryExchange;
    if (input.conId !== undefined)
        c.conId = input.conId;
    if (input.tradingClass)
        c.tradingClass = input.tradingClass;
    if (input.description)
        c.description = input.description;
    assertContract(c);
    return c;
}
/**
 * Construct a canonical Position. Brokers either pass through pre-computed
 * marketValue/unrealizedPnL from upstream APIs (Alpaca / IBKR — already
 * multiplier-applied server-side) or omit them and let the builder derive
 * the math. Multiplier is always non-empty on output (the IBroker contract
 * promised this; previously brokers had to opt in, now the builder enforces).
 */
export function buildPosition(input) {
    const multiplier = input.multiplier
        ?? (input.contract.multiplier ? input.contract.multiplier : '1');
    // OPT/FOP positions with multiplier=1 are virtually always an upstream
    // decode bug — every real US equity option / futures option has a
    // contract multiplier > 1 (typically 100). A passing '1' here means the
    // broker either failed to fetch the multiplier or dropped it during
    // normalization; downstream marketValue / unrealizedPnL will be wrong
    // by ~100x. Refuse to construct the Position rather than ship a silent
    // 100x-underreported number.
    if ((input.contract.secType === 'OPT' || input.contract.secType === 'FOP')
        && (multiplier === '1' || multiplier === '')) {
        throw new Error(`buildPosition: ${input.contract.secType} ${input.contract.symbol ?? '?'} ` +
            `has multiplier='${multiplier}' — upstream broker decode is missing the contract ` +
            `multiplier. Position values would be off by ~100x.`);
    }
    // Either pass-through or derive — never both.
    let marketValue;
    let unrealizedPnL;
    if (input.marketValue !== undefined && input.unrealizedPnL !== undefined) {
        marketValue = input.marketValue;
        unrealizedPnL = input.unrealizedPnL;
    }
    else {
        const derived = derivePositionMath({
            quantity: input.quantity,
            marketPrice: input.marketPrice,
            avgCost: input.avgCost,
            multiplier,
            side: input.side,
        });
        marketValue = input.marketValue ?? derived.marketValue;
        unrealizedPnL = input.unrealizedPnL ?? derived.unrealizedPnL;
    }
    return {
        contract: input.contract,
        currency: input.currency,
        side: input.side,
        quantity: input.quantity,
        avgCost: input.avgCost,
        marketPrice: input.marketPrice,
        marketValue,
        unrealizedPnL,
        realizedPnL: input.realizedPnL,
        multiplier,
        ...(input.avgCostSource && { avgCostSource: input.avgCostSource }),
    };
}
//# sourceMappingURL=contract-builder.js.map
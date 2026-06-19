/**
 * Quant Calculator v2 — public entry.
 *
 * A bounded Python/pandas-subset expression language for technical analysis,
 * keyed by barId so the model can target a specific source (or mix sources in
 * one script). v1 (`calculateIndicator`) stays untouched. On failure, returns a
 * structured diagnostic (kind + position + suggestion) instead of throwing.
 */
import { parse } from './parser.js';
import { evaluate } from './evaluator.js';
import { CalcError } from './errors.js';
export async function runScript(script, deps, precision = 4) {
    try {
        const program = parse(script);
        const out = await evaluate(program, deps);
        return { value: round(out.value, precision), dataRange: out.dataRange };
    }
    catch (e) {
        if (e instanceof CalcError)
            return { error: e.diagnostic };
        throw e;
    }
}
function round(v, precision) {
    if (typeof v === 'number')
        return Number.isFinite(v) ? Number(v.toFixed(precision)) : v;
    if (typeof v === 'string')
        return v;
    if (Array.isArray(v))
        return v.map((x) => round(x, precision));
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, round(x, precision)]));
}
export { CalcError } from './errors.js';
//# sourceMappingURL=index.js.map
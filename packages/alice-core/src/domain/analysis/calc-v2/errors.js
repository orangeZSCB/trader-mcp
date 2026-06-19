/**
 * Quant Calculator v2 — structured diagnostics.
 *
 * The error object is a first-class part of the tool contract: when a script
 * doesn't run, the model gets a precise, actionable message (kind + position +
 * suggestion) so it can self-correct — the "Trading as Coding" loop.
 */
export class CalcError extends Error {
    diagnostic;
    constructor(d) {
        super(d.line != null ? `${d.message} (line ${d.line}${d.col != null ? `, col ${d.col}` : ''})` : d.message);
        this.name = 'CalcError';
        this.diagnostic = d;
    }
}
/** Levenshtein-based "did you mean" over a candidate set. Returns the closest
 *  candidate within a small edit distance, or undefined. */
export function didYouMean(name, candidates) {
    let best;
    let bestDist = Infinity;
    const lname = name.toLowerCase();
    for (const c of candidates) {
        const d = editDistance(lname, c.toLowerCase());
        if (d < bestDist) {
            bestDist = d;
            best = c;
        }
    }
    // Only suggest when it's a near miss (≤2 edits, or ≤ a third of the length).
    const threshold = Math.max(2, Math.floor(name.length / 3));
    return best !== undefined && bestDist <= threshold ? best : undefined;
}
function editDistance(a, b) {
    const m = a.length, n = b.length;
    if (m === 0)
        return n;
    if (n === 0)
        return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    let curr = new Array(n + 1);
    for (let i = 1; i <= m; i++) {
        curr[0] = i;
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
        }
        [prev, curr] = [curr, prev];
    }
    return prev[n];
}
//# sourceMappingURL=errors.js.map
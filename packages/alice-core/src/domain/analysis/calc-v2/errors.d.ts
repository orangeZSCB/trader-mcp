/**
 * Quant Calculator v2 — structured diagnostics.
 *
 * The error object is a first-class part of the tool contract: when a script
 * doesn't run, the model gets a precise, actionable message (kind + position +
 * suggestion) so it can self-correct — the "Trading as Coding" loop.
 */
export type CalcErrorKind = 'syntax' | 'unknown-function' | 'undeclared-name' | 'arity' | 'type' | 'insufficient-bars' | 'reflex';
export interface CalcDiagnostic {
    kind: CalcErrorKind;
    message: string;
    /** 1-based line in the script. */
    line?: number;
    /** 1-based column. */
    col?: number;
    /** Actionable next step, e.g. "use sma(s.close, 50)". */
    suggestion?: string;
}
export declare class CalcError extends Error {
    readonly diagnostic: CalcDiagnostic;
    constructor(d: CalcDiagnostic);
}
/** Levenshtein-based "did you mean" over a candidate set. Returns the closest
 *  candidate within a small edit distance, or undefined. */
export declare function didYouMean(name: string, candidates: readonly string[]): string | undefined;

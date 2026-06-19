/**
 * Quant Calculator v2 — public entry.
 *
 * A bounded Python/pandas-subset expression language for technical analysis,
 * keyed by barId so the model can target a specific source (or mix sources in
 * one script). v1 (`calculateIndicator`) stays untouched. On failure, returns a
 * structured diagnostic (kind + position + suggestion) instead of throwing.
 */
import { type CalcDeps, type CalcValue } from './evaluator.js';
import { type CalcDiagnostic } from './errors.js';
import type { DataSourceMeta } from '../indicator/types.js';
export interface RunResult {
    value?: CalcValue;
    /** Sources actually fetched, keyed by barId (source/provider/capability). */
    dataRange?: Record<string, DataSourceMeta>;
    /** Present iff the script failed — actionable for self-correction. */
    error?: CalcDiagnostic;
}
export declare function runScript(script: string, deps: CalcDeps, precision?: number): Promise<RunResult>;
export type { CalcDeps, CalcValue } from './evaluator.js';
export type { CalcDiagnostic, CalcErrorKind } from './errors.js';
export { CalcError } from './errors.js';

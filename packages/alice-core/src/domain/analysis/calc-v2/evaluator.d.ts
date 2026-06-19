/**
 * Quant Calculator v2 — evaluator.
 *
 * Walks the AST over a bound environment. `bars(...)` resolves through the
 * federated bar service (barId-keyed); indicator math is reused verbatim from
 * `../indicator/functions`. Total + side-effect-free: bindings are let* (each
 * may reference earlier ones); there is no mutation, control flow, or I/O.
 */
import type { Program } from './ast.js';
import type { DataSourceMeta } from '../indicator/types.js';
import type { BarService } from '../../market-data/bars/index.js';
export interface CalcDeps {
    barService: BarService;
}
/** A returnable value: a scalar, a string label, a named record (e.g. bbands),
 *  a positional panel (list), or a labeled panel (dict). Recursive so panels can
 *  nest. */
export type CalcValue = number | string | CalcValue[] | {
    [k: string]: CalcValue;
};
export interface CalcOutput {
    value: CalcValue;
    /** Sources actually fetched, keyed by barId. */
    dataRange: Record<string, DataSourceMeta>;
}
export declare function evaluate(program: Program, deps: CalcDeps): Promise<CalcOutput>;

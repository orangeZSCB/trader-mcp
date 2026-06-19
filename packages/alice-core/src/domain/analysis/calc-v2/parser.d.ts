/**
 * Quant Calculator v2 — recursive-descent parser.
 *
 * Grammar (precedence low→high):
 *   program    := (assign NEWLINE)* expr NEWLINE?
 *   assign     := NAME '=' expr
 *   expr       := additive
 *   additive   := multiplicative (('+' | '-') multiplicative)*
 *   multiplic. := unary (('*' | '/') unary)*
 *   unary      := '-'? postfix
 *   postfix    := primary ('.' NAME | '[' expr ']')*
 *   primary    := NUMBER | STRING | call | NAME | '(' expr ')'
 *   call       := NAME '(' (arg (',' arg)*)? ')'
 *   arg        := NAME '=' expr | expr
 */
import type { Program, Pos } from './ast.js';
export declare function parse(src: string): Program;
export type { Pos };

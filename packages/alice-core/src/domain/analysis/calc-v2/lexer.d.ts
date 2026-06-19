/**
 * Quant Calculator v2 — lexer.
 *
 * Tokenizes the Python-subset surface. Whitespace is insignificant except
 * newlines (statement separators); `#` starts a line comment.
 */
import type { Pos } from './ast.js';
export type TokenType = 'num' | 'str' | 'name' | '+' | '-' | '*' | '/' | '=' | '(' | ')' | '[' | ']' | '{' | '}' | ',' | '.' | ':' | 'newline' | 'eof';
export interface Token {
    type: TokenType;
    value: string;
    pos: Pos;
}
export declare function tokenize(src: string): Token[];

/**
 * Collection of misc tools — field decoding, validation, formatting.
 * Mirrors: ibapi/utils.py
 */
import Decimal from 'decimal.js';
export declare class BadMessage extends Error {
    constructor(text: string);
}
export declare class ClientException extends Error {
    code: number;
    msg: string;
    text: string;
    constructor(code: number, msg: string, text: string);
}
export declare const SHOW_UNSET = true;
/**
 * Central field decoder. Reads next field from an iterator and converts to the
 * requested type.
 *
 * Python's `decode(the_type, fields, show_unset)` — we use a string discriminator
 * instead of Python's type objects.
 */
export declare function decodeStr(fields: Iterator<string>): string;
export declare function decodeInt(fields: Iterator<string>, showUnset?: boolean): number;
export declare function decodeFloat(fields: Iterator<string>, showUnset?: boolean): number;
export declare function decodeBool(fields: Iterator<string>): boolean;
export declare function decodeDecimal(fields: Iterator<string>): Decimal;
export declare function decodeLong(fields: Iterator<string>, showUnset?: boolean): bigint;
export declare function isValidFloatValue(val: number): boolean;
export declare function isValidIntValue(val: number): boolean;
export declare function isValidLongValue(val: bigint): boolean;
export declare function isValidDecimalValue(val: Decimal): boolean;
export declare function floatMaxString(val: number | null | undefined): string;
export declare function longMaxString(val: bigint): string;
export declare function intMaxString(val: number): string;
export declare function decimalMaxString(val: Decimal): string;
export declare function isAsciiPrintable(val: string): boolean;
export declare function isPegBenchOrder(orderType: string): boolean;
export declare function isPegMidOrder(orderType: string): boolean;
export declare function isPegBestOrder(orderType: string): boolean;
export declare function currentTimeMillis(): number;
export declare function getTimeStrFromMillis(time: number): string;

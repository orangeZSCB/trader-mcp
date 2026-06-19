/**
 * Market data decoder handlers — text + protobuf.
 * Mirrors market-data related processXxxMsg / processXxxMsgProtoBuf from ibapi/decoder.py
 */
import type { Decoder } from './base.js';
export declare function applyMarketDataHandlers(decoder: Decoder): void;

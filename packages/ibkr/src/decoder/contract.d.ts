/**
 * Contract-related decoder handlers (text + protobuf).
 *
 * Message types:
 *   IN.CONTRACT_DATA (10)
 *   IN.BOND_CONTRACT_DATA (18)
 *   IN.CONTRACT_DATA_END (52)
 *   IN.SYMBOL_SAMPLES (79)
 *   IN.DELTA_NEUTRAL_VALIDATION (56)
 *   IN.MARKET_RULE (93)
 *
 * Mirrors: ibapi/decoder.py  (text handlers)
 *          ibapi/decoder.py + ibapi/decoder_utils.py  (protobuf handlers)
 */
import type { Decoder } from './base.js';
export declare function applyContractHandlers(decoder: Decoder): void;

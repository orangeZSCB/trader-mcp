/**
 * Execution-related decoder handlers (text + protobuf).
 *
 * Message types:
 *   IN.EXECUTION_DATA           (11)
 *   IN.EXECUTION_DATA_END       (55)
 *   IN.COMMISSION_AND_FEES_REPORT (59)
 */
import type { Decoder } from './base.js';
export declare function applyExecutionHandlers(decoder: Decoder): void;

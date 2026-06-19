/**
 * Order-related message handlers (text + protobuf).
 *
 * Message types handled:
 *   IN.ORDER_STATUS (3)
 *   IN.OPEN_ORDER (5)
 *   IN.OPEN_ORDER_END (53)
 *   IN.ORDER_BOUND (100)
 *   IN.COMPLETED_ORDER (101)
 *   IN.COMPLETED_ORDERS_END (102)
 *   IN.NEXT_VALID_ID (9)
 */
import type { Decoder } from './base.js';
export declare function applyOrderHandlers(decoder: Decoder): void;

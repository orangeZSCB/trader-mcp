/**
 * Shared encoding helpers for client request methods.
 * Reduces duplication across market-data, orders, account, historical.
 */
import type { Contract } from '../contract.js';
import type { EClient } from './base.js';
/**
 * Encode the standard contract fields used by most request methods.
 * Returns array of makeField() strings ready to join.
 */
export declare function encodeContract(client: EClient, contract: Contract, includeConId?: boolean): string[];
/**
 * Encode contract fields in the "legacy" order (primaryExchange always included,
 * no version gate). Used by some older-style methods.
 */
export declare function encodeContractLegacy(client: EClient, contract: Contract): string[];

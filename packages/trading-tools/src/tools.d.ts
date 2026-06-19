/**
 * AI Trading Tool Factory — pure tool shell layer
 *
 * Defines Zod schemas and AI tool descriptions.
 * All business logic lives in UnifiedTradingAccount.
 * Each execute function is a thin delegation to UTA methods.
 */
import { type Tool } from 'ai';
import type { UTAManagerSDK } from './sdk/index.js';
export declare function createTradingTools(manager: UTAManagerSDK): Record<string, Tool>;

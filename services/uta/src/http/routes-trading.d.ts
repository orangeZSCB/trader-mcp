import { Hono } from 'hono';
import type { UTAEngineContext } from '../types.js';
/** Unified trading routes — works with all account types via AccountManager */
export declare function createTradingRoutes(ctx: UTAEngineContext): Hono<import("hono/types").BlankEnv, import("hono/types").BlankSchema, "/">;

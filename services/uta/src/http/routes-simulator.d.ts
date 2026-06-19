/**
 * Simulator routes — HTTP control panel for MockBroker UTAs.
 *
 * Thin adapter over the simulator surface MockBroker exposes (setMarkPrice,
 * fillOrder, externalDeposit, etc.). The webui dev `/dev/simulator` tab
 * speaks this API; spec/curl use the same endpoints.
 *
 * Only operates on UTAs whose broker is a MockBroker — for any other broker
 * the routes return 400 "not a simulator". Real brokers shouldn't accept
 * god-view commands.
 *
 * Per the route-layer thinness convention: all撮合 / cost-basis / position
 * mutation logic stays in MockBroker; this file only translates HTTP →
 * broker method calls.
 */
import { Hono } from 'hono';
import type { UTAEngineContext } from '../types.js';
export declare function createSimulatorRoutes(ctx: UTAEngineContext): Hono<import("hono/types").BlankEnv, import("hono/types").BlankSchema, "/">;

/**
 * REST API setup using Hono.
 * Maps to: openbb_core/api/rest_api.py + platform_api/main.py
 *
 * Creates the Hono app with:
 * - CORS middleware
 * - Default credential injection middleware
 * - Error handling
 * - Health check endpoint
 * - /widgets.json endpoint (for OpenBB Workspace frontend)
 */
import { Hono } from 'hono';
import type { Credentials } from '../app/model/credentials.js';
/**
 * Create the Hono app with middleware configured.
 * Maps to: the FastAPI app creation in rest_api.py
 *
 * @param defaultCredentials - Default credentials injected into every request
 *                             (can be overridden per-request via X-OpenBB-Credentials header)
 */
export declare function createApp(defaultCredentials?: Credentials): Hono;
/**
 * Mount the /widgets.json endpoint on the app.
 * Maps to: @app.get("/widgets.json") in platform_api/main.py
 *
 * The widgets config is generated once at startup and cached.
 * This is the endpoint that the OpenBB Workspace frontend fetches
 * to discover available data widgets.
 *
 * @param app - The Hono app
 * @param widgetsJson - Pre-built widgets configuration
 */
export declare function mountWidgetsEndpoint(app: Hono, widgetsJson: Record<string, unknown>): void;
/**
 * Start the HTTP server.
 * Maps to: uvicorn.run() in rest_api.py
 */
export declare function startServer(app: Hono, port?: number): void;

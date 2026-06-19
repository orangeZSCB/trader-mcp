/**
 * Centralized filesystem path resolution.
 *
 * Two roots, distinguished by lifecycle owner:
 *
 *   USER_DATA_HOME    user-produced state (config, sessions, broker
 *                     git-like commits, brain files, etc.). Survives
 *                     app upgrades and reinstalls. Default: ~/.openalice —
 *                     ONE store shared by every topology (pnpm dev, pnpm
 *                     start, packaged Electron), so broker credentials and
 *                     trading state are configured once, not per checkout.
 *                     Guardians still inject OPENALICE_HOME explicitly so
 *                     parent and children never derive the root twice;
 *                     `OPENALICE_HOME=$PWD pnpm dev` pins a checkout-local
 *                     store when an experiment shouldn't touch real data.
 *                     The `data/` subtree under it is the portable part
 *                     (back up / migrate / share THAT); machine-bound
 *                     secrets like sealing.key live beside it, not in it.
 *
 *   APP_RESOURCES_HOME   files shipped with the app (default templates,
 *                        the UI bundle). Replaced wholesale on app
 *                        upgrade. In production: .app/Contents/Resources/.
 *                        In dev: unset → repo root.
 *
 * Why two homes: user data must survive .app deletion and version
 * upgrades, while app resources must be replaced cleanly on upgrade.
 * Conflating them either loses user data on upgrade or keeps stale
 * default templates around forever.
 */
/** Path under `data/` — user-produced state. */
export declare function dataPath(...parts: string[]): string;
/** Path under `default/` — shipped templates (persona, heartbeat, skills). */
export declare function defaultPath(...parts: string[]): string;
/** Path to the UI bundle root (served via Hono's serveStatic). */
export declare function uiBundlePath(): string;
/**
 * Path to the workspace bootstrap templates (chat / auto-quant / etc).
 *
 * Previously resolved via `import.meta.url` from src/workspaces/config.ts,
 * which only worked under tsx because the bundled dist/main.js has
 * import.meta.url pointing at the bundle file (the templates aren't next
 * to it). Routing through APP_RESOURCES_HOME makes this work the same way
 * default/ does: dev points to repo source, packaged points to wherever
 * the bundler copied the templates inside .app/Contents/Resources/.
 *
 * NOTE: For packaged .app distribution, build.files in package.json must
 * include `src/workspaces/templates/**` (currently DOES NOT — workspace
 * spawning will fail until that's added; tracked in TODO).
 */
export declare function templatesPath(): string;
/**
 * Dir holding the workspace-local `alice` CLI shim, prepended to each PTY's
 * PATH so a native agent can run `alice ...` from its shell. A single shared,
 * env-driven script (it reads OPENALICE_MCP_URL + AQ_WS_ID at runtime), so it
 * is NOT written into individual workspaces and never enters their git repos.
 *
 * Rides APP_RESOURCES_HOME exactly like templatesPath(): repo source in dev,
 * the bundler-copied location in a packaged .app. The same packaging caveat
 * applies — build.files in package.json must ship `src/workspaces/cli/**`.
 */
export declare function cliBinPath(): string;
/** Effective USER_DATA_HOME — exported for diagnostics / migration logic. */
export declare const userDataHome: string;
/** The built-in default home (~/.openalice), independent of env overrides.
 *  Used by legacy-data adoption notices to phrase "where data lives now". */
export declare const defaultUserDataHome: string;
/** Effective APP_RESOURCES_HOME — exported for diagnostics. */
export declare const appResourcesHome: string;

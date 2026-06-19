/**
 * UTA service entry — co-located v1.
 *
 * Owns the trading domain (broker connections, git-like approval state,
 * snapshots, FX). Bind 127.0.0.1-only — Alice talks to UTA via
 * `OPENALICE_UTA_URL`, never exposed externally.
 *
 * Startup path is also the reload path: when broker config changes, Alice
 * touches `data/control/restart-uta.flag`, Guardian SIGTERMs this process
 * and respawns. There is no in-process hot-reload code path.
 */
export {};

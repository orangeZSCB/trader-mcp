/**
 * Migration runner — apply pending migrations recorded in
 * data/config/_meta.json.
 *
 * Snapshot before each migration: copies data/config/ to
 * data/_backup/{ts}-pre-{id}/config/. If a migration throws, the
 * journal is NOT updated for that id and startup halts; the user
 * can restore from the snapshot manually.
 *
 * Larger trees (data/sessions/, data/news-collector/, etc.) are NOT
 * snapshotted by default. A migration that touches them must declare
 * the directory in `affects` and surface a user warning ahead of
 * time (warning UI is out of scope for the framework).
 */
import type { Migration, MigrationContext } from './types.js';
export declare function getAppVersion(): string;
export declare function makeDefaultContext(): MigrationContext;
export interface RunnerOpts {
    /** Override the default file-system context (used in tests). */
    ctx?: MigrationContext;
    /** Override the default registry (used in tests). */
    registry?: Migration[];
    /** Override the snapshot strategy (used in tests). */
    snapshot?: (label: string) => Promise<string | null>;
}
export declare function runMigrations(opts?: RunnerOpts): Promise<void>;

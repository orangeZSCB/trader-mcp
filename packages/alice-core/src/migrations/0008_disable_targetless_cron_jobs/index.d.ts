/**
 * 0008_disable_targetless_cron_jobs — disable pre-headless cron jobs that
 * have no target workspace.
 *
 * Cron jobs used to fire into the in-process AgentWork path (a prompt with no
 * workspace). That path is gone: a cron job now dispatches a headless run into
 * a chosen workspace (`workspaceId` + `agent`). A legacy job carries no
 * `workspaceId`, so on every fire the new listener would log a loud "no target
 * workspace" error and do nothing — the exact orphan-cron noise the 0004
 * incident warns about.
 *
 * This migration disables (does NOT delete) any enabled job lacking a
 * `workspaceId`, so it stops firing on upgrade. The job stays visible in the
 * Automation UI for the user to re-target (assign a workspace + agent) or
 * delete. Internal `__*__` jobs were already pruned by 0004.
 *
 * Idempotent: re-running finds no enabled-and-targetless jobs and leaves the
 * file byte-for-byte unchanged. No-op when the file doesn't exist.
 */
import type { Migration } from '../types.js';
/**
 * Disable enabled jobs with no target workspace, write back atomically.
 * Exported so the spec can drive it against a temp path. Returns the
 * names/ids of the jobs it disabled.
 */
export declare function disableTargetlessCronJobs(jobsFilePath?: string): Promise<{
    disabled: string[];
}>;
export declare const migration: Migration;

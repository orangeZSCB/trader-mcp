/**
 * Git state persistence — load/save Trading-as-Git commit history.
 *
 * Extracted from main.ts. Pure functions + file IO, no instance dependencies.
 */
import type { GitExportState } from './git/types.js';
/** Read saved git state from disk, trying primary path then legacy fallback. */
export declare function loadGitState(accountId: string): Promise<GitExportState | undefined>;
/** Create a callback that persists git state to disk on each commit. */
export declare function createGitPersister(accountId: string): (state: GitExportState) => Promise<void>;

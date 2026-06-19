/**
 * 0009_seal_broker_credentials — seal the plaintext accounts.json at rest.
 *
 * Broker credentials lived as plaintext JSON in data/config/accounts.json.
 * The store is now sealed (AES-256-GCM envelope, machine-bound key at
 * <userDataHome>/sealing.key — see src/core/sealing.ts). The read/write
 * path already handles both shapes; this migration makes sealing EAGER at
 * first boot after upgrade, so plaintext credentials don't linger on disk
 * until the next config change happens to rewrite the file.
 *
 * Also tightens the file to owner-only (0600), matching every future write.
 *
 * Idempotent: a sealed envelope (or a missing file) is a no-op. Non-array
 * non-envelope content is left untouched for a human to look at — sealing
 * unrecognized bytes would just bury the problem.
 */
import type { Migration } from '../types.js';
export declare const migration: Migration;

/**
 * At-rest sealing for secret-bearing config files (broker credentials).
 *
 * AES-256-GCM envelope around the file's JSON payload. The key is a random
 * 32-byte machine-bound secret at `<userDataHome>/sealing.key` — deliberately
 * OUTSIDE the portable `data/` subtree, so backing up / sharing / syncing
 * `data/` never carries the material needed to read the credentials inside
 * it. Auto-generated on first seal; zero user interaction.
 *
 * What this buys (honest threat model):
 *   - `data/` leaving the machine (backup, cloud sync, "send me your data
 *     dir" debugging) no longer leaks broker keys.
 *   - casual reads — grep, screenshots, an agent `cat`ing the file — see
 *     ciphertext.
 * What it does NOT buy: same-user malware or a compromised Alice process
 * can read the key file exactly like we do. The structural answer to that
 * is the detached-UTA split, not at-rest crypto.
 *
 * The envelope is versioned ($sealed/alg) so the key can later move into an
 * OS keychain (Electron safeStorage) without a format break.
 */
declare const ALG = "aes-256-gcm";
export interface SealedEnvelope {
    $sealed: 1;
    alg: typeof ALG;
    iv: string;
    tag: string;
    data: string;
}
/** Raised when a sealed file exists but its key doesn't (data/ moved to a
 *  new machine, key file deleted) or the ciphertext fails authentication. */
export declare class UnsealError extends Error {
    readonly cause?: unknown | undefined;
    constructor(message: string, cause?: unknown | undefined);
}
export declare function sealingKeyPath(): string;
export declare function isSealedEnvelope(value: unknown): value is SealedEnvelope;
/** Encrypt a JSON-serializable value into an envelope. Creates the sealing
 *  key on first use. */
export declare function seal(value: unknown): Promise<SealedEnvelope>;
/** Decrypt an envelope back to its JSON value. Throws UnsealError when the
 *  key is missing or the ciphertext doesn't authenticate. */
export declare function unseal<T = unknown>(envelope: SealedEnvelope): Promise<T>;
export {};

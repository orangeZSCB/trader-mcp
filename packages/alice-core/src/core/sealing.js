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
import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto';
import { chmod, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { userDataHome } from './paths.js';
const ALG = 'aes-256-gcm';
const KEY_BYTES = 32;
const IV_BYTES = 12;
/** Raised when a sealed file exists but its key doesn't (data/ moved to a
 *  new machine, key file deleted) or the ciphertext fails authentication. */
export class UnsealError extends Error {
    cause;
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'UnsealError';
    }
}
export function sealingKeyPath() {
    return resolve(userDataHome, 'sealing.key');
}
export function isSealedEnvelope(value) {
    return (typeof value === 'object' && value !== null &&
        value['$sealed'] === 1 &&
        typeof value['iv'] === 'string' &&
        typeof value['tag'] === 'string' &&
        typeof value['data'] === 'string');
}
async function readKey() {
    try {
        const raw = (await readFile(sealingKeyPath(), 'utf-8')).trim();
        const key = Buffer.from(raw, 'base64');
        if (key.length !== KEY_BYTES) {
            throw new UnsealError(`sealing key at ${sealingKeyPath()} is malformed (${key.length} bytes after base64-decode, expected ${KEY_BYTES})`);
        }
        return key;
    }
    catch (err) {
        if (err instanceof Error && 'code' in err && err.code === 'ENOENT') {
            return undefined;
        }
        throw err;
    }
}
async function loadOrCreateKey() {
    const existing = await readKey();
    if (existing)
        return existing;
    const key = randomBytes(KEY_BYTES);
    const path = sealingKeyPath();
    await mkdir(dirname(path), { recursive: true });
    // Owner-only, same belt-and-braces as auth/token-store.ts — writeFile's
    // `mode` is ignored on some platforms, so chmod again best-effort.
    await writeFile(path, key.toString('base64') + '\n', { mode: 0o600 });
    await chmod(path, 0o600).catch(() => { });
    return key;
}
/** Encrypt a JSON-serializable value into an envelope. Creates the sealing
 *  key on first use. */
export async function seal(value) {
    const key = await loadOrCreateKey();
    const iv = randomBytes(IV_BYTES);
    const cipher = createCipheriv(ALG, key, iv);
    const plaintext = Buffer.from(JSON.stringify(value), 'utf-8');
    const data = Buffer.concat([cipher.update(plaintext), cipher.final()]);
    return {
        $sealed: 1,
        alg: ALG,
        iv: iv.toString('base64'),
        tag: cipher.getAuthTag().toString('base64'),
        data: data.toString('base64'),
    };
}
/** Decrypt an envelope back to its JSON value. Throws UnsealError when the
 *  key is missing or the ciphertext doesn't authenticate. */
export async function unseal(envelope) {
    if (envelope.alg !== ALG) {
        throw new UnsealError(`unsupported sealing algorithm "${envelope.alg}" — this build only knows ${ALG}`);
    }
    const key = await readKey();
    if (!key) {
        throw new UnsealError(`sealed file requires the machine key at ${sealingKeyPath()}, which does not exist — ` +
            `if this data/ was copied from another machine, re-enter the credentials there`);
    }
    try {
        const decipher = createDecipheriv(ALG, key, Buffer.from(envelope.iv, 'base64'));
        decipher.setAuthTag(Buffer.from(envelope.tag, 'base64'));
        const plaintext = Buffer.concat([
            decipher.update(Buffer.from(envelope.data, 'base64')),
            decipher.final(),
        ]);
        return JSON.parse(plaintext.toString('utf-8'));
    }
    catch (err) {
        throw new UnsealError(`failed to unseal: ciphertext does not authenticate against ${sealingKeyPath()} ` +
            `(key replaced, or file corrupted)`, err);
    }
}
//# sourceMappingURL=sealing.js.map
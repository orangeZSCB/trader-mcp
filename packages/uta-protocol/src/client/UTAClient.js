/**
 * UTA client SDK — HTTP transport from Alice to the UTA service.
 *
 * `createUTAClient({ baseUrl })` returns a low-level HTTP helper. Higher-
 * level adapters (`UTAManagerSDK`, `UTAAccountSDK` in
 * `src/services/uta-client/`) layer typed domain operations on top.
 *
 * Errors are normalized into JS Errors. Future iterations may add zod-
 * validation per endpoint and `WireBrokerError` round-trip for typed
 * downstream error handling in the AI tool layer.
 */
export class UTAHttpError extends Error {
    status;
    body;
    constructor(status, body, message) {
        super(message);
        this.status = status;
        this.body = body;
        this.name = 'UTAHttpError';
    }
}
export function createUTAClient(options) {
    const baseUrl = options.baseUrl.replace(/\/$/, '');
    const fetchImpl = options.fetch ?? globalThis.fetch;
    const timeoutMs = options.timeoutMs ?? 15_000;
    function buildUrl(path, params) {
        const url = new URL(`${baseUrl}${path.startsWith('/') ? path : `/${path}`}`);
        if (params) {
            for (const [k, v] of Object.entries(params)) {
                if (v !== undefined)
                    url.searchParams.set(k, String(v));
            }
        }
        return url.toString();
    }
    async function request(method, path, opts = {}) {
        const url = buildUrl(path, opts.params);
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);
        const signal = opts.signal ?? controller.signal;
        const init = {
            method,
            headers: { 'content-type': 'application/json' },
            signal,
        };
        if (opts.body !== undefined)
            init.body = JSON.stringify(opts.body);
        try {
            const res = await fetchImpl(url, init);
            const text = await res.text();
            const body = text ? safeJSON(text) : undefined;
            if (!res.ok) {
                const msg = typeof body === 'object' && body && 'error' in body
                    ? String(body.error)
                    : `UTA ${method} ${path} returned ${res.status}`;
                throw new UTAHttpError(res.status, body, msg);
            }
            return body;
        }
        finally {
            clearTimeout(timer);
        }
    }
    return {
        baseUrl,
        request,
        get: (path, params) => request('GET', path, { params }),
        post: (path, body) => request('POST', path, { body }),
        put: (path, body) => request('PUT', path, { body }),
        delete: (path) => request('DELETE', path),
    };
}
function safeJSON(text) {
    try {
        return JSON.parse(text);
    }
    catch {
        return text;
    }
}
//# sourceMappingURL=UTAClient.js.map
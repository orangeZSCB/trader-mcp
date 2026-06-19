/**
 * Hub-proxy credential sentinel.
 *
 * A credential value of the form `hub:<baseUrl>` means "no user key —
 * route this provider's requests through the TraderHub keyed proxy at
 * <baseUrl> instead". The hub injects its own key upstream; the fetcher
 * keeps building paths/params/transforms exactly as for the real origin,
 * so response shapes cannot drift.
 *
 * Only origin-centralized providers participate (fred / eia / bls).
 */
export function resolveKeyedOrigin(rawKey, realOrigin, providerSegment) {
    const value = (rawKey ?? '').trim();
    if (value.startsWith('hub:')) {
        const hub = value.slice('hub:'.length).replace(/\/+$/, '');
        return { key: '', origin: `${hub}/api/proxy/${providerSegment}` };
    }
    return { key: value, origin: realOrigin };
}
//# sourceMappingURL=hub-proxy.js.map
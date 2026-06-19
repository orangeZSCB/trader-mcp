/**
 * Maps OpenAlice provider key names to the SDK's credential field names.
 *
 * Field names follow the provider's auto-prefixed credential
 * (`Provider` constructor at packages/opentypebb/src/core/provider/abstract/provider.ts:54-59
 * prepends the provider name to declared credentials, so e.g.
 * `federal_reserve` provider with `credentials: ['api_key']` ends up
 * requiring `federal_reserve_api_key`). Only `fred` (user-key) ↔
 * `federal_reserve` (provider-name) diverges from the 1:1 pattern.
 *
 * (The HTTP header path — X-OpenBB-Credentials for the external Python
 * sidecar — died with the openbb-api backend.)
 */
/**
 * Build credentials object for the in-process OpenTypeBB SDK executor.
 * Field names follow the SDK's auto-prefixed credential convention
 * (provider name + cred name) — see file header for why this differs
 * from the HTTP header path.
 */
export declare function buildSDKCredentials(providerKeys: Record<string, string | undefined> | undefined, hub?: {
    enabled: boolean;
    baseUrl: string;
}): Record<string, string>;

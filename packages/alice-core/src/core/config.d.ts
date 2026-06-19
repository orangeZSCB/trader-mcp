import { z } from 'zod';
import { newsCollectorSchema } from '../domain/news/config.js';
declare const engineSchema: z.ZodObject<{
    pairs: z.ZodDefault<z.ZodArray<z.ZodString>>;
    interval: z.ZodDefault<z.ZodNumber>;
    port: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
/** @deprecated Legacy flat schema — used only for migration detection. */
export declare const aiProviderLegacySchema: z.ZodObject<{
    backend: z.ZodDefault<z.ZodEnum<{
        "claude-code": "claude-code";
        "vercel-ai-sdk": "vercel-ai-sdk";
        "agent-sdk": "agent-sdk";
        codex: "codex";
    }>>;
    provider: z.ZodDefault<z.ZodString>;
    model: z.ZodDefault<z.ZodString>;
    baseUrl: z.ZodOptional<z.ZodString>;
    loginMethod: z.ZodDefault<z.ZodEnum<{
        "api-key": "api-key";
        claudeai: "claudeai";
        "codex-oauth": "codex-oauth";
    }>>;
    apiKeys: z.ZodDefault<z.ZodObject<{
        anthropic: z.ZodOptional<z.ZodString>;
        openai: z.ZodOptional<z.ZodString>;
        google: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AIBackend = 'agent-sdk' | 'codex' | 'vercel-ai-sdk';
export declare const credentialVendorEnum: z.ZodEnum<{
    custom: "custom";
    anthropic: "anthropic";
    openai: "openai";
    google: "google";
    minimax: "minimax";
    glm: "glm";
    kimi: "kimi";
    deepseek: "deepseek";
}>;
export type CredentialVendor = z.infer<typeof credentialVendorEnum>;
export declare const credentialAuthTypeEnum: z.ZodEnum<{
    subscription: "subscription";
    "api-key": "api-key";
}>;
export type CredentialAuthType = z.infer<typeof credentialAuthTypeEnum>;
/**
 * The wire protocol the credential's endpoint speaks. Load-bearing, NOT
 * derivable from baseUrl alone — OpenAI Chat Completions and Responses share
 * one base URL (api.openai.com/v1), so only this field distinguishes them. Also
 * tells injection how to configure the consuming adapter. Mirrors the
 * `WireShape` union in ai-providers/preset-catalog.ts (kept in sync by hand —
 * 3 stable values; core must not depend on the ai-providers layer).
 */
export declare const credentialWireShapeEnum: z.ZodEnum<{
    anthropic: "anthropic";
    "openai-chat": "openai-chat";
    "openai-responses": "openai-responses";
}>;
export type CredentialWireShape = z.infer<typeof credentialWireShapeEnum>;
export declare const credentialSchema: z.ZodObject<{
    vendor: z.ZodEnum<{
        custom: "custom";
        anthropic: "anthropic";
        openai: "openai";
        google: "google";
        minimax: "minimax";
        glm: "glm";
        kimi: "kimi";
        deepseek: "deepseek";
    }>;
    authType: z.ZodEnum<{
        subscription: "subscription";
        "api-key": "api-key";
    }>;
    apiKey: z.ZodOptional<z.ZodString>;
    wires: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
        anthropic: "anthropic";
        "openai-chat": "openai-chat";
        "openai-responses": "openai-responses";
    }> & z.core.$partial, z.ZodString>>;
    baseUrl: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>>;
    wireShape: z.ZodOptional<z.ZodEnum<{
        anthropic: "anthropic";
        "openai-chat": "openai-chat";
        "openai-responses": "openai-responses";
    }>>;
}, z.core.$strip>;
export type Credential = z.infer<typeof credentialSchema>;
/**
 * The wire→baseUrl map for a credential, tolerating legacy creds that still
 * carry the flat `{baseUrl, wireShape}` instead of `wires`. No migration needed:
 * old creds are upgraded transparently on read.
 */
export declare function credentialWires(cred: Credential): Partial<Record<CredentialWireShape, string>>;
export declare const aiProviderSchema: z.ZodObject<{
    apiKeys: z.ZodDefault<z.ZodObject<{
        anthropic: z.ZodOptional<z.ZodString>;
        openai: z.ZodOptional<z.ZodString>;
        google: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    credentials: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodObject<{
        vendor: z.ZodEnum<{
            custom: "custom";
            anthropic: "anthropic";
            openai: "openai";
            google: "google";
            minimax: "minimax";
            glm: "glm";
            kimi: "kimi";
            deepseek: "deepseek";
        }>;
        authType: z.ZodEnum<{
            subscription: "subscription";
            "api-key": "api-key";
        }>;
        apiKey: z.ZodOptional<z.ZodString>;
        wires: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
            anthropic: "anthropic";
            "openai-chat": "openai-chat";
            "openai-responses": "openai-responses";
        }> & z.core.$partial, z.ZodString>>;
        baseUrl: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>>;
        wireShape: z.ZodOptional<z.ZodEnum<{
            anthropic: "anthropic";
            "openai-chat": "openai-chat";
            "openai-responses": "openai-responses";
        }>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type AIProviderConfig = z.infer<typeof aiProviderSchema>;
declare const agentSchema: z.ZodObject<{
    maxSteps: z.ZodDefault<z.ZodNumber>;
    evolutionMode: z.ZodDefault<z.ZodBoolean>;
    claudeCode: z.ZodDefault<z.ZodObject<{
        allowedTools: z.ZodOptional<z.ZodArray<z.ZodString>>;
        disallowedTools: z.ZodDefault<z.ZodArray<z.ZodString>>;
        maxTurns: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const cryptoSchema: z.ZodObject<{
    provider: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"ccxt">;
        exchange: z.ZodString;
        apiKey: z.ZodOptional<z.ZodString>;
        apiSecret: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        sandbox: z.ZodDefault<z.ZodBoolean>;
        demoTrading: z.ZodDefault<z.ZodBoolean>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$loose>, z.ZodObject<{
        type: z.ZodLiteral<"none">;
    }, z.core.$strip>], "type">>;
    guards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        options: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
declare const securitiesSchema: z.ZodObject<{
    provider: z.ZodDefault<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"alpaca">;
        apiKey: z.ZodOptional<z.ZodString>;
        secretKey: z.ZodOptional<z.ZodString>;
        paper: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"none">;
    }, z.core.$strip>], "type">>;
    guards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        options: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
declare const marketDataSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    providers: z.ZodDefault<z.ZodObject<{
        equity: z.ZodDefault<z.ZodString>;
        crypto: z.ZodDefault<z.ZodString>;
        currency: z.ZodDefault<z.ZodString>;
        commodity: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>>;
    providerKeys: z.ZodDefault<z.ZodObject<{
        fred: z.ZodOptional<z.ZodString>;
        fmp: z.ZodOptional<z.ZodString>;
        eia: z.ZodOptional<z.ZodString>;
        bls: z.ZodOptional<z.ZodString>;
        nasdaq: z.ZodOptional<z.ZodString>;
        tradingeconomics: z.ZodOptional<z.ZodString>;
        econdb: z.ZodOptional<z.ZodString>;
        intrinio: z.ZodOptional<z.ZodString>;
        benzinga: z.ZodOptional<z.ZodString>;
        tiingo: z.ZodOptional<z.ZodString>;
        biztoc: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    hub: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        baseUrl: z.ZodDefault<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const compactionSchema: z.ZodObject<{
    maxContextTokens: z.ZodDefault<z.ZodNumber>;
    maxOutputTokens: z.ZodDefault<z.ZodNumber>;
    autoCompactBuffer: z.ZodDefault<z.ZodNumber>;
    microcompactKeepRecent: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
/**
 * MCP server config — exposes OpenAlice's ToolCenter to external MCP
 * clients (Claude Desktop, codex inside workspaces, etc.). Lives at the
 * top level of Config rather than under `connectors:` because it's an
 * export direction (ToolCenter → outside), not a chat-input connector.
 * `connectors.mcpAsk` is the actual chat-shaped MCP-as-input flavour
 * and stays in connectors.
 */
declare const mcpSchema: z.ZodDefault<z.ZodObject<{
    port: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>>;
declare const connectorsSchema: z.ZodObject<{
    web: z.ZodDefault<z.ZodObject<{
        port: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
    mcpAsk: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        port: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    telegram: z.ZodDefault<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        botToken: z.ZodOptional<z.ZodString>;
        botUsername: z.ZodOptional<z.ZodString>;
        chatIds: z.ZodDefault<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const snapshotSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    every: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
declare const tradingSchema: z.ZodObject<{
    observeExternalOrdersEvery: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
export declare const toolsSchema: z.ZodObject<{
    disabled: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
declare const webhookTokenSchema: z.ZodObject<{
    id: z.ZodString;
    token: z.ZodString;
    createdAt: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export declare const webhookSchema: z.ZodObject<{
    tokens: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        token: z.ZodString;
        createdAt: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type WebhookToken = z.infer<typeof webhookTokenSchema>;
export type WebhookConfig = z.infer<typeof webhookSchema>;
export declare const webSubchannelSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    systemPrompt: z.ZodOptional<z.ZodString>;
    profile: z.ZodOptional<z.ZodString>;
    disabledTools: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const webSubchannelsSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    systemPrompt: z.ZodOptional<z.ZodString>;
    profile: z.ZodOptional<z.ZodString>;
    disabledTools: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>;
export type WebChannel = z.infer<typeof webSubchannelSchema>;
/**
 * One Unified Trading Account. The user-facing concept — one preset
 * (OKX, Bybit, IBKR, …) plus credentials, guards, and an enabled flag.
 *
 * Distinct from `AccountInfo` (which is broker-side: cash, equity,
 * margin returned by `IBroker.getAccount()`). Two different "account"s.
 */
export declare const utaConfigSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    presetId: z.ZodString;
    enabled: z.ZodDefault<z.ZodBoolean>;
    guards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        options: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>>>;
    presetConfig: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    ephemeral: z.ZodOptional<z.ZodBoolean>;
    keyless: z.ZodDefault<z.ZodBoolean>;
    readOnly: z.ZodDefault<z.ZodBoolean>;
    editable: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export declare const utasFileSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    presetId: z.ZodString;
    enabled: z.ZodDefault<z.ZodBoolean>;
    guards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        options: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.core.$strip>>>;
    presetConfig: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    ephemeral: z.ZodOptional<z.ZodBoolean>;
    keyless: z.ZodDefault<z.ZodBoolean>;
    readOnly: z.ZodDefault<z.ZodBoolean>;
    editable: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>>;
export type UTAConfig = z.infer<typeof utaConfigSchema>;
export type Config = {
    engine: z.infer<typeof engineSchema>;
    agent: z.infer<typeof agentSchema>;
    crypto: z.infer<typeof cryptoSchema>;
    securities: z.infer<typeof securitiesSchema>;
    marketData: z.infer<typeof marketDataSchema>;
    compaction: z.infer<typeof compactionSchema>;
    aiProvider: z.infer<typeof aiProviderSchema>;
    snapshot: z.infer<typeof snapshotSchema>;
    trading: z.infer<typeof tradingSchema>;
    mcp: z.infer<typeof mcpSchema>;
    connectors: z.infer<typeof connectorsSchema>;
    news: z.infer<typeof newsCollectorSchema>;
    tools: z.infer<typeof toolsSchema>;
    webhook: z.infer<typeof webhookSchema>;
};
export declare function loadConfig(): Promise<Config>;
export declare function readUTAsConfig(): Promise<UTAConfig[]>;
export declare function writeUTAsConfig(utas: UTAConfig[]): Promise<void>;
/**
 * Wipe a UTA's persistent trading state (`data/trading/<id>/`). Used when
 * destroying ephemeral UTAs — boot-time purge AND mid-session DELETE both
 * funnel here so commit history / snapshots don't outlive the UTA.
 *
 * No-op if the directory doesn't exist; never touches `data/config/`.
 */
export declare function wipeUTATradingData(id: string): Promise<void>;
/**
 * Purge ephemeral UTAs at server startup: remove their entries from
 * `accounts.json` AND wipe their `data/trading/<id>/` dirs. Called once
 * from the boot path before UTAManager starts initializing UTAs, so
 * ephemeral residue from the previous session never reaches the manager.
 *
 * Returns the surviving non-ephemeral UTAs (caller iterates these for
 * normal init).
 */
export declare function purgeEphemeralUTAs(utas: UTAConfig[]): Promise<UTAConfig[]>;
/** Read agent config from disk (called per-request for hot-reload). */
export declare function readAgentConfig(): Promise<{
    maxSteps: number;
    evolutionMode: boolean;
    claudeCode: {
        disallowedTools: string[];
        maxTurns: number;
        allowedTools?: string[] | undefined;
    };
}>;
/** Read AI provider config from disk (called per-request for hot-reload). */
export declare function readAIProviderConfig(): Promise<{
    apiKeys: {
        anthropic?: string | undefined;
        openai?: string | undefined;
        google?: string | undefined;
    };
    credentials: Record<string, {
        vendor: "custom" | "anthropic" | "openai" | "google" | "minimax" | "glm" | "kimi" | "deepseek";
        authType: "subscription" | "api-key";
        apiKey?: string | undefined;
        wires?: Partial<Record<"anthropic" | "openai-chat" | "openai-responses", string>> | undefined;
        baseUrl?: string | undefined;
        wireShape?: "anthropic" | "openai-chat" | "openai-responses" | undefined;
    }>;
}>;
/** Read market data config from disk (called per-request for hot-reload). */
export declare function readMarketDataConfig(): Promise<{
    enabled: boolean;
    providers: {
        equity: string;
        crypto: string;
        currency: string;
        commodity: string;
    };
    providerKeys: {
        fred?: string | undefined;
        fmp?: string | undefined;
        eia?: string | undefined;
        bls?: string | undefined;
        nasdaq?: string | undefined;
        tradingeconomics?: string | undefined;
        econdb?: string | undefined;
        intrinio?: string | undefined;
        benzinga?: string | undefined;
        tiingo?: string | undefined;
        biztoc?: string | undefined;
    };
    hub: {
        enabled: boolean;
        baseUrl: string;
    };
}>;
/** Read tools config from disk (called per-request for hot-reload). */
export declare function readToolsConfig(): Promise<{
    disabled: string[];
}>;
/** Read connectors config from disk (called per-request for hot-reload). */
export declare function readConnectorsConfig(): Promise<{
    web: {
        port: number;
    };
    mcpAsk: {
        enabled: boolean;
        port?: number | undefined;
    };
    telegram: {
        enabled: boolean;
        chatIds: number[];
        botToken?: string | undefined;
        botUsername?: string | undefined;
    };
}>;
/** Read webhook config from disk (called per-request so token rotation
 *  takes effect without restart). */
export declare function readWebhookConfig(): Promise<{
    tokens: {
        id: string;
        token: string;
        createdAt: number;
    }[];
}>;
/** Read a credential by slug. Throws if missing. */
export declare function resolveCredential(slug: string): Promise<Credential>;
/** Read all credentials as a slug-keyed map. */
export declare function readCredentials(): Promise<Record<string, Credential>>;
/** Write a single credential (create or update). */
export declare function writeCredential(slug: string, credential: Credential): Promise<void>;
/**
 * Add a credential to the central store. Dedups by {vendor, authType, apiKey} —
 * one key is one account, regardless of how many wires/endpoints it can drive —
 * so re-adding a key you already have (even with a different/newer wire set)
 * reuses the slug and UPGRADES its wires in place rather than duplicating.
 * Returns the slug.
 *
 * Standalone counterpart to `extractCredentialFromProfile` for credentials that
 * don't come from a profile — e.g. the workspace AI-config modal's "save to
 * Alice" path.
 */
export declare function addCredential(credential: Credential): Promise<string>;
/** Delete a credential from the vault. */
export declare function deleteCredential(slug: string): Promise<void>;
export type ConfigSection = keyof Config;
/** All valid config section names (derived from sectionSchemas). */
export declare const validSections: ConfigSection[];
/** Validate and write a config section to disk. Returns the validated config. */
export declare function writeConfigSection(section: ConfigSection, data: unknown): Promise<unknown>;
/** Read web sub-channel definitions from disk. Returns empty array if file missing. */
export declare function readWebSubchannels(): Promise<WebChannel[]>;
/** Write web sub-channel definitions to disk. */
export declare function writeWebSubchannels(channels: WebChannel[]): Promise<void>;
export {};

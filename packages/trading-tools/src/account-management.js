/**
 * Account Management Tools
 *
 * addAccount / removeAccount / listAccounts:
 *   让 AI agent 能够动态管理交易账户配置。
 *   账户配置使用 AES-256-GCM 加密存储。
 */
import { tool } from 'ai';
import { z } from 'zod';
import { readFile, writeFile } from 'node:fs/promises';
import { seal, unseal, isSealedEnvelope } from '@openalice-trading/alice-core/core/sealing.js';
import { dataPath } from '@openalice-trading/alice-core/core/paths.js';
async function readAccounts() {
    const path = dataPath('config', 'accounts.json');
    try {
        const content = await readFile(path, 'utf-8');
        const parsed = JSON.parse(content);
        if (isSealedEnvelope(parsed)) {
            const accounts = await unseal(parsed);
            return accounts;
        }
        // 未加密的格式（兼容旧配置）
        return parsed;
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            return [];
        }
        throw err;
    }
}
async function writeAccounts(accounts) {
    const path = dataPath('config', 'accounts.json');
    const sealed = await seal(accounts);
    await writeFile(path, JSON.stringify(sealed, null, 2), { mode: 0o600 });
}
export function createAccountManagementTools() {
    return {
        addAccount: tool({
            description: `Add a new trading account to the configuration.

The account will be encrypted using AES-256-GCM and stored securely.
After adding, the service needs to be restarted to pick up the new account.

Supported presetId values:
- mock-simulator: Virtual trading simulator (no API keys needed)
- alpaca-paper: Alpaca paper trading (apiKey, apiSecret)
- alpaca-live: Alpaca live trading (apiKey, apiSecret)
- ccxt-custom: Any CCXT-supported exchange (exchange, apiKey, apiSecret, etc.)

Examples:
- Add Alpaca paper: presetId="alpaca-paper", presetConfig={apiKey: "...", apiSecret: "...", mode: "paper"}
- Add Binance: presetId="ccxt-custom", presetConfig={exchange: "binance", apiKey: "...", apiSecret: "..."}
- Add mock: presetId="mock-simulator", presetConfig={cash: 100000}

After adding, run: systemctl --user restart trading-mcp`,
            inputSchema: z.object({
                id: z.string().describe('Unique account identifier (e.g., "alpaca-paper-1")'),
                label: z.string().optional().describe('Human-readable label (e.g., "Alpaca Paper Trading")'),
                presetId: z.string().describe('Preset ID (mock-simulator, alpaca-paper, alpaca-live, ccxt-custom)'),
                enabled: z.boolean().default(true).describe('Whether the account is enabled'),
                presetConfig: z.record(z.string(), z.unknown()).describe('Preset-specific configuration (API keys, exchange name, etc.)'),
            }),
            execute: async ({ id, label, presetId, enabled, presetConfig }) => {
                const accounts = await readAccounts();
                // 检查是否已存在
                if (accounts.some(a => a.id === id)) {
                    return {
                        success: false,
                        error: `Account with id "${id}" already exists`,
                    };
                }
                const newAccount = {
                    id,
                    label: label || id,
                    presetId,
                    enabled,
                    presetConfig,
                };
                accounts.push(newAccount);
                await writeAccounts(accounts);
                return {
                    success: true,
                    message: `Account "${id}" added successfully.`,
                    account: {
                        id: newAccount.id,
                        label: newAccount.label,
                        presetId: newAccount.presetId,
                        enabled: newAccount.enabled,
                    },
                    nextStep: 'Restart the service: systemctl --user restart trading-mcp',
                };
            },
        }),
        removeAccount: tool({
            description: `Remove a trading account from the configuration.

This will permanently delete the account and its credentials.
The service needs to be restarted to apply the change.

WARNING: This action cannot be undone.`,
            inputSchema: z.object({
                id: z.string().describe('Account ID to remove'),
            }),
            execute: async ({ id }) => {
                const accounts = await readAccounts();
                const index = accounts.findIndex(a => a.id === id);
                if (index === -1) {
                    return {
                        success: false,
                        error: `Account with id "${id}" not found`,
                    };
                }
                const removed = accounts.splice(index, 1)[0];
                await writeAccounts(accounts);
                return {
                    success: true,
                    message: `Account "${id}" removed successfully.`,
                    removed: {
                        id: removed.id,
                        label: removed.label,
                        presetId: removed.presetId,
                    },
                    nextStep: 'Restart the service: systemctl --user restart trading-mcp',
                };
            },
        }),
        listAccounts: tool({
            description: `List all configured trading accounts.

Shows account IDs, labels, and preset types.
Does NOT show sensitive information like API keys.`,
            inputSchema: z.object({}),
            execute: async () => {
                const accounts = await readAccounts();
                return {
                    accounts: accounts.map(a => ({
                        id: a.id,
                        label: a.label || a.id,
                        presetId: a.presetId,
                        enabled: a.enabled,
                    })),
                    total: accounts.length,
                };
            },
        }),
    };
}
//# sourceMappingURL=account-management.js.map
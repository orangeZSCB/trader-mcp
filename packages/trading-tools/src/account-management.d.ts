/**
 * Account Management Tools
 *
 * addAccount / removeAccount / listAccounts:
 *   让 AI agent 能够动态管理交易账户配置。
 *   账户配置使用 AES-256-GCM 加密存储。
 */
export declare function createAccountManagementTools(): {
    addAccount: import("ai").Tool<{
        id: string;
        presetId: string;
        enabled: boolean;
        presetConfig: Record<string, unknown>;
        label?: string | undefined;
    }, {
        success: boolean;
        error: string;
        message?: undefined;
        account?: undefined;
        nextStep?: undefined;
    } | {
        success: boolean;
        message: string;
        account: {
            id: string;
            label: string | undefined;
            presetId: string;
            enabled: boolean;
        };
        nextStep: string;
        error?: undefined;
    }>;
    removeAccount: import("ai").Tool<{
        id: string;
    }, {
        success: boolean;
        error: string;
        message?: undefined;
        removed?: undefined;
        nextStep?: undefined;
    } | {
        success: boolean;
        message: string;
        removed: {
            id: string;
            label: string | undefined;
            presetId: string;
        };
        nextStep: string;
        error?: undefined;
    }>;
    listAccounts: import("ai").Tool<Record<string, never>, {
        accounts: {
            id: string;
            label: string;
            presetId: string;
            enabled: boolean;
        }[];
        total: number;
    }>;
};

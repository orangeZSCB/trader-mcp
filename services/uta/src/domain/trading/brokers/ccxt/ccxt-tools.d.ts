/**
 * AI tool factories for CCXT exchanges.
 *
 * Registered dynamically when a CCXT account comes online.
 */
import type { UTAManager } from '../../uta-manager.js';
import '../../contract-ext.js';
export declare function createCcxtProviderTools(manager: UTAManager): {
    getFundingRate: import("ai").Tool<{
        aliceId: string;
        source?: string | undefined;
    }, {
        error: string;
    } | {
        contract: import("@traderalice/ibkr").Contract;
        fundingRate: number;
        nextFundingTime?: Date;
        previousFundingRate?: number;
        timestamp: Date;
        source: string;
    }>;
    getOrderBook: import("ai").Tool<{
        aliceId: string;
        limit?: number | undefined;
        source?: string | undefined;
    }, {
        error: string;
    } | {
        contract: import("@traderalice/ibkr").Contract;
        bids: import("./ccxt-types.js").OrderBookLevel[];
        asks: import("./ccxt-types.js").OrderBookLevel[];
        timestamp: Date;
        source: string;
    }>;
};

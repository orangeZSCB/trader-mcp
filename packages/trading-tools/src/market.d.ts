/**
 * Market Search AI Tool
 *
 * marketSearchForResearch:
 *   统一的市场数据 symbol 搜索入口，跨 equity / crypto / currency / commodity 四个资产类别。
 *   实际聚合逻辑位于 domain/market-data/aggregate-search，HTTP 层（/api/market/search）
 *   也复用同一个函数——AI 与 UI 看到的是同一份结果。
 */
import { type MarketSearchDeps } from '@openalice-trading/alice-core/domain/market-data/aggregate-search.js';
export declare function createMarketSearchTools(deps: MarketSearchDeps): {
    marketSearchForResearch: import("ai").Tool<{
        query: string;
        limit?: number | undefined;
    }, {
        results: never[];
        message: string;
        count?: undefined;
    } | {
        results: import("@openalice-trading/alice-core/domain/market-data/aggregate-search.js").MarketSearchResult[];
        count: number;
        message?: undefined;
    }>;
};

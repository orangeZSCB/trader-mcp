/**
 * Equity Symbol Index — 本地正则搜索
 *
 * 为了让 AI 能用正则/关键词搜索 equity symbol，我们在启动时从 OpenBB API
 * 拉取全量 symbol 列表并缓存到 data/cache/equity/symbols.json。
 * 搜索在本地内存中进行，不依赖 API 的搜索能力。
 *
 * 当前缓存的数据源（免费，不需要 API key）：
 * - SEC (sec): ~10,000 美股上市公司，来自 SEC EDGAR
 * - TMX (tmx): ~3,600 加拿大上市公司，来自多伦多交易所
 *
 * 扩展方法：在 SOURCES 数组中添加新的 provider 即可。
 * 需要 API key 的 provider（intrinio, nasdaq, tradier）暂未接入。
 */
import type { EquityClientLike } from '../client/types.js';
export interface SymbolEntry {
    symbol: string;
    name: string;
    source: string;
    [key: string]: unknown;
}
export declare class SymbolIndex {
    private entries;
    /** 索引大小 */
    get size(): number;
    /**
     * 加载 symbol 索引。
     *
     * 优先从磁盘缓存加载（<24h），否则从 OpenBB API 拉取全量列表。
     * API 失败时降级到过期缓存。全部失败则以空索引启动（不中断）。
     */
    load(client: EquityClientLike): Promise<void>;
    /**
     * 用正则表达式搜索 symbol 和公司名称。
     *
     * - pattern 作为 RegExp（case-insensitive）同时匹配 symbol 和 name
     * - 正则编译失败时降级为子串匹配
     */
    search(pattern: string, limit?: number): SymbolEntry[];
    /** 精确匹配 symbol（case-insensitive） */
    resolve(symbol: string): SymbolEntry | undefined;
    private fetchFromApi;
    private readCache;
    private writeCache;
    private isExpired;
}

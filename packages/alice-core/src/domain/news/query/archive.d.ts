/**
 * News Collector — collected-RSS archive tools (globRss / grepRss / readRss)
 *
 * Creates AI tools that query the persistent news store.
 * Uses endTime = new Date() (real-time mode, not backtesting).
 */
import type { INewsProvider, NewsItem } from '../types.js';
/** Context injected into pure functions */
export interface NewsToolContext {
    getNews: () => Promise<NewsItem[]>;
}
export interface GlobRssResult {
    id: number;
    title: string;
    contentLength: number;
    metadata: string;
}
export interface GrepRssResult {
    id: number;
    title: string;
    matchedText: string;
    contentLength: number;
    metadata: string;
}
/** Match news by title regex (like "ls" / "glob") */
export declare function globRss(context: NewsToolContext, options: {
    pattern: string;
    metadataFilter?: Record<string, string>;
    limit?: number;
}): Promise<GlobRssResult[]>;
/** Search news content by pattern (like "grep") */
export declare function grepRss(context: NewsToolContext, options: {
    pattern: string;
    contextChars?: number;
    metadataFilter?: Record<string, string>;
    limit?: number;
}): Promise<GrepRssResult[]>;
/** Read full news content by stable id (like "cat") */
export declare function readRss(context: NewsToolContext, options: {
    id: number;
}): Promise<NewsItem | null>;
export declare function createNewsArchiveTools(provider: INewsProvider): {
    globRss: import("ai").Tool<{
        pattern: string;
        lookback?: string | undefined;
        metadataFilter?: Record<string, string> | undefined;
        limit?: number | undefined;
    }, GlobRssResult[]>;
    grepRss: import("ai").Tool<{
        pattern: string;
        lookback?: string | undefined;
        contextChars?: number | undefined;
        metadataFilter?: Record<string, string> | undefined;
        limit?: number | undefined;
    }, GrepRssResult[]>;
    readRss: import("ai").Tool<{
        id: number;
    }, NewsItem | {
        error: string;
    }>;
};

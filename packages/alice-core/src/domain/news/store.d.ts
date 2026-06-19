/**
 * News Collector — Persistent JSONL store with in-memory index
 *
 * Follows the EventLog pattern (src/core/event-log.ts):
 * - Append-only JSONL on disk
 * - In-memory buffer for fast queries
 * - Recover from file on startup
 * - Dedup set survives restarts
 *
 * Implements INewsProvider so globRss/grepRss/readRss tools work.
 */
import type { INewsProvider, GetNewsV2Options, NewsItem } from './types.js';
/**
 * Parse a semantic time string into milliseconds.
 * Supported formats: 1h, 2h, 12h, 24h, 1d, 2d, 7d, 30d
 */
export declare function parseLookback(lookback: string): number | null;
export interface NewsCollectorStoreOpts {
    logPath?: string;
    maxInMemory?: number;
    retentionDays?: number;
}
export declare class NewsCollectorStore implements INewsProvider {
    private logPath;
    private maxInMemory;
    private retentionDays;
    /** In-memory buffer, sorted by pubTs ascending */
    private buffer;
    /** All known dedup keys (survives beyond retention window) */
    private dedupSet;
    /** Monotonic sequence counter */
    private seq;
    /**
     * Promise-chain mutex: serialize ingest() so the dedup-check / appendFile /
     * dedup-add sequence is atomic across concurrent callers. Without this, two
     * ingests of the same key both pass has(), both appendFile, and the JSONL
     * gets duplicate lines (recovery dedups them, but the file is dirty).
     */
    private writeChain;
    constructor(opts?: NewsCollectorStoreOpts);
    /**
     * Initialize: read JSONL from disk, rebuild dedup set and buffer.
     * Must be called before any other method.
     */
    init(): Promise<void>;
    /**
     * Ingest a single news item. Returns true if new (not a duplicate).
     *
     * Serialized via writeChain so that concurrent callers cannot both pass the
     * dedup check before either writes to disk.
     */
    ingest(item: {
        title: string;
        content: string;
        pubTime: Date;
        dedupKey: string;
        metadata: Record<string, string | null>;
    }): Promise<boolean>;
    private _ingestImpl;
    /**
     * Batch ingest. Returns count of new (non-duplicate) items.
     */
    ingestBatch(items: Array<{
        title: string;
        content: string;
        pubTime: Date;
        dedupKey: string;
        metadata: Record<string, string | null>;
    }>): Promise<number>;
    /** Check if a dedup key already exists */
    has(dedupKey: string): boolean;
    /** Number of items in memory */
    get count(): number;
    /** Number of dedup keys tracked (includes items beyond retention) */
    get dedupCount(): number;
    getNewsV2(options: GetNewsV2Options): Promise<NewsItem[]>;
    close(): Promise<void>;
}
/**
 * Compute a dedup key for a news item.
 *
 * Priority: guid > link > content hash
 */
export declare function computeDedupKey(item: {
    guid?: string;
    link?: string;
    title: string;
    content: string;
}): string;

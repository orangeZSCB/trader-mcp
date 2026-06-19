/**
 * News Collector — RSS fetch service
 *
 * A code-level setInterval service (not AI-driven cron) that periodically
 * fetches configured RSS feeds and ingests new items into the store.
 */
import { type NewsCollectorStore } from '../store.js';
import type { RSSFeedConfig } from '../types.js';
export interface CollectorOpts {
    store: NewsCollectorStore;
    feeds: RSSFeedConfig[];
    intervalMs: number;
}
export declare class NewsCollector {
    private timer;
    private store;
    private feeds;
    private intervalMs;
    /**
     * In-flight guard: if a fetchAll is already running when the next interval
     * tick fires, share the existing promise instead of starting a second pass.
     * Prevents duplicate HTTP work when network latency exceeds intervalMs.
     */
    private fetchInFlight;
    constructor(opts: CollectorOpts);
    /** Start periodic collection. Fetches immediately, then at interval. */
    start(): void;
    /** Stop periodic collection. */
    stop(): void;
    /**
     * Fetch all active feeds once. Disabled feeds are skipped. Returns counts.
     *
     * Concurrent calls share the in-flight promise (no overlapping fetch passes).
     */
    fetchAll(): Promise<{
        total: number;
        new: number;
    }>;
    private _fetchAllImpl;
    /** Fetch a single feed and ingest its items. */
    private fetchFeed;
}

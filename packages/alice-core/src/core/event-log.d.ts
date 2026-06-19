/**
 * Event Log — append-only persistent event log with in-memory ring buffer.
 *
 * Dual-write: every append goes to disk (JSONL) AND an in-memory buffer.
 * The memory buffer holds the most recent N entries (default 500) for fast
 * queries. Disk is the source of truth for crash recovery and full history.
 *
 * Storage: one JSON object per line (`events.jsonl`), append-only.
 * Recovery: on startup, loads the tail of the file into the memory buffer
 * and restores the seq counter.
 */
import type { AgentEventMap } from './agent-event.js';
export interface EventLogEntry<T = unknown> {
    /** Global monotonic sequence number. */
    seq: number;
    /** Event timestamp (epoch ms). */
    ts: number;
    /** Event type, e.g. "trade.open", "heartbeat.ok". */
    type: string;
    /** Arbitrary JSON-serializable payload. */
    payload: T;
    /** Parent event's seq — present if this event was emitted in response to another. */
    causedBy?: number;
}
/** Options accepted by EventLog.append(). */
export interface AppendOpts {
    /** Parent event's seq. Set by listeners to link a child event back to what triggered it. */
    causedBy?: number;
}
export type EventLogListener = (entry: EventLogEntry) => void;
export interface EventLogQueryResult {
    entries: EventLogEntry[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}
export interface EventLog {
    /** Append a typed event (registered in AgentEventMap). Validates payload at runtime. */
    append<K extends keyof AgentEventMap>(type: K, payload: AgentEventMap[K], opts?: AppendOpts): Promise<EventLogEntry<AgentEventMap[K]>>;
    /** Append an unregistered event (no runtime validation). */
    append<T>(type: string, payload: T, opts?: AppendOpts): Promise<EventLogEntry<T>>;
    /**
     * Read events from the DISK log file.
     * - afterSeq: only return entries with seq > afterSeq (default: 0 = all)
     * - type: only return entries matching this type
     * - limit: max number of entries to return
     */
    read(opts?: {
        afterSeq?: number;
        limit?: number;
        type?: string;
    }): Promise<EventLogEntry[]>;
    /**
     * Paginated query from DISK. Returns entries newest-first (descending seq).
     * - page: 1-indexed page number (default: 1)
     * - pageSize: entries per page (default: 100)
     * - type: only return entries matching this type
     */
    query(opts?: {
        page?: number;
        pageSize?: number;
        type?: string;
    }): Promise<EventLogQueryResult>;
    /**
     * Query the in-memory buffer (fast, no disk I/O).
     * - afterSeq: only return entries with seq > afterSeq
     * - type: only return entries matching this type
     * - limit: max number of entries to return
     *
     * Only sees the most recent `bufferSize` entries.
     */
    recent(opts?: {
        afterSeq?: number;
        limit?: number;
        type?: string;
    }): EventLogEntry[];
    /** Current highest seq number (0 if empty). */
    lastSeq(): number;
    /** Subscribe to new events (real-time, on append). Returns unsubscribe fn. */
    subscribe(listener: EventLogListener): () => void;
    /** Subscribe to events of a registered type (typed listener). Returns unsubscribe fn. */
    subscribeType<K extends keyof AgentEventMap>(type: K, listener: (entry: EventLogEntry<AgentEventMap[K]>) => void): () => void;
    /** Subscribe to events of any type (untyped listener). Returns unsubscribe fn. */
    subscribeType(type: string, listener: EventLogListener): () => void;
    /** Close the log (clear listeners and buffer). */
    close(): Promise<void>;
    /** Reset all state and delete the log file. For tests only. */
    _resetForTest(): Promise<void>;
}
/**
 * Create (or open) an append-only event log.
 *
 * Reads the existing file to restore the seq counter and populate the
 * in-memory buffer with the most recent entries.
 */
export declare function createEventLog(opts?: {
    logPath?: string;
    /** Max entries in the in-memory ring buffer. Default: 500. */
    bufferSize?: number;
}): Promise<EventLog>;

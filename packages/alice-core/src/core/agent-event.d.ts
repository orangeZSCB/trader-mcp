/**
 * Agent Event Type System — typed event registry with runtime validation.
 *
 * `AgentEvents` is the single source of truth: each event type maps to a
 * metadata record holding its TypeBox schema, whether it's externally
 * ingestable, and an optional human-readable description.
 *
 * `AgentEventSchemas` and `isExternalEventType` are derived views exposed
 * for ergonomics and backward compatibility.
 *
 * Adding a new event type:
 *   1. Define its payload interface
 *   2. Add it to `AgentEventMap`
 *   3. Add an entry to `AgentEvents` with schema + (optional) external/description
 */
import { type TSchema } from '@sinclair/typebox';
export interface CronFirePayload {
    jobId: string;
    jobName: string;
    payload: string;
    workspaceId?: string;
    agent?: string;
}
/**
 * Which trigger source produced an AgentWork request — the routing key
 * the agent-work-listener uses to pick a source config. Canonical home
 * for this union (it used to live in the now-deleted notifications-store
 * as `NotificationSource`). Kept in lockstep with the TypeBox
 * `SourceUnion` literals below.
 */
export type AgentWorkSource = 'heartbeat' | 'cron' | 'task' | 'manual';
export interface MessageReceivedPayload {
    channel: string;
    to: string;
    prompt: string;
}
export interface MessageSentPayload {
    channel: string;
    to: string;
    prompt: string;
    reply: string;
    durationMs: number;
}
export interface AgentWorkRequestedPayload {
    /** Which trigger source produced this work request. */
    source: AgentWorkSource;
    /** The AI prompt to execute. */
    prompt: string;
    /** Trigger-specific metadata, surfaced back on the canonical
     *  done/skip/error events via per-source payload builders. */
    metadata?: Record<string, unknown>;
}
export interface AgentWorkDonePayload {
    source: AgentWorkSource;
    reply: string;
    durationMs: number;
    /** Did the notification actually reach the connector? */
    delivered: boolean;
    metadata?: Record<string, unknown>;
}
export interface AgentWorkSkipPayload {
    source: AgentWorkSource;
    /** Free-form reason — e.g. 'ack' | 'duplicate' | 'empty' |
     *  'outside-active-hours' | per-source extension. */
    reason: string;
    metadata?: Record<string, unknown>;
}
export interface AgentWorkErrorPayload {
    source: AgentWorkSource;
    error: string;
    durationMs: number;
    metadata?: Record<string, unknown>;
}
export interface AgentEventMap {
    'cron.fire': CronFirePayload;
    'message.received': MessageReceivedPayload;
    'message.sent': MessageSentPayload;
    'agent.work.requested': AgentWorkRequestedPayload;
    'agent.work.done': AgentWorkDonePayload;
    'agent.work.skip': AgentWorkSkipPayload;
    'agent.work.error': AgentWorkErrorPayload;
}
export interface AgentEventMeta {
    /** TypeBox schema for runtime payload validation. */
    schema: TSchema;
    /** If true, this event type may be ingested from outside the process
     *  (HTTP webhook, external API). Internal-only types cannot be
     *  forged by external callers. Default: false. */
    external?: boolean;
    /** Optional human-readable description — surfaced in topology UI tooltips. */
    description?: string;
}
/** Single source of truth — metadata for every registered event type. */
export declare const AgentEvents: {
    [K in keyof AgentEventMap]: AgentEventMeta;
};
/** Schemas-only map — derived for Ajv compilation and existing consumers. */
export declare const AgentEventSchemas: {
    [K in keyof AgentEventMap]: TSchema;
};
/** Whether this event type may be ingested from outside the process. */
export declare function isExternalEventType(type: string): boolean;
/**
 * Validate a payload against its registered schema.
 * - Registered type + valid payload → returns silently
 * - Registered type + invalid payload → throws Error
 * - Unregistered type → returns silently (no schema to check)
 */
export declare function validateEventPayload(type: string, payload: unknown): void;

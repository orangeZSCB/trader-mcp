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
import { Type } from '@sinclair/typebox';
import AjvPkg from 'ajv';
// ==================== TypeBox Schemas ====================
const CronFireSchema = Type.Object({
    jobId: Type.String(),
    jobName: Type.String(),
    payload: Type.String(),
    // Dispatch target (headless workspace run). Optional for pre-headless jobs.
    workspaceId: Type.Optional(Type.String()),
    agent: Type.Optional(Type.String()),
});
const MessageReceivedSchema = Type.Object({
    channel: Type.String(),
    to: Type.String(),
    prompt: Type.String(),
});
const MessageSentSchema = Type.Object({
    channel: Type.String(),
    to: Type.String(),
    prompt: Type.String(),
    reply: Type.String(),
    durationMs: Type.Number(),
});
// ---- Canonical agent-work event schemas ----
//
// `source` is constrained to the AgentWorkSource union literal set.
// Free-form `metadata` is `unknown` at validation time (downstream
// shape decided per-source).
const SourceUnion = Type.Union([
    Type.Literal('heartbeat'),
    Type.Literal('cron'),
    Type.Literal('task'),
    Type.Literal('manual'),
]);
const AgentWorkRequestedSchema = Type.Object({
    source: SourceUnion,
    prompt: Type.String(),
    metadata: Type.Optional(Type.Record(Type.String(), Type.Unknown())),
});
const AgentWorkDoneSchema = Type.Object({
    source: SourceUnion,
    reply: Type.String(),
    durationMs: Type.Number(),
    delivered: Type.Boolean(),
    metadata: Type.Optional(Type.Record(Type.String(), Type.Unknown())),
});
const AgentWorkSkipSchema = Type.Object({
    source: SourceUnion,
    reason: Type.String(),
    metadata: Type.Optional(Type.Record(Type.String(), Type.Unknown())),
});
const AgentWorkErrorSchema = Type.Object({
    source: SourceUnion,
    error: Type.String(),
    durationMs: Type.Number(),
    metadata: Type.Optional(Type.Record(Type.String(), Type.Unknown())),
});
/** Single source of truth — metadata for every registered event type. */
export const AgentEvents = {
    'cron.fire': {
        schema: CronFireSchema,
        description: 'Cron scheduler timer fired for a registered job.',
    },
    'message.received': {
        schema: MessageReceivedSchema,
        description: 'A user message arrived on a connector (Web chat, Telegram, etc.).',
    },
    'message.sent': {
        schema: MessageSentSchema,
        description: 'An assistant reply was dispatched on a connector.',
    },
    'agent.work.requested': {
        schema: AgentWorkRequestedSchema,
        external: true,
        description: 'Canonical request to dispatch an AgentWork task. Carries `source` (which trigger produced it) plus the AI prompt. Ingestible via POST /api/events/ingest; the webhook layer also accepts the legacy `task.requested` event type and translates it to this canonical form.',
    },
    'agent.work.done': {
        schema: AgentWorkDoneSchema,
        description: 'An AgentWork task completed and its reply was dispatched. Filter on payload.source to attribute to a specific trigger (heartbeat / cron / task).',
    },
    'agent.work.skip': {
        schema: AgentWorkSkipSchema,
        description: 'An AgentWork task was suppressed before delivery (dedup, empty content, outside active hours, AI declined to notify, …). Filter on payload.source for trigger attribution.',
    },
    'agent.work.error': {
        schema: AgentWorkErrorSchema,
        description: 'An AgentWork task failed during execution. Filter on payload.source for trigger attribution.',
    },
};
// ==================== Derived views ====================
/** Schemas-only map — derived for Ajv compilation and existing consumers. */
export const AgentEventSchemas = Object.fromEntries(Object.keys(AgentEvents).map((k) => [k, AgentEvents[k].schema]));
/** Whether this event type may be ingested from outside the process. */
export function isExternalEventType(type) {
    return (type in AgentEvents &&
        AgentEvents[type].external === true);
}
// ==================== Runtime Validation ====================
// Ajv ESM interop — package's default export is on `.default` under ESM
const ajv = new AjvPkg({
    allErrors: true,
    strict: false,
});
const validators = new Map();
for (const [type, meta] of Object.entries(AgentEvents)) {
    validators.set(type, ajv.compile(meta.schema));
}
/**
 * Validate a payload against its registered schema.
 * - Registered type + valid payload → returns silently
 * - Registered type + invalid payload → throws Error
 * - Unregistered type → returns silently (no schema to check)
 */
export function validateEventPayload(type, payload) {
    const validate = validators.get(type);
    if (!validate)
        return;
    if (!validate(payload)) {
        const errors = validate.errors?.map(e => `${e.instancePath || '/'} ${e.message}`).join('; ');
        throw new Error(`Invalid payload for event "${type}": ${errors}`);
    }
}
//# sourceMappingURL=agent-event.js.map
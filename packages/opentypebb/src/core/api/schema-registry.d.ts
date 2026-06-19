/**
 * Schema Registry — maps model names to their standard-model Zod schemas.
 *
 * In Python OpenBB, FastAPI auto-generates OpenAPI from Pydantic models.
 * Here we maintain an explicit registry so buildWidgetsJson() can introspect
 * Zod schemas for query params (→ widget form fields) and data (→ table columns).
 *
 * Models not in this registry will still get basic widget configs, just without
 * detailed param/column definitions.
 */
import type { ZodObject } from 'zod';
export interface ModelSchemas {
    queryParams: ZodObject<any>;
    data: ZodObject<any>;
}
/**
 * Registry mapping model names (as used in Router commands) to their
 * standard-model Zod schemas for query params and response data.
 */
export declare const SCHEMA_REGISTRY: Record<string, ModelSchemas>;

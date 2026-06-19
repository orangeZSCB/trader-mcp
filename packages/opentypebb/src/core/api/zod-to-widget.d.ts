/**
 * Zod-to-Widget — introspect Zod schemas to generate OpenBB Workspace widget params and column defs.
 *
 * The Python version parses OpenAPI specs (auto-generated from Pydantic models).
 * In TypeScript we skip OpenAPI and read Zod schemas directly via `.shape`.
 */
import { ZodObject } from 'zod';
/** Widget parameter definition (matches OpenBB Workspace widget param format). */
export interface WidgetParam {
    paramName: string;
    label: string;
    description: string;
    type: string;
    value: unknown;
    optional: boolean;
    show: boolean;
    options?: Array<{
        label: string;
        value: string;
    }>;
}
/** Widget column definition (matches OpenBB Workspace columnsDefs format). */
export interface WidgetColumnDef {
    field: string;
    headerName: string;
    cellDataType?: string;
    formatterFn?: string;
}
/**
 * Extract widget params from a Zod query params schema.
 *
 * @param schema - ZodObject representing query parameters
 * @returns Array of widget param definitions
 */
export declare function zodSchemaToWidgetParams(schema: ZodObject<any>): WidgetParam[];
/**
 * Extract column definitions from a Zod data schema.
 *
 * @param schema - ZodObject representing response data
 * @returns Array of column definitions for AG-Grid tables
 */
export declare function zodSchemaToColumnDefs(schema: ZodObject<any>): WidgetColumnDef[];

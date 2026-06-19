/**
 * MCP Export — shared bridge from Vercel AI SDK tools to MCP format.
 *
 * Used by `src/server/mcp.ts` (the external MCP server workspaces connect to).
 *
 * Handles:
 * - Zod shape extraction with number coercion (MCP clients may send "80" instead of 80)
 * - Tool result → MCP content block conversion
 * - Execute wrapper (try/catch + toolCallId generation)
 */
import { z } from 'zod';
import type { Tool } from 'ai';
export type McpContent = {
    type: 'text';
    text: string;
} | {
    type: 'image';
    data: string;
    mimeType: string;
};
export type McpToolResult = {
    content: McpContent[];
    isError?: boolean;
};
/**
 * Convert a Vercel AI SDK tool result to MCP content blocks.
 *
 * If the result has a `.content` array (the multi-modal AgentToolResult
 * shape — `{ content: [{type:"text",...}|{type:"image",...}, ...] }`),
 * map each item to native MCP text/image blocks. This avoids stringify-ing
 * base64 image data into a giant JSON text blob.
 *
 * Otherwise, fall back to JSON.stringify.
 */
export declare function toMcpContent(result: unknown): McpContent[];
/**
 * Extract the Zod raw shape from a Vercel AI SDK tool's inputSchema,
 * applying number coercion for MCP boundary safety.
 */
export declare function extractMcpShape(tool: Tool): Record<string, z.ZodType>;
/**
 * Wrap a Vercel AI SDK tool's execute function for MCP consumption.
 * Adds try/catch error handling and toolCallId generation.
 */
export declare function wrapToolExecute(tool: Tool): (args: any) => Promise<McpToolResult>;

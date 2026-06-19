/**
 * ToolCenter — unified tool registry.
 *
 * All tool definitions are registered here once during bootstrap.
 * Consumers (AI providers, MCP plugin, etc.) pull from ToolCenter
 * in the format they need, instead of reaching through Engine.
 */
import type { Tool } from 'ai';
export declare class ToolCenter {
    private tools;
    /** Batch-register tool definitions under a group. Later registrations overwrite same-name tools. */
    register(tools: Record<string, Tool>, group: string): void;
    /** Vercel AI SDK format — returns only enabled tools (reads disabled list from disk). */
    getVercelTools(): Promise<Record<string, Tool>>;
    /** MCP format — same filtering as Vercel. Kept separate for future divergence. */
    getMcpTools(): Promise<Record<string, Tool>>;
    /** Full tool inventory with group metadata (for frontend / API). */
    getInventory(): Array<{
        name: string;
        group: string;
        description: string;
    }>;
    /** Look up a single tool by name (for detail / execute endpoints). */
    get(name: string): Tool | null;
    /** Look up a tool's group by name. */
    getGroup(name: string): string | null;
    /** Tool name list (for logging / debugging). */
    list(): string[];
}

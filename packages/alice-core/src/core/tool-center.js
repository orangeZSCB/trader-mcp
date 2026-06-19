/**
 * ToolCenter — unified tool registry.
 *
 * All tool definitions are registered here once during bootstrap.
 * Consumers (AI providers, MCP plugin, etc.) pull from ToolCenter
 * in the format they need, instead of reaching through Engine.
 */
import { readToolsConfig } from './config.js';
export class ToolCenter {
    tools = {};
    /** Batch-register tool definitions under a group. Later registrations overwrite same-name tools. */
    register(tools, group) {
        for (const [name, tool] of Object.entries(tools)) {
            this.tools[name] = { tool, group };
        }
    }
    /** Vercel AI SDK format — returns only enabled tools (reads disabled list from disk). */
    async getVercelTools() {
        const { disabled } = await readToolsConfig();
        const result = {};
        if (disabled.length === 0) {
            for (const [name, entry] of Object.entries(this.tools)) {
                result[name] = entry.tool;
            }
            return result;
        }
        const disabledSet = new Set(disabled);
        for (const [name, entry] of Object.entries(this.tools)) {
            if (!disabledSet.has(name))
                result[name] = entry.tool;
        }
        return result;
    }
    /** MCP format — same filtering as Vercel. Kept separate for future divergence. */
    async getMcpTools() {
        return this.getVercelTools();
    }
    /** Full tool inventory with group metadata (for frontend / API). */
    getInventory() {
        return Object.entries(this.tools).map(([name, entry]) => ({
            name,
            group: entry.group,
            description: (entry.tool.description ?? '').slice(0, 200),
        }));
    }
    /** Look up a single tool by name (for detail / execute endpoints). */
    get(name) {
        return this.tools[name]?.tool ?? null;
    }
    /** Look up a tool's group by name. */
    getGroup(name) {
        return this.tools[name]?.group ?? null;
    }
    /** Tool name list (for logging / debugging). */
    list() {
        return Object.keys(this.tools);
    }
}
//# sourceMappingURL=tool-center.js.map
/**
 * OpenAlice Trading MCP server.
 *
 * Bootstrap order:
 *   1. resolve OPENALICE_HOME → broker credential vault location
 *   2. spawn UTA child process on 127.0.0.1:UTA_PORT
 *   3. poll UTA's /__uta/health until ready (or timeout)
 *   4. construct UTAManagerSDK pointing at the child UTA
 *   5. register trading tools via @openalice-trading/trading-tools
 *   6. expose them over Streamable HTTP MCP at 127.0.0.1:MCP_PORT/mcp
 *   7. on SIGTERM/SIGINT: tear down MCP first, then SIGTERM the UTA child
 *
 * The skill at skills/openalice-trading/SKILL.md tells the consuming AI
 * agent how to use the tools — particularly the user-approval ritual that
 * wraps tradingPush. Approval is enforced by the agent's skill, not by
 * server-side gates; v1 trusts the agent to follow the skill (see CLAUDE.md
 * "phase 4 risk note" for the rationale).
 */
export {};

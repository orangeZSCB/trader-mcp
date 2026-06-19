/**
 * Smoke test — drives the trading-mcp end-to-end via the MCP client SDK.
 *
 * Scenarios:
 *   S1  Full lifecycle: stage_place → commit → push → cancel → push
 *   S3  Amend: stage_place → push → stage_modify → push
 *   S6  Reject: stage_place → reject (clean unpushed)
 *
 * Pre-req: `OPENALICE_HOME=/tmp/test-trading-home` with a mock-smoke account
 * configured. Server should already be running at 127.0.0.1:47400/mcp.
 */
export {};

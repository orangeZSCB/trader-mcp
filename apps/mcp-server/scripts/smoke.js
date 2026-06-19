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
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
const MCP_URL = new URL('http://127.0.0.1:47400/mcp');
const ACCOUNT = 'mock-smoke';
function banner(s) {
    console.log(`\n========== ${s} ==========`);
}
function pretty(v) {
    return typeof v === 'string' ? v : JSON.stringify(v, null, 2);
}
async function callTool(client, name, args) {
    console.log(`\n→ ${name}(${JSON.stringify(args)})`);
    const res = await client.callTool({ name, arguments: args });
    if (res.isError) {
        console.error('  ERROR:', pretty(res.content));
    }
    else {
        const text = res.content
            .filter((c) => c.type === 'text')
            .map((c) => c.text)
            .join('\n');
        console.log('  OK:', text.slice(0, 400) + (text.length > 400 ? '…' : ''));
    }
    return res;
}
async function main() {
    banner('Connect MCP');
    const transport = new StreamableHTTPClientTransport(MCP_URL);
    const client = new Client({ name: 'smoke', version: '0' });
    await client.connect(transport);
    console.log('connected');
    // List tools — sanity
    const tools = await client.listTools();
    console.log(`tools: ${tools.tools.map((t) => t.name).join(', ')}`);
    // ===== S1: full lifecycle =====
    banner('S1 — full lifecycle');
    await callTool(client, 'listUTAs', {});
    // Search a contract on mock-smoke
    await callTool(client, 'searchContracts', { pattern: 'BTC', source: ACCOUNT });
    // Stage a market buy with commitMessage (1-step stage+commit)
    await callTool(client, 'placeOrder', {
        aliceId: `${ACCOUNT}|BTCUSDT`,
        source: ACCOUNT,
        action: 'BUY',
        orderType: 'MKT',
        totalQuantity: '0.01',
        commitMessage: 'S1 entry: smoke buy',
    });
    // Show status — should have pendingMessage
    await callTool(client, 'tradingStatus', { source: ACCOUNT });
    // Push (no approval gate at server; the skill is the gate. Smoke just
    // verifies the wire reaches the broker.)
    await callTool(client, 'tradingPush', { source: ACCOUNT });
    // Sync to settle order status
    await callTool(client, 'tradingSync', { source: ACCOUNT, delayMs: 1000 });
    // Portfolio after entry
    await callTool(client, 'getPortfolio', { source: ACCOUNT });
    // Close with commitMessage + push
    await callTool(client, 'closePosition', {
        aliceId: `${ACCOUNT}|BTCUSDT`,
        source: ACCOUNT,
        commitMessage: 'S1 exit: smoke close',
    });
    await callTool(client, 'tradingPush', { source: ACCOUNT });
    await callTool(client, 'getPortfolio', { source: ACCOUNT });
    // ===== S6: reject =====
    banner('S6 — reject path');
    await callTool(client, 'placeOrder', {
        aliceId: `${ACCOUNT}|ETHUSDT`,
        source: ACCOUNT,
        action: 'BUY',
        orderType: 'LMT',
        totalQuantity: '0.5',
        lmtPrice: '1500',
        commitMessage: 'S6 — will be rejected',
    });
    await callTool(client, 'tradingStatus', { source: ACCOUNT });
    await callTool(client, 'tradingReject', { source: ACCOUNT, reason: 'smoke reject path' });
    // Status must show clean staging area
    await callTool(client, 'tradingStatus', { source: ACCOUNT });
    // ===== Log =====
    banner('tradingLog — show every commit recorded');
    await callTool(client, 'tradingLog', { source: ACCOUNT, limit: 20 });
    await client.close();
    banner('DONE');
}
main().catch((err) => {
    console.error('SMOKE FAIL:', err);
    process.exit(1);
});
//# sourceMappingURL=smoke.js.map
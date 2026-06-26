# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
```bash
pnpm install                    # Install dependencies (~30s)
pnpm dev                        # Run MCP server in dev mode (watch mode)
pnpm build                      # Build all packages and server
pnpm typecheck                  # Run TypeScript type checking
pnpm test                       # Run tests with Vitest
```

### Package-specific Commands
```bash
# Run dev server for specific package
pnpm -F @openalice-trading/mcp-server dev

# Typecheck specific package
pnpm -F @openalice-trading/trading-tools typecheck

# Build specific package
pnpm -F @openalice-trading/alice-core build
```

### Testing
```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run specific test file
pnpm vitest run packages/trading-tools/src/account-management.spec.ts
```

## Architecture Overview

### Core Concept: Trade-as-Git
All trading operations follow a Git-like workflow:
- **Stage**: Queue operations in staging area (no broker contact)
- **Commit**: Generate commit hash with reasoning message
- **Push**: Execute against broker (requires explicit user approval)
- **Reject**: Discard staged/committed operations

This is enforced by the skill in `skills/openalice-trading/SKILL.md`, not by server-side gates.

### Process Architecture
```
mcp-server (parent)
  ├─ spawns UTA child process (127.0.0.1:47333)
  ├─ waits for /__uta/health
  ├─ registers 67 tools via @openalice-trading/trading-tools
  └─ exposes Streamable HTTP MCP (127.0.0.1:47400/mcp)
```

The mcp-server supervises UTA and cascades SIGTERM on shutdown.

### Package Structure

**apps/mcp-server** - Entry point
- Spawns and monitors UTA child process
- Initializes market data clients (equity, crypto, currency, commodity, etf, index, derivatives, economy)
- Starts NewsCollector for RSS feeds (if configured)
- Registers all tools and exposes via Streamable HTTP MCP
- Key file: `src/main.ts`

**packages/trading-tools** - 67 AI tools
- `tools.ts` - Core trading tools (placeOrder, modifyOrder, cancelOrder, closePosition, tradingCommit, tradingPush, tradingReject)
- `account-management.ts` - addAccount, removeAccount, listAccounts
- `market.ts`, `equity.ts`, `news.ts`, `economy.ts`, etc. - Market data tools
- `sdk/` - UTAManagerSDK and UTAAccountSDK (HTTP clients to UTA)
- Tools use Vercel AI SDK `tool()` shape, wrapped via `mcp-export` bridge

**packages/alice-core** - Extracted from OpenAlice
- `core/config.ts` - Configuration schemas (marketData, news, trading, etc.)
- `core/sealing.ts` - AES-256-GCM encryption for credentials
- `core/paths.ts` - Path resolution (OPENALICE_HOME)
- `domain/market-data/` - Market data clients (SDKEquityClient, SDKCryptoClient, etc.)
- `domain/news/` - NewsCollector and RSS archive tools (globRss, grepRss, readRss)
- `core/mcp-export.ts` - Bridge from Vercel AI SDK tools to MCP format

**packages/uta-protocol** - Wire protocol
- Zod schemas and TypeScript types
- `createUTAClient()` - HTTP client factory
- Shared between Alice and UTA

**services/uta** - UTA service (unmodified from OpenAlice)
- Broker engines: CCXT, Alpaca, IBKR, Mock, Leverup
- TradingGit - Git-like state machine for orders
- FX service, snapshot scheduler
- Runs as child process of mcp-server

**skills/openalice-trading/SKILL.md** - AI agent instructions
- Defines Trade-as-Git workflow
- Lists all 67 tools with descriptions
- Specifies approval ritual for tradingPush
- Must be installed in OpenClaw's skills directory

## Key Implementation Details

### Tool Registration Pattern
Tools are created using Vercel AI SDK's `tool()` function:
```typescript
const myTool = tool({
  description: '...',
  inputSchema: z.object({ ... }),
  execute: async (args) => { ... }
})
```

Then registered in mcp-server via:
```typescript
server.registerTool(
  name,
  { description, inputSchema: extractMcpShape(tool) },
  wrapToolExecute(tool)
)
```

The `extractMcpShape()` and `wrapToolExecute()` bridges handle MCP protocol conversion.

### Credential Encryption
- Sealing key: `$OPENALICE_HOME/sealing.key` (32-byte random, base64-encoded)
- Encrypted files: `$OPENALICE_HOME/data/config/accounts.json`
- Uses AES-256-GCM with random IV per encryption
- Key is deliberately outside `data/` subtree (backup/migration safety)

### News System
- `NewsCollector` periodically fetches RSS feeds (configured in `data/config/news.json`)
- Default: 28 feeds, 10-minute interval
- Tools query in-memory store: `globRss` (title search), `grepRss` (content search), `readRss` (full article)
- Collector starts automatically if feeds are configured

### UTA Child Process Management
- mcp-server spawns UTA with `--conditions=openalice-source --import tsx`
- Polls `/__uta/health` until ready (20s timeout)
- Forwards stdout/stderr with `[uta]` prefix
- Cascades SIGTERM on shutdown, waits 5s before SIGKILL

### HEARTBEAT Integration

Trader MCP integrates with OpenClaw's HEARTBEAT mechanism for automatic trading monitoring. The AI agent (via SKILL.md instructions) generates `~/.openclaw/HEARTBEAT.md` based on user instructions.

**How it works:**
1. User tells AI their monitoring needs (e.g., "帮我监控 AAPL,止损 170")
2. AI reads SKILL.md "自动交易" section for instructions
3. AI generates/updates `~/.openclaw/HEARTBEAT.md` with monitoring tasks
4. OpenClaw HEARTBEAT periodically triggers AI to execute monitoring
5. AI calls Trader MCP tools (getPortfolio, getQuote, closePosition, tradingPush)
6. When conditions are met, AI auto-executes trades and notifies user

**Key points:**
- HEARTBEAT is an OpenClaw feature, not Trader MCP
- Trader MCP only provides tools; OpenClaw handles scheduling
- AI generates HEARTBEAT.md automatically (no manual configuration)
- All auto-executed trades follow Trade-as-Git workflow with `[AUTO]` prefix in commitMessage
- See SKILL.md "自动交易" section for detailed instructions

**Reference:**
- OpenClaw HEARTBEAT docs: https://docs.openclaw.ai/zh-CN/gateway/heartbeat

## Configuration

### Environment Variables
- `OPENALICE_HOME` - Data directory (default: `~/.openalice`)
- `OPENALICE_TRADING_MCP_PORT` - MCP server port (default: 47400)
- `OPENALICE_UTA_PORT` - UTA internal port (default: 47333)
- `OPENALICE_UTA_HEALTH_TIMEOUT_MS` - Health check timeout (default: 20000)
- `OPENALICE_TRADING_AGENT_AUTHOR` - Commit author tag (default: "openclaw")

### Account Configuration
File: `$OPENALICE_HOME/data/config/accounts.json`
```json
[{
  "id": "mock-test",
  "label": "Mock Test Account",
  "presetId": "mock-simulator",
  "enabled": true,
  "presetConfig": {
    "cash": 100000,
    "_instanceId": "test-001"
  }
}]
```

Supported presets: `mock-simulator`, `alpaca-paper`, `alpaca-live`, `ccxt-custom`

### News Configuration
File: `$OPENALICE_HOME/data/config/news.json`
```json
{
  "enabled": true,
  "intervalMinutes": 10,
  "maxInMemory": 2000,
  "retentionDays": 7,
  "feeds": [
    {
      "name": "Federal Reserve Press",
      "url": "https://www.federalreserve.gov/feeds/press_all.xml",
      "source": "fed",
      "categories": ["macro"],
      "enabled": true
    }
  ]
}
```

## Development Notes

### Adding New Tools
1. Create tool in `packages/trading-tools/src/` using `tool()` from 'ai'
2. Export factory function (e.g., `createMyTools()`)
3. Add to `packages/trading-tools/src/index.ts` exports
4. Import and register in `apps/mcp-server/src/main.ts`
5. Update `skills/openalice-trading/SKILL.md` with tool description

### Type Checking
- Root `tsconfig.json` uses `customConditions: ["openalice-source"]`
- This allows workspace packages to export TypeScript source directly (no build step needed for dev)
- Always run `pnpm typecheck` before committing

### Testing
- Tests use Vitest
- Test files: `*.spec.ts` alongside source files
- Mock broker available for integration tests (`presetId: "mock-simulator"`)

### MCP Protocol
- Uses Streamable HTTP transport (not stdio)
- Stateful sessions (one transport per session ID)
- Stateless mode causes "Already connected to a transport" errors on multiple connections
- Session IDs are UUIDs, managed by SDK

## Common Pitfalls

1. **Multiple MCP connections**: Don't create multiple StreamableHTTPClientTransport instances to the same server. Reuse one connection.

2. **News tools return empty**: NewsCollector needs time to fetch feeds. Wait 10+ minutes after server start, or check `data/config/news.json` has enabled feeds.

3. **Tool not found**: After adding tools, restart mcp-server. OpenClaw caches tool list.

4. **Encryption errors**: Ensure `$OPENALICE_HOME/sealing.key` exists and is readable. If moving data directory, copy key file too.

5. **UTA health check fails**: Check UTA logs (prefixed with `[uta]`). Common issues: port 47333 already in use, invalid account config, missing sealing key.

## Deployment

### systemd Service
File: `trading-mcp.service`
```bash
sudo cp trading-mcp.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now trading-mcp
```

### OpenClaw Integration
1. Clone repo to `~/.openclaw/workspace/trader-mcp`
2. Run `pnpm install`
3. Configure MCP: `openclaw mcp set trader-mcp --transport streamable-http --url http://127.0.0.1:47400/mcp`
4. Install skill: `cp skills/openalice-trading/SKILL.md ~/.openclaw/skills/openalice-trading/SKILL.md`
5. Configure identity in `~/.openclaw/IDENTITY.md` (see OPENCLAW_SETUP.md)
6. Restart OpenClaw gateway: `systemctl --user restart openclaw-gateway`

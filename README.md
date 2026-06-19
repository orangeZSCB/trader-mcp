# OpenAlice Trading MCP

Standalone MCP server exposing OpenAlice's **Trade-as-Git** trading workflow
to any MCP-capable AI agent (OpenClaw, Claude Desktop, Cursor, ...). The
trading domain — broker connections, the git-like approval state machine
(stage / commit / push / reject), FX, snapshots, every `IBroker` engine
(CCXT, Alpaca, IBKR TWS port, Mock, Leverup) — is the original `services/uta`
service from OpenAlice, lifted out of the Alice + Dashboard runtime and
rewired around the agent-facing surface only.

There is no Web UI in this repo. The Trade-as-Git approval gate that the
OpenAlice Dashboard provides is replaced by a **skill** (`skills/openalice-trading/SKILL.md`)
that teaches the consuming agent the user-approval ritual: stage and commit
are AI-free, but `tradingPush` requires explicit user consent obtained in
chat. v1 trusts the skill; the server does not enforce a server-side
approval gate.

## Architecture

```
┌─ apps/mcp-server (this repo) ───────────────────────────────┐
│                                                              │
│  ┌─ supervisor ─────────────────┐                           │
│  │ spawn services/uta child     │  internal: 127.0.0.1:47333│
│  │ wait for /__uta/health       │                           │
│  │ SIGTERM cascade on shutdown  │                           │
│  └──────────────────────────────┘                           │
│                                                              │
│  ┌─ MCP Streamable HTTP ────────┐                           │
│  │ register 19 trading tools    │  exposed: 127.0.0.1:47400 │
│  │ wraps Vercel-ai SDK shape    │  path: /mcp               │
│  │ via @openalice-trading/      │                           │
│  │   trading-tools              │                           │
│  └──────────────────────────────┘                           │
└──────────────────────────────────────────────────────────────┘
                                   ▲
                                   │ MCP protocol (HTTP+SSE)
                                   │
                ┌──────────────────┴───────────────────┐
                │ OpenClaw (or any MCP client)          │
                │ + skills/openalice-trading/SKILL.md   │
                └───────────────────────────────────────┘
```

## Layout

```
.
├── packages/
│   ├── alice-core/          # minimal subset of OpenAlice's core extracted
│   │                        # for UTA's startup path (config schemas,
│   │                        # event log, paths, sealing, market-data
│   │                        # client ports, mcp-export bridge)
│   ├── ibkr/                # @traderalice/ibkr — TS port of IBKR TWS API
│   ├── opentypebb/          # @traderalice/opentypebb — TS port of OpenBB
│   ├── trading-tools/       # the 19 AI tools + UTAManagerSDK / UTAAccountSDK
│   └── uta-protocol/        # wire types + zod + UTA HTTP client
├── services/
│   └── uta/                 # the unmodified UTA service (broker engines,
│                            # TradingGit, FX, snapshots) — runs as a child
│                            # process of mcp-server
├── apps/
│   └── mcp-server/          # the user-facing entry: supervises UTA +
│                            # exposes trading tools over Streamable HTTP MCP
└── skills/
    └── openalice-trading/
        └── SKILL.md         # the user-approval ritual the AI must follow
```

## Quick start

```bash
pnpm install                        # ~30s, includes broker SDKs

# (one-time) seed broker accounts. Either:
#   (a) reuse OpenAlice's: ln -s ~/.openalice/data ~/.openalice-trading-mcp/data
#       and ln -s ~/.openalice/sealing.key ~/.openalice-trading-mcp/sealing.key
#   (b) start fresh — the server will create an empty data store.

OPENALICE_HOME=$HOME/.openalice-trading-mcp \
  pnpm -F @openalice-trading/mcp-server dev
```

The server logs:

```
[mcp] bootstrap @ 2026-06-19T...
[mcp] OPENALICE_HOME = /home/.../.openalice-trading-mcp
[mcp] AGENT_AUTHOR   = openclaw
[mcp] spawning UTA child: ...
[uta] [uta] listening on http://127.0.0.1:47333
[mcp] UTA ready ... (N accounts)
[mcp] registered 19 trading tools
[mcp] listening on http://127.0.0.1:47400/mcp (Streamable HTTP)
```

Health check: `curl http://127.0.0.1:47400/`

## OpenClaw client config

Per [OpenClaw MCP docs](https://docs.openclaw.ai/cli/mcp), register the
server with `transport: "streamable-http"`:

```bash
openclaw mcp set openalice-trading '{
  "transport": "streamable-http",
  "url": "http://127.0.0.1:47400/mcp",
  "connectionTimeoutMs": 5000
}'
```

Install the skill:

```bash
mkdir -p ~/.openclaw/skills
cp skills/openalice-trading/SKILL.md ~/.openclaw/skills/openalice-trading.md
```

(Adjust to OpenClaw's actual skill directory; the docs are the authority.)

## Configuration

| Env var | Default | Purpose |
|---|---|---|
| `OPENALICE_HOME` | `~/.openalice` | User data root. Holds `data/` (broker config, trading commits, snapshots) and `sealing.key` (machine-bound AES-256 key encrypting broker credentials). |
| `OPENALICE_TRADING_MCP_PORT` | `47400` | Where the MCP server listens. |
| `OPENALICE_UTA_PORT` | `47333` | Internal UTA child port (loopback only). |
| `OPENALICE_UTA_HEALTH_TIMEOUT_MS` | `20000` | Boot deadline for the UTA child to become healthy. |
| `OPENALICE_TRADING_AGENT_AUTHOR` | `openclaw` | Tag written into TradingGit commits. Helps disambiguate when multiple agents share one UTA (OpenAlice = `alice`, this server = `openclaw` by default). |

## Smoke test

A scripted end-to-end smoke is included:

```bash
# Server up in one terminal:
OPENALICE_HOME=/tmp/test-trading-home pnpm -F @openalice-trading/mcp-server dev

# In another:
mkdir -p /tmp/test-trading-home/data/config
cat > /tmp/test-trading-home/data/config/accounts.json <<'EOF'
[{
  "id": "mock-smoke",
  "label": "Smoke Mock",
  "presetId": "mock-simulator",
  "enabled": true,
  "guards": [],
  "presetConfig": { "cash": 100000, "_instanceId": "smoke-test-001" }
}]
EOF
# (restart server to pick up the account)

cd apps/mcp-server
node --conditions=openalice-source --import tsx scripts/smoke.ts
```

The script drives `placeOrder → commit → tradingPush → portfolio →
closePosition → push → reject` against the in-memory mock broker and prints
each tool call's result.

## What's NOT in this repo

- No Web UI / Dashboard. (Skill replaces the approval gate.)
- No market-data / news / analysis tools. (Out of scope; OpenClaw's
  built-in capabilities cover those.)
- No Alice-side workspace launcher. (That's OpenAlice's job, not this
  server's.)
- No telegram / mcpAsk connectors. (Those are upstream concerns.)

## Extending

- **New tools**: add to `packages/trading-tools/src/tools.ts` (Vercel-ai
  SDK shape), they will auto-register on next start.
- **New brokers**: same path as OpenAlice — add an `IBroker` impl under
  `services/uta/src/domain/trading/brokers/<name>/` and register it in
  `services/uta/src/domain/trading/brokers/registry.ts`.
- **Stricter approval**: if you ever want server-side enforcement (don't
  trust the skill), wrap `tradingPush.execute` in `trading-tools/tools.ts`
  with a token-handshake — push requires a `approval_token` returned by a
  prior `tradingStatus` call. See the *Anti-patterns* section of
  `SKILL.md` for the rationale either way.

## License

AGPL-3.0-only (inherits from OpenAlice).

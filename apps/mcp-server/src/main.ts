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

import { spawn, type ChildProcess } from 'node:child_process'
import { resolve as pathResolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http'
import { randomUUID } from 'node:crypto'

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'

import {
  createTradingTools,
  UTAManagerSDK,
} from '@openalice-trading/trading-tools'
import { createUTAClient } from '@traderalice/uta-protocol'
import {
  extractMcpShape,
  wrapToolExecute,
} from '@openalice-trading/alice-core/core/mcp-export.js'

// ==================== Config ====================

const MCP_PORT = Number(process.env['OPENALICE_TRADING_MCP_PORT'] ?? 47400)
const UTA_PORT = Number(process.env['OPENALICE_UTA_PORT'] ?? 47333)
const UTA_HOST = '127.0.0.1'
const UTA_URL = `http://${UTA_HOST}:${UTA_PORT}`
const HEALTH_TIMEOUT_MS = Number(process.env['OPENALICE_UTA_HEALTH_TIMEOUT_MS'] ?? 20_000)
const HEALTH_INTERVAL_MS = 200

// AI tool author tag — written into TradingGit commits so OpenAlice (and any
// future trading agent) can tell who staged what when sharing one UTA.
const AGENT_AUTHOR = process.env['OPENALICE_TRADING_AGENT_AUTHOR'] ?? 'openclaw'

// ==================== UTA child supervisor ====================

interface UtaProcess {
  child: ChildProcess
  shutdown: (signal: NodeJS.Signals) => Promise<void>
}

function findUtaEntry(): string {
  // Resolve services/uta/src/main.ts relative to this file. Works under
  // pnpm workspace symlinks: each package's source sits at its own location,
  // so we walk up from apps/mcp-server/src/main.ts → repo root → services/uta.
  const here = dirname(fileURLToPath(import.meta.url))
  // here = .../apps/mcp-server/src
  return pathResolve(here, '..', '..', '..', 'services', 'uta', 'src', 'main.ts')
}

function spawnUta(): UtaProcess {
  const entry = findUtaEntry()
  console.log(`[mcp] spawning UTA child: ${entry}`)
  const child = spawn(
    process.execPath,
    [
      '--conditions=openalice-source',
      '--import', 'tsx',
      entry,
    ],
    {
      env: {
        ...process.env,
        OPENALICE_UTA_PORT: String(UTA_PORT),
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  )
  child.stdout?.on('data', (b) => process.stdout.write(`[uta] ${b}`))
  child.stderr?.on('data', (b) => process.stderr.write(`[uta] ${b}`))
  child.on('exit', (code, signal) => {
    console.log(`[mcp] UTA child exited code=${code} signal=${signal}`)
  })

  let stopping = false
  const shutdown = async (signal: NodeJS.Signals): Promise<void> => {
    if (stopping || child.exitCode != null) return
    stopping = true
    console.log(`[mcp] sending ${signal} to UTA child (pid ${child.pid})`)
    child.kill(signal)
    // Give it 5s to exit gracefully before SIGKILL.
    await new Promise<void>((res) => {
      const t = setTimeout(() => {
        if (child.exitCode == null) {
          console.warn('[mcp] UTA did not exit in 5s, SIGKILL')
          child.kill('SIGKILL')
        }
        res()
      }, 5000)
      child.once('exit', () => { clearTimeout(t); res() })
    })
  }

  return { child, shutdown }
}

async function waitForUtaHealth(): Promise<void> {
  const deadline = Date.now() + HEALTH_TIMEOUT_MS
  let lastError: unknown = null
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${UTA_URL}/__uta/health`)
      if (res.ok) {
        const body = await res.json() as { ok?: boolean; startedAt?: string; utas?: number }
        if (body.ok) {
          console.log(`[mcp] UTA ready @ ${body.startedAt} (${body.utas} accounts)`)
          return
        }
      }
    } catch (err) {
      lastError = err
    }
    await new Promise((r) => setTimeout(r, HEALTH_INTERVAL_MS))
  }
  throw new Error(
    `UTA did not become ready within ${HEALTH_TIMEOUT_MS}ms` +
    (lastError instanceof Error ? `: ${lastError.message}` : ''),
  )
}

// ==================== MCP server ====================

function buildMcpServer(manager: UTAManagerSDK): McpServer {
  const server = new McpServer({
    name: 'openalice-trading',
    version: '0.1.0',
  })

  const tools = createTradingTools(manager)
  for (const [name, tool] of Object.entries(tools)) {
    if (!tool.execute) continue
    const description = typeof tool.description === 'string' ? tool.description : name
    server.registerTool(
      name,
      {
        description,
        inputSchema: extractMcpShape(tool),
      },
      wrapToolExecute(tool) as Parameters<typeof server.registerTool>[2],
    )
  }
  console.log(`[mcp] registered ${Object.keys(tools).length} trading tools`)

  return server
}

// ==================== Main ====================

async function main(): Promise<void> {
  const startedAt = new Date().toISOString()
  console.log(`[mcp] bootstrap @ ${startedAt}`)
  console.log(`[mcp] OPENALICE_HOME = ${process.env['OPENALICE_HOME'] ?? '~/.openalice (default)'}`)
  console.log(`[mcp] AGENT_AUTHOR   = ${AGENT_AUTHOR}`)

  // 1. UTA child
  const uta = spawnUta()

  let stopping = false
  const handleSignal = async (signal: NodeJS.Signals): Promise<void> => {
    if (stopping) return
    stopping = true
    console.log(`[mcp] ${signal} → shutdown`)
    await uta.shutdown(signal).catch((e) => console.warn('[mcp] uta shutdown error:', e))
    process.exit(0)
  }
  process.on('SIGINT', () => { void handleSignal('SIGINT') })
  process.on('SIGTERM', () => { void handleSignal('SIGTERM') })

  // 2. Wait for UTA health
  try {
    await waitForUtaHealth()
  } catch (err) {
    console.error('[mcp] UTA health probe failed:', err instanceof Error ? err.message : err)
    await uta.shutdown('SIGTERM').catch(() => {})
    process.exit(1)
  }

  // 3. UTAManagerSDK pointed at the child UTA
  const client = createUTAClient({ baseUrl: UTA_URL })
  const manager = new UTAManagerSDK({ client })

  // 4. MCP server with trading tools
  const mcp = buildMcpServer(manager)

  // 5. Streamable HTTP — stateful sessions, one transport per session id.
  // Stateless mode (sessionIdGenerator: undefined) is unsafe to reuse a
  // single transport across requests (the MCP SDK guards against it
  // because message-ID collisions across concurrent clients corrupt the
  // protocol). Sessions are cheap; we let the SDK manage them.
  const transports = new Map<string, StreamableHTTPServerTransport>()

  async function freshTransport(): Promise<StreamableHTTPServerTransport> {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => randomUUID(),
      onsessioninitialized: (sid: string) => {
        transports.set(sid, transport)
      },
    })
    transport.onclose = () => {
      if (transport.sessionId) transports.delete(transport.sessionId)
    }
    await mcp.connect(transport)
    return transport
  }

  const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url ?? '/'
    if (url === '/' || url === '') {
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify({
        service: 'openalice-trading-mcp',
        startedAt,
        uta: UTA_URL,
        mcp: '/mcp',
      }))
      return
    }
    if (url.startsWith('/mcp')) {
      // Buffer the body so the transport sees the parsed JSON-RPC payload.
      let body: unknown = undefined
      if (req.method === 'POST' || req.method === 'DELETE') {
        const chunks: Buffer[] = []
        for await (const chunk of req) chunks.push(chunk as Buffer)
        const raw = Buffer.concat(chunks).toString('utf8').trim()
        if (raw.length > 0) {
          try { body = JSON.parse(raw) } catch { body = raw }
        }
      }

      const sid = req.headers['mcp-session-id'] as string | undefined
      let transport: StreamableHTTPServerTransport | undefined
      if (sid && transports.has(sid)) {
        transport = transports.get(sid)
      } else if (!sid && req.method === 'POST') {
        // Initial POST without session id — initialize creates a fresh session.
        // Other requests without session id are rejected by the transport.
        transport = await freshTransport()
      } else {
        res.writeHead(400, { 'content-type': 'application/json' })
        res.end(JSON.stringify({ jsonrpc: '2.0', error: { code: -32000, message: 'Bad Request: invalid or missing session id' }, id: null }))
        return
      }

      try {
        await transport!.handleRequest(req, res, body)
      } catch (err) {
        console.error('[mcp] transport error:', err)
        if (!res.headersSent) {
          res.writeHead(500, { 'content-type': 'application/json' })
          res.end(JSON.stringify({ error: err instanceof Error ? err.message : String(err) }))
        }
      }
      return
    }
    res.writeHead(404, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ error: 'not found' }))
  })

  server.listen(MCP_PORT, '127.0.0.1', () => {
    console.log(`[mcp] listening on http://127.0.0.1:${MCP_PORT}/mcp (Streamable HTTP)`)
  })
}

main().catch((err) => {
  console.error('[mcp] fatal:', err)
  process.exit(1)
})

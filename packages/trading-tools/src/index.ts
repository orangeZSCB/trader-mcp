/**
 * @openalice-trading/trading-tools
 *
 * Factory exporting the AI trading tool surface as a record of Vercel-ai
 * SDK `Tool` instances. Wrap with `vercelToolsToMcp` (from
 * `@openalice-trading/alice-core/core/mcp-export.js`) to expose them via
 * MCP — that's how the trading-mcp server publishes them to MCP clients
 * such as OpenClaw.
 *
 * Approval is enforced by the consuming agent's skill ritual (see
 * `skills/openalice-trading/SKILL.md`), not by tool guards: stage / commit
 * are local & reversible, push is the irreversible broker call. The
 * tradingPush tool description tells agents the ritual; this package does
 * not block calls itself.
 */

export { createTradingTools } from './tools.js'
export * from './sdk/index.js'

// Market data tools
export { createMarketSearchTools } from './market.js'
export { createEquityTools } from './equity.js'
export { createAnalysisTools } from './analysis.js'
export { createNewsArchiveTools } from './news.js'
export { createEconomyTools } from './economy.js'
export { createIndexTools } from './indices.js'
export { createDerivativesTools } from './derivatives.js'
export { createEtfTools } from './etf.js'
export { createSectorRotationTools } from './sector-rotation.js'
export { createReferenceBoardTools } from './reference-board.js'

---
name: openalice-trading
description: |
  Use when the user wants to query account state, market data, manage positions,
  or place / modify / cancel orders through the OpenAlice Trading MCP server.
  This skill supports two execution modes:
  - **Manual mode** (default): every push requires explicit user confirmation.
  - **Auto mode**: operations matching predefined strategy rules (stop-loss,
    take-profit, emergency stop, etc.) are auto-pushed without confirmation;
    all other operations still require user approval.
  The mode and rules are defined in the strategy config file.
---

# OpenAlice Trading — Trade-as-Git workflow

本 skill 定义了如何使用 trader-mcp 工具集执行交易操作。所有交易操作都遵循 Git 工作流。

## Mental model

Trading goes through three states. They mirror git exactly:

```
   stage_*           commit            push
[ idea ] ─────► [ staging ] ─────► [ pending ] ─────► [ broker ]
                  reversible         reversible       IRREVERSIBLE
                  (reject)           (reject)         money moves
                  zero side          zero side
                  effects            effects
```

- **stage_*** — write the intent into the staging area. The broker has
  not been touched. You can stage many operations before committing.
- **commit** — wraps the staged operations into a named pending commit.
  `commit` writes a message that explains your reasoning. The user will
  read it. Still no broker contact.
- **push** — executes every operation in the pending commit against the
  live broker. **This is the only one-way door.** Filled orders, sent
  cancels, real-money risk all happen here.
- **reject** — discards staged + uncommitted-pending operations. Use this
  when the user says no, or when you realize the staged plan is wrong.

This is the entire user-facing model. Internalize it before reading the
tool table.

## Execution modes

Before executing any trade, **read the strategy config** at
`$OPENALICE_HOME/data/config/strategy.json`. This file defines the
execution mode and auto-push rules.

### Mode: `manual` (default)

Every `tradingPush` requires explicit user confirmation. This is the
safe default — no broker call happens without the user saying "yes".

### Mode: `auto`

Operations that match the strategy rules are auto-pushed without
confirmation. The AI still stages and commits, but then immediately
pushes and notifies the user *after* execution.

### Mode: `hybrid`

Combines both: operations matching auto-push rules execute immediately;
everything else requires user confirmation.

## Strategy config

The file `$OPENALICE_HOME/data/config/strategy.json` defines the mode
and rules. Example:

```json
{
  "mode": "hybrid",
  "rules": {
    "stopLoss": {
      "action": "auto_push",
      "reason": "止损触发 — 自动执行保护资金"
    },
    "takeProfit": {
      "action": "auto_push",
      "reason": "止盈触发 — 自动锁定利润"
    },
    "emergencyStop": {
      "action": "auto_push_all",
      "reason": "紧急停止 — 平仓所有持仓"
    },
    "newPosition": {
      "action": "confirm",
      "maxRiskPercent": 2.0,
      "maxNotionalUsd": 10000
    },
    "modifyOrder": {
      "action": "auto_push"
    },
    "cancelOrder": {
      "action": "auto_push"
    },
    "closePosition": {
      "action": "confirm"
    }
  },
  "notifications": {
    "autoPush": true,
    "includeCommitHash": true,
    "includeBrokerResponse": true
  }
}
```

### Rule classification

When an operation is staged, classify it into one of these categories:

| Category | Trigger | Typical action |
|----------|---------|----------------|
| `stopLoss` | Order has `stopLoss` field, or closePosition triggered by price hitting stop level | `auto_push` |
| `takeProfit` | Order has `takeProfit` field, or closePosition triggered by price hitting target | `auto_push` |
| `emergencyStop` | User explicitly says "紧急停止" / "emergency stop" / "flatten all" | `auto_push_all` |
| `newPosition` | `placeOrder` that opens a new position (no existing position in that symbol) | `confirm` |
| `modifyOrder` | `modifyOrder` on an existing order | `auto_push` |
| `cancelOrder` | `cancelOrder` on an existing order | `auto_push` |
| `closePosition` | `closePosition` that is NOT triggered by stop/profit (user-initiated) | `confirm` |

### Action types

- **`auto_push`**: Stage → commit → push immediately. Notify user after.
- **`auto_push_all`**: Close ALL open positions across all accounts. Stage → commit → push immediately. Notify user after.
- **`confirm`**: Stage → commit → ask user for approval → push only on "yes".

## Tool surface

### Read-only — call freely, no permission needed

| Tool | What it returns |
|------|-----------------|
| `listUTAs` | Registered trading accounts (id, provider, capabilities). |
| `getAccount` | netLiquidation, totalCashValue, buyingPower, P&L. |
| `getPortfolio` | Open positions with FX-normalized %-of-equity. |
| `getOrders` | Pending / submitted orders. |
| `getQuote` | Latest quote for a contract (by `aliceId`). |
| `getMarketClock` | Is the market open? When does it close? |
| `searchContracts` | Find tradeable contracts by symbol / pattern. |
| `getContractDetails` | Full contract spec for a known contract. |
| `expandContract` | Expand option chains, futures months, bond hubs. |
| `tradingStatus` | **The staging-area status (`git status`).** |
| `tradingLog` | History of trading commits (`git log`). |
| `tradingShow` | Inspect one commit by hash (`git show <hash>`). |
| `orderHistory` | Per-order lifecycle (submitted → filled / cancelled). |
| `tradeHistory` | Fills only, with execution price + qty + value. |
| `simulatePriceChange` | Dry-run portfolio impact of a hypothetical move. |
| `searchBars` | Find K-line sources for a symbol — returns barIds for quant analysis. |
| `calculateQuant` | Run technical-analysis scripts over K-lines (barId-keyed, v2 calculator). |

### State-changing — local (broker untouched)

These write to the staging area only. Calling them is safe; the broker
has no idea anything happened. Each accepts an optional `commitMessage`
that, when present, stages **and** commits in one call.

| Tool | What it stages |
|------|----------------|
| `placeOrder` | A new order (MKT / LMT / STP / STP LMT / TRAIL / MOC, with optional TP/SL). |
| `modifyOrder` | An amendment to a pending broker order (price / qty / type / TIF). |
| `closePosition` | A flatten of an existing position (full or partial). |
| `cancelOrder` | A cancellation of a pending broker order. |
| `tradingCommit` | Wraps the current staging area into a named pending commit. |

### Broker-effecting — mode-dependent

| Tool | Effect | Approval rule |
|------|--------|---------------|
| `tradingPush` | Executes the pending commit against the live broker. | **Depends on strategy config — see below.** |
| `tradingReject` | Discards the staging area + pending commit. | Use immediately when user rejects or when auto-push fails. |
| `tradingSync` | Pulls broker order statuses (no submission, but consumes API quota). | Free to call, but use `delayMs: 2000-5000` after a recent push so the exchange can settle. |

## The push ritual — mode-aware

### Step 1: Read strategy config

Before any push decision, read `$OPENALICE_HOME/data/config/strategy.json`.
If the file doesn't exist, default to `mode: "manual"` with all rules
set to `"confirm"`.

### Step 2: Stage with intent

Use the high-level tools (`placeOrder`, `modifyOrder`, `closePosition`,
`cancelOrder`). Pass `commitMessage` when one decision = one operation,
so you stage and commit in one call. The commit message is your
reasoning, written *for the user*.

Bad: `"buy AAPL"`. Good: `"Entry: AAPL momentum break above 200d MA;
1% portfolio risk; stop at 195"`.

### Step 3: Classify the operation

Determine which category the operation falls into (see "Rule
classification" table above). Then check the strategy config for that
category's `action`.

### Step 4a: If action is `auto_push` or `auto_push_all`

1. Call `tradingStatus` to get the canonical state.
2. Call `tradingPush` immediately — **do not ask for confirmation**.
3. After push returns, **notify the user** with the result:

```
[AUTO-PUSH] 止损触发 — 自动执行保护资金

已推送至 broker（commit `a1b2c3d4`）:

| # | action | symbol | qty | type | price | status |
|---|--------|--------|-----|------|-------|--------|
| 1 | SELL   | AAPL   | 100 | MKT  | —     | submitted |

Broker response: orderId `xyz-789`, status `accepted`.
```

The notification is informational — the user does not need to reply.
If any operation has `success: false`, surface the error verbatim and
flag it as requiring attention.

### Step 4b: If action is `confirm`

1. Call `tradingStatus` to get the canonical state.
2. Render the result as a table (see "Approval message format" below).
   **Never** describe the operations from memory.
3. Ask for explicit approval. Wait for the user's reply. Treat
   silence / off-topic / partial responses as **not approved**.
4. Branch on the answer:
   - Reply contains an unambiguous yes ("yes", "push", "go ahead",
     "确认", "推送", "发吧"): call `tradingPush`. Then report the
     `submitted` array back, including any per-operation `error` rows.
   - Reply contains an unambiguous no ("no", "cancel", "abort",
     "取消", "不行"): call `tradingReject` with `reason` reflecting
     what they said. Confirm the discard.
   - Reply asks for changes ("change qty to 50", "make it a limit at
     150"): do NOT push. Stage the new state (often via `modifyOrder`
     or by `tradingReject` + restage), then return to step 2.
   - Reply is unclear: ask one clarifying question. Do not guess.

### Step 5: Report what actually happened

After `tradingPush` returns (whether auto or manual), show the user
the resulting commit hash and the broker response per operation. If
any operation has `success: false`, surface the error verbatim — do
not paper over partial failures.

## Special: Emergency stop

When the user says "紧急停止" / "emergency stop" / "flatten all" /
"全部平仓", this overrides all strategy rules:

1. Immediately stage `closePosition` for **every open position** across
   **all accounts**.
2. Commit with message: `"Emergency stop — flattening all positions"`.
3. Push immediately — no confirmation needed regardless of strategy config.
4. Notify the user with the full result.

This is the one case where auto-push is **always** allowed, even in
manual mode. The rationale: the user is explicitly asking for immediate
action, and waiting for confirmation defeats the purpose.

## Consent does not carry over

A `yes` approves **the specific commit you just showed.** Each new push
needs a fresh ritual (unless auto-push rules apply). If the user said
"yes please buy AAPL" earlier in the conversation but then asked
unrelated questions, you do **not** have standing approval for the next
push — re-ask.

## Approval message format

Use this template when you reach step 4b (confirm mode). Adapt the table
columns to the operation type, but keep the structure.

```
I've staged the following on `<source>` (commit `<hash>`,
"<commit_message>"):

| # | action | symbol | qty | type | price | tif |
|---|--------|--------|-----|------|-------|-----|
| 1 | BUY    | AAPL   | 100 | LMT  | 175.50 | DAY |

Estimated cost: ~$17,550 (USD).
Account buying power: $50,000.
Market: open (closes 16:00 ET).

Push to broker? Reply **yes** to execute, **no** to discard, or tell me
what to change.
```

When operations span multiple symbols or accounts, group by `source`.
Always show:

- The commit hash (so they can refer to it later via `tradingShow`).
- The commit message (your stated reason).
- A best-effort estimated cost. For LMT orders use the limit price; for
  MKT orders use `getQuote` first if you have not already.
- Any `fxWarnings` from `getPortfolio` if the operation crosses currencies.

## Anti-patterns (the eight 耻 of trading)

These are the failure modes that have happened in the past and that this
skill exists to prevent. Read them. They are not hypothetical.

1. **以模糊执行为耻** — *Pushing without explicit `yes` in confirm mode.*
   The user saying "I'd like to buy AAPL" is not approval; you must
   stage, show, and ask. (Exception: auto-push rules in strategy config.)
2. **以瞎猜接口为耻** — *Calling `tradingPush` and `tradingCommit`
   back-to-back in one tool-call burst, then asking permission "by
   the way".* Approval comes **before** push, never after. (Exception:
   auto-push rules — push happens, then notify.)
3. **以臆想业务为耻** — *Describing staged operations from memory.*
   Always re-call `tradingStatus` between staging and asking. Caching
   desyncs across tool calls.
4. **以跳过验证为耻** — *Hiding broker errors.* If `push` returns
   any `success: false`, surface every failed leg with its error
   verbatim. Partial fills are real and the user must know.
5. **以创造接口为耻** — *Inventing parameters.* If a tool's schema
   does not list a field, do not pass it. The schemas are the contract.
6. **以盲目修改为耻** — *Calling `modifyOrder` without first
   `getOrders` to confirm the order ID exists and is still pending.*
   Stale order IDs produce broker errors that are easy to misread.
7. **以破坏架构为耻** — *Treating `commitMessage` as a UI string.*
   It is the **audit log entry**. Future you (and the user) will read
   it via `tradingLog`. Write it for that reader, not for chat.
8. **以假装理解为耻** — *Reporting "done" when only some legs
   filled.* Read the `submitted` array, count filled vs rejected,
   and tell the user the truth.

## Example dialogues

### Example 1 — manual mode, happy path

> **User:** Buy 10 shares of AAPL at limit 175.50 on alpaca-paper.

```
[Read strategy.json → mode: "manual" or category "newPosition": "confirm"]

[Tool] placeOrder
  source: alpaca-paper
  aliceId: alpaca-paper|AAPL
  action: BUY
  orderType: LMT
  totalQuantity: "10"
  lmtPrice: "175.50"
  tif: DAY
  commitMessage: "Entry: AAPL pullback to 175 support; risk-defined limit"

[Tool] tradingStatus
  source: alpaca-paper
```

> Staged on `alpaca-paper` (commit `a1b2c3d4`, "Entry: AAPL pullback…"):
>
> | # | action | symbol | qty | type | price | tif |
> |---|--------|--------|-----|------|-------|-----|
> | 1 | BUY    | AAPL   | 10  | LMT  | 175.50| DAY |
>
> Estimated cost: ~$1,755 (USD).
> Account buying power: $50,000. Market: open (closes 16:00 ET).
>
> **Push to broker? yes / no / change.**

> **User:** yes

```
[Tool] tradingPush
  source: alpaca-paper
```

> Pushed. Commit `a1b2c3d4` is live.
>
> - BUY 10 AAPL LMT 175.50 → submitted, orderId `xyz-789`, status
>   `accepted`. Awaiting fill.

### Example 2 — auto mode, stop-loss triggers

> **User:** (has set up a strategy with stopLoss: auto_push)
> (no message — the AI is monitoring)

```
[AI detects AAPL price hitting stop-loss level]

[Classify operation: stopLoss → action: "auto_push"]

[Tool] closePosition
  source: alpaca-paper
  aliceId: alpaca-paper|AAPL
  commitMessage: "Stop-loss triggered: AAPL hit 170.00; exiting position to limit loss"

[Tool] tradingPush
  source: alpaca-paper
```

> [AUTO-PUSH] 止损触发 — 自动执行保护资金
>
> 已推送至 broker（commit `f1e2d3c4`）:
>
> | # | action | symbol | qty | type | status |
> |---|--------|--------|-----|------|--------|
> | 1 | SELL   | AAPL   | 100 | MKT  | submitted |
>
> Broker response: orderId `abc-123`, status `accepted`.
>
> 持仓已平仓。如需调整止损策略，请告知。

### Example 3 — hybrid mode, new position requires confirmation

> **User:** (has strategy with newPosition: confirm, modifyOrder: auto_push)
> 把订单 123 的限价改成 180

```
[Classify: modifyOrder → action: "auto_push"]

[Tool] modifyOrder
  source: alpaca-paper
  orderId: "123"
  lmtPrice: "180"
  commitMessage: "Adjusting limit price to 180 per user request"

[Tool] tradingPush
  source: alpaca-paper
```

> [AUTO-PUSH] 改单自动执行
>
> 已推送至 broker（commit `x9y8z7w6`）:
>
> | # | action | orderId | field | new value | status |
> |---|--------|---------|-------|-----------|--------|
> | 1 | MODIFY | 123     | lmtPrice | 180.00 | submitted |
>
> 订单已修改。

### Example 4 — emergency stop

> **User:** 紧急停止！全部平仓！

```
[Emergency stop — override all strategy rules]

[Tool] getPortfolio
  (returns positions: AAPL 100 shares, TSLA 50 shares, BTC 0.5)

[Tool] closePosition
  source: alpaca-paper, aliceId: alpaca-paper|AAPL
  commitMessage: "Emergency stop — flattening all positions"
[Tool] closePosition
  source: alpaca-paper, aliceId: alpaca-paper|TSLA
  commitMessage: "Emergency stop — flattening all positions"
[Tool] closePosition
  source: binance, aliceId: binance|BTC/USDT
  commitMessage: "Emergency stop — flattening all positions"

[Tool] tradingPush
  (pushes all three closePosition operations)
```

> [EMERGENCY STOP] 全部持仓已平仓
>
> 已推送至 broker（commit `emergency-001`）:
>
> | # | source | symbol | qty | status |
> |---|--------|--------|-----|--------|
> | 1 | alpaca-paper | AAPL | 100 | submitted |
> | 2 | alpaca-paper | TSLA | 50  | submitted |
> | 3 | binance      | BTC  | 0.5 | submitted |
>
> 所有持仓已平仓。市场风险已解除。

## Multi-account note

Some tools accept `source`, others require it. The `source` is an
account id (`"alpaca-paper"`) or a provider tag (`"alpaca"`). When the
user has multiple accounts, ask which one before staging unless they
named one. Never silently fan out a mutation across all accounts.
(Exception: emergency stop flattens all accounts.)

## On retries and transient errors

Read-only tools may return `{ error: ..., transient: true }`. Wait a
few seconds and retry **once**. If still failing, surface the error to
the user — do not loop indefinitely. Mutations (stage / commit / push /
reject) are not safe to blind-retry; on error, call `tradingStatus` to
see what state things landed in, then ask the user how to proceed.

For auto-push failures: surface the error immediately, flag it as
requiring attention, and do NOT retry automatically. The user needs to
decide whether to retry, modify, or abort.

## 自动交易

Trader MCP 支持通过 OpenClaw 的 HEARTBEAT 机制实现自动交易监控。你不需要手动配置任何文件——AI 会根据用户的自然语言指令自动生成 `~/.openclaw/HEARTBEAT.md`。

### 工作原理

1. **用户指令** → 用户用自然语言描述监控需求（如"帮我监控 AAPL，止损 170"）
2. **AI 生成 HEARTBEAT.md** → 你自动在 `~/.openclaw/HEARTBEAT.md` 中写入监控任务
3. **OpenClaw HEARTBEAT** → 定期触发你执行监控
4. **AI 检查价格** → 调用 `getPortfolio` + `getQuote`
5. **触发条件** → 自动执行 `closePosition` + `tradingPush`
6. **通知用户** → 告知执行结果

### 用户指令示例

```
用户: 帮我监控 AAPL，止损 170，止盈 185
→ 你应该生成 HEARTBEAT.md，配置每分钟检查一次

用户: 再加一个 TSLA，止损 240
→ 你应该更新 HEARTBEAT.md，添加 TSLA 监控规则

用户: 把检查频率改成 5 分钟
→ 你应该更新 HEARTBEAT.md 中的 interval 字段

用户: 停止监控 TSLA
→ 你应该从 HEARTBEAT.md 中移除 TSLA 监控规则
```

### HEARTBEAT.md 格式

生成的文件应该遵循以下格式：

```yaml
tasks:
- name: trading-monitor
  interval: 1m  # 或 5m、15m 等
  prompt: |
    执行交易监控：
    1. getPortfolio 获取持仓
    2. 对每个持仓 getQuote 获取价格
    3. 检查规则：
       - AAPL: 止损 170, 止盈 185
       - TSLA: 止损 240
    4. 触发时调用 closePosition + tradingPush
    5. 通知用户
```

### 增量更新规则

- **添加监控**：读取现有 HEARTBEAT.md（如果存在），在 prompt 中添加新规则
- **修改频率**：更新 `interval` 字段
- **移除监控**：从 prompt 中删除对应规则
- **首次配置**：创建新的 HEARTBEAT.md 文件

### 与 Trade-as-Git 集成

所有自动执行的交易仍然遵循 Trade-as-Git 工作流：
- `commitMessage` 会标注 `[AUTO]` 前缀（如 `[AUTO] 止损触发: AAPL hit 170`）
- 自动推送的通知格式与手动推送相同
- 用户可以通过 `tradingLog` 查看所有自动执行的交易历史

### 注意事项

- 你不需要向用户解释 HEARTBEAT.md 的技术细节
- 用户只需要用自然语言描述需求，你自动处理所有配置
- 如果用户询问监控状态，读取 HEARTBEAT.md 并总结当前规则
- 建议在交易时段（09:30-16:00）启用监控，避免非交易时段浪费资源

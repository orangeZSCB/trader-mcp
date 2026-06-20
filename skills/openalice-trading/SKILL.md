---
name: openalice-trading
description: |
  Use when the user wants to query account state, market data, manage positions,
  or place / modify / cancel orders through the OpenAlice Trading MCP server.
  This skill enforces a strict Trade-as-Git approval ritual: stage and commit
  are AI-free decisions, but the AI MUST get explicit user consent in chat
  before calling tradingPush, because push is the irreversible step that
  sends orders to the live broker.
---

# OpenAlice Trading — Trade-as-Git workflow

本 skill 定义了如何使用 trader-mcp 工具集执行交易操作。所有交易操作都遵循 Git 工作流。

## Mental model

Trading goes through three states. They mirror git exactly:

```
   stage_*           commit            push
[ idea ] ─────► [ staging ] ─────► [ pending ] ─────► [ broker ]
                  reversible         reversible       IRREVERSIBLE
                  (reject)           (reject)
                  zero side          zero side        money moves
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

### Broker-effecting — **needs explicit user consent**

| Tool | Effect | Approval rule |
|------|--------|---------------|
| `tradingPush` | Executes the pending commit against the live broker. | **MUST ASK USER FIRST. SEE RITUAL BELOW.** |
| `tradingReject` | Discards the staging area + pending commit. | Use immediately when user rejects. |
| `tradingSync` | Pulls broker order statuses (no submission, but consumes API quota). | Free to call, but use `delayMs: 2000-5000` after a recent push so the exchange can settle. |

## The push ritual — five steps, in order

Treat these as hard rules. Skipping any is a violation of the contract
the user signed when installing this skill.

1. **Stage with intent.** Use the high-level tools (`placeOrder`,
   `modifyOrder`, `closePosition`, `cancelOrder`). Pass `commitMessage`
   when one decision = one operation, so you stage and commit in one
   call. The commit message is your reasoning, written *for the user*.
   Bad: `"buy AAPL"`. Good: `"Entry: AAPL momentum break above 200d MA;
   1% portfolio risk; stop at 195"`.

2. **Show the user what you've prepared.** Call `tradingStatus`.
   Render the result as a table (see "Approval message format" below).
   **Never** describe the operations from memory — the canonical state
   is what `tradingStatus` returns.

3. **Ask for explicit approval.** Use the exact phrasing template in
   "Approval message format". Wait for the user's reply. Treat
   silence / off-topic / partial responses as **not approved**.

4. **Branch on the answer.**
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

5. **Report what actually happened.** After `tradingPush` returns, show
   the user the resulting commit hash and the broker response per
   operation. If any operation has `success: false`, surface the error
   verbatim — do not paper over partial failures.

### Consent does not carry over

A `yes` approves **the specific commit you just showed.** Each new push
needs a fresh ritual. If the user said "yes please buy AAPL" earlier in
the conversation but then asked unrelated questions, you do **not** have
standing approval for the next push — re-ask.

## Approval message format

Use this template when you reach step 3. Adapt the table columns to the
operation type, but keep the structure.

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

1. **以模糊执行为耻** — *Pushing without explicit `yes`.* The user
   saying "I'd like to buy AAPL" is not approval; you must stage,
   show, and ask.
2. **以瞎猜接口为耻** — *Calling `tradingPush` and `tradingCommit`
   back-to-back in one tool-call burst, then asking permission "by
   the way".* Approval comes **before** push, never after.
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

### Example 1 — happy path

> **User:** Buy 10 shares of AAPL at limit 175.50 on alpaca-paper.

```
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

### Example 2 — user rejects

> **User:** no, the spread looks wide

```
[Tool] tradingReject
  source: alpaca-paper
  reason: "user rejected — spread too wide"
```

> Discarded. The staging area on `alpaca-paper` is clean. Nothing was
> sent to the broker. Want me to widen the limit, switch to MKT, or
> wait for tighter spread?

### Example 3 — user asks for a change

> **User:** make it 50 shares not 10

```
[Tool] tradingReject       # discard old stage
  source: alpaca-paper
  reason: "qty changed by user — restaging"
[Tool] placeOrder           # restage with new qty
  ... totalQuantity: "50" ... commitMessage: "Entry: AAPL …; sized to 50"
[Tool] tradingStatus
```

> Restaged with qty 50 (commit `e5f6g7h8`):
>
> | # | action | symbol | qty | type | price | tif |
> |---|--------|--------|-----|------|-------|-----|
> | 1 | BUY    | AAPL   | 50  | LMT  | 175.50| DAY |
>
> Estimated cost: ~$8,775. **Push? yes / no / change.**

## Multi-account note

Some tools accept `source`, others require it. The `source` is an
account id (`"alpaca-paper"`) or a provider tag (`"alpaca"`). When the
user has multiple accounts, ask which one before staging unless they
named one. Never silently fan out a mutation across all accounts.

## On retries and transient errors

Read-only tools may return `{ error: ..., transient: true }`. Wait a
few seconds and retry **once**. If still failing, surface the error to
the user — do not loop indefinitely. Mutations (stage / commit / push /
reject) are not safe to blind-retry; on error, call `tradingStatus` to
see what state things landed in, then ask the user how to proceed.

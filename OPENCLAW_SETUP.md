# OpenClaw 集成指南

本文档说明如何在 OpenClaw 中安装和配置 trader-mcp，让 OpenClaw 能够使用 OpenAlice 的 Trade-as-Git 交易工作流。

## 什么是 trader-mcp

trader-mcp 是一个 MCP (Model Context Protocol) 服务器，提供 67 个交易和市场数据工具，让 AI agent 能够：
- 查询账户、持仓、订单
- 下单、改单、撤单
- 执行 Trade-as-Git 工作流（stage → commit → push）
- 获取实时行情、新闻、经济指标
- 管理多个交易账户

**核心理念**：所有交易操作都遵循 Git 工作流，push 到交易所需要用户明确授权。

---

## 身份配置（重要）

**在安装 trader-mcp 之前，请先配置 OpenClaw 的身份。**

将以下内容写入 OpenClaw 的身份配置文件（通常是 `~/.openclaw/IDENTITY.md` 或类似文件）：

```markdown
# 你的身份

你是 **Trader MCP 交易助手**，一个专业的量化交易 AI。

## 核心职责
- 帮助用户管理交易账户和订单
- 执行 Trade-as-Git 工作流（stage → commit → push）
- 提供市场数据和交易分析
- 确保所有交易操作都经过用户明确授权

## 可用工具集（67 个工具）

### 账户管理
- `listAccounts` - 列出所有配置的交易账户
- `addAccount` - 添加新的交易账户（支持 mock、alpaca、ccxt 等）
- `removeAccount` - 删除交易账户

### 交易操作
- `placeOrder` - 下单（stage）
- `modifyOrder` - 改单（stage）
- `cancelOrder` - 撤单（stage）
- `closePosition` - 平仓（stage）
- `tradingCommit` - 提交（commit）
- `tradingPush` - 推送（push，需要用户授权）
- `tradingReject` - 拒绝（reject）

### 查询工具
- `listUTAs` - 列出所有交易账户
- `getAccount` - 获取账户信息（余额、购买力等）
- `getPortfolio` - 获取持仓
- `getOrders` - 获取订单
- `getQuote` - 获取实时报价
- `getMarketClock` - 获取市场状态
- `tradingStatus` - 查看 staging area
- `tradingLog` - 查看 commit 历史
- `tradingShow` - 查看某个 commit 详情
- `orderHistory` - 订单历史
- `tradeHistory` - 成交历史

### 市场数据
- `marketSearch` - 搜索合约
- `equityGetProfile` - 获取股票基本信息
- `equityGetFinancials` - 获取财务数据
- `etfGetProfile` - 获取 ETF 信息
- `newsSearch` - 搜索新闻
- `getEconomicIndicators` - 获取经济指标
- `sectorRotation` - 板块轮动分析
- `derivativesGetChain` - 期权链数据

### 其他工具
- `searchContracts` - 搜索合约
- `getContractDetails` - 获取合约详情
- `expandContract` - 展开合约（期权链等）
- `simulatePriceChange` - 模拟价格变化

## 初始化行为

当用户第一次与你交互时：
1. **不要问身份问题** - 你已经知道自己是交易助手
2. **直接确认工具可用** - 告诉用户 trader-mcp 工具已就绪
3. **询问需求** - 问用户想做什么

示例开场白：
```
Trader MCP 交易助手已就绪。当前可用工具：
- 67 个交易和市场数据工具
- Trade-as-Git 安全工作流
- 多账户管理

你想做什么？比如：
- 查看账户余额
- 搜索股票信息
- 下单交易
- 查看持仓
```

## 安全准则

### API Key 处理
- 永远不要在聊天中显示完整的 API key
- 如果用户提供 API key，立即存入加密配置（使用 addAccount 工具）
- 不要在日志或输出中暴露敏感信息

### 交易安全
- 所有交易操作都遵循 Trade-as-Git 工作流
- push 操作必须获得用户明确授权
- 永远不要在没有用户确认的情况下执行交易

## 工具可用性

你已经通过 MCP 协议连接到 trader-mcp 服务器，所有 67 个工具都已就绪。
如果用户要求使用某个工具但该工具不可用，请检查：
1. trader-mcp 服务是否正在运行
2. OpenClaw 是否正确配置了 MCP 连接
3. 是否需要重启 OpenClaw gateway
```

---

## 前置要求

- Node.js 24+
- pnpm 10+
- OpenClaw CLI 已安装并配置

## 安装步骤

### 1. 克隆仓库

```bash
git clone https://github.com/orangeZSCB/trader-mcp.git
cd trader-mcp
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 配置数据目录

创建数据目录并配置账户：

```bash
export OPENALICE_HOME=/tmp/openclaw-test
mkdir -p $OPENALICE_HOME/data/config
```

编辑 `$OPENALICE_HOME/data/config/accounts.json`，添加交易账户：

```json
[{
  "id": "mock-test",
  "label": "Mock Test Account",
  "presetId": "mock-simulator",
  "enabled": true,
  "guards": [],
  "presetConfig": {
    "cash": 100000,
    "_instanceId": "openclaw-test-001"
  }
}]
```

**账户类型**：
- `mock-simulator` - 虚拟盘（测试用）
- `alpaca-paper` - Alpaca 虚拟盘
- `alpaca-live` - Alpaca 实盘
- `ccxt-*` - 支持 CCXT 的交易所（Binance、OKX、Bybit 等）

### 4. 启动 MCP 服务器

```bash
cd apps/mcp-server
export OPENALICE_HOME=/tmp/openclaw-test
pnpm dev
```

服务器会在 `http://127.0.0.1:47400/mcp` 启动。

**生产环境**（systemd）：

```bash
# 复制 service 文件
cp trading-mcp.service ~/.config/systemd/user/

# 启用并启动
systemctl --user daemon-reload
systemctl --user enable trading-mcp
systemctl --user start trading-mcp

# 查看状态
systemctl --user status trading-mcp
```

### 5. 配置 OpenClaw MCP

在 OpenClaw 中注册 trader-mcp：

```bash
openclaw mcp set trader-mcp \
  --transport streamable-http \
  --url http://127.0.0.1:47400/mcp
```

验证配置：

```bash
openclaw mcp list
```

应该看到 `trader-mcp` 在列表中。

### 6. 安装 Skill

Skill 文件位于 `skills/openalice-trading/SKILL.md`，需要复制到 OpenClaw 的 skills 目录：

```bash
mkdir -p ~/.openclaw/skills/openalice-trading
cp skills/openalice-trading/SKILL.md ~/.openclaw/skills/openalice-trading/SKILL.md
```

验证安装：

```bash
openclaw skills list | grep openalice-trading
```

### 7. 重启 OpenClaw Gateway

让配置生效：

```bash
systemctl --user restart openclaw-gateway
```

---

## 使用方法

### 查询操作（无需授权）

```bash
# 列出所有账户
openclaw agent --agent main -m "列出所有交易账户" --local

# 查看持仓
openclaw agent --agent main -m "查看我的持仓" --local

# 查看订单
openclaw agent --agent main -m "查看我的订单" --local
```

### 交易操作（需要用户授权）

```bash
# 下单（会走 Trade-as-Git 流程）
openclaw agent --agent main -m "在 mock-test 上买 0.1 BTCUSDT，市价单" --local
```

OpenClaw 会：
1. Stage 订单（暂存）
2. Commit（生成 commit hash）
3. 展示 pending commit 详情
4. 询问是否 push
5. 等待用户回复 "yes" 或 "push"
6. 执行 push（发送到交易所）

### 查看交易历史

```bash
# 查看 commit 历史
openclaw agent --agent main -m "查看交易历史" --local

# 查看某个 commit 详情
openclaw agent --agent main -m "查看 commit abc123 的详情" --local
```

---

## 可用工具列表

trader-mcp 提供 67 个工具：

### 账户管理（3 个）
- `listAccounts` - 列出所有配置的交易账户
- `addAccount` - 添加新的交易账户
- `removeAccount` - 删除交易账户

### 交易工具（7 个）
- `placeOrder` - 下单（stage）
- `modifyOrder` - 改单（stage）
- `cancelOrder` - 撤单（stage）
- `closePosition` - 平仓（stage）
- `tradingCommit` - 提交（commit）
- `tradingPush` - 推送（push，需要用户授权）
- `tradingReject` - 拒绝（reject）

### 查询工具（11 个）
- `listUTAs` - 列出所有交易账户
- `getAccount` - 获取账户信息
- `getPortfolio` - 获取持仓
- `getOrders` - 获取订单
- `getQuote` - 获取实时报价
- `getMarketClock` - 获取市场状态
- `tradingStatus` - 查看 staging area
- `tradingLog` - 查看 commit 历史
- `tradingShow` - 查看某个 commit 详情
- `orderHistory` - 订单历史
- `tradeHistory` - 成交历史

### 市场数据工具（8 个）
- `marketSearch` - 搜索合约
- `equityGetProfile` - 获取股票基本信息
- `equityGetFinancials` - 获取财务数据
- `etfGetProfile` - 获取 ETF 信息
- `newsSearch` - 搜索新闻
- `getEconomicIndicators` - 获取经济指标
- `sectorRotation` - 板块轮动分析
- `derivativesGetChain` - 期权链数据

### 其他工具（4 个）
- `searchContracts` - 搜索合约
- `getContractDetails` - 获取合约详情
- `expandContract` - 展开合约（期权链等）
- `simulatePriceChange` - 模拟价格变化

---

## 配置选项

### 环境变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `OPENALICE_HOME` | `~/.openalice` | 数据目录 |
| `OPENALICE_TRADING_MCP_PORT` | `47400` | MCP 服务器端口 |
| `OPENALICE_UTA_PORT` | `47333` | UTA 内部端口 |
| `OPENALICE_UTA_HEALTH_TIMEOUT_MS` | `20000` | UTA 健康检查超时（毫秒） |
| `OPENALICE_TRADING_AGENT_AUTHOR` | `openclaw` | commit 作者标签 |

### 配置文件

- `$OPENALICE_HOME/data/config/accounts.json` - 交易账户配置
- `$OPENALICE_HOME/sealing.key` - 加密密钥（自动生成）

---

## 故障排查

### MCP 服务器无法启动

检查端口是否被占用：

```bash
lsof -i :47400
```

### OpenClaw 无法连接 MCP

检查 MCP 服务器是否运行：

```bash
curl http://127.0.0.1:47400/
```

应该返回：

```json
{
  "service": "openalice-trading-mcp",
  "status": "running",
  "version": "0.1.0"
}
```

### Skill 未加载

检查 skill 文件是否存在：

```bash
ls ~/.openclaw/skills/openalice-trading/SKILL.md
```

检查 OpenClaw 是否识别：

```bash
openclaw skills list | grep openalice-trading
```

### 工具不可用

如果 OpenClaw 说"工具不可用"，请检查：

1. trader-mcp 服务是否正在运行：
   ```bash
   systemctl --user status trading-mcp
   ```

2. OpenClaw 是否正确配置了 MCP：
   ```bash
   openclaw mcp list
   ```

3. 重启 OpenClaw gateway：
   ```bash
   systemctl --user restart openclaw-gateway
   ```

---

## 安全说明

- 所有交易操作都遵循 Trade-as-Git 工作流
- `push` 操作需要用户明确授权
- 敏感数据（API keys）使用 AES-256-GCM 加密存储
- MCP 服务器默认只监听 `127.0.0.1`，不对外暴露

---

## 更多资源

- GitHub: https://github.com/orangeZSCB/trader-mcp
- OpenAlice 文档: https://github.com/TraderAlice/OpenAlice
- MCP 协议: https://modelcontextprotocol.io

---

## 许可证

AGPL-3.0

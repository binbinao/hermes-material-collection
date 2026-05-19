# Hermes Agent 原理与架构深度解析：从 ReAct 循环到自学习闭环

> 来源: https://www.cnblogs.com/qiniushanghai/p/20012754
> 作者: 起年底上海
> 爬取日期: 2026-05-19

---

# Hermes Agent 原理与架构深度解析：从 ReAct 循环到自学习闭环（基于源码）

本文基于 `NousResearch/hermes-agent` 仓库源码和官方 `AGENTS.md` 文档，完整解析其从基础推理循环到自学习成长的全链路技术实现。

---

## 一、核心定义与基础信息

Hermes Agent 是 **带学习闭环的同步式工具调用 Agent**，核心设计目标是让 Agent 稳定嵌入用户日常工具链，并随时间自我成长，官方定义为 "The agent that grows with you."

### 关键参数

- **仓库地址**：`NousResearch/hermes-agent`（截至 2026-05-11，142,830 star，5,079 open issues）
- **技术栈**：Python（CLI/核心 Agent）+ TypeScript（Ink TUI）
- **核心入口类**：`AIAgent`（`run_agent.py`，约 12k LOC）
- **测试规模**：约 17,000 个测试、900 个测试文件

---

## 二、整体架构：六层分层设计

架构按依赖关系自底向上分为 6 层，各层职责清晰解耦：

```
┌─────────────────────────────────────────────────┐
│ L6 入口/UI层: cli.py / ink-ui (Ink) / gateway / acp_adapter │
├─────────────────────────────────────────────────┤
│ L5 编排层: AIAgent (run_agent.py) — 同步对话循环           │
├─────────────────────────────────────────────────┤
│ L4 工具层: model_tools + tools/registry.py — 自动发现     │
├─────────────────────────────────────────────────┤
│ L3 推理层: agent/ — provider 适配器、缓存、压缩、Curator   │
├─────────────────────────────────────────────────┤
│ L2 持久化层: hermes_state SQLite + FTS5 + plugins/memory   │
├─────────────────────────────────────────────────┤
│ L1 系统层: ~/.hermes/ 配置 + .env + 7 种执行环境            │
└─────────────────────────────────────────────────┘
```

---

## 三、核心推理循环：类 ReAct 的同步工具调用实现

Hermes Agent 没有采用 LangGraph、AutoGPT 等图编排方案，而是使用极简的同步 `while` 循环实现**原生 tool calling 驱动的类 ReAct 范式**（reason → act → observe 由模型原生函数调用驱动，而非 prompt 提示），核心代码（`run_agent.py::run_conversation`）如下：

```python
while (api_call_count < self.max_iterations and self.iteration_budget.remaining > 0) \
        or self._budget_grace_call:
    if self._interrupt_requested: break
    response = client.chat.completions.create(
        model=model, messages=messages, tools=tool_schemas
    )
    if response.tool_calls:
        for tool_call in response.tool_calls:
            result = handle_function_call(tool_call.name, tool_call.args, task_id)
            messages.append(tool_result_message(result))
        api_call_count += 1
    else:
        return response.content
```

### 四大核心设计要点

1. **同步优先**：循环本身为同步逻辑，仅在 IO 边界（流式 API、消息网关）使用异步，避免 async/await 嵌套导致的调试复杂度问题。

2. **预算驱动而非单纯步数驱动**：`max_iterations`（默认 90）为硬上限，实际通过 `iteration_budget` 做软预算控制，额外提供 `_budget_grace_call` 机制允许最后一次「恩典调用」做任务收尾；子代理与父代理共享同一预算池，避免无限派发。

3. **可中断**：每轮循环检查 `_interrupt_requested` 标志，支持 CLI Ctrl+C、TUI `/stop` 命令随时终止循环。

4. **统一消息格式**：所有推理内容统一使用 OpenAI message 格式（`{"role": "system/user/assistant/tool", ...}`），推理过程存入 `assistant_msg["reasoning"]`，切换模型厂商无需修改核心代码。

---

## 四、跨厂商推理适配：多 Provider 统一抽象

`agent/` 目录下的适配器层解决了不同厂商 API 格式差异问题，通过 `api_mode` 字段自动路由到对应实现：

| 适配器文件                | 支持厂商/场景                     |
|---------------------------|----------------------------------|
| `anthropic_adapter.py`    | Anthropic Messages API（含 thinking 字段） |
| `bedrock_adapter.py`      | AWS Bedrock 鉴权与请求转换        |
| `codex_responses_adapter.py` | OpenAI Codex Responses API（区别于 chat completions） |
| `gemini_native_adapter.py` | Google Gemini 原生 API             |
| `gemini_cloud_code_adapter.py` | Google Cloud Code Assist（OAuth 流） |

同时提供 `agent/auxiliary_client.py` 处理副 LLM 任务（curator、vision、embedding、会话搜索等），每个任务可独立配置 provider/model，不占用主对话预算。

---

## 五、工具系统：注册中心 + 自动发现机制

工具系统采用**两阶段暴露**设计，兼顾自动化与可控性：

1. **自动发现阶段**：`tools/registry.py` 作为零依赖的注册中心，所有 `tools/*.py` 文件在导入时自动调用 `registry.register()` 完成注册，无需手动维护导入列表。

2. **手动启用阶段**：工具注册后，需手动将其加入 `toolsets.py` 的 `_HERMES_CORE_TOOLS` 列表或自定义 toolset，才会被 Agent 实际调用。

   - 特殊 Agent 级工具（如 `todo`、`memory`）不在标准 dispatch 流程中，由 `run_agent.py` 在 `handle_function_call()` 之前直接拦截处理。

### 核心工具分类（节选）

- **代码与文件**：`code_execution_tool.py`、`file_operations.py` 等
- **浏览器与 GUI**：`browser_tool.py`、`computer_use_tool.py` 等
- **代理协作**：`delegate_tool.py`、`mixture_of_agents_tool.py` 等
- **MCP 协议**：`mcp_tool.py`、`mcp_oauth.py` 等
- **第三方集成**：`feishu_doc_tool.py`、`home_assistant_tool.py` 等

---

## 六、插件系统：扩展与核心解耦

`plugins/` 目录将非核心能力从主代码库中解耦，支持官方插件和用户自定义插件：

| 官方插件目录               | 功能说明                     |
|---------------------------|------------------------------|
| `plugins/memory/`         | 记忆 provider（Honcho、mem0、supermemory 等） |
| `plugins/context_engine/` | 上下文引擎插件                |
| `plugins/model-providers/`| 推理后端扩展（openrouter、anthropic 等） |
| `plugins/kanban/`         | 多代理看板 + worker 派发         |
| `plugins/observability/`  | 指标/trace/日志监控           |
| `plugins/image_gen/`      | 图像生成 provider 扩展          |

### 用户自定义插件规范

用户插件需放在 `~/.hermes/plugins/<name>/` 目录下，包含 `plugin.yaml` 和 `__init__.py`，在 `__init__.py` 中调用 `ctx.register_tool(...)` 即可完成注册，支持独立启停，无需修改核心代码。

---

## 七、记忆与跨会话搜索：工程化记忆实现

Hermes 没有默认使用向量数据库，而是采用 **SQLite + FTS5 全文索引**的轻量方案，适配低配置基础设施：

1. 所有会话内容实时写入 `hermes_state.py::SessionDB`（SQLite 数据库），并通过 FTS5 实现毫秒级关键词召回。

2. 配合 `agent/context_compressor.py` 做主动上下文压缩，避免上下文溢出。

3. 跨会话语义检索可通过 `plugins/memory/` 集成 Honcho（辩证用户建模）、mem0（通用键值记忆）、supermemory（多模态长期记忆）等向量后端实现。

---

## 八、自学习闭环：Curator 核心实现

`agent/curator.py`（约 75KB 源码）是 Hermes 实现自学习的核心模块，区别于同类 Agent 的关键特性：

1. **运行机制**：后台运行，通过 `config.yaml` 配置 `interval_hours`（触发周期）、`min_idle_hours`（仅空闲时工作，避开主对话）、`stale_after_days`/`archive_after_days`（过期 skill 自动归档）。

2. **闭环逻辑**：Agent 完成复杂任务 → Curator 自动提炼任务模式 → 生成可复用 skill → 下次同类任务直接命中 skill，实现"从经验中创建技能，使用中优化技能"的能力。

---

## 九、多端交互与多平台对接

### 1. CLI + TUI 双前端

- 经典 CLI 基于 `prompt_toolkit` 实现，React/Ink TUI 通过 `tui_gateway/` 的 JSON-RPC over stdio 协议与 Python 后端通信，遵循「TypeScript 管渲染，Python 管会话/工具/逻辑」的分层原则。

- 所有 slash 命令统一维护在 `hermes_cli/commands.py` 的 `COMMAND_REGISTRY` 中，新增命令只需添加一行 `CommandDef`，即可自动同步到 CLI、TUI、Telegram/Slack 等所有交互端。

### 2. 22+ 通讯渠道支持

`gateway/platforms/` 目录为每个通讯平台提供统一适配器，实现 `send_message`/`receive_event` 接口，支持 Telegram、Discord、Slack、飞书、企业微信、邮件、Webhook 等 22+ 平台，新增平台只需编写适配器并注册到 `gateway/platforms/__init__.py`。

---

## 十、部署与配置规范

### 1. 7 种执行环境

`tools/environments/` 提供支持不同场景的执行后端：

- **本地**：`local`（本地 shell）、`docker`（容器隔离）、`ssh`（远程主机）、`singularity`（HPC 容器）
- **Serverless**：`modal`（Serverless GPU）、`daytona`（持久化沙箱）、`vercel sandbox`（边缘运行时）

其中 Modal 和 Daytona 支持「闲置休眠 + 调用唤醒」，可在 $5/月的 VPS 上近乎零成本运行。

### 2. 三层配置加载

| 加载器               | 适用场景                     | 说明                                   |
|----------------------|------------------------------|----------------------------------------|
| `load_cli_config()`  | CLI 模式                      | 合并 CLI 默认配置 + 用户 YAML 配置           |
| `load_config()`      | 子命令（如 `hermes tools`）   | 合并 `DEFAULT_CONFIG` + 用户 YAML 配置      |
| Direct YAML load     | 消息网关运行时               | 直接读取用户 YAML 原始配置               |

### 3. 安全规范

- **非敏感配置**（超时、阈值、功能开关等）放入 `config.yaml`
- **敏感信息**（API Key、Token、密码等）仅放入 `.env` 文件

---

## 十一、常见问题解答

### 1. Q：Hermes 用的是 ReAct、Plan-and-Execute 还是其他范式？

**A**：核心是 OpenAI 风格的 native tool calling 循环，接近 ReAct 的 reason → act → observe 逻辑，但由模型原生函数调用驱动而非 prompt 提示。计划/子代理工作流通过 `plan` 和 `subagent-driven-development` 两个 skill 实现，非硬编码在核心中。

### 2. Q：max_iterations=90 用完后怎么办？

**A**：循环退出前会触发一次 `_budget_grace_call`，允许模型做最后一次收尾响应。子代理与父代理共享同一预算池，避免子代理无限派发。

### 3. Q：为什么不用向量库做跨会话记忆？

**A**：默认采用 SQLite + FTS5 方案是为了适配低配置基础设施，一台 $5/月的 VPS 即可运行。需要语义检索时可通过 `plugins/memory/` 集成向量后端。

### 4. Q：如何自定义工具/插件？

**A**：自定义工具优先走插件路径（`~/.hermes/plugins/<name>/`），无需修改核心代码；若要贡献到官方核心，需新建 `tools/your_tool.py` 并在 `toolsets.py` 中注册。

### 5. Q：支持并行跑子任务吗？

**A**：支持，通过 `tools/delegate_tool.py` 派发独立 subagent，或 `plugins/kanban/` 的多代理看板实现。但单个 AIAgent 实例的对话循环是同步的，并行通过派发独立 Agent 实例实现。

---

## 十二、架构核心总结

Hermes Agent 的架构哲学可浓缩为三句话：

> **循环要简单**（同步 while + 预算控制）、**扩展要解耦**（插件优先于改核心）、**记忆要工程化**（SQLite + FTS5 + Curator 实现长期成长）。

它不是抽象 Agent 框架的"优化版本"，而是针对真实工程问题的务实解决方案，所有设计围绕「让 Agent 稳定跑在用户日常工具链中，并随时间自我成长」的核心目标。

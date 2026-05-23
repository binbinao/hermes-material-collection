# Material: Hermes Agent 高阶功能深度挖掘

## 1. Overview

- **Hermes Agent** 是 Nous Research 开发的自进化 AI Agent 框架，GitHub 143.5K Stars，当前版本 v0.14.0 (2026-05-16)
- **核心定位**：不是聊天机器人，而是具备自主进化能力的 AI Agent 操作系统——能自创建技能、自改进工作流、自复用经验
- **高阶功能**：超越基础对话，进入多 Agent 协作、可观测性、多实例、多模型协同等生产级能力
- **目标受众**：已掌握 Hermes 基础架构的开发者和架构师
- **关键数据**：日处理 224B Token（2026-05-10 超越 OpenClaw 的 186B），v0.6.0 引入 Profile/MCP，v0.12.0 引入 Kanban/Dashboard/Google Meet

## 2. Background

- **发展时间线**：
  - 2026.02: Hermes Agent 正式发布（从内部工具开源）
  - v0.6.0: 引入 Profile 多实例 + MCP Server 模式（一台机器跑 20+ 独立 Agent）
  - v0.12.0: 里程碑版本——Kanban 多代理协作系统 + 官方 Dashboard + Google Meet 插件
  - v0.14.0: 当前稳定版，143.5K Stars
- **生态位**：与 OpenClaw（广度优先/372K Stars）、OpenHuman（体验优先/25.4K Stars）形成三足鼎立
- **技术哲学**："Agent 应该像人一样学习和成长"——自进化是核心差异化

## 3. Key Info

### 3.1 Kanban 系统（最核心的高阶功能）
- **本质**：AI Agent 的操作系统级任务调度器，非项目管理工具
- **对比 delegate_task**：RPC 调用 vs 持久化消息队列+状态机；匿名子进程 vs 命名 Profile
- **六状态机**：triage → todo → ready → running → done → archived（blocked 可从 running 回退）
- **9 个专用工具集**：kanban_show/create/complete/block/heartbeat/comment/link/unblock/list
- **Dispatcher**：Gateway 内嵌循环，默认 60s/tick，含回收/提升/认领/自动分解四大操作
- **熔断器**：连续失败 2 次自动 block，三种软阻止条件（配额错误/近期成功/发现 PR）
- **结构化交接**：kanban_complete(summary + metadata) 传递完整上下文
- **九大协作模式**：P1 Fan-out / P2 Pipeline / P3 Voting / P4 Journal / P5 Human-in-loop / P6 @mention / P7 Thread-scoped / P8 Fleet farming / P9 Triage specifier
- **多看板隔离**：每 board 独立数据库/工作空间/日志/Worker 可见性

### 3.2 Dashboard 体系
- **官方 Dashboard**：`hermes dashboard` → http://127.0.0.1:9119，含 Kanban 看板 + 会话管理 + 设置 + Profile 管理
- **社区 WebUI**（nesquena/hermes-webui）：3070 Stars（19 天达成），13 个功能模块
  - 核心亮点：AI 聊天(SSE)、8 大平台频道配置页、用量分析图表、Web 终端(xterm.js)、文件浏览器
  - 技术栈：Vue 3 + TypeScript + Vite + Naive UI + Pinia
  - 支持远程访问(Docker + HTTPS)

### 3.3 Profile 多实例机制
- **v0.6.0 引入**：同一机器运行多个完全独立 Hermes 实例
- **隔离维度**：配置/记忆库/会话历史/技能集合/工具权限/网关服务/凭证（7 维隔离）
- **内存占用**：< 500MB/实例 → 一台 16GB 机器可跑 20+ Profile
- **典型场景**：工作 vs 个人隔离、专岗专能(backend-dev/reviewer/ops)、Kanban Worker(researcher/writer/qa)、多租户(client 隔离)

### 3.4 MoA 多模型协同推理
- **灵感来源**：arXiv:2406.04692 论文（Mixture of Agents）
- **架构**：4 参考模型(Claude/Gemini/GPT/DeepSeek, temp=0.6) + 1 聚合模型(Claude, temp=0.4) = 5 次 API 调用
- **vs Delegate Task**：不同任务并行 vs 同一问题多角度推理；多独立摘要 vs 单一综合答案
- **适用场景**：复杂数学证明、架构决策多视角评估、消除单一模型偏见
- **成本考量**：每次调用 = 5 倍 API 成本，适合高价值决策场景

### 3.5 Observability 可观测性体系
- **四维框架**：成本归因(Token 流向追踪)、性能拆解(P50/P90/P99)、稳定性监控(失败率趋势)、链路追踪(Trace 全链路)
- **方案 A - 内置 Langfuse 插件**：fail-open 设计、Hook 埋点(pre/post api/tool call)、Session 分组、大文件截断(12000 字符)
- **方案 B - hermes-otel 社区插件**：支持 10+ OTLP 后端并行 fan-out、零热路径延迟(BatchSpanProcessor)、双协议属性(gen_ai.* + llm.token_count.*)
- **方案 C - 云厂商集成**：火山引擎 TLS（一键部署脚本）+ 阿里云 SLS（CMS 2.0）
- **Span 层级**：session.{platform} → llm.{model} → api.{model} → tool.{name}

### 3.6 Background Review 后台自省引擎
- **双计数器触发**：Memory 计数器(每 turn) / Skill 计数器(每 tool call)，各阈值 10
- **Fork 机制**：守护线程非阻塞、共享记忆写入、自身递归禁用、限制 8 步 tool call
- **三种 Prompt**：_MEMORY_REVIEW_PROMPT → MEMORY.md / _SKILL_REVIEW_PROMPT → 创建 skill / _COMBINED_REVIEW_PROMPT → 双管齐下

### 3.7 Google Meet 会议插件（实验性）
- v0.12.0 内置，无头虚拟参与者加入 Meet URL
- 能力：实时转写(STT) + meet_summarize/speak/followup 工具 + 可选 TTS 回复
- 会后产出：transcript + speaker-attributed notes + action items

### 3.8 MCP Server 模式
- v0.6.0 引入，`hermes mcp serve` 暴露给 MCP 兼容客户端
- 协议：stdio + Streamable HTTP
- 集成目标：Claude Desktop / Cursor / VS Code

## 4. Evidence

- **案例 1 - Kanban 生产验证**：官方 Tutorial 展示 4 种用户故事（solo dev / fleet farming / role pipeline with retry / circuit breaker），证明从个人到团队级协作的全覆盖能力
- **案例 2 - 社区 WebUI 增长**：nesquena/hermes-webui 19 天达 3070 Stars，说明 Dashboard 需求强烈且社区活跃
- **案例 3 - 可观测性生态成熟度**：hermes-otel 支持 Phoenix/Langfuse/LangSmith/SigNoz/Jaeger/Grafana 等 10+ 后端，说明 OpenTelemetry 标准已被广泛采用
- **案例 4 - Profile 密度**：< 500MB/实例意味着资源效率极高，20+ 实例同时运行的可行性已在社区验证

## 5. Analysis

- **Hermes 高阶功能的核心逻辑线**：
  1. **单体→多体**：Profile 让一个 Agent 变成一群 Agent
  2. **孤立→协作**：Kanban 让这群 Agent 有组织地协同工作
  3. **黑盒→透明**：Observability 让协作过程可审计、可优化
  4. **单模型→多模型**：MoA 让推理质量超越任何单一模型上限
  5. **被动→主动**：Background Review 让 Agent 自动反思和进化
- **与竞品差异**：OpenClaw 重在连接广度（30000+ 实例暴露），OpenHuman 重在用户体验（桌面 GUI + 吉祥物），Hermes 重在深度能力（自进化 + 多 Agent 编排）
- **成熟度评估**：Kanban ★★★★★ / Profile ★★★★★ / Langfuse Observability ★★★★★ / Background Review ★★★★★（均已生产验证）；MoA ★★★☆☆（高成本限制）/ Google Meet ★★☆☆☆（实验阶段）

## 6. Outlook

- **趋势一**：Multi-Agent OS 化 —— Profile + Kanban 的组合已经是完整的 Multi-Agent 操作系统雏形
- **趋势二**：可观测性从 Nice-to-Have 变成 Must-have —— Token 成本归因和故障排查需求驱动
- **趋势三**：模型路由智能化 —— MoA 是手动配置的先驱，未来可能演化为自动模型选择器
- **趋势四**：Agent 自主性持续增强 —— Background Review 的 fork 机制展示了 Agent 自省的可能性
- **建议**：对 Hermes 的投入应聚焦 Kanban + Observability 两大支柱，这是区分"玩具 Agent"和"生产力工具"的分水岭

## Summary
- **High-authority**: 官方文档(Kanban Overview + Tutorial)、源码分析(mixture_of_agents_tool.py)、hermes-otel 插件文档、火山引擎 TLS/阿里云 SLS 集成方案 — 共 8+ 权威来源
- **Gaps**: MoA 缺少大规模 A/B 测试数据；Google Meet 插件缺少企业部署案例；Dashboard 性能指标（并发用户数、响应延迟）未公开

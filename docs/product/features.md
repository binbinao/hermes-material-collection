# PPT Outline

## Overview

本 PPT 深度解析 Hermes Agent v0.14.0 的高阶功能体系，面向已掌握基础架构的开发者和架构师。核心论点：Hermes Agent 的高阶功能（Kanban/Profile/Observability/MoA 等）共同构成了从单体聊天机器人到 Multi-Agent 操作系统的完整演进路径。

内容采用 Progressive 渐进式结构，分为五大章节：
- **Chapter 1 核心引擎**：Kanban 多代理协作系统（3页）—— 最核心的高阶能力
- **Chapter 2 控制台体系**：Dashboard 与 WebUI 对比（1页）
- **Chapter 3 基础设施层**：Profile / MoA / Observability（4页）—— 支撑上层能力的三大支柱
- **Chapter 4 能力扩展层**：Background Review / Meet / MCP（1页）
- **Chapter 5 全景与展望**：成熟度矩阵 + Agent 变革五大趋势（2页）

共 16 页，Tech 现代科技风格，深色渐变背景 + 蓝紫色调。

## Outline Content

### Page 1: 封面 - Hermes Agent 高阶功能深度挖掘
- **Page Type**: Cover
- **Page Title**: Hermes Agent 高阶功能深度挖掘
- **Page Subtitle**: 从 Kanban 到 Observability —— 构建 AI Agent 生产级能力体系 | v0.14.0
- **Content Structure**:
  - 主标题：Hermes Agent 高阶功能深度挖掘
  - 副标题：从 Kanban 到 Observability —— 构建 AI Agent 生产级能力体系
  - 版本信息：v0.14.0 | Nous Research | 143.5K Stars
  - 核心标签：Multi-Agent OS · 自进化 · 可观测性 · 生产级

### Page 2: 目录 - 内容导航
- **Page Type**: TOC
- **Page Title**: 内容导航
- **Content Structure**:
  - 章节一：核心引擎 —— Kanban 多代理协作系统（3页）：任务调度到操作系统级编排、六状态机与九大协作模式、Dashboard 可视化看板
  - 章节二：控制台体系 —— Dashboard 与 WebUI（1页）：官方 vs 社区 13 个功能模块对比
  - 章节三：基础设施层 —— Profile / MoA / Observability（4页）：多实例隔离、五模型协同推理、四维可观测框架+三层方案
  - 章节四：能力扩展层 —— 自省 / 会议 / MCP（1页）：Background Review 后台自省、Google Meet、MCP Server
  - 章节五：全景与展望（2页）：高阶能力成熟度矩阵、Agent 变革五大趋势

### Page 3: 过渡页 — Chapter 1 核心引擎
- **Page Type**: Transition
- **Page Title**: Chapter 1 核心引擎
- **Page Subtitle**: Kanban 多代理协作系统 —— AI Agent 的任务操作系统
- **Content Structure**:
  - 章节标题：核心引擎：Kanban 多代理协作系统
  - 关键数据：v0.12.0 引入 | 9 个专用工具 | 六状态机 | 九大协作模式

### Page 4: Kanban 核心定位与架构
- **Page Type**: Content
- **Page Title**: Kanban：从 RPC 调用到操作系统的跨越
- **Page Subtitle**: delegate_task vs Kanban —— 本质差异决定生产力上限
- **Content Structure**:
  - 核心论点：Kanban 是 Hermes 最被低估的能力——把"多 Agent 协作"从概念变成可审计、可恢复、人机协同的生产力工具
  - 对比表格（7维度）：delegate_task(RPC/fork→join/匿名/不可恢复) vs Kanban(持久化队列/命名Profile/block→unblock重跑/SQLite审计)
  - 架构要点：三面(Dashboard/CLI/Worker) → kanban_db(SQLite) → Dispatcher(60s/tick) → Worker池(P1-P4)
  - 关键洞察：delegate_task是函数调用思维，Kanban是消息队列思维——后者才是分布式系统正确抽象

### Page 5: Kanban 状态机与工具集
- **Page Type**: Content
- **Page Title**: 六状态机 × 九工具集 —— 完整的任务生命周期
- **Page Subtitle**: triage → todo → ready → running → done → archived + blocked 回退机制
- **Content Structure**:
  - 六状态状态机详解（6行表）：triage(原始想法) → todo(依赖未满足) → ready(等待认领) → running(执行中) → blocked(等待人工/熔断) → done(完成) → archived(归档)
  - 九工具集分三类：读取(show/list) / Worker写入(complete/block/heartbeat/comment) / Orchestrator写入(create/link/unblock)
  - Dispatcher四大操作：回收过期认领 / 回收崩溃Worker / 提升ready / 原子认领+派生
  - 熔断器：连续失败>2次自动block；三种软阻止(配额错误/近期成功/发现PR)

### Page 6: Kanban 协作模式与 Dashboard UI
- **Page Type**: Content
- **Page Title**: 九大协作模式 + 实时看板 UI
- **Page Subtitle**: 从 Solo Dev 到 Fleet Farming —— 覆盖所有多人/多Agent协作场景
- **Content Structure**:
  - 九大协作模式(P1-P9)：Fan-out/Pipeline/Voting/Journal/Human-in-loop/@mention/Thread-scoped/Fleet farming/Triage specifier
  - 结构化交接：kanban_complete(summary+metadata) 传递完整上下文
  - Dashboard UI特性：六列拖拽看板 / Profile Lane / WebSocket实时更新 / 侧边抽屉 / Triage列特殊操作(Decompose+Specify)
  - 多看板隔离：每board独立数据库/工作空间/日志/Worker可见性

### Page 7: 过渡页 — Chapter 2 控制台体系
- **Page Type**: Transition
- **Page Title**: Chapter 2 控制台体系
- **Page Subtitle**: Dashboard 与社区 WebUI —— 两套界面，两种哲学

### Page 8: Dashboard 体系对比
- **Page Type**: Content
- **Page Title**: 官方 Dashboard vs 社区 WebUI —— 13 个功能模块全景
- **Page Subtitle**: hermes dashboard (9119) vs hermes-webui (8648)
- **Content Structure**:
  - 官方Dashboard(4模块)：Kanban看板/会话管理/设置页面/Profile管理
  - 社区WebUI(13模块)：AI聊天/8大平台频道配置/用量分析/Cron/模型管理/多Profile/文件浏览器/群聊/技能记忆/日志/Web终端/认证/设置
  - 技术栈：Vue3+TS+Vite+NaiveUI，3070 Stars(19天)
  - 选择建议：轻量管理用官方；全面管控用社区WebUI

### Page 9: 过渡页 — Chapter 3 基础设施层
- **Page Type**: Transition
- **Page Title**: Chapter 3 基础设施层
- **Page Subtitle**: Profile 多实例 · MoA 多模型推理 · Observability 可观测性

### Page 10: Profile 多实例机制
- **Page Type**: Content
- **Page Title**: Profile —— 一台机器跑 20+ 个独立 Agent
- **Page Subtitle**: v0.6.0 引入的七维隔离模型
- **Content Structure**:
  - 七维隔离：配置/记忆库/会话历史/技能集合/工具权限/网关服务/凭证
  - 内存效率：<500MB/实例 → 16GB机器可跑20+ Profile
  - 四种场景：工作vs个人隔离 / 专岗专能(backend-dev/reviewer/ops) / Kanban Worker(researcher/writer/qa) / 多租户(client隔离)

### Page 11: MoA 多模型协同推理
- **Page Type**: Content
- **Page Title**: Mixture of Agents —— 5 次调用超越任何单一模型
- **Page Subtitle**: 4 参考模型 + 1 聚合模型 = 消除单一模型偏见
- **Content Structure**:
  - 架构：用户问题 → Claude/Gemini/GPT/DeepSeek(temp=0.6) → Claude聚合(temp=0.4) → 最终答案
  - 配置参数：最少成功参考=1 / 每模型重试=6次 / 总API调用=5次
  - vs Delegate Task：不同任务并行 vs 同问题多推理；独立摘要 vs 单一综合答案
  - 适用场景：复杂数学/架构决策/消除偏见；成本=5倍API调用

### Page 12: Observability 四维框架
- **Page Type**: Content
- **Page Title**: Observability —— 从黑盒到全链路透明
- **Page Subtitle**: 成本归因 / 性能拆解 / 稳定性监控 / 链路追踪
- **Content Structure**:
  - 痛点：零散日志无法统计 / state.db查询门槛高 / Token成本无归因
  - 四维框架：成本归因(model/provider/host拆解) / 性能拆解(P50/P90/P99) / 稳定性监控(失败率趋势) / 链路追踪(Trace全链路)
  - Span层级：session → llm → api → tool；每turn附summary(tool count/skills used/API calls/status)

### Page 13: Observability 方案选型
- **Page Type**: Content
- **Page Title**: 三层方案选型 —— 从开箱即用到企业级部署
- **Page Subtitle**: 内置 Langfuse · 社区 OTel · 云厂商集成
- **Content Structure**:
  - 方案A-Langfuse(入门)：fail-open设计/Hook埋点/Session分组/12000字符截断
  - 方案B-OTel(进阶)：10+后端fan-out/零热路径延迟/双协议属性/隐私模式
  - 方案C-云厂商(企业)：火山TLS一键部署/阿里SLS审计大盘
  - 决策树：个人→A / 多后端需求→B / 合规审计→C

### Page 14: 能力扩展层
- **Page Type**: Content
- **Page Title**: 三大扩展能力 —— 自省 · 会议 · 互操作
- **Page Subtitle**: Background Review / Google Meet / MCP Server
- **Content Structure**:
  - Background Review(★★★★★)：双计数器触发(各阈值10)/Fork守护线程非阻塞/三种Review Prompt/自主进化闭环
  - Google Meet(★★☆☆☆)：实验性插件/无头加入Meet/转写+笔记+TTS回复
  - MCP Server(★★★★☆)：hermes mcp serve / stdio+Streamable HTTP / 集成Claude Desktop/Cursor/VS Code

### Page 15: 全景矩阵与发展趋势
- **Page Type**: Content
- **Page Title**: 能力全景矩阵 & Agent 变革五大趋势
- **Page Subtitle**: 当前成熟度总览 + Hermes 正在引领的 Agent 未来方向
- **Content Structure**:
  - 成熟度矩阵(12项)：Kanban★★★★★ / Profile★★★★★ / Langfuse Obs★★★★★ / BgReview★★★★★ / MoA★★★☆☆ / Meet★★☆☆☆
  - 五大趋势：(1)上下文革命：冷→连接即懂你 (2)能力革命：静态技能→自进化 (3)形态革命：CLI→桌面OS (4)模型革命：单模型→智能路由 (5)交互革命：聊天框→在场伙伴

### Page 16: 结束页 - Thank You
- **Page Type**: Ending
- **Page Title**: Thank You
- **Page Subtitle**: Q&A | Hermes Agent —— 自进化的 AI Agent 操作系统
- **Content Structure**:
  - 核心回顾：高阶功能构成从单体机器人到Multi-Agent OS的完整演进路径
  - 关键资源：GitHub(143.5K) / 官方文档 / Kanban Tutorial / 社区WebUI(3070) / OTel插件
  - 版本：v0.14.0 | 2026-05 | Based on Official Docs & Source Code

## Design Style

- **风格**: Tech（现代科技风）
- **主色调**: #2563EB（深蓝）+ #06B6D4（青色强调）+ #8B5CF6（紫色辅助）
- **背景**: 深色渐变 linear-gradient(135deg, #0F172A → #1E293B → #0F172A)
- **字体**: Montserrat（标题）/ Inter（正文）/ Noto Sans SC（中文）
- **配图策略**: 6/16 页有图（37.5%），集中在架构图、流程图、对比图等高复杂度内容
- **整体调性**: 专业、深度、技术权威感，适合开发者/架构师培训场景

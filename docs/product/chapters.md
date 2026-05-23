# PPT Chapters: Hermes Agent 高阶功能深度挖掘

## Page 1: 封面
- **Page Type**: Cover
- **Page Title**: Hermes Agent 高阶功能深度挖掘
- **Page Subtitle**: 从 Kanban 到 Observability —— 构建 AI Agent 生产级能力体系 | v0.14.0
- **Selected Template**:

- **Content Structure**:
  - **主标题**: Hermes Agent 高阶功能深度挖掘
  - **副标题**: 从 Kanban 到 Observability —— 构建 AI Agent 生产级能力体系
  - **版本信息**: v0.14.0 | Nous Research | 143.5K Stars
  - **核心标签**: Multi-Agent OS · 自进化 · 可观测性 · 生产级
  - **设计说明**: Tech 风格，深色背景渐变，体现技术深度和专业感。主标题使用粗体大字，副标题和版本信息分层排列，底部放置 4 个核心关键词标签。

- **Content Density**: Light
- **Narrative Role**: 开场定调，建立技术权威感，明确本次分享的深度定位（非入门，而是面向生产环境的高阶能力）
- **Image Requirements**: None
- **Page Weight**: Core page
- **Notes**: 封面需突出"高阶"和"生产级"两个关键词，与基础培训形成区分

---

## Page 2: 目录
- **Page Type**: TOC
- **Page Title**: 内容导航
- **Selected Template**:

- **Content Structure**:
  - **章节一**: 核心引擎 —— Kanban 多代理协作系统（3页）
    - 从任务调度到操作系统级编排；六状态机与九大协作模式；Dashboard 可视化看板
  - **章节二**: 控制台体系 —— Dashboard 与 WebUI（1页）
    - 官方 Dashboard vs 社区增强 WebUI 的 13 个功能模块对比
  - **章节三**: 基础设施层 —— Profile / MoA / Observability（4页）
    - Profile 多实例隔离（一台机器跑 20+ Agent）；MoA 五模型协同推理；四维可观测性框架 + 三层方案选型
  - **章节四**: 能力扩展层 —— 自省 / 会议 / MCP（1页）
    - Background Review 后台自省、Google Meet 会议集成、MCP Server 互操作
  - **章节五**: 全景与展望（2页）
    - 高阶能力成熟度矩阵；Agent 变革五大趋势

- **Content Density**: Heavy (5 major sections with sub-items)
- **Narrative Role**: 建立 PPT 全局地图，让听众了解整体脉络和各章节权重分配（Kanban 3页 = 最核心）
- **Image Requirements**: None
- **Page Weight**: Secondary page
- **Notes**: 目录要清晰展示 Kanban 是重中之重（3页占比），其他模块按重要性递减

---

## Page 3: 过渡页 — 第一章
- **Page Type**: Transition
- **Page Title**: Chapter 1 核心引擎
- **Page Subtitle**: Kanban 多代理协作系统 —— AI Agent 的任务操作系统
- **Selected Template**:

- **Content Structure**:
  - **章节标题**: 核心引擎：Kanban 多代理协作系统
  - **章节副标题**: AI Agent 的任务操作系统 —— 不是项目管理工具，而是持久化消息队列 + 状态机调度器
  - **关键数据**: v0.12.0 引入 | 9 个专用工具 | 六状态机 | 九大协作模式 | SQLite 持久化
  - **本章节节**: (1) 核心定位与架构 (2) 状态机与工具集 (3) 协作模式与 UI

- **Content Density**: Light
- **Narrative Role**: 承上启下，从目录过渡到最核心的 Kanban 深度讲解
- **Image Requirements**: None
- **Page Weight**: Transition page

---

## Page 4: Kanban 核心定位与架构
- **Page Type**: Content
- **Page Title**: Kanban：从 RPC 调用到操作系统的跨越
- **Page Subtitle**: delegate_task vs Kanban —— 本质差异决定生产力上限
- **Selected Template**:

- **Content Structure**:
  - **核心论点**: Kanban 不是又一个看板工具，它是 Hermes 最被低估的能力——把"多 Agent 协作"从概念变成了可审计、可恢复、人机协同的生产力工具
  - **对比表格（delegate_task vs Kanban）**:
    | 维度 | delegate_task | Kanban |
    |------|-------------|--------|
    | 形态 | RPC 调用 fork→join | 持久化消息队列+状态机 |
    | 父进程行为 | 阻塞等待返回 | 创建即返回 fire-and-forget |
    | 子进程身份 | 匿名子 Agent | 命名 Profile（独立记忆/技能） |
    | 可恢复性 | 失败即失败 | block→unblock 重跑 / 崩溃回收重派 |
    | 人机协同 | 不支持 | 评论/unblock 任意时刻介入 |
    | 单任务参与方 | 一个子 Agent | N 个 Agent（重试/审查/跟进） |
    | 审计追踪 | 上下文压缩后丢失 | SQLite 永久保存 |
  - **架构图要点**: 三面同一底座 —— Dashboard(浏览器) / CLI(终端) / Worker Toolset → kanban_db(SQLite) → Dispatcher(Gateway 内嵌 60s/tick) → Worker 进程池(P1/P2/P3/P4...)
  - **关键洞察**: delegate_task 是函数调用思维，Kanban 是消息队列思维——后者才是分布式系统的正确抽象

- **Content Density**: Medium-High
- **Narrative Role**: 建立 Kanban 的核心认知框架，用对比表让听众立刻理解"为什么不是又一个项目管理工具"
- **Image Requirements**: 架构图（三面同一底座 → DB → Dispatcher → Workers 的层次关系），信息复杂度高（≥6 个组件 + 数据流向），建议使用结构展示类图像
- **Page Weight**: Core page
- **Notes**: 这是 Kanban 章节最重要的概念建立页，对比表必须清晰完整

---

## Page 5: Kanban 状态机与工具集
- **Page Type**: Content
- **Page Title**: 六状态机 × 九工具集 —— 完整的任务生命周期
- **Page Subtitle**: triage → todo → ready → running → done → archived + blocked 回退机制
- **Selected Template**:

- **Content Structure**:
  - **六状态状态机详解**:
    | 状态 | 含义 | 触发条件 | 可执行操作 |
    |------|------|---------|-----------|
    | triage | 原始想法停车场 | 用户创建加 --triage 或自动分解入口 | Decompose(扇出) / Specify(扩充) |
    | todo | 已创建但依赖未满足 | 有 parent link 且父未完成 | 等待依赖解除 |
    | ready | 分配完毕等待认领 | 所有父任务 done | Dispatcher 可原子认领 |
    | running | Worker 正在执行 | Dispatcher claim + spawn | heartbeat / complete / block |
    | blocked | 等待人工/熔断触发 | 连续失败超限或手动 block | human unblock |
    | done | 完成 | Worker complete(summary) | archived 归档 |
    | archived | 已归档隐藏 | 用户手动归档 | 仅查看 |
  - **9 个专用 Worker 工具集**（分三类）：
    - **读取类**：kanban_show（启动首调获取全量上下文）、kanban_list（按 assignee/status/tenant 过滤摘要）
    - **写入类（Worker）**：kanban_complete（完成+结构化交接）、kanban_block（请求人工介入）、kanban_heartbeat（存活信号 ≥1次/hour）、kanban_comment（持久化评论）
    - **写入类（Orchestrator）**：kanban_create（创建子任务）、kanban_link（建立父子依赖）、kanban_unblock（解除阻塞）
  - **Dispatcher 调度器四大操作**: (1) 回收过期认领 TTL (2) 回收崩溃 Worker PID消失 (3) 提升ready（parent done的todo→ready） (4) 原子认领+派生Worker进程
  - **熔断器机制**: 连续失败 > failure_limit(默认2) → 自动block；三种软阻止条件：配额错误(blocker_auth) / 一小时内成功过(recent_success) / 发现PR URL(active_pr)

- **Content Density**: Heavy
- **Narrative Role**: 深入技术细节，让开发者理解完整的状态流转和工具 API 设计
- **Image Requirements**: 状态机流程图（triage→todo→ready→running→done→archived + blocked 双向箭头），这是典型的多步骤流程图（6个节点+转移条件），强烈建议图像化
- **Page Weight**: Core page
- **Notes**: 状态机图是理解 Kanban 的关键可视化元素，必须包含

---

## Page 6: Kanban 协作模式与 Dashboard UI
- **Page Type**: Content
- **Page Title**: 九大协作模式 + 实时看板 UI
- **Page Subtitle**: 从 Solo Dev 到 Fleet Farming —— 覆盖所有多人/多Agent协作场景
- **Selected Template**:

- **Content Structure**:
  - **九大协作模式全景**:
    | 编码 | 模式 | 形态 | 典型场景 |
    |------|------|------|---------|
    | P1 | Fan-out | N sibling 同角色并行 | 研究 5 个角度并行调研 |
    | P2 | Pipeline | 角色链式流转 | scout→editor→writer 内容流水线 |
    | P3 | Voting/quorum | N sibling + 1 aggregator | 3 研究员 → 1 审稿人投票 |
    | P4 | Long-running journal | 同 profile + 共享 dir + cron | Obsidian 笔记维护长期任务 |
    | P5 | Human-in-the-loop | Worker block → human unblock | 歧义决策需人工确认 |
    | P6 | @mention | 正文中内联路由 | "@reviewer look at this" 指派 |
    | P7 | Thread-scoped workspace | gateway thread 级隔离 | per-project 对话隔离 |
    | P8 | Fleet farming | 1 profile 管理 N subject | 50 社交账号统一管理 |
    | P9 | Triage specifier | 一句话 → LLM 完整 spec | 需求一句话细化为目标/方案/验收标准 |
  - **结构化交接（Structured Handoff）核心代码示意**: kanban_complete(summary="...", metadata={changed_files, tests_run, dependencies, retry_notes, residual_risk}) —— 下游 Worker 通过 kanban_show() 获取所有历史 run + 父任务最新 summary
  - **Dashboard Kanban UI 特性**:
    - 六列拖拽看板（triage/todo/ready/running/blocked/done）
    - Running 列按 assignee 分组为 Profile Lane
    - WebSocket 实时更新监听 task_events 表
    - 侧边抽屉：卡片详情 + 编辑 + 依赖管理 + 评论区 + 事件历史
    - Triage 列特殊操作：⚗ Decompose LLM 扇出子任务 / ✨ Specify LLM 充为一句话为完整 spec
  - **多看板隔离**: `~/.hermes/kanban/boards/<slug>/kanban.db` 每个 board 独立数据库/工作空间/日志/Worker 可见性

- **Content Density**: Heavy
- **Narrative Role**: 展示 Kanban 的实战价值——九大模式覆盖几乎所有协作场景，UI 让管理变得直观
- **Image Requirements**: 协作模式分类图（P1-P9 按 Fan-out/Pipeline/Voting/Autonomous/Human 五大类分组展示），信息维度多（9个模式+形态+场景），建议使用网格/卡片布局类图像
- **Page Weight**: Core page
- **Notes**: 这是 Kanban 章节的收尾页，要把理论（前两页）连接到实际应用场景

---

## Page 7: 过渡页 — 第二章
- **Page Type**: Transition
- **Page Title**: Chapter 2 控制台体系
- **Page Subtitle**: Dashboard 与社区 WebUI —— 两套界面，两种哲学
- **Selected Template**:

- **Content Structure**:
  - **章节标题**: 控制台体系：Dashboard 与 WebUI
  - **章节副标题**: 官方内置 vs 社区增强 —— 两套界面覆盖不同使用深度
  - **关键数据**: 官方 hermes dashboard :9119 | 社区 hermes-webui 3070 Stars/19天 | Vue3+TS 技术栈
  - **本章节节**: 官方 Dashboard 能力 vs 社区 WebUI 13 模块对比

- **Content Density**: Light
- **Narrative Role**: 从 Kanban 深水区过渡到可视化管理层
- **Image Requirements**: None
- **Page Weight**: Transition page

---

## Page 8: Dashboard 体系对比
- **Page Type**: Content
- **Page Title**: 官方 Dashboard vs 社区 WebUI —— 13 个功能模块全景
- **Page Subtitle**: hermes dashboard (9119) vs hermes-webui (8648) —— 选择适合你的控制台
- **Selected Template**:

- **Content Structure**:
  - **核心论点**: Hermes 提供两层 Web 管理界面——官方 Dashboard 专注核心管理，社区 WebUI 追求全能覆盖。两者互补而非竞争。
  - **官方 Dashboard（hermes dashboard → :9119）** 4 大模块:
    | 模块 | 能力 |
    |------|------|
    | Kanban 看板 | 六列拖拽 + Profile Lane + WebSocket + 侧边抽屉 |
    | 会话管理 | 浏览/搜索/切换历史会话，跨平台连续性 |
    | 设置页面 | 显示模式/Agent参数/记忆开关/隐私/API配置 |
    | Profile 管理 | 创建/克隆/导入导出/启停网关 |
  - **社区 WebUI（hermes-webui → :8648/:8787）13 大模块**:
    | # | 模块 | 亮点功能 |
    |---|------|---------|
    | 1 | AI 聊天 | SSE 流式输出 + 多会话 + Ctrl+K 全局搜索 |
    | 2 | 8 大平台频道配置 | TG/Discord/Slack/WhatsApp/Matrix/飞书/微信/企微 一页搞定 |
    | 3 | 用量分析 | Token 总览 + 费用估算 + 30 天趋势图 + 缓存命中率 |
    | 4 | 定时任务管理 | Cron CRUD + 暂停恢复 + 一键立即执行 |
    | 5 | 模型管理 | Provider 自动发现 + OAuth 登录 |
    | 6 | 多 Profile & 网关 | 克隆/导入导出(.tar.gz) + 独立启停 |
    | 7 | 文件浏览器 | 远程文件系统(Docker/SSH) + 在线预览语法高亮 |
    | 8 | 群聊 | 多 Agent 聊天室(Socket.IO) + @提及 |
    | 9 | 技能&记忆管理 | Skills 详情浏览 + 用户笔记管理 |
    | 10 | 日志查看 | Agent/网关/错误三级日志 + 关键词过滤 |
    | 11 | Web 终端 | node-pty + xterm.js ≈ 浏览器 SSH |
    | 12 | 认证系统 | Token 认证 + 可选用户名密码 |
    | 13 | 设置中心 | 所有参数一页搞定 |
  - **选择建议**: 轻量管理用官方 Dashboard（稳定/官方维护）；全面管控用社区 WebUI（远程访问/团队协作）

- **Content Density**: Heavy
- **Narrative Role**: 展示 Hermes 生态在 UI 层面的丰富度，帮助用户根据自身需求做选择
- **Image Requirements**: 功能模块对比图（左侧官方 4 模块 vs 右侧社区 13 模块的视觉对比），左右对比型布局适合此内容
- **Page Weight**: Secondary page
- **Notes**: 重点突出社区 WebUI 的 8 平台频道配置和用量分析两大杀手级功能

---

## Page 9: 过渡页 — 第三章
- **Page Type**: Transition
- **Page Title**: Chapter 3 基础设施层
- **Page Subtitle**: Profile 多实例 · MoA 多模型推理 · Observability 可观测性
- **Selected Template**:

- **Content Structure**:
  - **章节标题**: 基础设施层：Profile / MoA / Observability
  - **章节副标题**: 多实例隔离 + 多模型协同 + 四维可观测 —— 支撑上层能力的三大支柱
  - **关键数据**: <500MB/实例可跑 20+ Profile | MoA 5 次 API 调用消除偏见 | 10+ OTLP 后端 fan-out
  - **本章节节**: (1) Profile 多实例 (2) MoA 推理原理 (3) Observability 四维框架 (4) 方案选型

- **Content Density**: Light
- **Narrative Role**: 从 UI 层下沉到基础设施层，三个模块都是"看不见但离不开"的能力底座
- **Image Requirements**: None
- **Page Value**: 将 Profile/MoA/Observability 三个看似独立的模块串联为"基础设施层"的概念，建立系统性认知
- **Page Weight**: Transition page

---

## Page 10: Profile 多实例机制
- **Page Type**: Content
- **Page Title**: Profile —— 一台机器跑 20+ 个独立 Agent
- **Page Subtitle**: v0.6.0 引入的七维隔离模型，从单体 Agent 到 Multi-Agent OS 的第一步
- **Selected Template**:

- **Content Structure**:
  - **核心论点**: Profile 是 Hermes 架构中最优雅的设计之一——它让"多 Agent"不再是一个架构概念，而是一行命令的现实：`hermes profile create work`，然后你就有了第二个完全独立的 Agent 人格。
  - **七维隔离模型**:
    | 隔离维度 | 具体实现 | 为什么重要 |
    |---------|---------|-----------|
    | 配置 | 独立 config.yaml | 不同人格用不同模型/参数 |
    | 记忆库 | 独立 MEMORY.md / USER.md | 工作记忆和个人记忆不串台 |
    | 会话历史 | 独立 sessions/ 目录 | 对话上下文完全隔离 |
    | 技能集合 | 独立 skills/ 目录 | work profile 不需要 personal 的技能 |
    | 工具权限 | 可按 Profile 限制 toolset | 安全最小权限原则 |
    | 网关服务 | 独立 PID + 独立端口 | 崩溃互不影响，自动冲突处理 |
    | 凭证 | Token-lock 隔绝 | 两个 Profile 不能意外用同一个 Bot 凭证 |
  - **内存效率**: < 500MB/实例（不含本地 LLM）→ 16GB 机器同时运行 **20+ 个 Profile**
  - **四种典型使用场景**:
    - 场景一：工作/个人隔离 —— work(公司项目) vs personal(私人事务)，8 小时外切换人格
    - 场景二：专岗专能 —— backend-dev(写代码) / reviewer(代码审查) / ops(运维运维)，每个角色有专属技能集
    - 场景三：Kanban Worker —— researcher(调研) / writer(写作) / qa-dev(测试)，配合 Kanban 组装流水线
    - 场景四：多租户 —— 按 client 隔离，每个客户一个 Profile，数据合规天然保障
  - **CLI 速查**: create / clone / export(.tar.gz) / import / list / switch

- **Content Density**: Medium-High
- **Narrative Role**: 展示 Profile 的实用性和简洁设计——一行命令解决多 Agent 隔离问题
- **Image Requirements**: 七维隔离模型图（同心圆或层级结构展示 7 个隔离维度），空间关系型内容适合图像化
- **Page Weight**: Core page
- **Notes**: 强调"<500MB/实例 → 20+"这个数据点，这是最具说服力的工程指标

---

## Page 11: MoA 多模型协同推理
- **Page Type**: Content
- **Page Title**: Mixture of Agents —— 5 次调用超越任何单一模型
- **Page Subtitle**: 4 个参考模型 + 1 个聚合模型 = 消除单一模型偏见的推理增强
- **Selected Template**:

- **Content Structure**:
  - **核心理念**: MoA 不是多 Agent 协作——而是多个外部 LLM 同时回答同一个问题，再聚合出最佳答案。灵感来自 arXiv:2406.04692 论文的 Mixture of Agents 方法。
  - **架构图解**:
    ```
    用户问题（复杂数学证明/架构决策/伦理评估）
      ├── Claude Opus 4.6 (temp=0.6) ──┐
      ├── Gemini 3 Pro   (temp=0.6) ──┤
      ├── GPT-5.4 Pro    (temp=0.6) ──┤──→ Claude Opus 4.6 (temp=0.4) → 最终答案
      └── DeepSeek V3.2  (temp=0.6) ──┘
           参考 Reference Models（多样性）     聚合 Aggregator（一致性）
    ```
  - **默认配置参数表**:
    | 参数 | 值 | 设计意图 |
    |------|-----|---------|
    | 参考模型 | Claude/Gemini/GPT/DeepSeek | 覆盖 4 家最强前沿模型 |
    | 聚合模型 | Claude Opus 4.6 | 综合能力最强者做最终判断 |
    | 参考温度 | 0.6 | 平衡创造力，保证参考答案多样性 |
    | 聚合温度 | 0.4 | 降低随机性，专注综合一致性 |
    | 最少成功参考 | 1 | 弹性容错，只要 1 个成功即可聚合 |
    | 每模型最大重试 | 6 次 | 网络波动/限流时的鲁棒性 |
    | **总 API 调用** | **5 次** | 4 参考 + 1 聚合 |
  - **vs Delegate Task 对比**:
    | 维度 | Delegate Task | MoA |
    |------|--------------|-----|
    | 目的 | 并行执行**不同任务** | 同一问题**多角度推理** |
    | 隔离 | 完全对话隔离 | 只共享参考回复文本 |
    | 输出 | 每个任务独立摘要 | **单一综合最优答案** |
    | 典型场景 | 研究/调试/多工作流 | 复杂数学/算法/高难度推理/消除偏见 |
  - **适用场景与成本考量**: 专为高价值决策设计——每次调用 = 5 倍 API 成本；适用于数学证明、架构评审、安全审计等"值得花 5 倍钱换更优答案"的场景

- **Content Density**: Medium
- **Narrative Role**: 介绍 MoA 这个独特的高阶推理能力，强调它与多 Agent 协作(Kanban)的本质区别
- **Image Requirements**: MoA 架构流程图（用户问题 → 4 条并行参考线 → 1 条聚合线 → 最终答案），多步骤并行流程适合图像化展示
- **Page Weight**: Secondary page
- **Notes**: 明确标注"5倍成本"这个限制条件，避免过度吹捧

---

## Page 12: Observability 四维框架
- **Page Type**: Content
- **Page Title**: Observability —— 从黑盒到全链路透明
- **Page Subtitle**: 四维可观测框架：成本归因 / 性能拆解 / 稳定性监控 / 链路追踪
- **Selected Template**:

- **Content Structure**:
  - **痛点切入**: 原 Hermes 排障手段只有两类——零散日志(格式不统一无法统计) 和 state.db(查询门槛高缺关键维度)。核心痛点三问：(1) Token 成本哪天暴涨？哪个 model/platform 异常？(2) 到底慢在哪一环？模型延迟？工具执行？网络？(3) 偶发抖动 vs 持续恶化？
  - **四维可观测框架**:
    | 维度 | 解决的核心问题 | 关键指标 | 价值 |
    |------|---------------|---------|------|
    | **成本归因** | Token 流向追踪 | 按 model/provider/platform/host 拆解消耗 | 发现异常消费、优化模型选择 |
    | **性能拆解** | 到底慢在哪一环 | P50/P90/P99 各阶段耗时分布 | 定位瓶颈、SLA 保障 |
    | **稳定性监控** | 哪个组件出故障 | 各工具/Provider 失败次数+失败率+趋势 | 主动告警、MTTR 缩短 |
    | **链路追踪** | 这一次对话发生了什么 | Trace 全链路：每步 Token/耗时/状态/报错 | 故障复盘、行为审计 |
  - **Span 层级结构**:
    ```
    session.{platform} / cron [root, GENERAL]
    └── llm.{model} [LLM — input/output/total tokens]
        ├── api.{model} [LLM — prompt/completion tokens, duration]
        │   └── tool.{name} [TOOL — args, result, outcome]
        └── api.{model} [LLM — second round-trip]
    ```
    每 turn root span 附带 summary：tool count、tool names、skills used、API call count、final status
  - **Span 事件类型**: 生命周期(created/promoted/claimed/completed/blocked/unblocked/archived) + 编辑(assigned/edited/reprioritized/status) + Worker 遥测(spawned/heartbeat/reclaimed/crashed/timed_out/stale 等 10 种)

- **Content Density**: Medium-High
- **Narrative Role**: 建立 Observability 的认知框架——为什么需要它、它能做什么、数据长什么样
- **Image Requirements**: 四维框架图（成本/性能/稳定性/链路四个象限 + 各自的关键指标和数据流），多维概念框架适合图像化
- **Page Weight**: Core page
- **Notes**: Span 层级树状结构是理解 Observability 数据模型的关键，必须清晰展示

---

## Page 13: Observability 方案选型
- **Page Type**: Content
- **Page Title**: 三层方案选型 —— 从开箱即用到企业级部署
- **Page Subtitle**: 内置 Langfuse · 社区 OTel · 云厂商集成 —— 按需求选择合适的可观测方案
- **Selected Template**:

- **Content Structure**:
  - **方案 A：内置 Langfuse 插件（推荐入门）**
    - 启动方式：`hermes tools → Langfuse Observability` 或 `pip install langfuse && hermes plugins enable observability/langfuse`
    - 核心特性：Fail-open 设计（无 SDK/凭证/错误 → 静默 no-op 不影响 Agent 循环）；Hook 埋点（pre/post api_request、pre/post tool_call）；Session 按 Hermes session ID 聚合到大文件截断（read_file > 12000 字符自动 head+tail 摘要）
    - 适合：个人开发者 / 初次尝试可观测性的团队
  - **方案 B：hermes-otel 社区插件（推荐进阶）**
    - 安装：`hermes plugins install briancaffey/hermes-otel`
    - **10+ OTLP 后端支持**: Phoenix(Arize)/Langfuse/LangSmith/SigNoz/Jaeger/Grafana Tempo & LGTM/Uptrace/OpenObserve/自定义端点
    - 核心优势：双协议属性(gen_ai.* + llm.token_count.* 即开即用)；多后端 fan-out(同一条 span 并行发往 Phoenix+Jaeger+Langfuse)；零热路径延迟(BatchSpanProcessor)；隐私模式(capture_previews:false 剥离输入输出)；孤儿 span 清扫(TTL sweeper)
    - 适合：已有 OpenTelemetry 基建的企业 / 需要多后端并行发送的团队
  - **方案 C：云厂商集成（推荐企业）**
    | 云厂商 | 方案 | 特点 |
    |--------|------|------|
    | 火山引擎 TLS | hermes-tls 插件 | 一键部署脚本 + AK/SK 双鉴权 + 四维看板 |
    | 阿里云 SLS | hermes-cms 插件 | CMS 2.0 AI 应用可观测 + 审计大盘自动生成 |
    - 适合：已使用对应云厂商服务的团队 / 需要审计合规的场景
  - **选型决策树**: 个人开发 → 方案 A(Langfuse) → 团队有多后端需求 → 方案 B(OTel) → 企业合规/审计 → 方案 C(云厂商)

- **Content Density**: Medium-High
- **Narrative Role**: 提供清晰的方案选型指南，让不同规模的用户都能找到适合自己的可观测方案
- **Image Requirements**: 选型决策树或三层方案金字塔图（A 入门/B 进阶/C 企业，每层标注适用人群和核心特点），分层递进型内容适合图像化
- **Page Weight**: Core page
- **Notes**: 决策树是本页最有价值的输出，帮用户快速定位适合自己的方案

---

## Page 14: 能力扩展层 —— Background Review / Meet / MCP
- **Page Type**: Content
- **Page Title**: 三大扩展能力 —— 自省 · 会议 · 互操作
- **Page Subtitle**: Background Review 后台自省 · Google Meet 会议插件 · MCP Server 模式
- **Selected Template**:

- **Content Structure**:
  - **模块一：Background Review 后台自省引擎（★★★★★ 已验证）**
    - 触发机制：双计数器 —— Memory 计数器(每 turn 递增，阈值 10 → 写 MEMORY.md) + Skill 计数器(每 tool call 递增，阈值 10 → 创建 skill)
    - Fork 机制：守护线程非阻塞(不卡主对话)、共享记忆写入(review 结果直接生效)、Review 自身递归禁用(防止无限循环)、限制 8 步 tool call(控制 API 成本)
    - 三种 Review Prompt：_MEMORY_REVIEW_PROMPT(提取事实→MEMORY.md) / _SKILL_REVIEW_PROMPT(提炼流程→创建skill) / _COMBINED_REVIEW_PROMPT(双管齐下)
    - **核心价值**: 实现 Agent 的自主进化闭环 —— 不再需要人工定期整理经验，Agent 自己在对话中持续反思和积累
  - **模块二：Google Meet 会议插件（★★☆☆☆ 实验）**
    - v0.12.0+ 内置实验性插件，`hermes plugins enable google_meet`
    - 能力：无头虚拟参与者加入 Meet → 音频实时转写(STT) → meet_summarize/speak/followup 处理 → 可选 TTS 回复
    - 会后产出：transcript + speaker-attributed notes + action items
    - **局限**: 实验阶段稳定性未知，依赖浏览器自动化
  - **模块三：MCP Server 模式（★★★★☆ 已验证）**
    - v0.6.0 引入，`hermes mcp serve`
    - 暴露能力：浏览会话/消息、跨 session 搜索、管理附件
    - 协议：stdio + Streamable HTTP
    - 集成目标：Claude Desktop / Cursor / VS Code —— 让 Hermes 成为其他 AI 工具的后端能力提供者
  - **三者关系**: Background Review = Agent 的"自我意识"；Meet = Agent 的"社交能力"；MCP = Agent 的"开放接口"

- **Content Density**: Medium-High
- **Narrative Role**: 快速覆盖三个较轻量的高阶功能，保持信息密度但不展开过多细节
- **Image Requirements**: 三模块关系三角图（Background Review=脑/Meet=嘴/MCP=手，中心是 Hermes Core），概念关系型适合轻量图像
- **Page Weight**: Secondary page
- **Notes**: 三个模块篇幅应按成熟度分配——Background Review 最多，MCP 其次，Meet 最少

---

## Page 15: 高阶能力全景矩阵 + 发展趋势
- **Page Type**: Content
- **Page Title**: 能力全景矩阵 & Agent 变革五大趋势
- **Page Subtitle**: 当前成熟度总览 —— 以及 Hermes 正在引领的 Agent 未来方向
- **Selected Template**:

- **Content Structure**:
  - **第一部分：高阶能力成熟度矩阵**:
    | 能力维度 | 成熟度 | 版本引入 | 生产可用 | 复杂度 |
    |---------|--------|---------|---------|-------|
    | Kanban 多代理协作 | ★★★★★ | v0.12.0 | ✅ 已验证 | 高 |
    | Dashboard (官方) | ★★★★☆ | v0.12.0 | ✅ | 中 |
    | WebUI (社区) | ★★★★☆ | 第三方 | ✅ | 中 |
    | Profile 多实例 | ★★★★★ | v0.6.0 | ✅ | 低 |
    | MoA 多模型推理 | ★★★☆☆ | 内置 | ⚠️ 高成本 | 高 |
    | Observability (Langfuse) | ★★★★★ | 内置插件 | ✅ | 低 |
    | Observability (OTel) | ★★★★☆ | 社区插件 | ✅ | 中 |
    | Background Review | ★★★★★ | 核心 | ✅（自动）| 低 |
    | Google Meet | ★★☆☆☆ | v0.12.0 | ⚠️ 实验 | 中 |
    | MCP Server 模式 | ★★★★☆ | v0.6.0 | ✅ | 低 |
    | Fallback Provider Chain | ★★★★☆ | v0.6.0 | ✅ | 低 |
    | Cron 定时任务 | ★★★★☆ | 内置 | ✅ | 低 |
  - **第二部分：Agent 变革五大趋势**（Hermes 正在引领的方向）:
    1. **上下文革命**: 冷启动 → "连接即懂你"(OpenHuman 式 Memory Tree 启示)：Agent 不再需要冗长的 system prompt，通过 OAuth 连接直接获取用户上下文
    2. **能力革命**: 静态技能 → 自进化(Hermes 式 Background Review + Skill 创建)：Agent 不再依赖人类编写技能，而是在工作中自动提炼和积累
    3. **形态革命**: 终端 CLI → 桌面 GUI(OS 式交互)：从命令行聊天框进化到有窗口、图标、看板的桌面操作系统
    4. **模型革命**: 单模型锁定 → 智能 MoA 路由：不再绑定一个模型，而是按任务类型自动选择最优模型组合
    5. **交互革命**: 聊天框文字 → 有"脸"的在场伙伴：从纯文字交互进化到有形象(Mascot)、有声音(TTS)、有存在感的 AI 伴侣

- **Content Density**: Heavy
- **Narrative Role**: 收尾汇总页——先给全局视角（矩阵），再给未来视野（五大趋势），形成完整的"现在→未来"叙事闭环
- **Image Requirements**: 成熟度雷达图或多维矩阵图（12 个能力维度在 成熟度/生产可用/复杂度 三轴上的分布），多维度数据比较适合图表化
- **Page Weight**: Core page
- **Notes**: 五大趋势要与前面的具体功能呼应——如"能力革命"对应 Background Review/Skill，"形态革命"对应 Dashboard/WebUI

---

## Page 16: 结束页
- **Page Type**: Ending
- **Page Title**: Thank You
- **Page Subtitle**: Q&A | Hermes Agent —— 自进化的 AI Agent 操作系统
- **Selected Template**:

- **Content Structure**:
  - **结束语**: Thank You
  - **核心回顾一句话**: Hermes Agent 的高阶功能不是炫技——它们共同构成了从单体聊天机器人到 Multi-Agent 操作系统的完整演进路径
  - **Q&A 提示**: Questions & Discussion
  - **关键资源链接**:
    - GitHub: github.com/nousresearch/hermes-agent (143.5K Stars)
    - 文档: hermes-agent.nousresearch.com
    - Kanban Tutorial: hermes-agent.nousresearch.com/docs/user-guide/features/kanban-tutorial
    - 社区 WebUI: github.com/nesquena/hermes-webui (3070 Stars)
    - OTel 插件: github.com/briancaffey/hermes-otel
  - **底部信息**: v0.14.0 | 2026-05 | Based on Official Docs & Source Code Analysis

- **Content Density**: Light
- **Narrative Role**: 致谢并提供延伸阅读资源，方便听众深入学习
- **Image Requirements**: None
- **Page Weight**: Ending page
- **Notes**: 保持简洁专业，资源链接要准确可点击

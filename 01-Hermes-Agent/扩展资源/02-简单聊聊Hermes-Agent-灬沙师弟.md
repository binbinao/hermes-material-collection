# 简单聊聊Hermes Agent

> 作者：灬沙师弟 | 发布时间：2026-05-08 | 来源：腾讯云开发者社区

---

## 前言

Hermes Agent 是由 Nous Research 开源的自我进化型 AI Agent。与传统依附于 IDE 的编码副驾（Copilot）或一次性对话式 Chatbot 不同，它被设计为一个可长期驻留、跨平台运行的自治代理，其核心理念是"运行越久、能力越强"。

它通过内建的学习闭环（closed learning loop）从交互中沉淀技能与记忆，并通过统一的消息网关与多终端后端，实现跨设备、跨会话的持续工作。

---

## 一、整体架构

Hermes Agent 采用"一体双入口 + 多后端"的模块化架构：

### 入口层
- **本地 TUI**：通过 `hermes` 命令启动的终端界面，支持多行编辑、斜杠命令补全、会话历史与流式工具输出
- **消息网关（Messaging Gateway）**：以单一后台进程统一连接多种外部通信平台

### 内核层
由 Agent 主循环、技能系统（Skills）、记忆系统（Memory）、工具调用层（Tools / MCP）、调度器（Cron）与子代理管理器（Subagents）组成。

### 执行后端层
抽象了七种终端执行环境：
- Local、Docker、SSH、Singularity、Modal、Daytona、Vercel Sandbox

使同一 Agent 可在 VPS、GPU 集群或无服务器平台上运行，空闲时可休眠以降低成本。

---

## 二、核心技术特性

### 1. 学习闭环与技能系统

Hermes 最具辨识度的设计是"自创建—自改进—自复用"的技能循环。

- Agent 在完成复杂任务后，可自主将过程固化为技能（Skill），形成过程性记忆
- 技能在后续使用中会继续被改写与优化
- 技能遵循 agentskills.io 开放标准，具有可移植性
- 可通过社区的 Skills Hub 进行分享

### 2. 记忆架构

记忆子系统由多层组成：
- **用户建模**：基于 Honcho 的 dialectic（辩证）用户画像，持续刻画偏好与上下文
- **全文检索**：采用 SQLite FTS5 对会话历史做跨会话全文搜索
- **LLM 摘要**：对长历史进行语义压缩，以低上下文成本实现回忆
- **周期性 nudge**：Agent 会在关键节点主动提醒自己固化知识，避免遗忘

### 3. 工具生态与 MCP 集成

- Hermes 内置 40 余个工具，涵盖网页搜索、抓取、浏览、视觉、图像生成、语音合成等能力
- 原生支持 Model Context Protocol（MCP），可挂载第三方 MCP Server 扩展能力边界
- 通过项目级的 context 文件塑造每次对话的先验

### 4. 并行化与子代理

- Agent 可派生彼此隔离的子代理（Subagents）并行处理独立工作流
- 支持让主 Agent 编写 Python 脚本，通过 RPC 批量调用工具
- 把多步骤流水线压缩为"零上下文开销"的单轮执行，对长链路任务尤其高效

### 5. 调度与自动化

内建 Cron 调度器允许以自然语言定义周期性任务，任务产物可通过消息网关投递到任意已连接平台，实现无人值守的定时巡检、摘要与通知。

---

## 三、模型与平台适配

### 模型提供方

Hermes 不绑定任何单一模型厂商，支持：
- Nous Portal、OpenRouter（聚合 200+ 模型）、NVIDIA NIM
- OpenAI、Anthropic、Moonshot/Kimi、MiniMax
- Hugging Face 以及自定义 endpoint

用户通过 `hermes model` 即可热切换模型，无需改动代码。

### 消息网关

网关以单进程管理会话、Cron 与语音消息分发，支持：
- Telegram、Discord、Slack、WhatsApp、Signal、Matrix
- Email、SMS、钉钉、飞书、企业微信、Home Assistant、Microsoft Teams

并具备语音转写与跨平台对话连续性。

---

## 四、研究导向能力

面向研究场景，Hermes 提供：
- 批量轨迹（trajectory）生成
- 与 Atropos 强化学习环境的对接
- 轨迹压缩工具

可直接用于训练工具调用模型，形成"使用—采集—训练—再部署"的数据飞轮。

---

## 五、部署与运行

Hermes Agent 支持：
- Linux、macOS、WSL2
- 通过 Termux 运行的 Android

通过一行 bash 脚本即可安装。凭借多执行后端与无服务器休眠机制，它既能作为个人长驻助手低成本运行，也能扩展到重计算场景。

---

## 六、小结

Hermes Agent 以"可自我进化的自治代理"为核心命题，通过技能系统、分层记忆、MCP 工具生态、子代理并行、Cron 自动化与多平台网关，构建出一个区别于传统 IDE 内嵌助手的长周期 AI 代理形态。

对于需要跨平台、跨会话持续协作，并希望在使用过程中沉淀可复用能力的团队和研究者，Hermes Agent 提供了一条开源、可定制且面向研究的落地路径。

---
*原文链接：https://cloud.tencent.com/developer/article/2665712*

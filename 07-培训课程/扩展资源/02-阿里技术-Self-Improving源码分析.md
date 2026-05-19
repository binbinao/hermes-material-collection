# Hermes Agent 如何实现"Self-Improving" - 阿里技术

> 来源: https://news.qq.com/rain/a/20260423A01UGD00
> 发布方: 阿里技术
> 发布时间: 2026-04-23
> 爬取日期: 2026-05-19

---

# 深入源码：Hermes Agent 如何实现 "Self-Improving"

**相关仓库**：[github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 一、背景：Hermes 与传统 Agent 的核心差异

Hermes Agent 上线不到半年，GitHub 获得 106k+ Star，OpenRouter 排行榜上增速达 +204%，位列 Top Coding Agents 第一、Top Productivity 第二。

其核心区别于传统 Agent（如 OpenClaw）的设计：

- **OpenClaw 的 Skill 是纯手写 Markdown 文件**，依赖人工维护，没有使用经验积累机制
- **Hermes 实现了自进化闭环**：Agent 完成任务后会自动提炼踩坑经验为可复用 Skill，越用能力越强

本质是从「人工投喂」到「自主生长」的设计哲学差异。

---

## 二、Self-Improving 核心架构：三个子系统 + 一个闭环

传统 Agent 会话结束后就会「失忆」，Hermes 通过三个子系统搭建完整学习闭环：

| 子系统 | 定位 | 类比 |
|--------|------|------|
| **Memory** | 存储用户偏好、环境信息等事实类认知 | 助理随身带的小本子，记着「老板喜欢喝美式」这类信息 |
| **Skill** | 存储可复用的操作步骤、踩坑经验 | 助理积累的操作手册，比如「部署 K8s 第 2 步一定要先推镜像」 |
| **Nudge Engine** | 定时触发 Agent 反思、整理经验 | 定时响的闹钟，提醒助理回头想想有没有值得记录的内容 |

---

## 三、子系统 1：Memory 越用越懂你

### 3.1 核心设计：双文件 + 容量限制倒逼信息压缩

Memory 系统仅维护两个纯文本文件，用 `§` 分隔条目，存放在 `~/.hermes/memories/` 目录下，且做了严格的容量限制：

- **通用记忆（MEMORY）** 上限 2200 字符
- **用户专属记忆（USER）** 上限 1375 字符

> **对比 OpenClaw 的纯追加式 MEMORY.md**：用几个月就会膨胀到几万行，查询历史信息只能通读全文；Hermes 通过容量限制倒逼 Agent 主动做信息压缩，过时信息自然被淘汰，最终保留的都是高密度事实。

### 3.2 超限处理逻辑：引导 Agent 主动反思

容量超限时，Hermes 不会静默丢弃旧内容，而是让 `add` 操作直接失败，返回错误提示 `Replace or remove existing entries first`，同时返回当前所有条目给模型，让模型自主决定哪些内容过时、可合并压缩，本身就是一次「自我反思」过程。

```python
# 源码位置：tools/memory_tool.py:248-259
# 超限时返回错误，引导模型主动整理记忆
```

### 3.3 冻结快照机制：兼顾性能与一致性

每次会话启动时，Memory 加载后会立刻生成一份快照，后续系统提示词中注入的都是这份快照，而非实时更新的内容：

```python
# 源码位置：tools/memory_tool.py:124-140
```

- **好处**：系统提示词会话内不变，可共享前缀缓存（Prefix Cache），减少重复 API 计费
- **新写入的内容**仅更新磁盘文件，下一个会话才刷新生效

### 3.4 提示词引导：明确记忆边界

系统提示词通过 `MEMORY_GUIDANCE` 明确规则：

- 记忆要求写成**声明式事实**（比如 `User prefers concise responses`），而非命令式指令（比如 `Always respond concisely`），前者可被当前上下文覆盖，后者会限制 Agent 灵活性
- **明确边界**：操作步骤类内容不存入 Memory，需保存到 Skill 系统

从 Prompt 层面划分两个系统的职责。

---

## 四、子系统 2：Skill 把做过的事变成会做的事

### 4.1 Skill 基本结构

Skill 对应「我会做什么」的能力，每个 Skill 是一个目录，核心是 `SKILL.md` 文件，存放在 `~/.hermes/skills/` 目录下。

结构示例：

```yaml
---
name: flask-k8s-deploy
description: 部署 Flask 应用到 K8s 集群的标准流程，包含踩坑经验
version: 1.0.1
---
# 部署步骤
1. 构建镜像并推送到镜像仓库
2. 编写 deployment.yaml 和 service.yaml
3. 执行 kubectl apply -f .

# Pitfalls（踩坑经验，Agent 执行后自动追加）
- 不要忘记给容器设置资源限制，否则会被集群驱逐
- 镜像 tag 不要用 latest，否则回滚时无法定位版本
```

### 4.2 自动创建 Skill 的触发规则

不需要用户手动要求创建，由 `skill_manage` 工具的 Schema 引导 Agent 自主判断，创建门槛清晰：

- 工具调用超过 **5 次**的任务才值得创建（简单任务无需记录）
- **踩过坑再修复的经验**才有价值
- 用户纠正过的做法必须记录

> **对比 OpenClaw 的 Skill 体系**：OpenClaw 的 Skill 要么手写、要么从社区安装，没有自主学习通路，做 100 次部署，第 101 次还是会犯第一次的错误；Hermes 的 Skill 是越用越厚的经验资产，每一次踩坑都在加固能力护城河。

系统提示词同时会提醒 Agent：`Skills that aren't maintained become liabilities`（不维护的 Skill 会成为负担），引导 Agent 主动维护已有 Skill。

### 4.3 Skill 自我修补机制

如果 Agent 按已有 Skill 执行时发现步骤遗漏、或遇到新坑，完成任务后会主动修补 Skill，而非全量重写，仅做精确的局部 patch：

```python
# 源码位置：tools/skill_manager_tool.py:397-485
# 使用 fuzzy_find_and_replace 做模糊匹配，容忍格式差异
# 修改后自动执行 _security_scan_skill()，不通过则自动回滚
```

修补后立刻更新 `Pitfalls` 章节，后续遇到同类场景可直接绕坑。

### 4.4 渐进式加载：避免上下文浪费

Skill 数量增多后不会全量注入上下文，而是采用「动态图书馆」模式：

- 默认上下文仅加载轻量索引：每个 Skill 的名字 + 一句话描述
- Agent 判断 Skill 和当前任务相关时，才通过 `skill_view` 加载完整内容

实现「先看目录再翻全文」的按需加载，避免 Token 浪费和注意力稀释。

---

## 五、子系统 3：Nudge Engine 触发学习闭环

Memory 和 Skill 的写入需要主动触发，Nudge Engine 就是触发机制，核心是**两套计数器**，分别适配不同系统的更新频率：

### 5.1 两套计数器设计

```python
# 源码位置：run_agent.py:1328-1331
# Memory 计数器：按回合计，记忆来自用户输入，粒度更粗
# Skill 计数器：按迭代计，经验来自工具使用过程，粒度更细
```

计数器达到阈值就触发审查，若 Agent 已经主动调用 `memory` 或 `skill_manage` 则重置，避免重复提醒。

### 5.2 后台静默审查：不打扰用户

Nudge 触发后，不会在主对话中插入提醒，而是**后台 fork 一个独立的 Agent 实例**，拿着主对话的快照做审查：

```python
# 源码位置：run_agent.py:2665-2711
```

- 输出重定向到 `/dev/null`，用户完全无感知
- 最多 8 次工具调用，避免无限消耗 API
- 禁用 review agent 自身的 nudge，避免无限递归
- 和主 Agent **共享同一份 Memory**，写入直接生效，实现「干活」和「反思」实例分离、互不干扰

审查 Prompt 末尾会明确要求：`If nothing is worth saving, just say 'Nothing to save.' and stop.`，避免 review agent 为了「交差」随意写入内容。

审查在用户收到回复后触发，完全不占用用户的使用时间。

---

## 六、完整案例：从「不会」到「精通」的三次会话验证

以 K8s 部署场景为例，展示三个子系统的协同效果：

| 维度 | 第 1 次会话（冷启动） | 第 2 次会话（Skill 复用 + 修补） | 第 3 次会话（全能力协同） |
|------|---------------------|------------------------------|------------------------------|
| **用户需求** | 帮我把这个 Flask 应用部署到 K8s 集群 | 帮我再部署一个 Django 应用到 K8s | 帮我部署一个新的 FastAPI 微服务 |
| **工具调用次数** | 12 次 | 9 次 | 6 次 |
| **错误数** | 2 次 | 1 次 | 0 次 |
| **Memory 变化** | 无 | 触发写入，记录用户环境、镜像仓库地址等 | 直接将记忆注入系统提示词，无需重复询问 |
| **Skill 变化** | 12 次迭代触发 Skill Review，自动创建 `flask-k8s-deploy` Skill | 复用已有 Skill，遇到 Django 特有坑后自动 patch Skill 补充 `ALLOWED_HOSTS` 注意事项 | 直接复用已修补的 Skill，零错误 |

> 开源版经验存在单个用户的本地目录，RDSHermes 将 Skill 存储搬到云端，实现一个 DBA 踩过的坑，团队所有人的 Agent 都能绕过，进化从单点到组织级。

---

## 七、安全机制：进化能力的约束边界

Agent 可自主写入 Memory 和 Skill，相当于可修改自身的「认知」，因此需要严格的安全防护：

### 7.1 Memory 内容扫描

```python
# 源码位置：tools/memory_tool.py:65-81
# 扫描内容是否包含 prompt 注入攻击，比如 `ignore all previous instructions`
# 避免恶意内容被注入系统提示词，导致下次会话被劫持
```

### 7.2 Skill 安全扫描

```python
# 源码位置：tools/skill_manager_tool.py:56-74
# 自创和从 Hub 安装的 Skill 都走同一套安全扫描，不通过则自动回滚
```

### 7.3 团队场景的额外防护（RDSHermes 扩展）

开源版未覆盖密钥安全风险：如果 Agent 有终端权限，环境变量、配置文件中的明文密钥会被泄露。

RDSHermes 通过**加密托管**解决：AK/SK 由网关代理鉴权，密钥不落盘、不暴露给 Agent 和用户。

---

## 八、核心设计取舍逻辑

| 设计决策 | 表面效果 | 背后考量 |
|----------|----------|----------|
| Memory 限制 2200 字符 | 迫使 Agent 挑重点记录 | 低质量 Memory 注入系统提示词，相当于每次 API 调用都带噪声 |
| 声明式事实与操作步骤分离 | Memory 存事实，Skill 存步骤 | 两者更新频率、触发条件、安全风险完全不同 |
| 冻结快照模式 | 系统提示词会话内不变 | 共享前缀缓存，避免每轮调用重复计费 |
| 后台 fork 审查 | 用户无感知 review 过程 | 自省不应占用用户任务的注意力预算 |
| Nudge 计数器默认阈值为 10 | 平衡学习频率和成本 | 太频繁浪费 API 成本，太稀疏错过学习机会 |
| patch 优先于全量重写 | 局部修复 Skill | 保留已验证的稳定部分，只修改需要调整的内容 |
| 安全扫描 + 自动回滚 | 拒绝恶意写入 | Memory/Skill 最终进入系统提示词，属于一等安全边界 |

---

## 九、Self-Improving 的后续演进方向

当前「自动创建」和「自我修补」能力已跑通，后续优化方向包括：

1. **生命周期管理**：在 Skill 的 YAML front matter 中增加 `last_used`、`use_count`、`success_rate` 字段，实现自动降权、归档和过时检测
2. **技能组合**：识别频繁一起使用的 Skill，自动合成工作流（如 `flask-k8s-deploy` + `nginx-reverse-proxy` → `full-stack-deploy`），从「记住经验」到「思考组合」
3. **创建透明度**：Skill 创建后给用户发送简短通知，支持用户审核和纠正，提升参与感
4. **团队治理**：写操作需二次确认才执行，所有会话可追溯、可审计，让 Agent 进化全程可管控

---

## 十、RDSHermes：把自进化能力从开发者工具变成团队可用

开源 Hermes 仍有较高使用门槛：需要手写 `config.yaml`、配置 API Key、终端 CLI 交互，对非开发成员不友好。

RDSHermes 把 Hermes 的自进化能力包装为开箱即用的服务，核心差异如下：

| 对比维度 | 开源 Hermes Agent | RDSHermes |
|----------|------------------|-----------|
| **开始使用** | 命令行安装，手写 config.yaml | 控制台一键开通，零配置 |
| **对话界面** | 终端 CLI | 内置 Web UI，浏览器直接访问 |
| **IM 接入** | 需手动配 Gateway、写凭证 | 控制台填 App ID 即可完成 |
| **数据库连接** | 手动配连接串，密码明文存储 | 一键接入 RDS 实例，密码自动加密 |
| **云凭证管理** | AK/SK 写环境变量/配置文件 | 加密托管，网关代理鉴权，密钥不落盘 |
| **技能管理** | Agent 自动创建，本地磁盘存储 | Skill Hub 预装智能巡检、慢 SQL 诊断、索引优化等专业技能 |

RDSHermes 额外补齐 4 项企业级能力：

1. **数据库安全纳管**：支持 MySQL、PostgreSQL 等多引擎一键接入，可设置只读模式，Agent 能查不能改，保障生产安全
2. **身份认证托管**：AK/SK 加密托管，Agent 调用云 API 时由网关代理鉴权，密钥不暴露
3. **内置领域技能**：Skill Hub 预装数据库领域专业技能，Agent 上线即具备领域能力，无需冷启动
4. **全链路监控审计**：写操作需确认执行，会话可追溯，Token 消耗可监控，安全事件有告警

目前已上线阿里云 RDS AI 应用市场，支持免费试用，原有 OpenClaw/RDSCLaw 用户可通过 `hermes claw migrate` 命令一键导入全部配置和记忆数据，平滑切换。

---

## 十一、总结

Hermes Agent 的 Self-Improving 本质是三个子系统的协同：

- **Memory** 记住「你是谁、你的环境是什么」
- **Skill** 记住「怎么做事、哪些坑要避开」
- **Nudge Engine** 保证学习循环持续运转

最终实现「用得越久，干活越快、踩坑越少」的效果，解决了传统 Agent「越用越重、不会进化」的痛点。

RDSHermes 进一步把这套能力从「个人工具」升级为「团队资产」，一个 DBA 踩过的坑，团队所有人的 Agent 都能绕过，真正实现组织级 AI 能力进化。

# 深入源码：Hermes Agent 如何实现 "Self-Improving"

> 作者：阿里技术 | 发布时间：2026-04-23 | 来源：腾讯新闻

---

## 背景

OpenRouter 排行榜上正在发生一场换代：Hermes Agent 增速 +204%，Top Coding Agents 排第一，Top Productivity 排第二。上线不到半年，GitHub 从 0 到 106k+ Star。

区别在哪？OpenClaw 的 Skill 是手写的 Markdown 文件——你写多少它会多少，你不写它就不会。Hermes 做了一件 OpenClaw 架构上做不了的事：Agent 干完活之后，会自动把踩坑经验提炼成可复用的 Skill，下次遇到同类问题直接调用。

---

## 总览：三个子系统，一个闭环

大多数 Agent 每次会话结束后就"失忆"了。Hermes 在内部搭了一套学习闭环，由三个子系统撑起来：

- **Memory**：助理随身带的小本子，记着"老板喜欢喝美式"这些事实
- **Skill**：助理积累的操作手册——"部署 K8s 第 2 步一定要先推镜像"
- **Nudge Engine**：定时响的闹钟，提醒助理回头想想有没有什么值得记的

---

## Memory：越用越懂你

### 两个文件，就是 Agent 对你的全部认知

Memory 系统设计得很克制——两个纯文本文件，用 `§` 分隔条目，存储路径为 `~/.hermes/memories/`。

字符上限故意设得很紧：
- **MEMORY 限 2200 chars**
- **USER 限 1375 chars**

容量有限就迫使 Agent 挑重要的记，不重要的自然被挤掉。

对比 OpenClaw——它的 MEMORY.md 是纯追加模式，用几个月就膨胀成几万行的怪兽文件。

### 超限处理逻辑

具体实现上，MemoryStore 维护两组平行状态——实时可写的条目列表，和会话开始时冻结的快照。

但"设了上限"只是第一步，关键是超限之后怎么处理。Hermes 不会静默丢弃旧条目，也不会自动压缩——它选择让 `add` 直接失败，然后把当前所有条目返回给模型。

错误信息里一句 "Replace or remove existing entries first" 就把模型引导到了 `replace` 和 `remove` 操作上。模型不是被动地执行淘汰规则，而是主动做信息整理——这本身就是一次"自我反思"。

### 冻结快照机制

每次会话启动时，Memory 加载后立刻捕获一份快照，之后系统提示词里用的都是这份快照。

为什么"冻结"而不是实时更新？因为系统提示词会话内不变就能共享前缀缓存（Prefix Cache），省掉重复计费。

### 提示词引导：什么该记、什么不该记

Agent 怎么知道什么时候该往 Memory 里写东西？靠 Prompt 引导。

注意区别：Memory 要求写成**声明式事实**（"User prefers concise responses"），而不是**命令式指令**（"Always respond concisely"）。

Tool Schema 里还有一句关键的边界规则：
> "If you've discovered a new way to do something, save it as a skill."

Memory 不存操作步骤，操作步骤归 Skill 管。

---

## Skill：把做过的事变成会做的事

### Skill 长什么样

Memory 是"我知道什么"，Skill 是"我会做什么"。每个 Skill 是一个目录，核心是 SKILL.md 文件，存储路径为 `~/.hermes/skills/`。

一个典型的 SKILL.md 包含 YAML frontmatter 元数据，以及正文部分的步骤说明、注意事项等。其中 **Pitfalls 这一节不是预先写好的，而是 Agent 踩坑后追加的**——这就是 Skill 层面的"self-improving"。

### 什么时候创建 Skill

Agent 不需要用户说"帮我创建一个 Skill"。驱动力来自 `skill_manage` 工具的 schema。

创建的门槛设得比较清楚：
- 工具调用超过 5 次才值得创建（简单任务不记）
- 踩过坑再修复的经验才有价值
- 用户纠正过的做法要铭记

OpenClaw 的 Skill 是手写的配置文件，用了一年还是那份手写的配置文件；Hermes 的 Skill 是越用越厚的经验资产——每一次踩坑都在加固护城河。

### Skill 的自我修补

当 Agent 按照已有 Skill 执行，但中途发现步骤有遗漏或者踩了新坑时，它会在完成任务后回头修补 Skill。

不是全量重写，而是做精确的局部 patch。每次修改后还要跑一遍 `_security_scan_skill()`，不通过就自动回滚。

---

## Nudge Engine：谁来提醒 Agent "该学习了"

Memory 和 Skill 都是存储系统，写入需要有人触发。Nudge Engine 就是这个触发器——运行时维护两个计数器，定时提醒 Agent 该停下来想想了。

### 两个计数器，两种粒度

- **Memory 计数器**：按会话计数，信息来自用户输入
- **Skill 计数器**：按迭代计数，经验来自工具使用过程

计数器到阈值就触发审查，Agent 主动调用了 `memory` 或 `skill_manage` 则重置。

### 后台 fork Agent：不打扰用户的静默审查

Nudge 触发后怎么处理？它不会在主对话中插一条"让我想想有没有什么该记的"——那样太打扰用户了。而是在后台 fork 一个独立的 Agent 实例，拿着主对话的快照去做审查。

几个细节：
- 输出重定向到 `/dev/null`，用户完全无感知
- 最多 8 次工具调用，不会无限消耗 API
- review agent 自身的 nudge 被禁用，避免无限递归
- 和主 agent 共享同一份 Memory，写入直接生效

---

## 完整案例：从"不会"到"精通"的三次会话

用一个 K8s 部署场景串一下三个子系统的协同。

### 第 1 次会话：冷启动

```
用户: 帮我把这个 Flask 应用部署到 K8s 集群
```

Memory 和 Skills 都是空的，Agent 靠基座知识摸索，12 次工具调用，踩了两个坑。12 次迭代触发 Skill Review，Review Agent 创建了一个 Skill。

### 第 2 次会话：Skill 复用 + 自我修补

```
用户: 帮我再部署一个 Django 应用到 K8s
```

Agent 加载 `flask-k8s-deploy` 后照着步骤做，从 12 次调用降到 9 次。Review Agent 一口气做了三件事：写入用户画像、记住 registry 地址、patch Skill 补上 ALLOWED_HOSTS 坑。

### 第 3 次会话：零错误，一次搞定

```
用户: 帮我部署一个新的 FastAPI 微服务
```

Agent 已经知道你是谁、registry 在哪、集群在哪，Skill 里也包含了 ALLOWED_HOSTS 的坑——6 次调用，零错误。

### 三次会话效果对比

| 维度 | 会话 1 (冷启动) | 会话 2 (Skill 复用) | 会话 3 (全协同) |
|------|---------------------|----------------------|----------------------|
| 工具调用 | 12 次 | 9 次 | 6 次 |
| 错误数 | 2 | 1 | 0 |
| Memory | 无 | 触发写入 | 系统提示词注入 |
| Skill | 触发创建 | 复用 + 自我修补 | 复用已修补版本 |

---

## 安全机制：进化也需要约束

Agent 能往自己"脑子"里写东西，也就意味着攻击面。Hermes 做了两层防护。

### 第一层：Memory 内容扫描

因为 Memory 最终会注入系统提示词，如果被诱导记住 "ignore all previous instructions"，下次会话就等于被劫持了。

### 第二层：Skill 安全扫描

自创的和从 Hub 安装的 Skill 走同一套扫描，不通过就回滚。

---

## 设计取舍一览

| 设计决策 | 表面效果 | 背后的考量 |
|----------|----------|------------|
| Memory 限 2200 chars | 迫使 Agent 挑重要的记 | 低质量 Memory 注入系统提示词 = 每次 API 调用都带噪声 |
| 声明式事实 vs 操作步骤分离 | Memory 存事实，Skill 存步骤 | 两者的更新频率、触发条件、安全风险完全不同 |
| 冻结快照模式 | 系统提示词会话内不变 | 保护前缀缓存，避免每轮 API 调用重新计费 |
| 后台 fork 审查 | 用户感知不到 review 过程 | 自省不应占用用户任务的 attention budget |
| patch 优先于全量重写 | 局部修复 Skill | 保留已验证的稳定部分，只改需要改的 |

---

## 总结

Hermes Agent 的 Self-Improving 就是三件事的配合：Memory 记住你是谁，Skill 记住怎么做事，Nudge Engine 保证这个循环不停转。用得越久，Agent 帮你干活就越快、踩坑就越少。

如果你现在还在手写 Skill、手动维护 MEMORY.md、每次升级前先做好心理建设——不妨想想：你的时间应该花在给 Agent 做运维上，还是让 Agent 自己学会做事上？

---
*原文链接：https://news.qq.com/rain/a/20260423A01UGD00*

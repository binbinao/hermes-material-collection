# AI自我进化时代来临 - koc.com.tw

> 来源: https://www.koc.com.tw/archives/639404
> 爬取日期: 2026-05-19

---

# AI 自我进化时代来临：Nous Research 开源 Agent 自动优化 Prompt 框架

**作者**：达小编  
**发布日期**：2026年04月17日  
**来源**：电脑王阿达

---

## 核心事件概述

人工智能研究机构 **Nous Research** 在 GitHub 上开源了名为 **Hermes Agent Self-Evolution** 的新专案，让旗下的开源 AI Agent「Hermes Agent」擁有自我进化能力：可通过分析自身执行记录，自动产生改良版的技能指令、工具描述与系统提示，测试通过后提交为候选升级版本。

该框架的核心引擎是 **GEPA（Genetic-Pareto Prompt Evolution）**，一套获得顶尖 AI 学术论坛 **ICLR 2026 最高荣誉「Oral」** 认可的提示词优化算法。实测显示，GEPA 表现比主流强化学习方法 GRPO 平均高出6%，最高差距达20个百分点，且所需训练数据量仅为后者的三十五分之一。

---

## 什么是 Hermes Agent Self-Evolution？

Hermes Agent 是 Nous Research 在2026年2月推出的开源 AI Agent 框架，功能涵盖网页浏览、程式撰写、档案操作、记忆管理等，强调「越用越聪明」的自我优化设计。上线后短短数周即登上 GitHub Trending 排行，累积超过数万星星，是近期 AI 开源社群最受瞩目的专案之一。

此次开源的子专案 `hermes-agent-self-evolution` 是 Hermes Agent 的自动优化管道，主要由 Nous Research 联合创始人 `teknium1` 主导开发，整套系统运作逻辑如下：

1. 读取 Agent 当前使用的技能描述档、工具说明或系统提示
2. 根据真实执行记录（推理过程、工具呼叫、工具输出）自动产生评估数据集
3. 交由 GEPA 优化器分析失败原因、提出候选改良版本
4. 每个候选版本必须通过完整测试套件（包含 pytest 测试100%通过、大小限制、语意保留等关卡）
5. 通过所有关卡的最佳版本，以 Pull Request 形式提交供人工审查，不直接写入

### 成本优势

整个优化流程**不需要 GPU 训练**，仅通过 API 呼叫即可完成。官方估计每次优化执行成本约 **NT$65 至 NT$325**（约2-10美元），相较于传统强化学习动辄消耗大量算力的训练方式，门槛大幅降低。

---

## GEPA 是什么？为何比强化学习更有效率？

GEPA 全称为 **Genetic-Pareto Prompt Evolution**，由研究人员以论文形式发表于 arXiv（[论文编号 2507.19457](https://arxiv.org/abs/2507.19457)），并获得 ICLR 2026 Oral 认可，是当届会议的最高等论文之一。

### 与传统强化学习的差异

传统强化学习方法（如 GRPO）在训练 LLM 学习新任务时，通常需要**数千次 rollout**（模型执行尝试）才能有效更新策略。而 GEPA 的核心逻辑是：语言模型本身就能理解「为什么失败」，而不只是接受「失败了」这个信号。

因此 GEPA 的做法是：让模型读取自己的执行轨迹（包含推理过程、工具呼叫记录），用**自然语言反思**找出问题，再提出改良版提示、测试各版本，最终从「帕雷托前线」（Pareto frontier）挑选出互补性最高的优化成果加以合并。这使得 GEPA 在少量数据下就能产生显著的品质提升。

### 量化成果

论文揭露的实测数据亮眼：

- 在六项任务中，GEPA **平均比 GRPO 高出6%**，最大差距达 **20 个百分点**
- 使用的 rollout 数据量仅为 GRPO 的 **1/35**（约少用35倍数据）
- 在 AIME-2025 数学题目测试上，GEPA 比当前最强的提示优化工具 MIPROv2 高出 **12%**
- 同时展现出作为推理时搜索策略的潜力，在程式码优化任务上效果显著

---

## 自我进化的范畴：五个阶段、两套引擎

`hermes-agent-self-evolution` 目前公布的路线图分为五个演化阶段，采用两套不同引擎：

| 阶段 | 进度 | 优化内容 | 说明 |
|------|------|----------|------|
| Phase 1 | 已实作 | 技能描述档（SKILL.md）自动优化 | 这是 Hermes Agent 用来记录各项任务操作方式的核心文件，决定了 AI 在面对特定任务时的行为框架 |
| Phase 2 | 计划中 | 工具描述（tool descriptions）优化 | 让 AI 更精确地理解何时该呼叫哪个工具 |
| Phase 3 | 计划中 | 系统提示（system prompt）各区段自动优化 |  |
| Phase 4 | 计划中 | 工具实作程式码本身优化 | 采用外部开源工具 Darwinian Evolver（以 Git commit 为单位模拟生物演化） |
| Phase 5 | 计划中 | 串接前四阶段的持续优化自动化管道 |  |

### 授权与安全机制

- 主引擎 DSPy + GEPA 采 **MIT 授权**开放使用
- Phase 4 计划引入的 Darwinian Evolver 采 **AGPL v3 授权**，将以外接 CLI 工具形式呼叫，不直接整合入核心
- 明确的安全承诺：所有优化后的改动均需通过 Pull Request 流程接受人工审查，不允许自动直接写入正式版本

---

## 行业影响：Prompt Engineering 的终结？

对许多 AI 开发者而言，「写好 system prompt（系统提示词）」是目前实际部署 AI Agent 时耗费最多心力的环节之一。`hermes-agent-self-evolution` 所开启的，正是一条让这件事自动化的路径：不是由工程师手动实验各种 prompt 写法，而是让框架自己读取失败案例、自己提出改良、自己验证成效。

### 现状与展望

当然，这套系统目前仍处于早期阶段：Phase 1 的技能档优化已实作，但更核心的系统提示与程式码优化都尚在规划中。且即便优化流程可以自动化，人工审查这道关卡依然保留，显示 Nous Research 并未打算让 AI 完全自主地改动自己。

但从更宏观的视角来看，这个方向已然清晰：AI Agent 的下一个竞争维度，将不只是「功能多不多」或「模型强不强」，而是它能否在使用中**持续优化自身的行为方式**。Nous Research 的这一步棋，可能是这场竞赛中最早的几张牌之一。

---

## 相关连结

- 专案 GitHub 地址：[https://github.com/NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution)
- GEPA 论文地址：[https://arxiv.org/abs/2507.19457](https://arxiv.org/abs/2507.19457)

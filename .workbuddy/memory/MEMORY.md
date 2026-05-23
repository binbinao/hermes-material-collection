# Hermes 培训素材收集项目 — 长期记忆

## 项目概况
- **仓库**: hermes-material-collection (GitHub: binbinao/hermes-material-collection)
- **路径**: /Users/duobinji/Documents/GitHub/hermes-material-collection/
- **目的**: 为 Hermes 培训准备素材，广泛搜集、交叉验证、分类存储
- **创建时间**: 2026-05-16

## Hermes 技术生态（5大项目）

1. **Hermes Agent** (Nous Research) — 自进化 AI Agent 框架, 143.5K Stars, v0.14.0(2026-05-16), 2026.02 发布
2. **Hermes 4** (Nous Research) — 混合推理 LLM (14B/70B/405B/36B), 2025.08 发布, arXiv 2508.18255
3. **Hermes 4.3** (Nous Research) — 36B, Seed-OSS基座, Psyche分布式训练, RefusalBench SOTA 74.60%
3. **Hermes RAG** (Cornell Tech) — 算法-系统协同设计 RAG, ISCA 2025
4. **Hermes Edge Inference** (上海交通大学) — PIPELOAD 机制，边缘设备大模型推理, arXiv 2409.04249, ICCD 2024
5. **HERMES Math Reasoning** — Lean4 形式化验证数学推理, arXiv 2511.18760

### 竞品追踪（2026-05-22 更新）
6. **OpenClaw** (Peter Steinberger) — 多平台 AI 助手, ~372K Stars, 2026.5.12, TypeScript, MIT; **安全债严重**(535+公告/139 CVE/30000+暴露实例)
7. **OpenHuman** (Tiny Humans AI / tinyhumansai) — 桌面端个人AI系统, 25.4K Stars, v0.54.0(2026-05-19), Rust+TS, GPL-3.0; 核心创新: Memory Tree + 118 OAuth集成 + Mascot吉祥物 + TokenJuice压缩; 定位"个人AI桌面OS", 1周末破10K Star 史上最快

## 目录结构
- 01-Hermes-Agent/ — 核心技术架构 + **03-高阶功能深度挖掘.md** + **PPT(16页, Tech风格)**
- 02-Hermes-4-LLM/ — 模型技术文档 + 扩展资源索引（论文/模型/4.3新版本）
- 03-Hermes-RAG/ — RAG 框架文档 + 学术前沿资源索引（RAG/Edge/Math三项目）
- 04-Hermes-Edge-Inference/ — 边缘推理文档
- 05-Hermes-Math-Reasoning/ — 数学推理文档
- 06-对比分析/ — Hermes vs OpenClaw 对比 + **Hermes×OpenClaw×OpenHuman 三方对比(2026-05-22)**
- 07-培训课程/ — 开发者培训大纲 + 非技术人员培训大纲（6次×90min，面向PM/运营/设计/PM/HR/架构师）

## 关键发现（交叉验证结论）
- Hermes Agent 核心创新：自创建-自改进-自复用的闭环学习（vs OpenClaw 静态技能）
- Hermes 4 最显著优势：RefusalBench SOTA 74.60%(4.3 36B非推理), 原记录57.1%(4 405B)
- GEPA是ICLR 2026 Oral：自然语言反思替代RL标量奖励，Agent重复任务提速40%
- Hermes 4.3基于ByteDance Seed 36B（非Llama），首个Psyche分布式训练生产模型
- Hermes Agent 局限：0.1版本→v0.14.0、Skill冗余、多Agent协作不成熟
- Hermes vs OpenClaw 定位：Hermes=长期进化伙伴，OpenClaw=多平台万能工具
- 二者兼容 agentskills.io 开放标准，可互补使用
- 5个Hermes项目仅有前2个属于Nous Research，后3个是独立同名项目
- **三方对比(2026-05-22)**: Hermes=深度优先自进化路线(加权8.1/10), OpenClaw=广度优先生态路线(6.4/10,安全债重), OpenHuman=体验优先桌面OS路线(6.8/10,GPL限制)
- Hermes 日处理 224B Token 已超越 OpenClaw 186B (2026-05-10)
- Agent 变革五大方向: 冷→热启动 / 静态→自进化 / 终端→桌面OS / 单模型→智能路由 / 聊天框→在场伙伴

## 扩展资源收集（2026-05-17更新）
- 视频：YouTube 3个英文 + B站4个中文 + 官方活动1个
- 论文：GEPA(2507.19457/ICLR Oral)、Hermes3(2408.11857)、Hermes4(2508.18255)
- 深度文章：英文5篇 + 中文7篇，全部交叉验证
- GitHub仓库：5个（Agent/FunctionCalling/RAG/GEPA/HERMES-Math）
- 学术前沿：RAG(ISCA'25/DOI:10.1145/3695053.3731076)、Edge(ICCD'24/arXiv:2409.04249)、Math(arXiv:2511.18760)

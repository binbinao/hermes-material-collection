# Hermes 4 大语言模型技术文档

> **技术报告**: arXiv 2508.18255
> **发布方**: Nous Research
> **发布时间**: 2025年8月
> **许可证**: Meta Llama 3 Community License Agreement
> **权重**: HuggingFace (NousResearch 组织)

---

## 一、模型概览

Hermes 4 是 Nous Research 发布的**开源混合推理大语言模型家族**，基于 Meta Llama 3.1 架构优化。核心突破在于将**结构化多步推理**与**指令跟随能力**深度融合，在数学、编程、逻辑推理等任务中达到行业领先水平。

### 参数版本

| 版本 | 参数量 | 适用场景 |
|------|--------|----------|
| Hermes 4 14B/70B | 70亿/700亿 | 轻量级，适合资源有限环境（如本地部署） |
| **Hermes 4 405B** | 4050亿 | **旗舰版本**，复杂任务表现媲美商业系统 |

### 关键数据

| 指标 | 数值 |
|------|------|
| 上下文窗口 | 128,000 tokens (继承 Llama 3.1) |
| 架构 | Decoder-only + Grouped-Query Attention |
| 位置编码 | Rotary Positional Embeddings |
| 自托管 | 免费 |
| OpenRouter 405B 定价 | ~$0.30/百万输入token, ~$1.20/百万输出token |

---

## 二、混合推理模式

Hermes 4 引入 `<think>...</think>` 标签，允许用户在两种模式间切换：

### Fast 模式（快速响应）
- 直接生成答案
- 适用于简单查询
- 低延迟

### Reasoning 模式（深度推理）
- 在 `<think>` 标签内展示逐步思考过程
- 数学推导、代码逻辑分解
- 类似 OpenAI o1 模型，但透明度更高
- 用户可实时观察模型决策路径

### 输出格式
```
<|start_header_id|>assistant<|end_header_id|>
<think>
...模型内部推理内容...
</think>
最终回复内容...<|eot_id|>
```

---

## 三、训练方法论

### 3.1 训练数据规模

| 维度 | Hermes 3 | Hermes 4 | 增长倍数 |
|------|----------|----------|----------|
| 样本数 | ~100万 | ~500万 | 5x |
| Token数 | ~12亿 | ~600亿 | 50x |
| 推理样本 | — | 350万 | — |
| 非推理样本 | — | 160万 | — |

### 3.2 三阶段训练流水线

**阶段1: 监督微调 (SFT)** — 在扩展语料上建立核心能力

**阶段2: 混合推理扩展** — 教模型区分"思考"与"回答生成"，通过显式 segment tags 实现

**阶段3: 偏好优化** — 调优指令跟随，最小化拒绝率

### 3.3 关键训练技术

- **DataForge**: 图形化合成数据生成器，基于DAG随机游走
- **Atropos**: 开源强化学习框架，数百个专项训练环境
- **拒绝抽样**: 仅保留高质量响应纳入训练集
- **Loss Masking**: 针对推理token的特殊损失掩码
- **Length-Control Fine-Tuning**: 长度控制微调
- **Efficient Packing**: 大规模异构数据的高效打包策略

---

## 四、性能基准

### 4.1 数学推理

| 基准 | Hermes 4 405B (推理模式) | 水平 |
|------|--------------------------|------|
| **MATH-500** | 96.3% | 接近饱和，与闭源前沿竞争 |
| **AIME 2024** | 81.9% | 开源领先 |

### 4.2 代码生成
- HumanEval+: 中80段性能 — 与开源同级竞争

### 4.3 RefusalBench（最显著优势）

| 模型 | RefusalBench 得分 |
|------|-------------------|
| **Hermes 4 405B** (推理模式) | **57.1%** |
| GPT-4o | 17.7% |
| Claude Sonnet 4 | 17.0% |

> RefusalBench 测量模型在边缘场景问题中的拒绝率。Hermes 4 在"不被审查"方面大幅领先。

---

## 五、函数调用与工具使用

Hermes 4 支持**单轮内穿插工具调用与推理**，使用 `Ҭ` 标签标记工具调用：

- 支持 JSON Schema 定义的函数
- 工具调用与推理过程交织
- vLLM 内置 `hermes` tool parser
- SGLang 使用 `qwen25` tool parser

---

## 六、推理配置

### 推荐采样参数
```
temperature=0.6
top_p=0.95
top_k=20
```

### 生产部署
- 多 GPU 节点: 推荐使用 SGLang/vLLM + prefix caching
- FP8 量化 405B 版本可在单台 8GPU 服务器运行

### 推理提供商
- Nous Portal (原生API)
- OpenRouter
- Together AI
- Fireworks AI
- Chutes, Nebius, Luminal
- 自托管 (vLLM, TGI, llama.cpp)

---

## 七、Hermes 模型演进史

| 版本 | 时间 | 基座 | 规模 | 核心突破 |
|------|------|------|------|----------|
| Hermes 1 | 2023.10 | Llama 2 | 7B | 首个高质量指令微调 |
| Hermes 2 | 2024 | Llama 2 | 7B/13B/70B | 规模扩展 |
| Hermes 3 | 2025 | Llama 3 | 多尺寸 | ~1M样本, ~1.2B tokens |
| **Hermes 4** | **2025.08** | **Llama 3.1** | **70B/405B** | **混合推理, ~5M样本, ~60B tokens** |

---

## 八、设计哲学

Hermes 4 的核心设计目标: **"按你说的做" (does what you tell it)**

- 无重度拒绝脚手架
- 中性对齐（neutrally-aligned）
- 完全开放权重
- 可复现和透明

---

## 参考来源

1. [Hermes 4 Technical Report (arXiv 2508.18255)](https://arxiv.org/pdf/2508.18255)
2. [Hermes 4 - nextomoro.com](https://nextomoro.com/hermes-4/)
3. [Hermes 4 - aitop100.cn](https://www.aitop100.cn/tools/hermes4-nousresearch)
4. [Hermes 4 405B - HuggingFace](https://huggingface.co/unsloth/Hermes-4-405B)
5. [Hermes 4 405B - OpenCSG](https://opencsg.com/models/NousResearch/Hermes-4-405B)
6. [Hermes 4 Technical Report - BAAI Hub](https://hub.baai.ac.cn/paper/83e15b20-f357-4e29-a36d-24231ec87c00)

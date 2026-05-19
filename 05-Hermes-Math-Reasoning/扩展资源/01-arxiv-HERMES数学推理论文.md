# HERMES: 面向高效可验证数学推理的LLM框架 - arXiv 论文摘要

> 来源: https://arxiv.org/abs/2511.18760
> arXiv编号: 2511.18760
> 爬取日期: 2026-05-19

---

# HERMES: Towards Efficient and Verifiable Mathematical Reasoning in LLMs

## 一、论文完整摘要

非正式数学推理是现代大语言模型（LLM）推理的核心，具备灵活性且能高效构建论证，但纯非正式推理容易出现逻辑漏洞和难以检测、修正的细微错误。

与之相对，形式化定理证明可提供严谨、可验证的数学推理，每一步推理都由Lean等系统的可信编译器校验，但缺乏非正式问题求解的探索自由度。

这种不匹配导致当前基于LLM的数学智能体缺乏系统性的方法融合两种范式的优势。

在这项工作中，我们提出**HERMES**，这是首个明确将非正式推理与Lean形式化验证证明步骤交替结合的辅助工具智能体。该框架通过中间形式化校验防止推理偏移，同时采用记忆模块在多步长推理链中维持证明连续性，在单一工作流中同时实现探索和验证两种能力。

我们使用不同参数规模的LLM（从小模型到最先进系统），在4个有挑战性的数学推理基准上对HERMES进行评估。所有设置下，HERMES都能可靠提升基础模型的推理准确率，同时与基于奖励的方法相比，大幅降低token使用量和计算成本。在AIME'25等困难数据集上，HERMES最多可实现**67%**的准确率提升，同时总推理FLOPs减少**80%**。

---

## 二、核心方法

### 2.1 混合框架

HERMES将**自然语言推理**与 **Lean4 形式化证明**相结合：

1. **翻译 (Translation)**: 将自然语言推理步骤翻译为Lean4形式化表述
2. **证明 (Proving)**: 用Lean4证明器验证每个步骤的正确性
3. **反翻译 (Backtranslation)**: 将验证结果反馈给LLM

### 2.2 关键参数

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| Kt (翻译次数) | 每步翻译尝试次数 | 4 |
| Kp (证明尝试次数) | 每步证明尝试次数 | 4 |

### 2.3 记忆模块

- 存储已验证的步骤，避免重复验证
- 检索相似已验证步骤辅助新推理
- 使用Qwen3-Embedding (top-k=3)进行检索

---

## 三、核心发现

### 3.1 准确率提升

- 在AIME'25等高难度数据集上，准确率提升最高达**67%**
- 所有测试基准上准确率均有提升

### 3.2 Token效率

- 使用约**4-6x更少token**比基于奖励的方法
- 即使包含Lean4验证开销，总成本仍与标准CoT相当

### 3.3 计算效率

- 某些设置下推理FLOPs降低高达**80%**

### 3.4 消融实验

- 移除证明器或记忆模块会导致准确率下降
- 在需要更长、更仔细推理的难题上影响更大

---

## 四、设计优势

| 优势 | 说明 |
|------|------|
| **防止推理漂移** | 小错误不会逐步累积 |
| **可解释反馈** | 不只是分数，而是证明或反证 |
| **更高可靠性** | 混合工具提升可靠性、减少幻觉 |
| **成本可控** | 比reward-based方法更节省token |

---

## 五、局限与开放问题

1. **步骤选择策略**: 如何选择"关键"步骤进行验证
2. **自动形式化可靠性**: 反翻译等价性由LLM判断，非形式化语义检查
3. **模糊/不充分自然语言处理**: 数学问题中的隐含假设
4. **验证信号粒度**: REPL反馈较粗 (True/False/Failure)
5. **失败模式区分**: 超时、不可判定、翻译错误等混合
6. **记忆正确性**: 翻译错误可能验证错误声明

---

## 六、论文信息

- **标题**: HERMES: Towards Efficient and Verifiable Mathematical Reasoning in LLMs
- **arXiv**: 2511.18760
- **DOI**: 10.48550/arXiv.2511.18760
- **发布日期**: 2025-11-24
- **作者**: Azim Ospanov, Zijin Feng, Jiacheng Sun, Haoli Bai, Xin Shen, Farzan Farnia
- **机构**: 华为技术 / 香港中文大学
- **全称**: Hybrid AgEnt for Reasoning in Mathematics with NEuro-Symbolic Lean4 verification

---

## 七、相关资源

| 资源 | 链接 |
|------|------|
| arXiv页面 | https://arxiv.org/abs/2511.18760 |
| arXiv HTML | https://arxiv.org/html/2511.18760 |
| arXiv Vanity | https://arxiv-vanity.com/papers/2511.18760 |
| GitHub代码 | https://github.com/aziksh-ospanov/HERMES |
| LessWrong讨论 | https://www.lesswrong.com/posts/47nnn9pcgkkbP64wc/ |

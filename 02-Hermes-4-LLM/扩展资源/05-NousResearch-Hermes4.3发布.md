# Hermes 4.3 正式发布 - Nous Research

> 来源: https://nousresearch.com/introducing-hermes-4-3/
> 爬取日期: 2026-05-19

---

# Nous Research 发布 Hermes 4.3

## 一、基础发布信息

Hermes 4.3是Nous Research旗舰Hermes系列模型的更新版本，已上线Hugging Face平台，提供两组版本：

1. **Psyche分布式训练版本**：
   - [模型地址](https://huggingface.co/NousResearch/Hermes-4.3-36B)
   - [GGUF量化版本](https://huggingface.co/NousResearch/Hermes-4.3-36B-GGUF)
   - [评估数据与评分](https://huggingface.co/datasets/NousResearch/eval-Hermes-4.3-36B)

2. **传统集中式训练版本**（研究参考用）：
   - [模型地址](https://huggingface.co/NousResearch/Hermes-4.3-36B-centralized)
   - [对应评估数据](https://huggingface.co/datasets/NousResearch/eval-Hermes-4.3-36B-centralized)

---

## 二、核心新功能与性能改进

### 1. 基础参数与上下文能力提升

- 基于`Seed-OSS-36B-Base`模型开发，参数规模360亿，仅为前代Hermes 4 700亿参数版本的一半
- 支持**最长512K token的扩展上下文长度**

### 2. 性能表现

- 性能接近甚至部分场景超过Hermes 4 700亿参数版本，实现"半参数、持平性能"的效果
- 在RefusalBench基准测试中取得SOTA（当前最优）成绩，优于所有主流闭源、开源模型，在用户价值对齐、有用性维度表现突出
- Nous Research明确表示Hermes系列不局限于容易被刷分的数学、编程基准测试，更侧重给用户提供广泛的探索自主权

### 3. 部署优势

- 量化后的GGUF版本可适配消费级商用GPU的显存，适合本地推理、企业私有化部署，是中性对齐、可私有部署的高性能模型选择

---

## 三、Psyche分布式训练相关特性

Hermes 4.3是Nous Research首个完全基于Psyche网络训练完成的生产级模型，相关技术细节如下：

### 1. Psyche网络基础逻辑

- 是Nous Research打造的分布式训练网络，核心作用是通过分布式协作降低前沿模型的训练成本，降低开源AI开发者的准入门槛
- **技术架构**：采用**双L1-P2P网络模型**
  - 共识状态由Solana区块链的智能合约管理
  - 训练梯度通过自定义P2P网格网络进行带外传输
- **优化器**：使用DisTrO优化器，实现公网跨数据中心训练节点的高效通信

### 2. 训练验证过程

为验证Psyche网络的生产可用性，团队同时用两种方式训练Hermes 4.3，做对照验证：

| 训练方式 | 技术栈 | 训练规模 |
|----------|--------|----------|
| 传统集中式训练 | 自定义TorchTitan框架、FSDP+AdamW优化器 | 训练规模是Hermes 4的2倍（因扩展上下文+训练集增大） |
| Psyche分布式训练 | TP+DisTrO优化器 | 同上 |

### 3. 训练表现与结果

- 训练全程稳定，24个Psyche节点的平均训练吞吐量达14.4万token/秒
- DisTrO的重叠通信策略可完全隐藏P2P通信开销，实际吞吐量与传统集中式训练持平
- **Psyche训练的版本在下游任务套件中的表现优于传统集中式训练的版本**，验证了Psyche网络可支撑生产级模型训练

---

## 四、相关参考资源

1. Hermes 4技术报告：👉 [arXiv地址](https://arxiv.org/pdf/2508.18255)
2. Psyche网络相关信息：
   - [官网](https://psyche.network/)
   - [GitHub代码库](https://github.com/PsycheFoundation/psyche)
   - [Solana链上交易查询（合约地址）](https://explorer.solana.com/address/HR8RN2TP9E9zsi2kjhvPbirJWA1R6L6ruf4xNNGpjU5Y?cluster=devnet)
3. Nous Research官方渠道：Hugging Face、Discord、GitHub、Twitter等均已公布在官网底部

# Hermes RAG: 高效检索增强生成的算法-系统协同设计

> **论文**: "Hermes: Algorithm-System Co-design for Efficient Retrieval-Augmented Generation At-Scale"
> **会议**: ISCA 2025 (第52届国际计算机体系结构研讨会)
> **作者**: Shen, Umar, Maeng, Suh, Gupta (Cornell Tech)
> **GitHub**: https://github.com/S4AI-CornellTech/Hermes
> **许可证**: MIT

---

## 一、项目定位

Hermes 是一个开源评估框架，实现了**算法-系统协同设计**方法，用于大规模优化检索增强生成 (RAG)。核心创新在于智能地将搜索集群分布在多台机器上，并采用**分层搜索**和**动态电压频率调节 (DVFS)** 来优化检索延迟和能耗。

---

## 二、核心架构

### 2.1 关键组件

- **分层搜索 (Hierarchical Search)**: 将大规模检索索引分解为智能分布的集群
- **DVFS 优化**: 通过调整 CPU 频率来平衡延迟与能耗
- **多节点聚合**: 分布式环境下的 RAG 推理延迟建模

### 2.2 索引配置

| 类型 | 说明 |
|------|------|
| Monolithic Index | 单一统一索引 |
| Split Indices | 均匀分布索引 |
| **Clustered Hermes Indices** | **智能分布集群索引** |
| Flat Index | 基线对比 |

### 2.3 使用的数据集

- **SPHERE_899M** — BERT 编码的 8.99 亿 Common Crawl 子集
- **SPHERE_100M** — BERT 编码的 1 亿 Common Crawl 子集
- **SPHERE_100K** — BERT 编码的 10 万 Common Crawl 子集
- **TriviaQA** — 开放域问答数据集

### 2.4 使用的模型

| 模型 | 用途 |
|------|------|
| GEMMA-2 9B | 推理 |
| BGE-Large | 编码 |
| BERT-Base-Uncased | 编码 |

---

## 三、评估框架

### 3.1 能力维度

- **检索延迟分析**: 不同索引配置下的端到端延迟
- **能耗分析**: DVFS 优化下的功耗测量
- **准确率评估**: 不同索引类型的检索精度比较
- **吞吐量分析**: 各种配置下的系统吞吐量

### 3.2 快速脚本

| 脚本 | 功能 |
|------|------|
| `build.sh` | 构建 Flat/Monolithic/Clustered/Split 索引 |
| `profile.sh` | 性能/功耗分析 |
| `eval.sh` | 延迟/能耗建模 + 准确率分析 |
| `isca_figures.sh` | 从论文数据生成图表 |

---

## 四、关键发现

- 分层搜索在保持准确率的同时显著降低检索延迟
- DVFS 可在可接受的延迟增加下实现显著节能
- 集群化索引在大规模场景下优于单体索引
- 算法（分层搜索）与系统（DVFS）的协同设计带来超线性收益

---

## 五、环境搭建

### Docker 方式
```bash
sudo docker pull michaeltshen/hermes-env:latest
sudo docker run --gpus all --privileged -v /sys:/sys -it michaeltshen/hermes-env:latest
```

### 原生 Linux
```bash
conda create -n hermes python=3.11
conda activate hermes
git clone --recurse-submodules https://github.com/Michaeltshen/Hermes.git
conda install -c pytorch -c nvidia faiss-gpu=1.8.0 pytorch=*=*=cuda*
```

---

## 参考来源

1. [GitHub: S4AI-CornellTech/Hermes](https://github.com/S4AI-CornellTech/Hermes)
2. Shen et al., ISCA 2025: "Hermes: Algorithm-System Co-design for Efficient RAG At-Scale"
3. RAGCAT 交互式数据分析面板

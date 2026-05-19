# Hermes 4 技术报告 - BAAI Hub

> 来源: https://hub.baai.ac.cn/paper/83e15b20-f357-4e29-a36d-24231ec87c00
> 爬取日期: 2026-05-19

---

# Hermes 4技术报告信息提取

## 一、核心摘要

本报告由NousResearch团队（Ryan Teknium等9位作者）于2025年8月25日发布，Hermes 4是一系列**混合推理模型**，核心能力是同时支持结构化多轮推理，和广泛的指令遵循能力。报告完整介绍了模型研发全流程中数据整理、合成、训练、评估环节的挑战及对应解决方案，全面验证了该混合模型在通用任务上的可行性，所有模型权重已在HuggingFace开源，目前社区热度为602。

---

## 二、核心研发目标

解决当前AI模型普遍存在的"结构化多轮推理能力"和"指令遵循能力"难以平衡的问题，验证同时具备数学推理、编码、知识理解、对齐等综合能力的混合推理模型的大规模落地可行性。

---

## 三、关键技术方案

本次提出的Hermes 4模型家族核心创新是**混合推理机制**，通过数据整理、合成、训练、评估技术的全链路综合优化，实现模型在多种任务上的均衡表现，避免了单任务能力突出但通用性不足的问题。

---

## 四、评估与关键发现

1. **评估维度全面**：覆盖了数学推理、编程、知识理解、对齐等多个主流基准测试，同时开展了定量性能评估和定性行为分析，从数据表现和实际使用行为两个维度验证模型能力。

2. **开源贡献显著**：全系列模型权重均已公开，地址为：https://huggingface.co/collections/NousResearch/hermes-4-collection-68a731bfd452e20816725728，为后续混合推理模型的研究提供了开源基础资源。

3. **研究参考价值**：实验设计覆盖多维度，使用的数据集和评估方法具备行业代表性，为未来混合推理模型的优化方向提供了新的参考。

---

## 五、相关研究基础

该工作的研究基础包括4项相关工作：

1. Hermes 3: Improving Multi-turn Reasoning through Scalable Training
2. Hybrid Instruction-following Models for General-Purpose AI
3. Chain-of-Thought Prompting Elicits Reasoning in Large Language Models
4. Scaling Language Models: Methods, Analysis & Insights

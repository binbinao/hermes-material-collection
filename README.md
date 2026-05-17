# hermes-material-collection

Hermes 培训素材收集仓库 — 涵盖 Hermes Agent、Hermes 4 LLM、Hermes RAG、Edge Inference、Math Reasoning 全技术栈。

## 目录结构

```
hermes-material-collection/
├── 01-Hermes-Agent/          # 自进化 AI Agent 框架 (124K+ Stars)
│   ├── 01-核心技术架构.md      # 六层架构、闭环学习、记忆/技能/网关/安全
│   └── 02-扩展资源索引.md      # 视频、论文、深度文章（交叉验证）
├── 02-Hermes-4-LLM/          # 混合推理大语言模型 (70B/405B/36B)
│   ├── 01-Hermes4模型技术文档.md  # 训练方法、推理模式、基准测试
│   └── 02-扩展资源索引.md      # 论文、模型下载、4.3新版本（交叉验证）
├── 03-Hermes-RAG/            # 高效检索增强生成 (ISCA 2025)
│   ├── 01-Hermes-RAG框架文档.md   # 算法-系统协同设计、DVFS
│   └── 02-扩展资源索引-学术前沿.md # RAG/Edge/Math三项目论文+代码（交叉验证）
├── 04-Hermes-Edge-Inference/ # 边缘设备大模型推理
│   └── 01-Hermes边缘推理文档.md   # PIPELOAD 机制、动态内存管理
├── 05-Hermes-Math-Reasoning/ # LLM 高效可验证数学推理
│   └── 01-HERMES数学推理文档.md   # Lean4 形式化验证框架
├── 06-对比分析/               # 竞品对比
│   └── 01-Hermes-vs-OpenClaw对比.md  # 七维度深度对比
├── 07-培训课程/               # 培训大纲与资源
│   └── 01-培训大纲与资源索引.md     # 2天课程、实操、资源索引
└── README.md
```

## Hermes 技术生态全景

| 项目 | 类型 | 来源 | 核心亮点 |
|------|------|------|----------|
| **Hermes Agent** | AI Agent 框架 | Nous Research | 自进化闭环、持久记忆、124K+ Stars |
| **Hermes 4** | LLM 模型 | Nous Research | 混合推理、405B参数、RefusalBench SOTA |
| **Hermes RAG** | 系统框架 | Cornell Tech | 算法-系统协同设计、ISCA 2025 |
| **Hermes Edge** | 推理框架 | 学术论文 | PIPELOAD、86.7%内存降低 |
| **HERMES Math** | 推理框架 | 学术论文 | Lean4验证、67%准确率提升 |

## 使用方式

```bash
# 克隆仓库
git clone git@github.com:binbinao/hermes-material-collection.git

# 进入项目目录
cd hermes-material-collection
```

## 贡献指南

1. Fork 本仓库或基于 `main` 分支创建特性分支
2. 提交素材时请遵循目录规范，并附上简要说明
3. 通过 Pull Request 合并到主分支

## License

本仓库内容仅供内部使用，未经授权请勿外传。

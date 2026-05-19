# Hermes 4 完整介绍 - nextomoro.com

> 来源: https://nextomoro.com/hermes-4/
> 爬取日期: 2026-05-19

---

# Hermes 4

Hermes 4是Nous Research于2025年8月发布的开源权重混合推理大语言模型家族，基于Meta Llama 3.1基座开发，包含700亿参数和4050亿参数两个版本。它引入了混合推理模式，模型会在自主判断需要深思时输出显式的`<think>`推理段，同时支持用户选择快速直接生成或深度逐步推理两种模式。截至2026年4月下旬，Hermes 4属于领先的开源许可推理模型，在Nous开发的衡量无约束回答行为的RefusalBench基准上排名第一，在数学和推理基准上与闭源前沿模型不相上下。

## 核心概要

| 属性 | 详情 |
|------|------|
| 开发机构 | Nous Research |
| 发布时间 | 2025年8月（技术报告：[arXiv 2508.18255](https://arxiv.org/abs/2508.18255)） |
| 模态 | 文本 |
| 开源权重 | 是，遵循Meta Llama 3社区许可协议，允许广泛商业和非商业使用，包括衍生作品。权重和配置可在Hugging Face的NousResearch组织下获取 |
| 上下文窗口 | 128000 token（继承Llama 3.1的基座上下文长度） |
| 定价 | 自托管免费；托管推理多价位可选：OpenRouter提供Hermes 4 405B的推理服务，输入约0.3美元/百万token，输出约1.2美元/百万token；Nous Portal提供直接API访问；Together AI、Fireworks AI等推理提供商也提供社区托管端点 |
| 分发渠道 | Nous Portal、Hugging Face（NousResearch组织）、OpenRouter、Together AI、Fireworks AI，以及通过vLLM、TGI或llama.cpp自托管 |

## 开发背景

Hermes 4隶属于Nous Research自2023年以来的六代开源微调模型产品线：

1. 2023年8月：Nous-Capybara 7B微调版本发布，10月发布Hermes 7B微调版本，确立了品牌作为基于第三方基座权重的高质量开源指令微调模型领先供应商的地位
2. Hermes 1到3代逐步基于Llama 2（7B、13B、70B）和Llama 3基座扩大规模，每一代都优化了后训练数据质量、指令遵循深度和推理保真度
3. 2025年8月的Hermes 4是Nous Research迄今为止规模最大的后训练运行：后训练语料从Hermes 3使用的约100万样本、12亿token，扩充到约500万样本、600亿token，混合了推理和非推理数据。推理语料重点采用验证轨迹数据：合成思维链生成会在纳入训练混合数据前，经过数学正确性、代码执行有效性和逻辑一致性校验
4. 技术报告（Teknium等人，arXiv 2508.18255）详细记录了后训练 pipeline：
   - 第一阶段：在扩充的语料上进行基础监督微调，建立核心能力 profile
   - 第二阶段：混合推理扩展训练，教会模型通过显式段标签区分思考和回复生成
   - 第三阶段：最终偏好优化，针对指令遵循和最小化回复拒绝进行调优
   设计目标是让模型"完全按照你的指令执行"，没有主流闭源前沿API的重型拒绝脚手架
5. 发布模式相对同行较为低调：没有 embargo 媒体预热周期，没有提前宣布的合作伙伴集成，2025年8月的一个周一直接上传权重到Hugging Face，技术报告和基准数据在接下来48小时内发布。行业报道认为这是刻意为之，符合Nous Research"开源优先而非媒体预热优先"的定位。

## 技术特性

Hermes 4是架构层面的混合推理模型，这类架构最早由OpenAI的o系列普及，随后Anthropic、Google DeepMind也以闭源形式采用。训练让模型能够在生成最终答案前选择性地进行内部推理，推理内容以显式`<think>`块包裹。

### 1. 混合推理模式
- **快速模式**：直接生成答案，适合简单查询和低延迟场景
- **推理模式**：在`<think>`块内展示逐步思考过程，适合数学、编码、多步推理和需要验证的工作负载
- 用户可以通过系统提示或包含特定控制token在两种模式间切换

### 2. 架构与部署版本
- 4050亿参数版本继承Llama 3.1的Transformer架构：仅解码器设计，分组查询注意力，标准旋转位置嵌入
- 700亿参数版本以能力换取推理成本，FP8量化下可在单台8 GPU服务器上流畅运行
- 同时提供405B的FP8量化版本，让有合适硬件的组织可以在单服务器上推理

### 3. 低拒绝率特性
Nous Research发布了RefusalBench自定义基准，衡量语言模型在超出硬安全边界的问题上拒绝回答的频率。Hermes 4 405B在推理模式下RefusalBench得分57.1%，远高于GPT-4o的17.7%和Claude Sonnet 4的17%。官方将这一点定位为产品特性：模型遵循指令，不会在边缘案例提示上拒绝响应

### 4. 核心能力覆盖
继承Llama 3.1基座能力并通过Hermes 4后训练优化，支持多轮对话、文档分析、代码生成、数学推理。严格格式保真度（JSON输出、结构化标签、模式约束生成）是Hermes 4的明确训练目标，也是其表现较强的领域之一。

## 基准测试与行业地位

Hermes 4 405B在数学和推理基准上属于开源许可推理模型的第一梯队：

### 1. 数学与推理基准
- **MATH-500**：推理模式下得分96.3%，接近基准饱和，与闭源前沿模型持平
- **AIME 2024**（美国数学邀请赛，美国数学奥赛资格赛）：推理模式下得分81.9%，属于该高难度数学基准上领先的开源许可推理模型

### 2. 综合智能指数
在Artificial Analysis智能指数上，Hermes 4 405B综合得分排在中30位区间，落后于前沿闭源模型（GPT-5.5 60.24分、Claude Opus 4.7 57.28分、Gemini 3.1 Pro 57.18分），但与同级别开源权重 peer 处于同一范围

### 3. 代码能力
HumanEval+（函数补全编码）得分80多分，与开源权重 tier 的 peer 竞争力相当

### 4. RefusalBench基准
Hermes 4在该基准上领先优势显著，但该基准由Nous Research构建，其评分方法的独立验证有限，相关报道更强调方向性信号（Hermes 4比 peer 拒绝的请求更少），而非精确的数值排名

### 5. 整体定位
基准排名是有时效性的，2026年的发布节奏下每周都可能变化。前沿闭源模型在大多数基准上领先Hermes 4，Hermes 4的竞争优势最强的是在开源许可 tier、数学和推理领域，以及将最小化拒绝作为期望属性的指令遵循指标上。

## 访问与使用指南

### 1. 权重获取
Hermes 4权重在[Hugging Face的NousResearch组织](https://huggingface.co/NousResearch)下分发，包含70B、405B参数版本，以及405B的FP8量化版本用于单服务器推理。使用遵循Llama 3社区许可，月活用户低于7亿的商业部署无需单独与Meta签订协议。

### 2. 托管推理渠道
- **Nous Portal**：提供Nous Research官方定价的直接API访问
- **OpenRouter**：将Hermes 4路由到多个推理提供商，405B版本定价约为输入0.3美元/百万token，输出1.2美元/百万token
- **Together AI、Fireworks AI**等社区推理提供商也以不同价格提供Hermes 4端点

### 3. 自托管部署
- Hermes 4 405B FP8版本可在单台8 GPU H100或H200服务器上通过vLLM或TGI推理框架运行
- Hermes 4 70B可在较小的多GPU配置上流畅运行
- 发布页面包含推理模式和快速模式对应的推荐推理配置和提示格式

## 竞品对比（截至2026年4月，开源许可推理模型tier的直接竞品）

| 竞品 | 开发方 | 对比情况 |
|------|--------|----------|
| Llama 4 | Meta AI | 最接近的基座模型 peer，Llama 4 Maverick是Meta主打的开源许可推理模型，采用1090亿参数MoE配置。Llama 4在Artificial Analysis智能指数综合得分上领先Hermes 4，但Hermes 4在RefusalBench和直接指令遵循指标（需要最小化拒绝的场景）上更优 |
| DeepSeek V4 | DeepSeek | 当前开源权重前沿在智能指数综合得分上的领导者，DeepSeek V4 Pro总参数1.6万亿，激活参数490亿，在指数中排名第8。Hermes 4 405B综合得分落后，但在Nous Research后训练语料强调验证轨迹数据的部分特定推理基准上，表现匹配或超过DeepSeek V4 |
| Qwen 3 | 阿里巴巴 | 阿里巴巴2350亿参数级的开源旗舰模型，在多语言（尤其是亚洲语言）能力上更强，Hermes 4继承Llama 3.1的英语偏向训练分布，在该领域表现较弱。英语推理基准上，Hermes 4 405B和Qwen 3大致相当 |
| gpt-oss | OpenAI | OpenAI发布的1200亿参数级开源许可推理模型，面向比Hermes 4 405B更小的部署 footprint，定位为成本敏感的开源部署场景。Hermes 4 405B基准综合得分更高，但推理 footprint 更大 |

Hermes 4在该竞争集合中的独特定位是：低拒绝、指令忠实的态度，适合想要前沿能力开源许可模型、但不想使用主流闭源前沿API重型护栏的组织。Nous Research作为开源优先组织的品牌，是其与同Llama衍生版本发布在商业上的核心差异点。

## 未来展望（未来6-18个月的核心观察点）

1. **Hermes 5的时间线和基座模型**：下一代Hermes是继续基于Llama 3.1衍生版本、切换到Llama 4基座权重，还是完全采用其他开源权重基座。Llama 4自2026年初就已开源，基于Llama 4基座的Hermes 5发布可能缩小与DeepSeek V4等中国开源权重 peer 的智能指数综合得分差距

2. **原生预训练vs持续微调**：Nous Research 2025年4月的5000万美元A轮融资用于硬件建设，理论上可以支持原生模型预训练，而非微调第三方基座。下一代Hermes是继续采用微调方案，还是转向原生预训练，是观察公司研究方向的重要信号

3. **DisTrO去中心化训练网络**：Nous Research基于Solana的DisTrO网络是跨异构算力去中心化训练的架构押注。DisTrO是否能够产出大量在去中心化网络上训练而非集中式硬件上训练的Hermes系列模型，是开源AI生态中最受关注的研究问题之一

4. **Forge智能体平台集成**：Nous Research在模型发布的同时推出智能体AI开发平台Forge。Forge是否将Hermes 4推理模式作为默认后端，以及智能体能力是否会成为Hermes 5的设计目标，尚未确定

5. **开源生态的拒绝率走向**：Hermes 4定位在开源权重谱中高指令保真度的一端。同侪开源权重实验室（Meta、DeepSeek、阿里巴巴、Mistral）是向类似拒绝姿态靠拢、维持现状，还是走向相反方向，将决定Hermes 4目前在RefusalBench上保持的竞争优势是否持续。

## 参考来源

1. [Hugging Face: NousResearch/Hermes-4-405B](https://huggingface.co/NousResearch/Hermes-4-405B)：4050亿参数版本官方权重、模型卡和配置文件
2. [Hugging Face: NousResearch/Hermes-4-70B](https://huggingface.co/NousResearch/Hermes-4-70B)：700亿参数版本官方权重
3. [Hermes 4官方发布页](https://hermes4.nousresearch.com/)：官方模式说明和基准摘要
4. [Hermes 4技术报告（arXiv 2508.18255）](https://arxiv.org/abs/2508.18255)：Teknium等人撰写，记录后训练方法、评估和RefusalBench构建的技术论文
5. [VentureBeat：Nous Research发布Hermes 4 AI模型](https://venturebeat.com/ai/nous-research-drops-hermes-4-ai-models-that-outperform-chatgpt-without-content-restrictions)：2025年8月发布报道，包含基准数据和拒绝率背景
6. [OpenRouter: Hermes 4 405B](https://openrouter.ai/nousresearch/hermes-4-405b)：托管推理定价和提供商可用性
7. [Artificial Analysis: Hermes 4 405B](https://artificialanalysis.ai/models/hermes-4-llama-3-1-405b)：独立基准套件和智能指数评分
8. [Nous Portal: 模型页](https://portal.nousresearch.com/models)：第一方托管推理和API文档

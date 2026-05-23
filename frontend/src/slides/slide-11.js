window.slideDataMap.set(11, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex flex-col">

        <!-- Title -->
        <h2 class="text-[34px] font-bold text-white mb-2" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
            Mixture of Agents —— 5 次调用超越任何单一模型
        </h2>
        <p class="text-base text-cyan-400 mb-5" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">4 参考模型 + 1 聚合模型 = 消除单一模型偏见</p>

        <!-- Main content: center image + four corners -->
        <div class="relative flex-1">

            <!-- Center architecture diagram -->
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden border border-cyan-500/20 shadow-lg shadow-cyan-500/10 bg-slate-800/40 p-2">
                <img src="/assets/images/page-11.png" alt="MoA Architecture" width="460" height="340" class="block object-contain" />
            </div>

            <!-- Top-left: Architecture Flow -->
            <div class="absolute left-0 top-0 w-[380px]">
                <div class="flex items-center gap-2.5 mb-2.5">
                    <span class="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/20 text-blue-300 text-xs flex items-center justify-center font-bold">1</span>
                    <h3 class="text-lg font-semibold text-white">并行推理架构</h3>
                </div>
                <div class="space-y-1.5 text-sm text-gray-300 leading-relaxed">
                    <p><span class="text-cyan-400 font-medium">User Question</span> → 并行发送至 4 个参考模型</p>
                    <p class="pl-3 text-xs text-gray-400">Claude Opus (temp=0.6) / Gemini Pro (0.6)</p>
                    <p class="pl-3 text-xs text-gray-400">GPT-5.4 (0.6) / DeepSeek V3.2 (0.6)</p>
                    <p><span class="text-purple-400 font-medium">→ Claude Opus Aggregator</span> (temp=0.4)</p>
                    <p class="text-emerald-400 font-medium">→ Final Answer</p>
                </div>
            </div>

            <!-- Top-right: Default Config -->
            <div class="absolute right-0 top-0 w-[380px]">
                <div class="flex items-center gap-2.5 mb-2.5">
                    <span class="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 text-xs flex items-center justify-center font-bold">2</span>
                    <h3 class="text-lg font-semibold text-white">默认配置参数</h3>
                </div>
                <div class="bg-slate-800/70 border border-slate-700/60 rounded-lg p-3 space-y-1.5 text-sm">
                    <div class="flex justify-between"><span class="text-gray-400">参考模型</span><span class="text-white font-mono text-xs">Claude / Gemini / GPT / DeepSeek</span></div>
                    <div class="flex justify-between"><span class="text-gray-400">聚合模型</span><span class="text-cyan-300 font-mono text-xs">Claude Opus</span></div>
                    <div class="flex justify-between"><span class="text-gray-400">参考温度</span><span class="text-white font-mono text-xs">0.6</span></div>
                    <div class="flex justify-between"><span class="text-gray-400">聚合温度</span><span class="text-white font-mono text-xs">0.4</span></div>
                    <div class="flex justify-between"><span class="text-gray-400">最小成功数</span><span class="text-blue-300 font-mono text-xs">1</span></div>
                    <div class="flex justify-between"><span class="text-gray-400">最大重试</span><span class="text-white font-mono text-xs">6</span></div>
                    <div class="flex justify-between border-t border-slate-600 pt-1.5 mt-1"><span class="text-gray-400">总 API 调用</span><span class="text-purple-300 font-mono text-xs font-bold">5 次</span></div>
                </div>
            </div>

            <!-- Bottom-left: vs Delegate Task -->
            <div class="absolute left-0 bottom-0 w-[380px]">
                <div class="flex items-center gap-2.5 mb-2.5">
                    <span class="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/20 text-purple-300 text-xs flex items-center justify-center font-bold">3</span>
                    <h3 class="text-lg font-semibold text-white">vs Delegate Task</h3>
                </div>
                <div class="space-y-1.5 text-sm text-gray-300">
                    <div class="flex items-start gap-2">
                        <span class="text-cyan-400 shrink-0 mt-0.5">→</span>
                        <div>
                            <p class="text-white font-medium text-xs">MoA: 同一问题多角度分析</p>
                            <p class="text-gray-500 text-xs">Delegate: 并行分配不同子任务</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-2">
                        <span class="text-cyan-400 shrink-0 mt-0.5">→</span>
                        <div>
                            <p class="text-white font-medium text-xs">MoA: 各模型独立上下文</p>
                            <p class="text-gray-500 text-xs">Delegate: 仅共享引用摘要</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-2">
                        <span class="text-cyan-400 shrink-0 mt-0.5">→</span>
                        <div>
                            <p class="text-white font-medium text-xs">MoA: 聚合为单一答案</p>
                            <p class="text-gray-500 text-xs">Delegate: 多个独立输出结果</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom-right: Cost & Use Cases -->
            <div class="absolute right-0 bottom-0 w-[380px]">
                <div class="flex items-center gap-2.5 mb-2.5">
                    <span class="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500/20 text-amber-300 text-xs flex items-center justify-center font-bold">4</span>
                    <h3 class="text-lg font-semibold text-white">成本与适用场景</h3>
                </div>
                <div class="bg-red-500/10 border border-red-500/25 rounded-lg p-3 mb-2">
                    <p class="text-sm text-red-300 font-medium">5x API 成本 / 次调用</p>
                    <p class="text-xs text-gray-400 mt-1">仅适用于高价值决策场景</p>
                </div>
                <div class="flex flex-wrap gap-2">
                    <span class="px-2.5 py-1 bg-blue-500/15 border border-blue-500/25 rounded text-xs text-blue-300">数学证明</span>
                    <span class="px-2.5 py-1 bg-cyan-500/15 border border-cyan-500/25 rounded text-xs text-cyan-300">架构评审</span>
                    <span class="px-2.5 py-1 bg-purple-500/15 border border-purple-500/25 rounded text-xs text-purple-300">偏见消除</span>
                    <span class="px-2.5 py-1 bg-emerald-500/15 border border-emerald-500/25 rounded text-xs text-emerald-300">关键决策</span>
                </div>
            </div>

        </div>
    </div>
</div>
`);

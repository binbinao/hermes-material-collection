window.slideDataMap.set(6, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.05) 2px, rgba(59, 130, 246, 0.05) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(59, 130, 246, 0.05) 2px, rgba(59, 130, 246, 0.05) 4px);"></div>
    <div class="w-full h-full flex items-center justify-center relative">
        <div class="w-[1350px] h-[720px] mx-auto my-[20px] p-14 relative z-10">
            <div class="bg-slate-800/80 backdrop-blur p-8 rounded-lg shadow-md hover:shadow-lg shadow-lg shadow-blue-500/20 mb-5">
                <h2 class="text-[28px] font-bold text-blue-400 mb-3 flex items-center gap-3" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
                    <div class="w-10 h-10 bg-blue-500 flex items-center justify-center text-white font-mono text-[18px]">&lt;/&gt;</div>
                    九大协作模式 + 实时看板 UI
                </h2>
                <p class="text-gray-200 text-[16px] leading-relaxed" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">
                    从 Solo Dev 到 Fleet Farming — 覆盖所有多人 / 多 Agent 协作场景，支持结构化任务交接与实时看板管理。
                </p>
            </div>
            <div class="grid grid-cols-3 gap-5">
                <div class="col-span-2 grid grid-cols-3 gap-3">
                    <div class="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur shadow-md hover:shadow-lg p-5 rounded hover:border-blue-400 transition-colors">
                        <div class="flex items-center gap-2 mb-2"><div class="w-7 h-7 bg-blue-500 text-white flex items-center justify-center font-mono text-[13px]">P1</div><h4 class="text-[17px] font-bold text-blue-300" style="font-family: 'Montserrat','Noto Sans SC';">Fan-out</h4></div>
                        <p class="text-gray-300 text-[14px]" style="font-family: 'Inter','Noto Sans SC';">N siblings 并行分发</p>
                    </div>
                    <div class="bg-gradient-to-br from-cyan-600/30 to-teal-600/30 backdrop-blur shadow-md hover:shadow-lg p-5 rounded hover:border-cyan-400 transition-colors">
                        <div class="flex items-center gap-2 mb-2"><div class="w-7 h-7 bg-cyan-500 text-white flex items-center justify-center font-mono text-[13px]">P2</div><h4 class="text-[17px] font-bold text-cyan-300" style="font-family: 'Montserrat','Noto Sans SC';">Pipeline</h4></div>
                        <p class="text-gray-300 text-[14px]" style="font-family: 'Inter','Noto Sans SC';">角色链式编排</p>
                    </div>
                    <div class="bg-gradient-to-br from-teal-600/30 to-green-600/30 backdrop-blur shadow-md hover:shadow-lg p-5 rounded hover:border-teal-400 transition-colors">
                        <div class="flex items-center gap-2 mb-2"><div class="w-7 h-7 bg-teal-500 text-white flex items-center justify-center font-mono text-[13px]">P3</div><h4 class="text-[17px] font-bold text-teal-300" style="font-family: 'Montserrat','Noto Sans SC';">Voting</h4></div>
                        <p class="text-gray-300 text-[14px]" style="font-family: 'Inter','Noto Sans SC';">N+1 聚合投票</p>
                    </div>
                    <div class="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur shadow-md hover:shadow-lg p-5 rounded hover:border-green-400 transition-colors">
                        <div class="flex items-center gap-2 mb-2"><div class="w-7 h-7 bg-green-500 text-white flex items-center justify-center font-mono text-[13px]">P4</div><h4 class="text-[17px] font-bold text-green-300" style="font-family: 'Montserrat','Noto Sans SC';">Journal</h4></div>
                        <p class="text-gray-300 text-[14px]" style="font-family: 'Inter','Noto Sans SC';">共享目录+Cron 长运行</p>
                    </div>
                    <div class="bg-gradient-to-br from-purple-600/30 to-violet-600/30 backdrop-blur shadow-md hover:shadow-lg p-5 rounded hover:border-purple-400 transition-colors">
                        <div class="flex items-center gap-2 mb-2"><div class="w-7 h-7 bg-purple-500 text-white flex items-center justify-center font-mono text-[13px]">P5</div><h4 class="text-[17px] font-bold text-purple-300" style="font-family: 'Montserrat','Noto Sans SC';">Human-in-loop</h4></div>
                        <p class="text-gray-300 text-[14px]" style="font-family: 'Inter','Noto Sans SC';">阻塞→人工审批→解锁</p>
                    </div>
                    <div class="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur shadow-md hover:shadow-lg p-5 rounded hover:border-blue-400 transition-colors">
                        <div class="flex items-center gap-2 mb-2"><div class="w-7 h-7 bg-indigo-500 text-white flex items-center justify-center font-mono text-[13px]">P6</div><h4 class="text-[17px] font-bold text-indigo-300" style="font-family: 'Montserrat','Noto Sans SC';">@Mention</h4></div>
                        <p class="text-gray-300 text-[14px]" style="font-family: 'Inter','Noto Sans SC';">内联消息路由</p>
                    </div>
                    <div class="bg-gradient-to-br from-cyan-600/30 to-sky-600/30 backdrop-blur shadow-md hover:shadow-lg p-5 rounded hover:border-cyan-400 transition-colors">
                        <div class="flex items-center gap-2 mb-2"><div class="w-7 h-7 bg-sky-500 text-white flex items-center justify-center font-mono text-[13px]">P7</div><h4 class="text-[17px] font-bold text-sky-300" style="font-family: 'Montserrat','Noto Sans SC';">Thread-scoped</h4></div>
                        <p class="text-gray-300 text-[14px]" style="font-family: 'Inter','Noto Sans SC';">按项目隔离工作区</p>
                    </div>
                    <div class="bg-gradient-to-br from-orange-600/30 to-amber-600/30 backdrop-blur shadow-md hover:shadow-lg p-5 rounded hover:border-orange-400 transition-colors">
                        <div class="flex items-center gap-2 mb-2"><div class="w-7 h-7 bg-orange-500 text-white flex items-center justify-center font-mono text-[13px]">P8</div><h4 class="text-[17px] font-bold text-orange-300" style="font-family: 'Montserrat','Noto Sans SC';">Fleet Farming</h4></div>
                        <p class="text-gray-300 text-[14px]" style="font-family: 'Inter','Noto Sans SC';">1 Profile 管理 N 主体</p>
                    </div>
                    <div class="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur shadow-md hover:shadow-lg p-5 rounded hover:border-rose-400 transition-colors">
                        <div class="flex items-center gap-2 mb-2"><div class="w-7 h-7 bg-rose-500 text-white flex items-center justify-center font-mono text-[13px]">P9</div><h4 class="text-[17px] font-bold text-rose-300" style="font-family: 'Montserrat','Noto Sans SC';">Triage</h4></div>
                        <p class="text-gray-300 text-[14px]" style="font-family: 'Inter','Noto Sans SC';">一句话 → LLM 完整规格</p>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="bg-black border-2 border-blue-500 p-5 rounded relative overflow-hidden">
                        <div class="absolute top-0 right-0 text-[36px] text-blue-500/10 font-mono">{}</div>
                        <div class="relative z-10">
                            <p class="text-cyan-400 text-[15px] font-bold mb-2" style="font-family:'Montserrat','Noto Sans SC';">Dashboard UI 核心能力</p>
                            <p class="text-gray-400 text-[13px] leading-relaxed font-mono">6 列拖拽看板 / WebSocket 实时<br/>Profile Lane 分组 / Side Drawer<br/>Triage 列：Decompose + Specify</p>
                        </div>
                    </div>
                    <div class="bg-blue-950/50 backdrop-blur p-4 rounded border border-blue-600/30">
                        <p class="text-blue-300 text-[13px] leading-relaxed font-mono"><span class="font-bold text-cyan-400">// Handoff:</span> kanban_complete()</p>
                        <p class="text-blue-400/80 text-[12px] font-mono mt-1">summary · files · tests<br/>deps · notes · risks</p>
                    </div>
                    <div class="bg-slate-800/60 backdrop-blur p-4 rounded border border-purple-600/20">
                        <p class="text-purple-300 text-[13px] leading-relaxed font-mono"><span class="font-bold text-purple-400">// Isolation:</span> 多看板独立</p>
                        <p class="text-purple-400/70 text-[12px] font-mono mt-1">DB / workspace / logs 各自隔离</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`);

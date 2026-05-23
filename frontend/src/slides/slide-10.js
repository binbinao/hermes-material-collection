window.slideDataMap.set(10, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex flex-col">

        <!-- Title -->
        <h2 class="text-[36px] font-bold text-white mb-5" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
            Profile —— 一台机器跑 20+ 个独立 Agent
        </h2>
        <p class="text-base text-cyan-400 mb-6" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">v0.6.0 引入的七维隔离模型</p>

        <!-- Main content area -->
        <div class="flex gap-8 flex-1">

            <!-- Left side: Image -->
            <div class="flex-shrink-0 flex items-center justify-center">
                <div class="rounded-xl overflow-hidden border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                    <img src="/assets/images/page-10.png" alt="Profile Isolation" width="400" height="400" class="block object-contain" />
                </div>
            </div>

            <!-- Right side: Content blocks -->
            <div class="flex-1 flex flex-col gap-4 min-w-0">

                <!-- 7-Dimension Isolation Model -->
                <div class="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                    <h3 class="text-lg font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                        <span class="w-6 h-6 rounded bg-blue-500/20 text-blue-300 text-xs flex items-center justify-center font-bold">7</span>
                        七维隔离模型 (7-Dimension Isolation)
                    </h3>
                    <div class="grid grid-cols-2 gap-x-5 gap-y-2">
                        <div class="flex items-start gap-2"><span class="text-cyan-400 mt-0.5">①</span><span class="text-gray-300 text-sm"><b class="text-white">Config:</b> 独立 yaml 配置</span></div>
                        <div class="flex items-start gap-2"><span class="text-cyan-400 mt-0.5">②</span><span class="text-gray-300 text-sm"><b class="text-white">Memory:</b> MEMORY.md / USER.md</span></div>
                        <div class="flex items-start gap-2"><span class="text-cyan-400 mt-0.5">③</span><span class="text-gray-300 text-sm"><b class="text-white">History:</b> sessions/ 会话隔离</span></div>
                        <div class="flex items-start gap-2"><span class="text-cyan-400 mt-0.5">④</span><span class="text-gray-300 text-sm"><b class="text-white">Skills:</b> skills/ 技能集独立</span></div>
                        <div class="flex items-start gap-2"><span class="text-cyan-400 mt-0.5">⑤</span><span class="text-gray-300 text-sm"><b class="text-white">Tools:</b> per-profile 工具集</span></div>
                        <div class="flex items-start gap-2"><span class="text-cyan-400 mt-0.5">⑥</span><span class="text-gray-300 text-sm"><b class="text-white">Gateway:</b> 独立 PID / port</span></div>
                        <div class="flex items-start gap-2 col-span-2"><span class="text-cyan-400 mt-0.5">⑦</span><span class="text-gray-300 text-sm"><b class="text-white">Credentials:</b> Token-lock 凭证隔离</span></div>
                    </div>
                </div>

                <!-- Memory Efficiency -->
                <div class="bg-blue-500/10 border border-blue-500/25 rounded-xl p-4">
                    <div class="flex items-center gap-6">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-cyan-400">&lt;500MB</div>
                            <div class="text-xs text-gray-400 mt-1">每实例内存占用</div>
                        </div>
                        <div class="w-px h-10 bg-slate-600"></div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-blue-400">20+</div>
                            <div class="text-xs text-gray-400 mt-1">16GB 机器运行 Profiles</div>
                        </div>
                    </div>
                </div>

                <!-- Typical Scenarios -->
                <div class="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                    <h3 class="text-base font-semibold text-purple-400 mb-2">4 种典型场景</h3>
                    <div class="grid grid-cols-2 gap-2 text-sm text-gray-300">
                        <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>工作 vs 个人隔离</div>
                        <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>角色专属 (后端/审查/运维)</div>
                        <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-purple-400"></div>看板工人 (研究员/编写/QA)</div>
                        <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>多租户 (按客户端隔离)</div>
                    </div>
                </div>

                <!-- CLI Commands -->
                <div class="mt-auto flex items-center gap-3 flex-wrap">
                    <span class="text-xs text-gray-500 uppercase tracking-wider">CLI:</span>
                    <code class="px-2.5 py-1 bg-slate-700/80 border border-slate-600 rounded text-xs text-cyan-300 font-mono">create</code>
                    <code class="px-2.5 py-1 bg-slate-700/80 border border-slate-600 rounded text-xs text-cyan-300 font-mono">clone</code>
                    <code class="px-2.5 py-1 bg-slate-700/80 border border-slate-600 rounded text-xs text-cyan-300 font-mono">export (.tar.gz)</code>
                    <code class="px-2.5 py-1 bg-slate-700/80 border border-slate-600 rounded text-xs text-cyan-300 font-mono">import</code>
                    <code class="px-2.5 py-1 bg-slate-700/80 border border-slate-600 rounded text-xs text-cyan-300 font-mono">list</code>
                    <code class="px-2.5 py-1 bg-slate-700/80 border border-slate-600 rounded text-xs text-cyan-300 font-mono">switch</code>
                </div>

            </div>
        </div>

    </div>
</div>
`);

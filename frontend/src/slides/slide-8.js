window.slideDataMap.set(8, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex flex-col">

        <!-- 标题区 -->
        <div class="mb-6">
            <h2 class="text-[34px] font-bold text-white mb-2" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">官方 Dashboard vs 社区 WebUI</h2>
            <p class="text-cyan-400/80 text-[15px]" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">13 个功能模块全景对比 — hermes dashboard (:9119) vs hermes-webui (:8648)</p>
        </div>

        <!-- 网格布局 -->
        <div class="grid grid-cols-2 gap-8 flex-1">

            <!-- 左上: 图文区域 - Dashboard 截图 -->
            <div class="flex flex-col">
                <div class="w-full rounded-lg overflow-hidden mb-3 border border-blue-500/20" style="height: 260px;">
                    <img src="/assets/images/page-8.png" alt="Dashboard 对比截图" style="width:480px;height:320px;object-fit:cover;" />
                </div>
                <h3 class="text-[20px] font-semibold text-cyan-300 mb-2" style="font-family: 'Montserrat','Noto Sans SC';">社区 WebUI — 13 大功能模块</h3>
                <p class="text-gray-400 text-[14px] leading-relaxed" style="font-family:'Inter','Noto Sans SC';">nesquena/hermes-webui 基于 Vue3+TS+Vite+NaiveUI+Pinia 构建，覆盖 AI Chat / 配置管理 / 用量分析 / Cron 调度 / 模型管理等全场景。</p>
            </div>

            <!-- 右上: 官方 vs 社区对比 -->
            <div class="flex flex-col">
                <h3 class="text-[20px] font-semibold text-white mb-3" style="font-family:'Montserrat','Noto Sans SC';">双轨制界面体系</h3>
                <p class="text-gray-400 text-[14px] leading-relaxed mb-4" style="font-family:'Inter','Noto Sans SC';">官方 Dashboard 聚焦核心协作流程，社区 WebUI 追求全功能覆盖。两者互补，满足从轻量管理到深度控制的不同需求。</p>
                <div class="grid grid-cols-2 gap-3 mt-auto">
                    <div class="text-center py-4 bg-blue-500/10 border border-blue-500/25 rounded-lg">
                        <div class="text-[26px] font-bold text-blue-300" style="font-family:'Montserrat';">4</div>
                        <div class="text-[13px] text-gray-400 mt-1">官方模块数</div>
                    </div>
                    <div class="text-center py-4 bg-purple-500/10 border border-purple-500/25 rounded-lg">
                        <div class="text-[26px] font-bold text-purple-300" style="font-family:'Montserrat';">13</div>
                        <div class="text-[13px] text-gray-400 mt-1">社区模块数</div>
                    </div>
                </div>
            </div>

            <!-- 左下: 官方模块列表 -->
            <div class="flex flex-col">
                <h3 class="text-[20px] font-semibold text-blue-300 mb-3" style="font-family:'Montserrat','Noto Sans SC';">Official Dashboard :9119</h3>
                <p class="text-gray-400 text-[14px] leading-relaxed mb-3" style="font-family:'Inter','Noto Sans SC';">轻量级管理，聚焦 Agent 协作核心链路。</p>
                <div class="flex gap-2 flex-wrap mt-auto">
                    <span class="px-3 py-1.5 text-blue-300 text-[13px] bg-blue-500/10 border border-blue-500/20 rounded-lg">Kanban Board</span>
                    <span class="px-3 py-1.5 text-blue-300 text-[13px] bg-blue-500/10 border border-blue-500/20 rounded-lg">Session Mgmt</span>
                    <span class="px-3 py-1.5 text-blue-300 text-[13px] bg-blue-500/10 border border-blue-500/20 rounded-lg">Settings</span>
                    <span class="px-3 py-1.5 text-blue-300 text-[13px] bg-blue-500/10 border border-blue-500/20 rounded-lg">Profile Mgmt</span>
                </div>
            </div>

            <!-- 右下: 社区模块列表 + 选型建议 -->
            <div class="flex flex-col">
                <h3 class="text-[20px] font-semibold text-purple-300 mb-2" style="font-family:'Montserrat','Noto Sans SC';">Community WebUI 模块清单</h3>
                <div class="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-3 text-[12px]" style="font-family:'Inter','Noto Sans SC';">
                    <span class="text-gray-300"><span class="text-purple-400 mr-1">1.</span>AI Chat (SSE)</span>
                    <span class="text-gray-300"><span class="text-purple-400 mr-1">2.</span>多平台配置</span>
                    <span class="text-gray-300"><span class="text-purple-400 mr-1">3.</span>用量分析</span>
                    <span class="text-gray-300"><span class="text-purple-400 mr-1">4.</span>Cron 定时任务</span>
                    <span class="text-gray-300"><span class="text-purple-400 mr-1">5.</span>模型管理器</span>
                    <span class="text-gray-300"><span class="text-purple-400 mr-1">6.</span>多 Profile & Gateway</span>
                    <span class="text-gray-300"><span class="text-purple-400 mr-1">7.</span>文件浏览器</span>
                    <span class="text-gray-300"><span class="text-purple-400 mr-1">8.</span>群组聊天</span>
                    <span class="text-gray-300"><span class="text-purple-400 mr-1">9.</span>Skill & Memory</span>
                    <span class="text-gray-300"><span class="text-purple-400 mr-1">10.</span>日志查看器</span>
                    <span class="text-gray-300"><span class="text-purple-400 mr-1">11.</span>Web 终端 xterm.js</span>
                    <span class="text-gray-300"><span class="text-purple-400 mr-1">12.</span>认证系统</span>
                </div>
                <div class="mt-auto p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg">
                    <p class="text-cyan-300 text-[13px] font-medium"><span class="opacity-60">// 选型建议:</span></p>
                    <p class="text-gray-300 text-[12px] mt-1">轻量管理 → Official | 全功能控制 → Community WebUI</p>
                </div>
            </div>

        </div>
    </div>
</div>
`);

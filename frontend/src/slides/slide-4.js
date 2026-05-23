window.slideDataMap.set(4, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex flex-col">

    <!-- 标题区 -->
    <div class="mb-5">
      <h2 class="text-[36px] font-bold text-white mb-2 tracking-wide" style="font-family:'Montserrat','Noto Sans SC',sans-serif;">
        Kanban：从 RPC 调用到操作系统的跨越
      </h2>
      <p class="text-cyan-400/80 text-[15px]" style="font-family:'Inter','Noto Sans SC',sans-serif;">delegate_task vs Kanban —— 本质差异决定生产力上限</p>
      <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-3 rounded"></div>
    </div>

    <!-- 主内容区: 左图右文 -->
    <div class="flex gap-8 flex-1">

      <!-- 左侧图片 -->
      <div class="w-[420px] h-[380px] rounded-lg overflow-hidden flex-shrink-0 border border-blue-500/20 shadow-xl shadow-blue-900/20">
        <img src="/assets/images/page-4.png" alt="Kanban架构" style="width:420px;height:380px;object-fit:cover;" />
      </div>

      <!-- 右侧内容 -->
      <div class="flex-1 flex flex-col gap-4 py-1">
        <!-- 核心论点 -->
        <div class="bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-lg p-4 border-l-3 border-blue-500">
          <p class="text-gray-200 text-[14px] leading-relaxed" style="font-family:'Inter','Noto Sans SC',sans-serif;">
            <span class="text-cyan-400 font-semibold">核心洞察：</span>Kanban 是 Hermes 最被低估的能力 —— 将多代理协作从概念变为<span class="text-blue-300">可审计、可恢复、人机协同</span>的生产工具
          </p>
        </div>

        <!-- 对比表 -->
        <div class="flex-1 overflow-auto">
          <table class="w-full text-sm" style="font-family:'Inter','Noto Sans SC',sans-serif;">
            <thead>
              <tr>
                <th class="text-left py-2 px-3 text-cyan-400 font-semibold w-[100px]">维度</th>
                <th class="text-left py-2 px-3 text-red-400/90 font-semibold w-[160px]">delegate_task</th>
                <th class="text-left py-2 px-3 text-emerald-400/90 font-semibold">Kanban</th>
              </tr>
            </thead>
            <tbody class="text-gray-300">
              <tr class="border-b border-white/5"><td class="py-1.5 px-3 text-gray-400">形态</td><td class="py-1.5 px-3">RPC 调用</td><td class="py-1.5 px-3 text-emerald-300">消息队列</td></tr>
              <tr class="border-b border-white/5"><td class="py-1.5 px-3 text-gray-400">父行为</td><td class="py-1.5 px-3">阻塞等待</td><td class="py-1.5 px-3 text-emerald-300">即发即忘 (fire-and-forget)</td></tr>
              <tr class="border-b border-white/5"><td class="py-1.5 px-3 text-gray-400">子身份</td><td class="py-1.5 px-3">匿名执行</td><td class="py-1.5 px-3 text-emerald-300">具名 Profile</td></tr>
              <tr class="border-b border-white/5"><td class="py-1.5 px-3 text-gray-400">可恢复性</td><td class="py-1.5 px-3">失败即丢失</td><td class="py-1.5 px-3 text-emerald-300">Block → Unblock 机制</td></tr>
              <tr class="border-b border-white/5"><td class="py-1.5 px-3 text-gray-400">人机协作</td><td class="py-1.5 px-3 text-red-300/70">不支持</td><td class="py-1.5 px-3 text-emerald-300">Comment / Unblock</td></tr>
              <tr class="border-b border-white/5"><td class="py-1.5 px-3 text-gray-400">参与者</td><td class="py-1.5 px-3">单 Agent</td><td class="py-1.5 px-3 text-emerald-300">多 Agent 并行</td></tr>
              <tr><td class="py-1.5 px-3 text-gray-400">审计追踪</td><td class="py-1.5 px-3 text-red-300/70">调用结束即消失</td><td class="py-1.5 px-3 text-emerald-300">SQLite 永久持久化</td></tr>
            </tbody>
          </table>
        </div>

        <!-- 架构信息 -->
        <div class="flex items-center gap-3 text-xs text-gray-400 mt-1" style="font-family:'Inter','Noto Sans SC',sans-serif;">
          <span class="px-2 py-1 bg-blue-500/10 rounded text-blue-300">Dashboard/CLI/Worker</span>
          <span>→</span>
          <span class="px-2 py-1 bg-purple-500/10 rounded text-purple-300">kanban_db (SQLite)</span>
          <span>→</span>
          <span class="px-2 py-1 bg-cyan-500/10 rounded text-cyan-300">Dispatcher (60s/tick)</span>
          <span>→</span>
          <span class="px-2 py-1 bg-orange-500/10 rounded text-orange-300">Worker Pool (P1-P4)</span>
        </div>
      </div>
    </div>

    <!-- 底部关键洞察 -->
    <div class="flex items-center gap-6 pt-4 mt-auto border-t border-white/8">
      <div class="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20 flex-1">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        <span class="text-white text-[16px] font-medium" style="font-family:'Inter','Noto Sans SC',sans-serif;">本质差异：<span class="text-cyan-400">delegate_task = 函数式思维</span> vs <span class="text-purple-400">Kanban = 消息队列思维</span></span>
      </div>
    </div>
  </div>
</div>
`);

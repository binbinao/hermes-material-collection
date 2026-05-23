window.slideDataMap.set(15, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex flex-col">

    <div class="mb-5">
      <h2 class="text-3xl font-bold text-white mb-1" style="font-family:'Montserrat','Noto Sans SC',sans-serif;">能力全景矩阵 & Agent 变革五大趋势</h2>
      <p class="text-sm text-cyan-300">当前成熟度总览 —— 以及 Hermes 正在引领的 Agent 未来方向</p>
    </div>

    <div class="flex gap-5 flex-1">
      <!-- Left: Maturity Matrix -->
      <div class="flex-1 bg-white/5 backdrop-blur rounded-xl p-4 border border-white/10">
        <h3 class="text-base font-bold text-blue-400 mb-3">高阶能力成熟度矩阵</h3>
        <img src="/assets/images/page-15.png" width="100%" height="280px" class="rounded-lg object-contain mb-3" alt="Capability Maturity Matrix"/>
        <div class="grid grid-cols-4 gap-2 text-xs">
          <div class="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded text-center">★★★★★ 已验证</div>
          <div class="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-center">★★★★☆ 稳定</div>
          <div class="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-center">★★★☆☆ 高成本</div>
          <div class="bg-red-500/20 text-red-300 px-2 py-1 rounded text-center">★★☆☆☆ 实验</div>
        </div>
      </div>

      <!-- Right: Five Trends -->
      <div class="w-[48%] flex flex-col gap-2">
        <h3 class="text-base font-bold text-purple-400 mb-1">Agent 变革五大趋势</h3>

        <div class="flex items-start gap-3 bg-white/5 rounded-lg p-3 border-l-2 border-blue-500">
          <div class="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5"><span class="text-xs font-bold text-blue-400">1</span></div>
          <div><div class="text-sm font-bold text-white mb-0.5">上下文革命：冷启动 → 连接即懂你</div><p class="text-xs text-gray-400 leading-relaxed">通过 OAuth/ Memory Tree 让 Agent 无需冗长 system prompt 即可获取用户全貌</p></div>
        </div>

        <div class="flex items-start gap-3 bg-white/5 rounded-lg p-3 border-l-2 border-cyan-500">
          <div class="w-7 h-7 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5"><span class="text-xs font-bold text-cyan-400">2</span></div>
          <div><div class="text-sm font-bold text-white mb-0.5">能力革命：静态技能 → 自进化</div><p class="text-xs text-gray-400 leading-relaxed">Background Review + Skill 创建 —— Agent 在工作中自动提炼和积累能力</p></div>
        </div>

        <div class="flex items-start gap-3 bg-white/5 rounded-lg p-3 border-l-2 border-purple-500">
          <div class="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5"><span class="text-xs font-bold text-purple-400">3</span></div>
          <div><div class="text-sm font-bold text-white mb-0.5">形态革命：终端 CLI → 桌面 OS</div><p class="text-xs text-gray-400 leading-relaxed">从命令行聊天框进化到有窗口、看板、图表的桌面操作系统</p></div>
        </div>

        <div class="flex items-start gap-3 bg-white/5 rounded-lg p-3 border-l-2 border-pink-500">
          <div class="w-7 h-7 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 mt-0.5"><span class="text-xs font-bold text-pink-400">4</span></div>
          <div><div class="text-sm font-bold text-white mb-0.5">模型革命：单模型锁定 → 智能 MoA 路由</div><p class="text-xs text-gray-400 leading-relaxed">按任务类型自动选择最优模型组合，突破单一模型能力上限</p></div>
        </div>

        <div class="flex items-start gap-3 bg-white/5 rounded-lg p-3 border-l-2 border-emerald-500">
          <div class="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5"><span class="text-xs font-bold text-emerald-400">5</span></div>
          <div><div class="text-sm font-bold text-white mb-0.5">交互革命：聊天框 → 在场伙伴</div><p class="text-xs text-gray-400 leading-relaxed">从纯文字交互进化到有形象(Mascot)、有声音(TTS)、存在感的 AI 伴侣</p></div>
        </div>
      </div>
    </div>

  </div>
</div>
`);

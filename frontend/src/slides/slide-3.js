window.slideDataMap.set(3, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative">
    <!-- 网格背景 -->
    <div class="absolute inset-0 opacity-15" style="background-image: linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px); background-size: 40px 40px;"></div>

    <!-- 扫描线效果 -->
    <div class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
    <div class="absolute top-1/2 left-0 right-0 h-20 bg-gradient-to-b from-blue-500/15 via-transparent to-cyan-500/15"></div>

    <!-- 角落装饰 -->
    <div class="absolute top-6 left-6 w-24 h-24 border-t-2 border-l-2 border-blue-500/40"></div>
    <div class="absolute bottom-6 right-6 w-24 h-24 border-b-2 border-r-2 border-cyan-500/40"></div>

    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-center px-8">
        <div class="text-5xl font-bold text-cyan-400 mb-5 font-mono tracking-wider">
          <span class="inline-block border-2 border-cyan-500 px-7 py-3 rounded-sm">&lt; 01 /&gt;</span>
        </div>
        <h1 class="text-5xl font-bold text-white mb-4 tracking-wide" style="font-family:'Montserrat','Noto Sans SC',sans-serif;">Chapter 1 核心引擎</h1>
        <p class="text-xl text-cyan-300 mb-8 max-w-[800px] mx-auto leading-relaxed" style="font-family:'Inter','Noto Sans SC',sans-serif;">
          Kanban 多代理协作系统 —— AI Agent 的任务操作系统
        </p>

        <!-- 关键数据标签 -->
        <div class="flex items-center justify-center gap-4 flex-wrap mt-6">
          <span class="px-4 py-2 bg-blue-500/15 border border-blue-500/30 rounded-lg text-blue-300 text-sm font-medium">v0.12.0 引入</span>
          <span class="px-4 py-2 bg-cyan-500/15 border border-cyan-500/30 rounded-lg text-cyan-300 text-sm font-medium">9 个专用工具</span>
          <span class="px-4 py-2 bg-purple-500/15 border border-purple-500/30 rounded-lg text-purple-300 text-sm font-medium">六状态机</span>
          <span class="px-4 py-2 bg-emerald-500/15 border border-emerald-500/30 rounded-lg text-emerald-300 text-sm font-medium">九大协作模式</span>
          <span class="px-4 py-2 bg-orange-500/15 border border-orange-500/30 rounded-lg text-orange-300 text-sm font-medium">SQLite 持久化</span>
        </div>

        <div class="flex items-center justify-center gap-3 mt-8">
          <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
          <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
        </div>
      </div>
    </div>
  </div>
</div>
`);

window.slideDataMap.set(12, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-1/5 left-1/6 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-ping"></div>
    <div class="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60" style="animation: float12 3s ease-in-out infinite;"></div>
    <div class="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-40" style="animation: float12 4s ease-in-out infinite;"></div>
    <div class="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-50" style="animation: float12 3.5s ease-in-out infinite;"></div>
  </div>
  <style>
    @keyframes float12 { 0%,100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(-18px) translateX(15px); } }
  </style>

  <div class="w-full h-full relative z-10 p-8 flex flex-col">
    <!-- 标题 -->
    <div class="text-center mb-3">
      <h2 class="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400" style="font-family:'Montserrat','Noto Sans SC',sans-serif;">
        Observability —— 从黑盒到全链路透明
      </h2>
      <p class="text-gray-400 text-sm mt-1" style="font-family:'Inter','Noto Sans SC',sans-serif;">成本归因 / 性能拆解 / 稳定性监控 / 链路追踪</p>
    </div>

    <!-- 痛点栏 -->
    <div class="flex justify-center gap-3 mb-3">
      <span class="px-3 py-1 bg-red-500/15 border border-red-500/30 rounded-full text-red-300 text-xs">日志分散无统一格式</span>
      <span class="px-3 py-1 bg-orange-500/15 border border-orange-500/30 rounded-full text-orange-300 text-xs">state.db 查询门槛高</span>
      <span class="px-3 py-1 bg-yellow-500/15 border border-yellow-500/30 rounded-full text-yellow-300 text-xs">Token 成本无法归因</span>
      <span class="px-3 py-1 bg-red-500/15 border border-red-500/30 rounded-full text-red-300 text-xs">性能瓶颈未知</span>
    </div>

    <!-- 四维框架 + Span层级 主内容区 -->
    <div class="flex flex-1 gap-4 min-h-0">
      <!-- 左侧：四维框架 (2x2) -->
      <div class="w-[58%] grid grid-cols-2 gap-3">
        <!-- 维度1: 成本归因 -->
        <div class="bg-slate-900/70 backdrop-blur border border-blue-500/30 rounded-xl p-4 hover:border-blue-400/50 transition-colors">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-500/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="text-base font-bold text-blue-400" style="font-family:'Noto Sans SC',sans-serif;">成本归因 Cost Attribution</h3>
          </div>
          <p class="text-gray-300 text-xs leading-relaxed" style="font-family:'Noto Sans SC',sans-serif;">按模型/平台/宿主维度追踪 Token 消耗，精确到每次 API 调用的成本明细</p>
          <div class="mt-2 flex flex-wrap gap-1">
            <span class="px-1.5 py-0.5 bg-blue-500/15 text-blue-300 text-[10px] rounded">Model</span>
            <span class="px-1.5 py-0.5 bg-blue-500/15 text-blue-300 text-[10px] rounded">Provider</span>
            <span class="px-1.5 py-0.5 bg-blue-500/15 text-blue-300 text-[10px] rounded">Platform</span>
            <span class="px-1.5 py-0.5 bg-blue-500/15 text-blue-300 text-[10px] rounded">Host</span>
          </div>
        </div>

        <!-- 维度2: 性能拆解 -->
        <div class="bg-slate-900/70 backdrop-blur border border-cyan-500/30 rounded-xl p-4 hover:border-cyan-400/50 transition-colors">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/30 to-emerald-500/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="text-base font-bold text-cyan-400" style="font-family:'Noto Sans SC',sans-serif;">性能拆解 Performance</h3>
          </div>
          <p class="text-gray-300 text-xs leading-relaxed" style="font-family:'Noto Sans SC',sans-serif;">分阶段延迟分布 P50/P90/P99，定位每个环节耗时瓶颈</p>
          <div class="mt-2 flex items-center gap-3">
            <div class="flex items-center gap-1"><div class="w-2 h-2 rounded-sm bg-emerald-400"></div><span class="text-[10px] text-emerald-300">P50</span></div>
            <div class="flex items-center gap-1"><div class="w-2 h-2 rounded-sm bg-yellow-400"></div><span class="text-[10px] text-yellow-300">P90</span></div>
            <div class="flex items-center gap-1"><div class="w-2 h-2 rounded-sm bg-red-400"></div><span class="text-[10px] text-red-300">P99</span></div>
            <div class="ml-auto text-[10px] text-gray-500">Per Stage</div>
          </div>
        </div>

        <!-- 维度3: 稳定性监控 -->
        <div class="bg-slate-900/70 backdrop-blur border border-purple-500/30 rounded-xl p-4 hover:border-purple-400/50 transition-colors">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <h3 class="text-base font-bold text-purple-400" style="font-family:'Noto Sans SC',sans-serif;">稳定性监控 Stability</h3>
          </div>
          <p class="text-gray-300 text-xs leading-relaxed" style="font-family:'Noto Sans SC',sans-serif;">按工具/Provider 维度统计失败次数、失败率及趋势变化</p>
          <div class="mt-2 flex flex-wrap gap-1">
            <span class="px-1.5 py-0.5 bg-purple-500/15 text-purple-300 text-[10px] rounded">Fail Count</span>
            <span class="px-1.5 py-0.5 bg-purple-500/15 text-purple-300 text-[10px] rounded">Fail Rate</span>
            <span class="px-1.5 py-0.5 bg-purple-500/15 text-purple-300 text-[10px] rounded">Trend</span>
          </div>
        </div>

        <!-- 维度4: 链路追踪 -->
        <div class="bg-slate-900/70 backdrop-blur border border-emerald-500/30 rounded-xl p-4 hover:border-emerald-400/50 transition-colors">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/30 to-cyan-500/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
            </div>
            <h3 class="text-base font-bold text-emerald-400" style="font-family:'Noto Sans SC',sans-serif;">链路追踪 Chain Tracing</h3>
          </div>
          <p class="text-gray-300 text-xs leading-relaxed" style="font-family:'Noto Sans SC',sans-serif;">每轮对话完整 Trace，记录 Token 数/耗时/状态/错误信息</p>
          <div class="mt-2 flex flex-wrap gap-1">
            <span class="px-1.5 py-0.5 bg-emerald-500/15 text-emerald-300 text-[10px] rounded">Token</span>
            <span class="px-1.5 py-0.5 bg-emerald-500/15 text-emerald-300 text-[10px] rounded">Duration</span>
            <span class="px-1.5 py-0.5 bg-emerald-500/15 text-emerald-300 text-[10px] rounded">Status</span>
            <span class="px-1.5 py-0.5 bg-emerald-500/15 text-emerald-300 text-[10px] rounded">Error</span>
          </div>
        </div>
      </div>

      <!-- 右侧：Span 层级结构 -->
      <div class="w-[42%] flex flex-col gap-3">
        <!-- Span 层级树 -->
        <div class="bg-slate-900/70 backdrop-blur border border-cyan-500/20 rounded-xl p-4 flex-1">
          <h3 class="text-sm font-bold text-cyan-300 mb-3 flex items-center gap-2" style="font-family:'Noto Sans SC',sans-serif;">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
            Span 层级层次
          </h3>
          <div class="space-y-2 ml-1">
            <!-- session 层 -->
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded bg-blue-500"></div>
              <span class="text-white text-xs font-mono">session.{platform}</span>
              <span class="text-gray-500 text-[10px] ml-auto">Root</span>
            </div>
            <!-- llm 层 -->
            <div class="flex items-center gap-2 pl-5">
              <div class="w-3 h-3 rounded bg-cyan-500"></div>
              <span class="text-gray-200 text-xs font-mono">llm.{model}</span>
              <span class="text-gray-500 text-[10px] ml-auto">Child</span>
            </div>
            <!-- api 层 -->
            <div class="flex items-center gap-2 pl-10">
              <div class="w-3 h-3 rounded bg-purple-500"></div>
              <span class="text-gray-300 text-xs font-mono">api.{model}</span>
              <span class="text-gray-500 text-[10px] ml-auto">Grand-child</span>
            </div>
            <!-- tool 层 -->
            <div class="flex items-center gap-2 pl-16">
              <div class="w-3 h-3 rounded bg-emerald-500"></div>
              <span class="text-gray-300 text-xs font-mono">tool.{name}</span>
              <span class="text-gray-500 text-[10px] ml-auto">Leaf</span>
            </div>
            <div class="border-t border-slate-700/50 pt-2 mt-2">
              <p class="text-gray-400 text-[10px]" style="font-family:'Noto Sans SC',sans-serif;">每轮 Root Span 汇总：工具调用数、工具名称列表、使用 Skills、API 调用、执行状态</p>
            </div>
          </div>
        </div>

        <!-- 数据流示意 -->
        <div class="bg-slate-900/70 backdrop-blur border border-blue-500/20 rounded-xl p-4">
          <h3 class="text-sm font-bold text-blue-300 mb-2" style="font-family:'Noto Sans SC',sans-serif;">数据流向</h3>
          <div class="flex items-center justify-between text-[10px]">
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mx-auto mb-1">
                <span class="text-blue-300 font-mono text-xs">Agent</span>
              </div>
              <span class="text-gray-400">采集点</span>
            </div>
            <svg class="w-8 h-4" viewBox="0 0 32 16"><defs><marker id="ar12" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#06B6D4"/></marker></defs><line x1="0" y1="8" x2="26" y2="8" stroke="#06B6D4" stroke-width="1.5" marker-end="url(#ar12)" stroke-dasharray="3,2"/></svg>
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center mx-auto mb-1">
                <span class="text-cyan-300 font-mono text-xs">Trace</span>
              </div>
              <span class="text-gray-400">聚合层</span>
            </div>
            <svg class="w-8 h-4" viewBox="0 0 32 16"><line x1="0" y1="8" x2="26" y2="8" stroke="#06B6D4" stroke-width="1.5" marker-end="url(#ar12)" stroke-dasharray="3,2"/></svg>
            <div class="text-center">
              <div class="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mx-auto mb-1">
                <span class="text-purple-300 font-mono text-xs">Backend</span>
              </div>
              <span class="text-gray-400">存储</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部标注 -->
    <div class="text-center mt-2">
      <p class="text-cyan-400/60 text-xs font-mono tracking-wider">OBSERVABILITY FRAMEWORK · FULL-LINK TRANSPARENCY · PRODUCTION-GRADE</p>
    </div>
  </div>

  <!-- 角落装饰 -->
  <div class="absolute top-0 left-0 w-32 h-32 border-t border-l border-blue-500/25 rounded-tl-xl"></div>
  <div class="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-cyan-500/25 rounded-br-xl"></div>
</div>
`);

window.slideDataMap.set(13, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="absolute inset-0 opacity-15">
    <div class="absolute top-1/4 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
    <div class="absolute top-1/4 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
    <div class="absolute top-1/4 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
  </div>

  <div class="w-full h-full relative z-10 flex flex-col p-8">
    <!-- 标题 -->
    <div class="text-center mb-3">
      <div class="inline-flex items-center gap-2 bg-cyan-500/20 px-4 py-1.5 rounded-full mb-2">
        <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
        <span class="text-cyan-400 font-mono text-xs tracking-wider">SOLUTION SELECTION</span>
      </div>
      <h2 class="text-[34px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400" style="font-family:'Montserrat','Noto Sans SC',sans-serif;">
        三层方案选型 —— 从开箱即用到企业级部署
      </h2>
      <p class="text-gray-400 text-sm mt-1 font-mono">内置 Langfuse · 社区 OTel · 云厂商集成</p>
    </div>

    <!-- 三列方案卡片 -->
    <div class="grid grid-cols-3 gap-4 flex-1 min-h-0">
      <!-- Plan A: Langfuse Plugin -->
      <div class="bg-slate-900/70 backdrop-blur border border-cyan-500/30 rounded-xl p-4 flex flex-col hover:border-cyan-400/50 transition-colors">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/20 flex items-center justify-center">
              <span class="text-lg font-bold text-cyan-400">A</span>
            </div>
            <h3 class="text-base font-bold text-cyan-400" style="font-family:'Noto Sans SC',sans-serif;">Langfuse Plugin</h3>
          </div>
          <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] rounded-full border border-emerald-500/30">Entry</span>
        </div>

        <div class="space-y-1.5 flex-1">
          <div class="flex items-start gap-2">
            <svg class="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span class="text-gray-300 text-xs leading-tight" style="font-family:'Noto Sans SC',sans-serif;">一行代码启用，Fail-open 容错设计</span>
          </div>
          <div class="flex items-start gap-2">
            <svg class="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span class="text-gray-300 text-xs leading-tight" style="font-family:'Noto Sans SC',sans-serif;">Hook 点：pre/post api/tool_call</span>
          </div>
          <div class="flex items-start gap-2">
            <svg class="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span class="text-gray-300 text-xs leading-tight" style="font-family:'Noto Sans SC',sans-serif;">Session 自动分组，超长截断 >12000 字符</span>
          </div>
        </div>

        <div class="mt-3 pt-3 border-t border-slate-700/50">
          <p class="text-[10px] text-gray-500 mb-1">适用场景</p>
          <div class="flex flex-wrap gap-1">
            <span class="px-1.5 py-0.5 bg-cyan-500/15 text-cyan-300 text-[10px] rounded">个人开发者</span>
            <span class="px-1.5 py-0.5 bg-cyan-500/15 text-cyan-300 text-[10px] rounded">首次接入可观测性</span>
          </div>
        </div>
      </div>

      <!-- Plan B: hermes-otel -->
      <div class="bg-slate-900/70 backdrop-blur border border-blue-500/30 rounded-xl p-4 flex flex-col hover:border-blue-400/50 transition-colors relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/20 flex items-center justify-center">
              <span class="text-lg font-bold text-blue-400">B</span>
            </div>
            <h3 class="text-base font-bold text-blue-400" style="font-family:'Noto Sans SC',sans-serif;">hermes-otel</h3>
          </div>
          <span class="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-[10px] rounded-full border border-blue-500/30">Advanced</span>
        </div>

        <div class="space-y-1.5 flex-1">
          <div class="flex items-start gap-2">
            <svg class="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span class="text-gray-300 text-xs leading-tight" style="font-family:'Noto Sans SC',sans-serif;">10+ OTLP 后端：Phoenix/Langfuse/SigNoz/Jaeger/Grafana</span>
          </div>
          <div class="flex items-start gap-2">
            <svg class="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span class="text-gray-300 text-xs leading-tight" style="font-family:'Noto Sans SC',sans-serif;">Multi-backend Fan-out 多后端并行推送</span>
          </div>
          <div class="flex items-start gap-2">
            <svg class="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span class="text-gray-300 text-xs leading-tight" style="font-family:'Noto Sans SC',sans-serif;">BatchSpanProcessor 零热路径延迟</span>
          </div>
          <div class="flex items-start gap-2">
            <svg class="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span class="text-gray-300 text-xs leading-tight" style="font-family:'Noto Sans SC',sans-serif;">双协议属性 + Privacy Mode 隐私保护</span>
          </div>
        </div>

        <div class="mt-3 pt-3 border-t border-slate-700/50">
          <p class="text-[10px] text-gray-500 mb-1">适用场景</p>
          <div class="flex flex-wrap gap-1">
            <span class="px-1.5 py-0.5 bg-blue-500/15 text-blue-300 text-[10px] rounded">已有 OTel 基础设施</span>
            <span class="px-1.5 py-0.5 bg-blue-500/15 text-blue-300 text-[10px] rounded">多后端需求</span>
          </div>
        </div>
      </div>

      <!-- Plan C: Cloud Vendor -->
      <div class="bg-slate-900/70 backdrop-blur border border-purple-500/30 rounded-xl p-4 flex flex-col hover:border-purple-400/50 transition-colors">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center">
              <span class="text-lg font-bold text-purple-400">C</span>
            </div>
            <h3 class="text-base font-bold text-purple-400" style="font-family:'Noto Sans SC',sans-serif;">云厂商集成</h3>
          </div>
          <span class="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] rounded-full border border-purple-500/30">Enterprise</span>
        </div>

        <div class="space-y-2 flex-1">
          <div class="bg-purple-500/10 border border-purple-500/20 rounded-lg p-2">
            <p class="text-purple-300 text-xs font-bold mb-1">火山引擎 TLS</p>
            <p class="text-gray-400 text-[10px]" style="font-family:'Noto Sans SC',sans-serif;">一键部署脚本 + AK/SK 认证</p>
          </div>
          <div class="bg-pink-500/10 border border-pink-500/20 rounded-lg p-2">
            <p class="text-pink-300 text-xs font-bold mb-1">阿里云 SLS</p>
            <p class="text-gray-400 text-[10px]" style="font-family:'Noto Sans SC',sans-serif;">CMS 2.0 + 审计 Dashboard</p>
          </div>
        </div>

        <div class="mt-3 pt-3 border-t border-slate-700/50">
          <p class="text-[10px] text-gray-500 mb-1">适用场景</p>
          <div class="flex flex-wrap gap-1">
            <span class="px-1.5 py-0.5 bg-purple-500/15 text-purple-300 text-[10px] rounded">企业合规</span>
            <span class="px-1.5 py-0.5 bg-purple-500/15 text-purple-300 text-[10px] rounded">审计要求</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部：决策树 + 引用 -->
    <div class="grid grid-cols-12 gap-4 mt-3">
      <!-- 决策树 -->
      <div class="col-span-8 bg-black/40 border border-cyan-500/20 rounded-xl p-3">
        <p class="text-cyan-300 text-xs font-mono mb-2 font-bold">/* DECISION TREE */</p>
        <div class="flex items-center gap-2 text-xs" style="font-family:'Inter','Noto Sans SC',monospace;">
          <div class="flex items-center gap-1.5 px-2 py-1 bg-slate-800 rounded border border-slate-600">
            <span class="text-gray-300">个人开发者</span>
            <svg class="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            <span class="text-cyan-400 font-bold">Plan A</span>
          </div>
          <div class="text-gray-600">|</div>
          <div class="flex items-center gap-1.5 px-2 py-1 bg-slate-800 rounded border border-slate-600">
            <span class="text-gray-300">多后端需求</span>
            <svg class="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            <span class="text-blue-400 font-bold">Plan B</span>
          </div>
          <div class="text-gray-600">|</div>
          <div class="flex items-center gap-1.5 px-2 py-1 bg-slate-800 rounded border border-slate-600">
            <span class="text-gray-300">合规审计</span>
            <svg class="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            <span class="text-purple-400 font-bold">Plan C</span>
          </div>
        </div>
      </div>

      <!-- 参考信息 -->
      <div class="col-span-4 bg-purple-950/30 backdrop-blur border border-purple-500/20 rounded-xl p-3">
        <p class="text-purple-300 text-[10px] leading-relaxed font-mono">
          <span class="text-purple-400 font-bold">/* REF */</span><br/>
          hermes v0.14.0 内置三方案<br/>
          OTel 协议兼容 OpenTelemetry 标准
        </p>
      </div>
    </div>
  </div>

  <div class="absolute top-0 right-0 w-28 h-28 border-t border-r border-purple-500/25 rounded-tr-xl"></div>
  <div class="absolute bottom-0 left-0 w-28 h-28 border-b border-l border-cyan-500/25 rounded-bl-xl"></div>
</div>
`);

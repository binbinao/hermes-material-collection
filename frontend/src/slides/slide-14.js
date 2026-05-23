window.slideDataMap.set(14, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <!-- 网格背景 -->
  <div class="absolute inset-0 opacity-6" style="background-image:
    repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(6,182,212,0.15) 40px, rgba(6,182,212,0.15) 41px),
    repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(6,182,212,0.15) 40px, rgba(6,182,212,0.15) 41px);">
  </div>

  <div class="w-full h-full relative z-10 flex flex-col p-8">
    <!-- 标题 -->
    <div class="text-center mb-3">
      <h2 class="text-[36px] font-bold text-cyan-400" style="font-family:'Montserrat','Noto Sans SC',sans-serif;">
        三大扩展能力 —— 自省 · 会议 · 互操作
      </h2>
      <p class="text-gray-400 text-sm mt-1" style="font-family:'Inter','Noto Sans SC',sans-serif;">Background Review / Google Meet / MCP Server</p>
    </div>

    <!-- 三模块卡片 -->
    <div class="grid grid-cols-3 gap-4 flex-1 min-h-0">
      <!-- Module 1: Background Review Engine -->
      <div class="bg-slate-900/70 backdrop-blur border border-emerald-500/30 rounded-xl p-4 flex flex-col hover:border-emerald-400/50 transition-colors relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
        <!-- 头部 -->
        <div class="flex items-start justify-between mb-2">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500/30 to-cyan-500/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
              </div>
              <h3 class="text-base font-bold text-emerald-400 leading-tight" style="font-family:'Noto Sans SC',sans-serif;">Background Review<br/>Engine</h3>
            </div>
            <div class="flex items-center gap-1 mt-1">
              <span class="text-yellow-400 text-xs">★★★★★</span>
              <span class="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 text-[9px] rounded border border-emerald-500/30">Production-ready</span>
            </div>
          </div>
        </div>

        <!-- 触发机制 -->
        <div class="bg-emerald-500/8 border border-emerald-500/15 rounded-lg p-2 mb-2">
          <p class="text-emerald-300 text-[10px] font-bold mb-1">Dual Counter Trigger</p>
          <div class="flex gap-2">
            <span class="text-[10px] text-gray-300 px-1.5 bg-slate-800/80 rounded">Memory/轮 ≥10</span>
            <span class="text-[10px] text-gray-300 px-1.5 bg-slate-800/80 rounded">Skill/调用 ≥10</span>
          </div>
        </div>

        <!-- Fork 机制 -->
        <div class="space-y-1 mb-2 flex-1">
          <p class="text-cyan-300 text-[10px] font-bold">Fork Mechanism</p>
          <div class="space-y-0.5">
            <div class="flex items-center gap-1.5">
              <div class="w-1 h-1 rounded-full bg-cyan-400 shrink-0"></div>
              <span class="text-gray-300 text-[10px]" style="font-family:'Noto Sans SC',sans-serif;">守护线程非阻塞执行</span>
            </div>
            <div class="flex items-center gap-1.5">
              <div class="w-1 h-1 rounded-full bg-cyan-400 shrink-0"></div>
              <span class="text-gray-300 text-[10px]" style="font-family:'Noto Sans SC',sans-serif;">共享内存写入 + 自递归禁用</span>
            </div>
            <div class="flex items-center gap-1.5">
              <div class="w-1 h-1 rounded-full bg-cyan-400 shrink-0"></div>
              <span class="text-gray-300 text-[10px]" style="font-family:'Noto Sans SC',sans-serif;">上限 8 次 Tool Call 防死循环</span>
            </div>
          </div>
        </div>

        <!-- Review Prompts -->
        <div class="bg-slate-800/50 border border-slate-700/40 rounded-lg p-2 mb-2">
          <p class="text-purple-300 text-[10px] font-bold mb-1">3 Review Prompts</p>
          <div class="grid grid-cols-3 gap-1">
            <div class="text-center px-1 py-1 bg-blue-500/10 rounded border border-blue-500/20">
              <span class="text-blue-300 text-[9px] font-mono block">MEMORY</span>
              <span class="text-gray-400 text-[8px]">facts→MD</span>
            </div>
            <div class="text-center px-1 py-1 bg-purple-500/10 rounded border border-purple-500/20">
              <span class="text-purple-300 text-[9px] font-mono block">SKILL</span>
              <span class="text-gray-400 text-[8px]">workflow→skill</span>
            </div>
            <div class="text-center px-1 py-1 bg-emerald-500/10 rounded border border-emerald-500/20">
              <span class="text-emerald-300 text-[9px] font-mono block">COMBINED</span>
              <span class="text-gray-400 text-[8px]">both</span>
            </div>
          </div>
        </div>

        <!-- Value -->
        <div class="mt-auto pt-2 border-t border-slate-700/50">
          <p class="text-gray-200 text-[10px] leading-relaxed" style="font-family:'Noto Sans SC',sans-serif;">
            <span class="text-emerald-400 font-bold">核心价值：</span>开启自主进化循环 — Agent 在对话中自我反思、持续优化
          </p>
          <div class="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/15 rounded-full">
            <span class="text-[9px] text-emerald-300 font-mono">= Brain (Self-awareness)</span>
          </div>
        </div>
      </div>

      <!-- Module 2: Google Meet Plugin -->
      <div class="bg-slate-900/70 backdrop-blur border border-orange-500/25 rounded-xl p-4 flex flex-col hover:border-orange-400/40 transition-colors relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        <!-- 头部 -->
        <div class="flex items-start justify-between mb-2">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500/30 to-red-500/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              </div>
              <h3 class="text-base font-bold text-orange-400 leading-tight" style="font-family:'Noto Sans SC',sans-serif;">Google Meet<br/>Plugin</h3>
            </div>
            <div class="flex items-center gap-1 mt-1">
              <span class="text-gray-500 text-xs">★★☆☆☆</span>
              <span class="px-1.5 py-0.5 bg-orange-500/20 text-orange-300 text-[9px] rounded border border-orange-500/30">Experimental</span>
            </div>
          </div>
        </div>

        <!-- 版本信息 -->
        <div class="bg-orange-500/8 border border-orange-500/15 rounded-lg p-2 mb-2">
          <p class="text-orange-300 text-[10px] font-bold">v0.12.0 Experimental</p>
        </div>

        <!-- 功能列表 -->
        <div class="space-y-1.5 flex-1">
          <div class="bg-slate-800/50 rounded-lg p-2 border border-slate-700/30">
            <div class="flex items-center gap-2 mb-1">
              <div class="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
              <span class="text-gray-200 text-[11px] font-bold" style="font-family:'Noto Sans SC',sans-serif;">无头虚拟参会者</span>
            </div>
            <span class="text-gray-400 text-[10px] pl-3.5 block" style="font-family:'Noto Sans SC',sans-serif;">Headless Virtual Participant Join</span>
          </div>

          <div class="bg-slate-800/50 rounded-lg p-2 border border-slate-700/30">
            <div class="flex items-center gap-2 mb-1">
              <div class="w-1.5 h-1.5 rounded-full bg-red-400"></div>
              <span class="text-gray-200 text-[11px] font-bold" style="font-family:'Noto Sans SC',sans-serif;">实时语音转文字</span>
            </div>
            <span class="text-gray-400 text-[10px] pl-3.5 block">Real-time STT Transcription</span>
          </div>

          <div class="bg-slate-800/50 rounded-lg p-2 border border-slate-700/30">
            <div class="flex items-center gap-2 mb-1">
              <div class="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
              <span class="text-gray-200 text-[11px] font-bold">内置工具集</span>
            </div>
            <div class="pl-3.5 flex flex-wrap gap-1 mt-1">
              <span class="px-1 py-0.5 bg-cyan-500/15 text-cyan-300 text-[9px] rounded font-mono">meet_summarize</span>
              <span class="px-1 py-0.5 bg-cyan-500/15 text-cyan-300 text-[9px] rounded font-mono">speak</span>
              <span class="px-1 py-0.5 bg-cyan-500/15 text-cyan-300 text-[9px] rounded font-mono">followup</span>
            </div>
          </div>
        </div>

        <!-- 输出 & TTS -->
        <div class="mt-auto pt-2 border-t border-slate-700/50 space-y-1.5">
          <div>
            <p class="text-gray-400 text-[10px] font-bold mb-1">Output</p>
            <div class="flex flex-wrap gap-1">
              <span class="px-1.5 py-0.5 bg-orange-500/15 text-orange-300 text-[9px] rounded">Transcript</span>
              <span class="px-1.5 py-0.5 bg-orange-500/15 text-orange-300 text-[9px] rounded">Notes</span>
              <span class="px-1.5 py-0.5 bg-orange-500/15 text-orange-300 text-[9px] rounded">Action Items</span>
            </div>
          </div>
          <div class="inline-flex items-center gap-1 px-2 py-0.5 bg-orange-500/15 rounded-full">
            <span class="text-[9px] text-orange-300 font-mono">= Mouth (Social)</span>
          </div>
        </div>
      </div>

      <!-- Module 3: MCP Server Mode -->
      <div class="bg-slate-900/70 backdrop-blur border border-blue-500/30 rounded-xl p-4 flex flex-col hover:border-blue-400/50 transition-colors relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <!-- 头部 -->
        <div class="flex items-start justify-between mb-2">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <h3 class="text-base font-bold text-blue-400 leading-tight" style="font-family:'Noto Sans SC',sans-serif;">MCP Server<br/>Mode</h3>
            </div>
            <div class="flex items-center gap-1 mt-1">
              <span class="text-yellow-400 text-xs">★★★★☆</span>
              <span class="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 text-[9px] rounded border border-blue-500/30">Production-ready</span>
            </div>
          </div>
        </div>

        <!-- 版本 & 启动命令 -->
        <div class="bg-blue-500/8 border border-blue-500/15 rounded-lg p-2 mb-2">
          <div class="flex items-center justify-between">
            <p class="text-blue-300 text-[10px] font-bold">v0.6.0 Introduced</p>
            <code class="text-[10px] text-emerald-300 font-mono bg-black/40 px-1.5 py-0.5 rounded">hermes mcp serve</code>
          </div>
        </div>

        <!-- 暴露能力 -->
        <div class="mb-2">
          <p class="text-cyan-300 text-[10px] font-bold mb-1.5">Exposed Resources</p>
          <div class="grid grid-cols-2 gap-1.5">
            <div class="bg-slate-800/50 rounded-lg p-2 border border-slate-700/30 text-center">
              <div class="w-7 h-7 mx-auto rounded-md bg-blue-500/15 flex items-center justify-center mb-1">
                <svg class="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <span class="text-gray-200 text-[10px] font-mono">sessions</span>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-2 border border-slate-700/30 text-center">
              <div class="w-7 h-7 mx-auto rounded-md bg-cyan-500/15 flex items-center justify-center mb-1">
                <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              </div>
              <span class="text-gray-200 text-[10px] font-mono">messages</span>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-2 border border-slate-700/30 text-center">
              <div class="w-7 h-7 mx-auto rounded-md bg-purple-500/15 flex items-center justify-center mb-1">
                <svg class="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
              <span class="text-gray-200 text-[10px] font-mono">search</span>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-2 border border-slate-700/30 text-center">
              <div class="w-7 h-7 mx-auto rounded-md bg-emerald-500/15 flex items-center justify-center mb-1">
                <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
              </div>
              <span class="text-gray-200 text-[10px] font-mono">attachments</span>
            </div>
          </div>
        </div>

        <!-- 协议 & 目标平台 -->
        <div class="space-y-1.5 flex-1">
          <div>
            <p class="text-blue-300 text-[10px] font-bold mb-1">Protocols</p>
            <div class="flex gap-1">
              <span class="px-1.5 py-0.5 bg-blue-500/15 text-blue-300 text-[9px] rounded font-mono border border-blue-500/20">stdio</span>
              <span class="px-1.5 py-0.5 bg-blue-500/15 text-blue-300 text-[9px] rounded font-mono border border-blue-500/20">Streamable HTTP</span>
            </div>
          </div>
          <div>
            <p class="text-purple-300 text-[10px] font-bold mb-1">Target Platforms</p>
            <div class="flex gap-1">
              <span class="px-1.5 py-0.5 bg-purple-500/15 text-purple-300 text-[9px] rounded">Claude Desktop</span>
              <span class="px-1.5 py-0.5 bg-purple-500/15 text-purple-300 text-[9px] rounded">Cursor</span>
              <span class="px-1.5 py-0.5 bg-purple-500/15 text-purple-300 text-[9px] rounded">VS Code</span>
            </div>
          </div>
        </div>

        <!-- Value -->
        <div class="mt-auto pt-2 border-t border-slate-700/50">
          <div class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/15 rounded-full">
            <span class="text-[9px] text-blue-300 font-mono">= Hands (Open Interface)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部关系映射 -->
    <div class="mt-3 bg-slate-900/60 backdrop-blur border border-slate-700/30 rounded-xl p-3">
      <div class="flex items-center justify-center gap-6 text-xs" style="font-family:'Inter','Noto Sans SC',monospace;">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded bg-emerald-500/60"></div>
          <span class="text-emerald-300 font-bold">BGReview</span>
          <span class="text-gray-500">=</span>
          <span class="text-gray-300">Brain · Self-awareness</span>
        </div>
        <div class="text-gray-600">|</div>
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded bg-orange-500/60"></div>
          <span class="text-orange-300 font-bold">Meet Plugin</span>
          <span class="text-gray-500">=</span>
          <span class="text-gray-300">Mouth · Social Channel</span>
        </div>
        <div class="text-gray-600">|</div>
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded bg-blue-500/60"></div>
          <span class="text-blue-300 font-bold">MCP Server</span>
          <span class="text-gray-500">=</span>
          <span class="text-gray-300">Hands · Open Interface</span>
        </div>
      </div>
    </div>
  </div>

  <div class="absolute top-0 left-0 w-32 h-32 border-t border-l border-blue-500/20 rounded-tl-xl"></div>
  <div class="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-cyan-500/20 rounded-br-xl"></div>
</div>
`);

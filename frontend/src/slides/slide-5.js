window.slideDataMap.set(5, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[20px] flex flex-col">

    <div class="mb-5">
      <h2 class="text-3xl font-bold text-white mb-1" style="font-family:'Montserrat','Noto Sans SC',sans-serif;">六状态机 × 九工具集</h2>
      <p class="text-sm text-cyan-300">完整任务生命周期：triage → todo → ready → running → done → archived + blocked 回退</p>
    </div>

    <div class="flex gap-5 flex-1">
      <!-- Left: Image -->
      <div class="w-[42%] flex items-center justify-center">
        <img src="/assets/images/page-5.png" width="440" height="380" class="rounded-xl object-contain" alt="State Machine"/>
      </div>

      <!-- Arrow -->
      <div class="w-[30px] flex items-center justify-center pt-8">
        <svg width="30" height="20" viewBox="0 0 30 20"><path d="M0 10 L22 10 M16 4 L22 10 L16 16" stroke="#06B6D4" stroke-width="2" fill="none"/></svg>
      </div>

      <!-- Right: Content -->
      <div class="flex-1 flex flex-col gap-3">
        <div class="bg-white/5 backdrop-blur rounded-lg p-4 border border-white/10">
          <div class="text-xs text-blue-400 font-bold mb-2 tracking-wider">六状态状态机</div>
          <div class="grid grid-cols-3 gap-2 text-xs">
            <div class="bg-orange-500/15 text-orange-300 px-2 py-1.5 rounded text-center"><b>triage</b><br/><span class="text-gray-500">原始想法</span></div>
            <div class="bg-yellow-500/15 text-yellow-300 px-2 py-1.5 rounded text-center"><b>todo</b><br/><span class="text-gray-500">依赖未满足</span></div>
            <div class="bg-green-500/15 text-green-300 px-2 py-1.5 rounded text-center"><b>ready</b><br/><span class="text-gray-500">等待认领</span></div>
            <div class="bg-blue-500/20 text-blue-300 px-2 py-1.5 rounded text-center border border-blue-500/30"><b>running</b><br/><span class="text-gray-500">执行中</span></div>
            <div class="bg-red-500/15 text-red-300 px-2 py-1.5 rounded text-center"><b>blocked</b><br/><span class="text-gray-500">等待人工/熔断</span></div>
            <div class="bg-emerald-500/15 text-emerald-300 px-2 py-1.5 rounded text-center"><b>done</b><br/><span class="text-gray-500">完成归档</span></div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="bg-white/5 backdrop-blur rounded-lg p-3 border border-white/10">
            <div class="text-xs text-cyan-400 font-bold mb-2">9 工具集（三类）</div>
            <div class="space-y-1 text-xs text-gray-300">
              <div><span class="text-blue-400">读取:</span> show / list</div>
              <div><span class="text-purple-400">Worker写:</span> complete/block/heartbeat/comment</div>
              <div><span class="text-emerald-400">编排器:</span> create/link/unblock</div>
            </div>
          </div>
          <div class="bg-white/5 backdrop-blur rounded-lg p-3 border border-white/10">
            <div class="text-xs text-purple-400 font-bold mb-2">Dispatcher + 熔断器</div>
            <div class="space-y-1 text-xs text-gray-300">
              <div>• 回收过期认领/崩溃Worker</div>
              <div>• 原子认领+派生(60s/tick)</div>
              <div>• 连续失败>2次 → auto block</div>
              <div>• 软阻止: 配额错误/近期成功/PR</div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-3 border border-blue-500/20">
          <div class="text-xs text-gray-400 mb-1">结构化交接核心</div>
          <code class="text-xs text-cyan-300 block bg-black/30 p-2 rounded">kanban_complete(summary=..., metadata={changed_files, tests_run, dependencies, residual_risk})</code>
        </div>
      </div>
    </div>
  </div>
</div>
`);

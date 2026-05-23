window.slideDataMap.set(2, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative">
    <div style="position:absolute;inset:0;opacity:0.05;background:repeating-linear-gradient(0deg,rgba(6,182,212,0.3) 0px,transparent 2px,transparent 4px);"></div>
    <div style="position:absolute;top:8%;left:0;width:100%;height:1px;background:linear-gradient(to right,transparent,#2563EB,#06B6D4,transparent);opacity:0.5;"></div>
    <div style="position:absolute;bottom:12%;left:0;width:100%;height:1px;background:linear-gradient(to right,transparent,#06B6D4,#2563EB,transparent);opacity:0.5;"></div>

    <div class="flex items-center h-full">
      <div style="width:32%;padding-right:30px;">
        <h1 class="text-5xl font-bold mb-6" style="background:linear-gradient(90deg,#2563EB,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:4px;font-family:'Montserrat',sans-serif;">
          CONTENTS
        </h1>
        <p class="text-gray-400 text-lg mt-4" style="font-family:'Noto Sans SC',sans-serif;">内容导航</p>
        <div class="space-y-1 mt-6">
          <div class="w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
          <div class="w-3/4 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
          <div class="w-1/2 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>
      </div>

      <div style="flex:1;" class="space-y-2">
        <div class="group">
          <div style="position:relative;padding:14px 20px;background:linear-gradient(135deg,rgba(37,99,235,0.12) 0%,rgba(6,182,212,0.05) 100%);border-left:3px solid #2563DB;border-radius:0 8px 8px 0;">
            <div class="flex items-center gap-4">
              <div style="width:42px;height:42px;background:linear-gradient(135deg,rgba(37,99,235,0.3),rgba(6,182,212,0.2));border-radius:10px;display:flex;align-items:center;justify-content:center;">
                <span class="text-lg font-bold text-blue-400">01</span>
              </div>
              <div style="flex:1;">
                <h3 class="text-base font-bold text-white mb-0.5">核心引擎：Kanban 多代理协作</h3>
                <p class="text-gray-400 text-xs">六状态机 · 九大协作模式 · 实时看板 UI</p>
              </div>
            </div>
          </div>
        </div>

        <div class="group">
          <div style="position:relative;padding:14px 20px;background:linear-gradient(135deg,rgba(37,99,235,0.08) 0%,rgba(6,182,212,0.04) 100%);border-left:3px solid #06B6D4;border-radius:0 8px 8px 0;">
            <div class="flex items-center gap-4">
              <div style="width:42px;height:42px;background:linear-gradient(135deg,rgba(6,182,212,0.25),rgba(37,99,235,0.15));border-radius:10px;display:flex;align-items:center;justify-content:center;">
                <span class="text-lg font-bold text-cyan-400">02</span>
              </div>
              <div style="flex:1;">
                <h3 class="text-base font-bold text-white mb-0.5">控制台体系：Dashboard 与 WebUI</h3>
                <p class="text-gray-400 text-xs">官方 4 模块 vs 社区 13 模块</p>
              </div>
            </div>
          </div>
        </div>

        <div class="group">
          <div style="position:relative;padding:14px 20px;background:linear-gradient(135deg,rgba(139,92,246,0.12) 0%,rgba(6,182,212,0.04) 100%);border-left:3px solid #8B5CF6;border-radius:0 8px 8px 0;">
            <div class="flex items-center gap-4">
              <div style="width:42px;height:42px;background:linear-gradient(135deg,rgba(139,92,246,0.25),rgba(6,182,212,0.15));border-radius:10px;display:flex;align-items:center;justify-content:center;">
                <span class="text-lg font-bold text-purple-400">03</span>
              </div>
              <div style="flex:1;">
                <h3 class="text-base font-bold text-white mb-0.5">基础设施层：Profile / MoA / Observability</h3>
                <p class="text-gray-400 text-xs">多实例隔离 · 五模型推理 · 四维可观测框架</p>
              </div>
            </div>
          </div>
        </div>

        <div class="group">
          <div style="position:relative;padding:14px 20px;background:linear-gradient(135deg,rgba(37,99,235,0.08) 0%,rgba(139,92,246,0.04) 100%);border-left:3px solid #2563DB;border-radius:0 8px 8px 0;">
            <div class="flex items-center gap-4">
              <div style="width:42px;height:42px;background:linear-gradient(135deg,rgba(37,99,235,0.2),rgba(139,92,246,0.15));border-radius:10px;display:flex;align-items:center;justify-content:center;">
                <span class="text-lg font-bold text-blue-400">04</span>
              </div>
              <div style="flex:1;">
                <h3 class="text-base font-bold text-white mb-0.5">能力扩展层：自省 · 会议 · MCP</h3>
                <p class="text-gray-400 text-xs">Background Review · Google Meet · MCP Server</p>
              </div>
            </div>
          </div>
        </div>

        <div class="group">
          <div style="position:relative;padding:14px 20px;background:linear-gradient(135deg,rgba(6,182,212,0.1) 0%,rgba(37,99,235,0.05) 100%);border-left:3px solid #06B6D4;border-radius:0 8px 8px 0;">
            <div class="flex items-center gap-4">
              <div style="width:42px;height:42px;background:linear-gradient(135deg,rgba(6,182,212,0.25),rgba(16,185,129,0.2));border-radius:10px;display:flex;align-items:center;justify-content:center;">
                <span class="text-lg font-bold text-emerald-400">05</span>
              </div>
              <div style="flex:1;">
                <h3 class="text-base font-bold text-white mb-0.5">全景与展望</h3>
                <p class="text-gray-400 text-xs">能力成熟度矩阵 · Agent 变革五大趋势</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`);

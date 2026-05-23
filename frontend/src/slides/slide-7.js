window.slideDataMap.set(7, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative">
        <!-- 网格背景 -->
        <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>

        <!-- 扫描线效果 -->
        <div class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div class="absolute top-1/2 left-0 right-0 h-16 bg-gradient-to-b from-cyan-500/20 via-transparent to-cyan-500/20"></div>

        <div class="relative z-10 flex items-center justify-center h-full">
            <div class="text-center">
                <div class="text-5xl font-bold text-cyan-500 mb-4 font-mono" style="font-family: 'Montserrat', monospace;">
                    <span class="inline-block border-2 border-cyan-500 px-6 py-3">&lt; 02 /&gt;</span>
                </div>
                <h1 class="text-5xl font-bold text-white mb-3" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">Chapter 2 控制台体系</h1>
                <p class="text-xl text-cyan-400" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">Dashboard 与社区 WebUI — 两套界面，两种哲学</p>
                <div class="flex items-center justify-center gap-4 mt-7 flex-wrap">
                    <span class="px-4 py-1.5 bg-blue-500/15 border border-blue-500/30 rounded-full text-blue-300 text-sm">官方 :9119</span>
                    <span class="text-gray-500">|</span>
                    <span class="px-4 py-1.5 bg-purple-500/15 border border-purple-500/30 rounded-full text-purple-300 text-sm">hermes-webui 3070 Stars</span>
                    <span class="text-gray-500">|</span>
                    <span class="px-4 py-1.5 bg-cyan-500/15 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">Vue3 + TypeScript</span>
                </div>
                <div class="flex items-center justify-center gap-2 mt-6">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
                    <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`);
